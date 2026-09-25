import { Reveal } from "./ui.jsx";

const stats = [
  ["20,000+", "Financial-services events scored"],
  ["5", "Signals per score: asset classes, clients, competitors, territories, priorities"],
  ["0", "Systems to install"],
  ["0", "Sensitive client data required"],
];

export default function Stats() {
  return (
    <section className="relative px-6 -mt-8 md:-mt-16 z-10">
      <Reveal className="max-w-5xl mx-auto">
        <div className="liquid-glass rounded-[28px] grid grid-cols-2 md:grid-cols-4">
          {stats.map(([n, l], i) => (
            <div
              key={l}
              className={`px-6 py-8 md:py-10 flex flex-col gap-2 ${i % 2 ? "border-l border-white/10" : ""} ${
                i > 1 ? "border-t md:border-t-0 border-white/10" : ""
              } ${i === 2 ? "md:border-l" : ""}`}
            >
              <span
                style={{ fontFamily: "'Instrument Serif', serif" }}
                className="text-4xl md:text-5xl text-white tabular-nums"
              >
                {n}
              </span>
              <span className="text-white/55 text-[13px] leading-snug">{l}</span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
