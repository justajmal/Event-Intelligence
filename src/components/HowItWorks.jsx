import { Reveal, Eyebrow, Heading, Section, serif } from "./ui.jsx";

const steps = [
  ["Profile your firm", "Tell us your asset classes, target clients, competitors, offices and territories. No client lists, no system access."],
  ["Score the universe", "A continuously refreshed universe of 20,000+ events is scored against that profile using one consistent standard."],
  ["Act on the shortlist", "Get a ranked, grouped shortlist your team can act on, and sharpen it with every event you attend."],
];

const shortlist = [
  ["Institutional credit forum", "New York · Oct", 94, "Clients + competitors"],
  ["Pension investment summit", "London · Nov", 88, "Prospects"],
  ["Private markets week", "Singapore · Nov", 81, "Territory fit"],
  ["Wealth distribution roundtable", "Chicago · Dec", 73, "Asset class fit"],
];

export default function HowItWorks() {
  return (
    <Section id="how">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        <div className="flex flex-col gap-12">
          <Reveal className="flex flex-col gap-5">
            <Eyebrow>How it works</Eyebrow>
            <Heading>From 20,000 events to the few that matter</Heading>
          </Reveal>
          <ol className="flex flex-col">
            {steps.map(([t, d], i) => (
              <Reveal key={t} delay={i * 0.1}>
                <li className="flex gap-6 py-6 border-t border-white/10">
                  <span style={serif} className="text-2xl text-white/35 tabular-nums w-8 shrink-0">
                    {i + 1}
                  </span>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-white text-[17px] font-medium">{t}</h3>
                    <p className="text-white/55 text-[14px] leading-relaxed">{d}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal delay={0.15}>
          <div className="liquid-glass rounded-[28px] p-5 md:p-6">
            <div className="flex items-center justify-between px-2 pb-5">
              <div className="flex flex-col gap-1">
                <span className="text-white text-sm font-medium">Your shortlist</span>
                <span className="text-white/45 text-xs">Example output · illustrative events</span>
              </div>
              <span className="glass-pill px-3 py-1 text-[11px] text-white/70">Q4</span>
            </div>
            <ul className="flex flex-col gap-2">
              {shortlist.map(([n, m, s, why]) => (
                <li key={n} className="rounded-2xl bg-white/[0.03] border border-white/[0.06] px-4 py-3.5 flex items-center gap-4">
                  <div className="flex-1 min-w-0 flex flex-col gap-1">
                    <span className="text-white text-[14px] font-medium truncate">{n}</span>
                    <span className="text-white/45 text-xs">{m} · {why}</span>
                  </div>
                  <div className="w-24 hidden sm:block h-1 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-to-r from-white/40 to-white" style={{ width: `${s}%` }} />
                  </div>
                  <span style={serif} className="text-2xl text-white tabular-nums w-9 text-right">
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
