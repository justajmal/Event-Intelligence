import { motion } from "motion/react";
import { Reveal, Eyebrow, Heading, Section, serif, signals } from "./ui.jsx";

const points = [
  ["Relevance-scored", "The same criteria applied across the full universe, so opportunities can be weighed side by side."],
  ["Personalized from day one", "Competitors, offices, business profile, geography, and market focus shape every feed."],
  ["Sharper over time", "Every selection, event attended, and piece of feedback tunes the model."],
];

export default function Engine() {
  return (
    <Section id="how">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        <div className="flex flex-col gap-12">
          <Reveal className="flex flex-col gap-5">
            <Eyebrow>The engine</Eyebrow>
            <Heading>Thousands of signals. One clear direction.</Heading>
          </Reveal>
          <ul className="flex flex-col">
            {points.map(([t, d], i) => (
              <Reveal key={t} delay={i * 0.1}>
                <li className="flex flex-col gap-1.5 py-6 border-t border-white/10">
                  <h3 className="text-white text-[17px] font-medium">{t}</h3>
                  <p className="text-white/55 text-[14px] leading-relaxed">{d}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal delay={0.15}>
          <div className="liquid-glass rounded-[28px] p-5 md:p-6">
            <div className="flex items-center justify-between px-2 pb-5">
              <div className="flex flex-col gap-1">
                <span className="text-white/45 text-[10px] font-medium tracking-[0.2em] uppercase">Live scoring model</span>
                <span style={serif} className="text-white text-2xl">Every signal. One clear score.</span>
              </div>
              <span className="relative flex w-2.5 h-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-white/60 animate-ping" />
                <span className="relative inline-flex rounded-full w-2.5 h-2.5 bg-white" />
              </span>
            </div>
            <ul className="flex flex-col gap-1.5">
              {signals.map(([l, s], i) => (
                <li key={l} className="rounded-2xl bg-white/[0.03] border border-white/[0.06] px-4 py-2.5 flex items-center gap-4">
                  <span className="flex-1 min-w-0 text-white text-[13px] font-medium truncate">{l}</span>
                  <div className="w-20 sm:w-28 h-1 rounded-full bg-white/10 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.2 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                      className="h-full rounded-full bg-gradient-to-r from-white/40 to-white"
                    />
                  </div>
                  <span style={serif} className="text-xl text-white tabular-nums w-7 text-right">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
