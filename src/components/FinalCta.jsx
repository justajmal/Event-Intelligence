import BackgroundVideo from "./BackgroundVideo.jsx";
import EmailCapture from "./EmailCapture.jsx";
import { Reveal, Eyebrow, serif } from "./ui.jsx";

export default function FinalCta() {
  return (
    <section id="access" className="relative px-4 md:px-6 pb-6">
      <div className="relative max-w-6xl mx-auto rounded-[36px] overflow-hidden">
        <BackgroundVideo />
        <div className="absolute inset-0 bg-black/40" />
        <div className="liquid-glass absolute inset-0 rounded-[36px] pointer-events-none" />
        <Reveal className="relative z-10 px-6 py-24 md:py-32 flex flex-col items-center text-center gap-8">
          <Eyebrow>Early access</Eyebrow>
          <h2
            style={serif}
            className="text-4xl md:text-[64px] leading-[1.05] bg-gradient-to-b from-white via-white/95 to-white/70 bg-clip-text text-transparent max-w-3xl text-balance"
          >
            Know which rooms matter <em>before</em> the budget is spent
          </h2>
          <EmailCapture id="cta-email" label="Get your shortlist" />
        </Reveal>
      </div>
    </section>
  );
}
