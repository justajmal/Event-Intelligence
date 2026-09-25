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
      <div className="liquid-glass rounded-full px-5 md:px-6 py-3 flex items-center justify-between max-w-5xl mx-auto">
        <div className="flex items-center gap-8">
          <a href="#top" className="flex items-center gap-2">
            <Compass className="w-6 h-6 text-white" strokeWidth={1.5} />
            <span className="text-white font-semibold text-lg tracking-tight">
              Event Intelligence<span className="text-white/50 font-normal"> AI</span>
            </span>
          </a>
          <div className="hidden lg:flex items-center gap-8 text-white/80 text-sm font-medium">
            {links.map(([l, h]) => (
              <a key={l} href={h} className="hover:text-white transition-colors duration-300">
                {l}
              </a>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a href="#faq" className="hidden sm:block text-white hover:text-white/80 transition-colors text-sm font-medium">
            Sign in
          </a>
          <a
            href="#access"
            className="liquid-glass rounded-full px-5 md:px-6 py-2 text-sm font-medium text-white hover:opacity-90 transition-opacity"
          >
            Book a demo
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
