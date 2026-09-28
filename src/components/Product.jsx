import { Reveal, Eyebrow, Heading, Section } from "./ui.jsx";

const cards = [
  ["Discover", "Ranked event feeds", "Every event scored against your firm: asset classes, clients, competitors, territories, and priorities."],
  ["Decide", "The rooms that matter", "See where clients, prospects, and competitors gather before budgets and calendars are committed."],
  ["Prioritize", "Signal, not another list", "A continuously refreshed event universe becomes a shortlist your team can actually act on."],
];

export default function Product() {
  return (
    <Section id="platform">
      <Reveal className="flex flex-col items-center text-center gap-5 mb-14 md:mb-20">
        <Eyebrow>The product</Eyebrow>
        <Heading>“Netflix” for events.</Heading>
        <p className="lede max-w-xl">
          Open the platform and instantly see which events matter: ranked, grouped, and personalized around how
          your firm actually decides.
        </p>
      </Reveal>
      <div className="grid md:grid-cols-3 gap-4">
        {cards.map(([tag, t, d], i) => (
          <Reveal key={tag} delay={i * 0.08}>
            <div className="liquid-glass rounded-3xl p-7 h-full flex flex-col gap-8 hover:bg-white/[0.03] transition-colors duration-500">
              <span className="text-white/45 text-[10px] font-medium tracking-[0.2em] uppercase">{tag}</span>
              <div className="flex flex-col gap-2">
                <h3 className="text-[#f5f5f7] text-[15px] font-medium tracking-[-0.01em]">{t}</h3>
                <p className="lede-sm">{d}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
