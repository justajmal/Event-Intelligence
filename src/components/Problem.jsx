import { Reveal, Eyebrow, Heading, Section, serif } from "./ui.jsx";

const phases = [
  ["Pre-trade. Selection.", "Should we even be here?", "Gut feel, habit, and last year's list. The single most important question gets almost no scrutiny at all.", "near zero", 4],
  ["Post-trade. Execution.", "Speakers. Travel. Booths. Sponsorship.", "Direct dollars, T&E, and leadership time. Enormous resources poured into executing events that were never rigorously chosen.", "enormous", 100],
];

export default function Problem() {
  return (
    <Section id="problem">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-16 md:mb-20">
        <Reveal className="flex flex-col gap-5">
          <Eyebrow>The Problem</Eyebrow>
          <Heading>Too many events. Too little signal.</Heading>
        </Reveal>
        <Reveal delay={0.1} className="lg:pt-10">
          <p className="text-white/60 text-[15px] md:text-base leading-relaxed">
            Every year the calendar fills with thousands of conferences, summits, and forums. No team can read,
            rank, and reconcile them by hand, so the right rooms get lost in the noise. And while firms apply
            rigorous diligence before every investment, events get the opposite.
          </p>
        </Reveal>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {phases.map(([tag, t, d, r, w], i) => (
          <Reveal key={tag} delay={i * 0.1}>
            <div className="liquid-glass rounded-3xl p-7 md:p-8 h-full flex flex-col gap-8">
              <span className="text-white/50 text-[10px] md:text-[11px] font-medium tracking-[0.2em] uppercase">{tag}</span>
              <div className="flex flex-col gap-3 flex-1">
                <h3 style={serif} className="text-white text-3xl leading-tight">{t}</h3>
                <p className="text-white/55 text-[14px] leading-relaxed">{d}</p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between text-[12px]">
                  <span className="text-white/45">Resources</span>
                  <span className="text-white/80">{r}</span>
                </div>
                <div className="h-1 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full rounded-full bg-gradient-to-r from-white/40 to-white" style={{ width: `${w}%` }} />
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-24 md:mt-36 max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
        <div style={serif} className="flex flex-col gap-2 text-3xl md:text-[52px] leading-[1.12]">
          <p className="text-white/40">“Q: Why do we participate in that event?”</p>
          <p className="text-white"><em>“A: We did it last year.”</em></p>
        </div>
        <p className="text-white/60 text-[15px] md:text-base leading-relaxed max-w-2xl">
          If that answer drove your investment decisions, it would end careers. Yet firms spend millions on events
          every year with exactly this level of rigor. Event Intelligence AI replaces anecdote and inertia with
          data and discipline.
        </p>
      </Reveal>
    </Section>
  );
}
