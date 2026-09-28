import { useEffect, useState } from "react";
import { m } from "motion/react";
import Logo from "./Logo.jsx";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <m.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 inset-x-0 z-50 w-full pointer-events-none"
    >
      <div className="px-5 py-5 md:px-8 md:py-6 lg:px-10">
        <a href="#top" className="relative inline-block pointer-events-auto">
          <span
            aria-hidden="true"
            className={`logo-haze absolute -inset-x-8 -inset-y-6 transition-opacity duration-700 ease-out ${
              scrolled ? "opacity-100" : "opacity-0"
            }`}
          />
          <Logo className="relative h-7 w-auto text-white" />
        </a>
      </div>
    </m.nav>
  );
}
