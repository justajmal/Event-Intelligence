import { Reveal, Eyebrow, serif } from "./ui.jsx";

export default function Thesis() {
  return (
    <section className="relative px-6 py-28 md:py-44">
      <Reveal className="max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
        <Eyebrow>The problem</Eyebrow>
        <p style={serif} className="text-3xl md:text-[52px] leading-[1.12] text-white/40 text-balance">
          Most event calendars are built on <span className="text-white">anecdote and inertia</span>. We replace
          them with <em className="text-white">data and discipline</em>.
        </p>
        <p className="text-white/60 text-[15px] md:text-base leading-relaxed max-w-xl">
          Instantly see which events matter: ranked, grouped, and personalized around how your firm actually
          decides.
        </p>
      </Reveal>
    </section>
  );
}
