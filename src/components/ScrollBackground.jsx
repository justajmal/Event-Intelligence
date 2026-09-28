import { useEffect, useRef } from "react";

const CLIPS = [
  "/videos/crowd.mp4",
  "/videos/keynote.mp4",
  "/videos/panel.mp4",
  "/videos/expo-walk.mp4",
  "/videos/dubai-skyline.mp4",
  "/videos/dubai-night.mp4",
];

const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));

export default function ScrollBackground({ children }) {
  const wrapRef = useRef(null);
  const layerRef = useRef(null);
  const videoRefs = useRef([]);

  useEffect(() => {
    const wrap = wrapRef.current;
    const layer = layerRef.current;
    const videos = videoRefs.current;
    const last = CLIPS.length - 1;
    let raf = 0;
    let visible = false;
    let progress = -1;

    const target = () => {
      const r = wrap.getBoundingClientRect();
      return clamp(-r.top / Math.max(1, r.height - window.innerHeight));
    };

    const update = () => {
      const t = target();
      progress = progress < 0 ? t : progress + (t - progress) * 0.15;
      const f = progress * last;
      layer.style.opacity = clamp(progress / 0.03);

      videos.forEach((v, i) => {
        const d = Math.abs(f - i);
        const opacity = clamp(1.5 - 2 * d);
        v.style.opacity = opacity;
        v.style.transform = `scale(${1.12 - 0.08 * clamp(f - i + 1, 0, 2) / 2})`;

        if (d < 1.5 && !v.src) v.src = CLIPS[i];
        if (opacity > 0) {
          if (v.paused) v.play().catch(() => {});
        } else if (!v.paused) {
          v.pause();
        }
      });
    };

    const loop = () => {
      update();
      if (visible) raf = requestAnimationFrame(loop);
    };

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      cancelAnimationFrame(raf);
      if (visible) raf = requestAnimationFrame(loop);
      else videos.forEach((v) => v.pause());
    });
    io.observe(wrap);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, []);

  return (
    <div ref={wrapRef} className="relative">
      <div className="sticky top-0 h-screen -mb-[100vh] pointer-events-none overflow-hidden" aria-hidden="true">
        <div ref={layerRef} className="absolute inset-0 opacity-0">
          {CLIPS.map((_, i) => (
            <video
              key={i}
              ref={(el) => {
                videoRefs.current[i] = el;
              }}
              muted
              loop
              playsInline
              preload="none"
              className="absolute inset-0 w-full h-full object-cover opacity-0 grayscale contrast-125 brightness-75 will-change-[opacity,transform]"
            />
          ))}
          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.7)_100%)]" />
        </div>
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}
