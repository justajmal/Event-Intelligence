import { Compass } from "lucide-react";

export default function Footer() {
  return (
    <footer className="px-6 py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-white/45 text-[13px]">
        <div className="flex items-center gap-2 text-white/80">
          <Compass className="w-5 h-5" strokeWidth={1.5} />
          <span className="font-medium">Event Intelligence AI</span>
        </div>
        <nav className="flex flex-wrap gap-6">
          {[["Platform", "#platform"], ["How it works", "#how"], ["Who it's for", "#teams"], ["FAQ", "#faq"]].map(([l, h]) => (
            <a key={l} href={h} className="hover:text-white transition-colors duration-300">{l}</a>
          ))}
        </nav>
        <span>© {new Date().getFullYear()} Event Intelligence AI</span>
      </div>
    </footer>
  );
}
