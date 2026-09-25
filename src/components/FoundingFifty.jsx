import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Check } from "lucide-react";
import { Reveal, Eyebrow, Heading, Section, serif } from "./ui.jsx";

const CLAIMED = 18;
const SEATS = 50;
const perks = [
  "Your first 30 days on us.",
  "Founding pricing, locked in perpetuity.",
  "First access to every new feature, always.",
  "Referrals that can make it free.",
];

const field =
  "w-full rounded-full border border-white/15 bg-white/[0.02] backdrop-blur-sm px-5 py-3 text-[14px] text-white placeholder-white/45 outline-none focus:border-white/40 transition-colors duration-300";

export default function FoundingFifty() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <Section id="founding-fifty">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
        <div className="flex flex-col gap-8">
          <Reveal className="flex flex-col gap-5">
            <Eyebrow>The Founding Fifty</Eyebrow>
            <Heading>Something new is coming.</Heading>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col gap-4 text-white/60 text-[15px] md:text-base leading-relaxed">
            <p>
              We are always building. The Founding Fifty get in first, stay in first, and help shape what comes
              next.
            </p>
            <p>
              Planning season is here, so use us to set the majors. Then stay in more of the right rooms, always.
              The calendar does not stop in September, and neither should you.
            </p>
            <p className="text-white/85">Fifty founding seats. Every application is reviewed personally. Not everyone gets in.</p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-white/50 text-[13px] mb-4">Founding members get:</p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {perks.map((p) => (
                <li key={p} className="flex items-start gap-3 text-white/80 text-[14px]">
                  <span className="glass-pill w-6 h-6 shrink-0 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="liquid-glass rounded-[28px] p-7 md:p-9 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex items-baseline justify-between">
                <span style={serif} className="text-white text-5xl tabular-nums">
                  {CLAIMED}<span className="text-white/35 text-3xl"> / {SEATS}</span>
                </span>
                <span className="text-white/55 text-[13px]">seats claimed</span>
              </div>
              <div className="grid grid-cols-[repeat(25,1fr)] gap-1" aria-label={`${CLAIMED} of ${SEATS} seats claimed`}>
                {Array.from({ length: SEATS }, (_, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.015 }}
                    className={`h-2 rounded-full ${i < CLAIMED ? "bg-white" : "bg-white/12"}`}
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 style={serif} className="text-white text-3xl">Apply for a seat</h3>
              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="done"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-3 rounded-full border border-white/20 px-5 py-3 text-white/85 text-[14px]"
                  >
                    <Check className="w-4 h-4" /> Application received. We'll be in touch.
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    onSubmit={onSubmit}
                    className="flex flex-col gap-3"
                  >
                    <label htmlFor="ff-linkedin" className="sr-only">LinkedIn profile URL</label>
                    <input id="ff-linkedin" type="url" required placeholder="LinkedIn profile URL" className={field} />
                    <label htmlFor="ff-email" className="sr-only">Professional email</label>
                    <input id="ff-email" type="email" required placeholder="Professional email" className={field} />
                    <button
                      type="submit"
                      className="mt-1 flex items-center justify-center gap-2 rounded-full bg-white text-black px-6 py-3 text-[14px] font-medium hover:bg-white/85 transition-colors cursor-pointer"
                    >
                      Apply for a Seat <ArrowRight className="w-4 h-4" />
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
              <p className="text-white/45 text-[13px]">Submit, and we'll be in touch.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
