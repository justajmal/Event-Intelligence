import BackgroundVideo from "./BackgroundVideo.jsx";
import { Reveal, Eyebrow, DemoButton, serif } from "./ui.jsx";

export default function Roadmap() {
  return (
    <section id="roadmap" className="relative px-4 md:px-6 py-12">
      <div className="relative max-w-6xl mx-auto rounded-[36px] overflow-hidden">
        <BackgroundVideo />
        <div className="absolute inset-0 bg-black/45" />
        <Reveal className="relative z-10 px-6 py-24 md:py-32 flex flex-col items-center text-center gap-8">
          <Eyebrow>Start with clarity</Eyebrow>
          <h2
            style={serif}
            className="text-4xl md:text-[64px] leading-[1.05] bg-gradient-to-b from-white via-white/95 to-white/70 bg-clip-text text-transparent max-w-3xl text-balance"
          >
            A custom event roadmap, <em>built around your firm.</em>
          </h2>
          <p className="text-white/70 text-[15px] md:text-base leading-relaxed max-w-xl">
            No systems to install. No sensitive client data. Just a scored, executive-ready shortlist for the rooms
            that matter.
          </p>
          <DemoButton />
          <p className="text-white/50 text-[13px]">Need it across more than one division? That is a conversation.</p>
        </Reveal>
      </div>
    </section>
  );
}
