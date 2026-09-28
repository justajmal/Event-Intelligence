import { useEffect, useRef } from "react";

const PLAYBACK_ID = "kimF2ha9zLrX64H00UgLGPflCzNtl1T0215MlAmeOztv8";
const SRC = `https://stream.mux.com/${PLAYBACK_ID}.m3u8`;
const POSTER = `https://image.mux.com/${PLAYBACK_ID}/thumbnail.webp?time=0&width=1280`;

export default function BackgroundVideo() {
  const ref = useRef(null);

  useEffect(() => {
    const video = ref.current;
    let hls;
    let cancelled = false;

    const start = async () => {
      const { default: Hls } = await import("hls.js/light");
      if (cancelled) return;
      if (Hls.isSupported()) {
        hls = new Hls({ startLevel: 0, capLevelToPlayerSize: true });
        hls.loadSource(SRC);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, () => video.play().catch(() => {}));
      } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = SRC;
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        start();
      },
      { rootMargin: "200px" }
    );
    observer.observe(video);

    return () => {
      cancelled = true;
      observer.disconnect();
      hls?.destroy();
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <video
        ref={ref}
        poster={POSTER}
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        className="w-full h-full object-cover grayscale contrast-125 brightness-90"
      />
    </div>
  );
}
