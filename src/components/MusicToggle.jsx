import { useEffect, useRef, useState } from "react";
import { m } from "motion/react";

const SRC = `${import.meta.env.BASE_URL}audio/ambience.mp3`;
const VOLUME = 0.35;
const PREF_KEY = "eie-music";
const BARS = [0.55, 1, 0.7, 0.85];

const readPref = () => {
  try {
    return localStorage.getItem(PREF_KEY);
  } catch {
    return null;
  }
};

const writePref = (value) => {
  try {
    localStorage.setItem(PREF_KEY, value);
  } catch {
    /* storage unavailable */
  }
};

export default function MusicToggle() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);
  const buttonRef = useRef(null);
  const fadeRef = useRef(0);

  const fadeTo = (target, ms, done) => {
    const audio = audioRef.current;
    cancelAnimationFrame(fadeRef.current);
    const from = audio.volume;
    const t0 = performance.now();
    const step = (now) => {
      const p = Math.min(1, (now - t0) / ms);
      audio.volume = from + (target - from) * p;
      if (p < 1) fadeRef.current = requestAnimationFrame(step);
      else done?.();
    };
    fadeRef.current = requestAnimationFrame(step);
  };

  const start = () => {
    const audio = audioRef.current;
    return audio.play().then(() => {
      setPlaying(true);
      fadeTo(VOLUME, 2500);
    });
  };

  const stop = () => {
    setPlaying(false);
    fadeTo(0, 600, () => audioRef.current.pause());
  };

  useEffect(() => {
    const audio = new Audio(SRC);
    audio.loop = true;
    audio.volume = 0;
    audio.preload = "auto";
    audioRef.current = audio;

    const events = ["pointerdown", "pointerup", "click", "keydown", "touchend"];
    const onFirstInteraction = (e) => {
      if (buttonRef.current?.contains(e.target)) return;
      removeListeners();
      start().catch(() => {});
    };
    const removeListeners = () => events.forEach((ev) => window.removeEventListener(ev, onFirstInteraction));

    let cancelled = false;
    if (readPref() !== "off") {
      start().catch(() => {
        if (!cancelled) events.forEach((ev) => window.addEventListener(ev, onFirstInteraction, { passive: true }));
      });
    }

    let resumeOnReturn = false;
    const onVisibility = () => {
      if (document.hidden && !audio.paused) {
        resumeOnReturn = true;
        audio.pause();
      } else if (!document.hidden && resumeOnReturn) {
        resumeOnReturn = false;
        audio.play().catch(() => {});
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelled = true;
      removeListeners();
      document.removeEventListener("visibilitychange", onVisibility);
      cancelAnimationFrame(fadeRef.current);
      audio.pause();
      audio.src = "";
    };
  }, []);

  const toggle = () => {
    if (playing) {
      writePref("off");
      stop();
    } else {
      writePref("on");
      start().catch(() => {});
    }
  };

  return (
    <m.button
      ref={buttonRef}
      type="button"
      onClick={toggle}
      aria-label={playing ? "Pause music" : "Play music"}
      aria-pressed={playing}
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      className="fixed top-4 right-5 md:top-5 md:right-8 lg:right-10 z-50 w-9 h-9 rounded-full border border-white/15 bg-black/25 backdrop-blur-md flex items-center justify-center gap-[3px] cursor-pointer transition-colors duration-300 hover:border-white/40"
    >
      {BARS.map((peak, i) => (
        <m.span
          key={i}
          className="block w-[2px] h-3.5 rounded-full bg-white"
          initial={{ scaleY: 0.15 }}
          animate={playing ? { scaleY: [0.3, peak, 0.45, peak * 0.8, 0.3] } : { scaleY: 0.15 }}
          transition={
            playing
              ? { duration: 1.1 + i * 0.18, repeat: Infinity, ease: "easeInOut", delay: i * 0.08 }
              : { duration: 0.5, ease: "easeOut" }
          }
        />
      ))}
    </m.button>
  );
}
