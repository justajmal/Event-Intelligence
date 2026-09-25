import { motion } from "motion/react";
import { Compass } from "lucide-react";
import { DEMO_URL } from "./ui.jsx";

const links = [
  ["Platform", "#platform"],
  ["How It Works", "#how"],
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 inset-x-0 z-50 px-4 md:px-6 py-4 md:py-6 w-full"
    >
      <div className="glass-pill grid grid-cols-[1fr_auto] md:grid-cols-[1fr_auto_1fr] items-center gap-6 px-5 md:px-6 py-3 max-w-5xl mx-auto">
        <a href="#top" className="flex items-center gap-2 justify-self-start">
          <Compass className="w-6 h-6 text-white" strokeWidth={1.5} />
          <span className="text-white font-semibold text-lg tracking-tight whitespace-nowrap">
            Event Intelligence<span className="text-white/50 font-normal"> AI</span>
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-white/80 text-sm font-medium">
          {links.map(([l, h]) => (
            <a key={l} href={h} className="hover:text-white transition-colors duration-300 whitespace-nowrap">
              {l}
            </a>
          ))}
        </div>
        <a
          href={DEMO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="justify-self-end rounded-full bg-white text-black px-5 py-2 text-sm font-medium hover:bg-white/85 transition-colors whitespace-nowrap"
        >
          Book a Demo
        </a>
      </div>
    </motion.nav>
  );
}
