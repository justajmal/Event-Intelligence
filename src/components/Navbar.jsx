import { m } from "motion/react";
import Logo from "./Logo.jsx";

export default function Navbar() {
  return (
    <m.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 inset-x-0 z-50 w-full pointer-events-none"
    >
      <div className="px-6 py-5 max-w-6xl mx-auto">
        <a href="#top" className="inline-block pointer-events-auto">
          <Logo className="h-7 w-auto text-white" />
        </a>
      </div>
    </m.nav>
  );
}
