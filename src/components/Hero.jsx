import { motion } from "motion/react";
import BackgroundVideo from "./BackgroundVideo.jsx";
import { serif, signals, DemoButton } from "./ui.jsx";

function Ticker() {
  const row = [...signals, ...signals];
  return (
    <div className="relative w-full overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
      <div className="marquee flex gap-3 w-max">
        {row.map(([l, s], i) => (
          <div key={i} className="glass-pill flex items-center gap-3 pl-2 pr-4 py-2 whitespace-nowrap" aria-hidden={i >= signals.length}>
            <span style={serif} className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white text-lg tabular-nums">
              {s}
            </span>
            <span className="flex flex-col leading-tight text-left">
              <span className="text-white text-[13px] font-medium">{l}</span>
              <span className="text-white/45 text-[11px]">Relevance</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative h-screen min-h-[680px] w-full flex flex-col overflow-hidden">
      <BackgroundVideo />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-b from-transparent to-black pointer-events-none" />
      <div className="relative flex-1 flex flex-col items-center justify-center px-6 pt-24">
        <div className="relative z-10 text-center max-w-5xl mx-auto flex flex-col items-center justify-center w-full gap-10">
          <div className="flex flex-col items-center">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-white/80 text-[10px] md:text-[11px] font-medium tracking-[0.2em] uppercase mb-4"
            >
              Personalized event intelligence for financial services
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              style={serif}
              className="text-5xl md:text-[80px] font-medium tracking-[-0.01em] leading-[1.02] mb-6 bg-gradient-to-b from-white via-white/95 to-white/70 bg-clip-text text-transparent max-w-4xl"
            >
              Never Miss The <br className="hidden md:block" />
              <em>Right Room.</em>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="text-white/65 text-[15px] md:text-[17px] leading-relaxed max-w-xl"
            >
              Your proprietary event universe, ranked by relevance, built around your firm, and delivered like a
              feed.
            </motion.p>
          </div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <DemoButton />
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
            <a
              href="#founding-fifty"
              className="text-white/80 hover:text-white/40 transition-colors duration-300 text-[13px] font-medium tracking-wide"
            >
              Something new is coming
            </a>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="relative z-10 pb-10 md:pb-14 max-w-6xl mx-auto w-full"
      >
        <Ticker />
      </motion.div>
    </section>
  );
}
