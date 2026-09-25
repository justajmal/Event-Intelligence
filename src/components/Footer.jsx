import { Compass } from "lucide-react";

export default function Footer() {
  return (
    <footer className="px-6 py-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-white/45 text-[13px]">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-white/85">
            <Compass className="w-5 h-5" strokeWidth={1.5} />
            <span className="font-medium">Event Intelligence AI</span>
          </div>
          <span>Your GPS for events in financial services.</span>
        </div>
        <a href="#founding-fifty" className="text-white/80 hover:text-white transition-colors duration-300">
          Join the Founding Fifty →
        </a>
        <span>
          © 2026 Event Intelligence AI ·{" "}
          <a href="https://eventintelligence.ai/" className="hover:text-white transition-colors">eventintelligence.ai</a>
        </span>
      </div>
    </footer>
  );
}
