import { Target, Scale, Users, Sparkles, SlidersHorizontal, ShieldCheck } from "lucide-react";
import { Reveal, Eyebrow, Heading, Section } from "./ui.jsx";

const features = [
  [Target, "Scored against your firm", "Every event is scored on your asset classes, clients, competitors, territories and priorities."],
  [Scale, "One standard, every event", "The same criteria apply across the full universe, so opportunities can be weighed side by side."],
  [Users, "See where the market gathers", "Know where clients, prospects and competitors show up before budgets and calendars are committed."],
  [SlidersHorizontal, "Shaped by your profile", "Competitors, offices, business profile, geography and market focus shape every feed."],
  [Sparkles, "Learns with every decision", "Each selection, event attended and piece of feedback tunes the model to your team."],
  [ShieldCheck, "Nothing to install", "No systems to integrate and no sensitive client data. Just a scored, executive-ready shortlist."],
];

export default function Features() {
  return (
    <Section id="platform">
      <Reveal className="flex flex-col gap-5 max-w-2xl mb-14 md:mb-20">
        <Eyebrow>Platform</Eyebrow>
        <Heading>
          A Netflix for events, <br className="hidden md:block" />
          tuned to your firm
        </Heading>
      </Reveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map(([Icon, t, d], i) => (
          <Reveal key={t} delay={(i % 3) * 0.08}>
            <div className="liquid-glass rounded-3xl p-7 h-full flex flex-col gap-10 group hover:bg-white/[0.03] transition-colors duration-500">
              <span className="glass-pill w-11 h-11 flex items-center justify-center">
                <Icon className="w-5 h-5 text-white/90" strokeWidth={1.5} />
              </span>
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
