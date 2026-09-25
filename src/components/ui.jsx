import { motion } from "motion/react";

export const serif = { fontFamily: "'Instrument Serif', serif" };

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
    <section id={id} className={`relative px-6 py-24 md:py-36 ${className}`}>
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
}
