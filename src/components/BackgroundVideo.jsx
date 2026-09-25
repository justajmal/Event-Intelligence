import { useEffect, useRef } from "react";
import Hls from "hls.js";

const SRC = "https://stream.mux.com/kimF2ha9zLrX64H00UgLGPflCzNtl1T0215MlAmeOztv8.m3u8";

export default function BackgroundVideo() {
  const ref = useRef(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = SRC;
      return;
    }
    if (!Hls.isSupported()) return;
    const hls = new Hls();
    hls.loadSource(SRC);
    hls.attachMedia(video);
    return () => hls.destroy();
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <video ref={ref} autoPlay muted loop playsInline className="w-full h-full object-cover opacity-100" />
    </div>
  );
}
