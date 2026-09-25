import { Check } from "lucide-react";
import { Reveal, Eyebrow, Heading, Section, serif } from "./ui.jsx";

const bullets = [
  "Universe construction, not a fragmented, stale list",
  "Quantitative screening applied consistently",
  "Portfolio optimization across budget, travel, and leadership time",
];
const factors = ["Relevance", "Budget", "Geography", "Leadership time"];

export default function EventAlpha() {
  const row = [...factors, ...factors, ...factors, ...factors];
  return (
    <Section id="event-alpha">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        <Reveal className="order-2 lg:order-1">
          <div className="liquid-glass rounded-[28px] aspect-[4/3] max-w-full flex flex-col justify-between overflow-hidden">
            <div className="p-7 flex flex-col gap-1">
              <span className="text-white/45 text-[10px] font-medium tracking-[0.2em] uppercase">Portfolio intelligence</span>
              <span style={serif} className="text-white text-4xl md:text-5xl">Event Alpha</span>
            </div>
            <div className="relative flex-1 flex items-center justify-center">
              <div className="absolute w-44 h-44 md:w-56 md:h-56 rounded-full border border-white/10" />
              <div className="absolute w-28 h-28 md:w-36 md:h-36 rounded-full border border-white/15" />
              <div className="absolute w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/90 shadow-[0_0_60px_rgba(255,255,255,0.35)]" />
            </div>
            <div className="border-t border-white/10 py-4 overflow-hidden">
              <div className="marquee flex w-max" aria-hidden="true">
                {row.map((f, i) => (
                  <span key={i} className="flex items-center text-white/60 text-[13px] whitespace-nowrap">
                    <span className="px-4">{f}</span>
                    <span className="text-white/30">•</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2 flex flex-col gap-8">
          <Reveal className="flex flex-col gap-5">
            <Eyebrow>Event Alpha</Eyebrow>
            <Heading>Run your events portfolio like an investment portfolio.</Heading>
            <p className="text-white/60 text-[15px] md:text-base leading-relaxed">
              The investment world is built on data, precision, and rigor. Event selection deserves the same
              discipline.
            </p>
          </Reveal>
          <ul className="flex flex-col gap-3">
            {bullets.map((b, i) => (
              <Reveal key={b} delay={i * 0.08}>
                <li className="flex items-start gap-3 text-white/80 text-[15px]">
                  <span className="glass-pill w-6 h-6 shrink-0 flex items-center justify-center mt-px">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  {b}
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
