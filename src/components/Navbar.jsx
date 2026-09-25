import { motion } from "motion/react";
import { Compass } from "lucide-react";

const links = [
  ["Platform", "#platform"],
  ["How it works", "#how"],
  ["Who it's for", "#teams"],
  ["FAQ", "#faq"],
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 inset-x-0 z-50 px-4 md:px-6 py-4 md:py-6 w-full"
    >
      <div className="glass-pill grid grid-cols-[1fr_auto] lg:grid-cols-[1fr_auto_1fr] items-center gap-6 px-5 md:px-6 py-3 max-w-5xl mx-auto">
        <a href="#top" className="flex items-center gap-2 justify-self-start">
          <Compass className="w-6 h-6 text-white" strokeWidth={1.5} />
          <span className="text-white font-semibold text-lg tracking-tight whitespace-nowrap">
            Event Intelligence<span className="text-white/50 font-normal"> AI</span>
          </span>
        </a>
        <div className="hidden lg:flex items-center gap-8 text-white/80 text-sm font-medium">
          {links.map(([l, h]) => (
            <a key={l} href={h} className="hover:text-white transition-colors duration-300 whitespace-nowrap">
              {l}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-4 justify-self-end">
          <a href="#faq" className="hidden sm:block text-white hover:text-white/80 transition-colors text-sm font-medium">
            Sign in
          </a>
          <a
            href="#access"
            className="rounded-full bg-white text-black px-5 py-2 text-sm font-medium hover:bg-white/85 transition-colors whitespace-nowrap"
          >
            Book a demo
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
