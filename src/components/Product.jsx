import { ListOrdered, DoorOpen, Radar } from "lucide-react";
import { Reveal, Eyebrow, Heading, Section } from "./ui.jsx";

const cards = [
  [ListOrdered, "Discover", "Ranked event feeds", "Every event scored against your firm: asset classes, clients, competitors, territories, and priorities."],
  [DoorOpen, "Decide", "The rooms that matter", "See where clients, prospects, and competitors gather before budgets and calendars are committed."],
  [Radar, "Prioritize", "Signal, not another list", "A continuously refreshed event universe becomes a shortlist your team can actually act on."],
];

export default function Product() {
  return (
    <Section id="platform">
      <Reveal className="flex flex-col items-center text-center gap-5 mb-14 md:mb-20">
        <Eyebrow>The product</Eyebrow>
        <Heading>“Netflix” for events.</Heading>
        <p className="text-white/60 text-[15px] md:text-base leading-relaxed max-w-xl">
          Open the platform and instantly see which events matter: ranked, grouped, and personalized around how
          your firm actually decides.
        </p>
      </Reveal>
      <div className="grid md:grid-cols-3 gap-4">
        {cards.map(([Icon, tag, t, d], i) => (
          <Reveal key={tag} delay={i * 0.08}>
            <div className="liquid-glass rounded-3xl p-7 h-full flex flex-col gap-10 hover:bg-white/[0.03] transition-colors duration-500">
              <div className="flex items-center justify-between">
                <span className="glass-pill w-11 h-11 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-white/90" strokeWidth={1.5} />
                </span>
                <span className="text-white/45 text-[10px] font-medium tracking-[0.2em] uppercase">{tag}</span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-white text-[17px] font-medium">{t}</h3>
                <p className="text-white/55 text-[14px] leading-relaxed">{d}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
