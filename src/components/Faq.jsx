import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus } from "lucide-react";
import { Reveal, Eyebrow, Heading, Section } from "./ui.jsx";

const faqs = [
  ["What does Event Intelligence AI do?", "It scores 20,000+ financial-services events against your firm and surfaces the rooms that matter, ranked and grouped into a shortlist your team can act on."],
  ["What data do you need from us?", "A profile of your firm: asset classes, target clients, competitors, offices, territories and priorities. We never ask for sensitive client data."],
  ["Do we need to install or integrate anything?", "No. There are no systems to install. You get a scored, executive-ready shortlist."],
  ["How is each event scored?", "Every event is measured with the same criteria across the full universe, so you can weigh opportunities side by side instead of relying on habit."],
  ["Does it get better over time?", "Yes. Each selection, event attended and piece of feedback tunes the model to how your team actually decides."],
];

export default function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <Section id="faq">
      <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20">
        <Reveal className="flex flex-col gap-5">
          <Eyebrow>FAQ</Eyebrow>
          <Heading>Questions, answered</Heading>
        </Reveal>
        <Reveal delay={0.1}>
          <ul className="flex flex-col">
            {faqs.map(([q, a], i) => (
              <li key={q} className="border-t border-white/10 last:border-b">
                <button
                  onClick={() => setOpen(open === i ? -1 : i)}
                  aria-expanded={open === i}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left cursor-pointer group"
                >
                  <span className="text-white text-[16px] font-medium group-hover:text-white/80 transition-colors">{q}</span>
                  <Plus
                    className={`w-5 h-5 shrink-0 text-white/60 transition-transform duration-300 ${open === i ? "rotate-45" : ""}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="text-white/55 text-[14px] leading-relaxed pb-6 max-w-xl">{a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
