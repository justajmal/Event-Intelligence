import { motion } from "motion/react";
import BackgroundVideo from "./BackgroundVideo.jsx";
import EmailCapture from "./EmailCapture.jsx";
import { serif } from "./ui.jsx";

export default function Hero() {
  return (
    <section id="top" className="relative h-screen min-h-[640px] w-full flex flex-col overflow-hidden">
      <BackgroundVideo />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-black pointer-events-none" />
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
              Never miss the <em>right room</em>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="text-white/65 text-[15px] md:text-[17px] leading-relaxed max-w-xl"
            >
              Your GPS for events. AI that scores 20,000+ financial-services events against your firm and
              surfaces the rooms that matter — ranked, personalized, decision-ready.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="w-full mt-2"
          >
            <EmailCapture id="hero-email" />
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
            <a
              href="#how"
              className="text-white/80 hover:text-white/40 transition-colors duration-300 text-[13px] font-medium tracking-wide"
            >
              See how it works
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
