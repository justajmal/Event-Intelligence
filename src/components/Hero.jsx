import { m } from "motion/react";
import BackgroundVideo from "./BackgroundVideo.jsx";
import { serif, DemoButton } from "./ui.jsx";

export default function Hero() {
  return (
    <section id="top" className="relative h-screen min-h-[680px] w-full flex flex-col overflow-hidden">
      <BackgroundVideo />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-b from-transparent to-black pointer-events-none" />
      <div className="relative flex-1 flex flex-col items-center justify-center px-6 pt-24">
        <div className="relative z-10 text-center max-w-5xl mx-auto flex flex-col items-center justify-center w-full gap-10">
          <div className="flex flex-col items-center">
            <m.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              style={serif}
              className="text-5xl md:text-[80px] font-medium tracking-[-0.01em] leading-[1.02] mb-6 bg-gradient-to-b from-white via-white/95 to-white/70 bg-clip-text text-transparent max-w-4xl"
            >
              Events Aplenty. <br className="hidden md:block" />
              <em>Choose Wisely.</em>
            </m.h1>
            <m.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="lede-lg max-w-2xl"
            >
              <strong>Your proprietary event universe,</strong> ranked by relevance, built around your firm, and
              delivered like a feed.
            </m.p>
          </div>

          <m.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <DemoButton />
          </m.div>
        </div>
      </div>
    </section>
  );
}
