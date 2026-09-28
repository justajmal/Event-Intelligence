import { Check } from "lucide-react";
import { Reveal, Eyebrow, Heading, Section } from "./ui.jsx";

const bullets = [
  "Universe construction, not a fragmented, stale list",
  "Quantitative screening applied consistently",
  "Portfolio optimization across budget, travel, and leadership time",
];

export default function EventAlpha() {
  return (
    <Section id="event-alpha">
      <div className="max-w-3xl flex flex-col gap-8">
        <Reveal className="flex flex-col gap-5">
          <Eyebrow>Event Alpha</Eyebrow>
          <Heading>Run your events portfolio like an investment portfolio.</Heading>
          <p className="lede">
            The investment world is built on data, precision, and rigor. Event selection deserves the same
            discipline.
          </p>
        </Reveal>
        <ul className="flex flex-col gap-3">
          {bullets.map((b, i) => (
            <Reveal key={b} delay={i * 0.08}>
              <li className="lede flex items-start gap-3 text-[#d2d2d7]">
                <span className="glass-pill w-6 h-6 shrink-0 flex items-center justify-center mt-px">
                  <Check className="w-3.5 h-3.5" />
                </span>
                {b}
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
