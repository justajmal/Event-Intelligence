import { Reveal, serif } from "./ui.jsx";

const stats = [
  ["20,000+", "in-person events"],
  ["3,000+", "global sources"],
  ["Day one", "personalization"],
];

export default function Stats() {
  return (
    <section className="relative px-6 pt-8">
      <Reveal className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {stats.map(([n, l]) => (
            <div key={l} className="py-8 sm:py-4 flex flex-col items-center gap-2 text-center">
              <span style={serif} className="text-5xl md:text-6xl text-white tabular-nums">{n}</span>
              <span className="text-white/55 text-[13px] tracking-wide">{l}</span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
