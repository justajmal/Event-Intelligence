import { Reveal, DemoButton, serif } from "./ui.jsx";

export default function Roadmap() {
  return (
    <section id="roadmap" className="relative px-4 md:px-6 py-12">
      <div className="liquid-glass max-w-6xl mx-auto rounded-[28px]">
        <Reveal className="relative z-10 px-6 py-24 md:py-32 flex flex-col items-center text-center gap-8">
          <h2
            style={serif}
            className="text-4xl md:text-[64px] leading-[1.05] bg-gradient-to-b from-white via-white/95 to-white/70 bg-clip-text text-transparent max-w-3xl text-balance"
          >
            A custom event roadmap, <em>built around your firm.</em>
          </h2>
          <DemoButton />
          <p className="lede-sm">Need it across more than one division? That is a conversation.</p>
        </Reveal>
      </div>
    </section>
  );
}
