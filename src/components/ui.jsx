import { motion } from "motion/react";

export const serif = { fontFamily: "'Instrument Serif', serif" };
export const DEMO_URL = "https://www.linkedin.com/in/bobdryzgula/";

export const signals = [
  ["Client Fit", 98],
  ["Leadership in Attendance", 97],
  ["RIA Attendance", 96],
  ["Family Office Presence", 95],
  ["Regional RIA Event", 94],
  ["Networking Opportunity", 93],
  ["Local Opportunity", 92],
  ["Consultant Density", 92],
  ["Product Alignment", 91],
];

export function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Eyebrow({ children }) {
  return (
    <p className="text-white/60 text-[10px] md:text-[11px] font-medium tracking-[0.2em] uppercase">{children}</p>
  );
}

export function Heading({ children, className = "" }) {
  return (
    <h2
      style={serif}
      className={`text-4xl md:text-[56px] leading-[1.05] tracking-[-0.01em] bg-gradient-to-b from-white via-white/95 to-white/60 bg-clip-text text-transparent text-balance ${className}`}
    >
      {children}
    </h2>
  );
}

export function Section({ id, children, className = "" }) {
  return (
    <section id={id} className={`relative px-6 py-24 md:py-36 scroll-mt-20 ${className}`}>
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
}

export function DemoButton({ className = "" }) {
  return (
    <a
      href={DEMO_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block px-10 py-3 text-[14px] font-medium border border-white/10 rounded-full hover:border-white/30 hover:bg-white/[0.02] transition-all duration-300 text-white/90 backdrop-blur-sm ${className}`}
    >
      Book a Demo
    </a>
  );
}
