import { Reveal, Eyebrow, Heading, Section } from "./ui.jsx";

const teams = [
  ["Distribution & sales", "Put senior bankers and salespeople in the rooms where clients and prospects already are."],
  ["Marketing & events", "Defend sponsorship and travel budgets with a scored, side-by-side view of every option."],
  ["Leadership", "See the whole calendar in one place and commit spend before competitors lock in the best rooms."],
];

export default function Teams() {
  return (
    <Section id="teams">
      <Reveal className="flex flex-col items-center text-center gap-5 mb-14 md:mb-20">
        <Eyebrow>Who it's for</Eyebrow>
        <Heading className="max-w-3xl">Built for how financial services firms decide</Heading>
      </Reveal>
      <div className="grid md:grid-cols-3 gap-4">
        {teams.map(([t, d], i) => (
          <Reveal key={t} delay={i * 0.08}>
            <div className="h-full rounded-3xl border border-white/10 p-7 flex flex-col gap-3 hover:border-white/25 transition-colors duration-500">
              <h3 className="text-white text-[17px] font-medium">{t}</h3>
              <p className="text-white/55 text-[14px] leading-relaxed">{d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
