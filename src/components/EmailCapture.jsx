import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Check } from "lucide-react";

const PROMPT = "Enter Your Work Email For Early Access";
const DONE = "We Will Be In Touch With Your Shortlist";

function useTypewriter(text, active, speed = 60) {
  const [out, setOut] = useState("");
  useEffect(() => {
    setOut("");
    if (!active) return;
    let i = 0;
    const id = setInterval(() => {
      setOut(text.slice(0, ++i));
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [text, active, speed]);
  return out;
}

export default function EmailCapture({ label = "Request early access", id = "email" }) {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const placeholder = useTypewriter(submitted ? DONE : PROMPT, open);

  useEffect(() => {
    if (!submitted) return;
    const t = setTimeout(() => {
      setSubmitted(false);
      setOpen(false);
    }, 4000);
    return () => clearTimeout(t);
  }, [submitted]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email || submitted) return;
    setEmail("");
    setSubmitted(true);
  };

  const anim = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
    transition: { duration: 0.2 },
  };

  return (
    <div className="min-h-[50px] w-full flex justify-center">
      <AnimatePresence mode="wait">
        {!open ? (
          <motion.button
            key="btn"
            {...anim}
            onClick={() => setOpen(true)}
            className="px-10 py-3 text-[14px] font-medium border border-white/10 rounded-full hover:border-white/30 hover:bg-white/[0.02] transition-all duration-300 text-white/90 backdrop-blur-sm cursor-pointer"
          >
            {label}
          </motion.button>
        ) : (
          <motion.form
            key="form"
            {...anim}
            onSubmit={onSubmit}
            className="flex items-center gap-2 pl-5 pr-1.5 py-1.5 text-[14px] font-medium border border-white/20 rounded-full bg-white/[0.02] backdrop-blur-sm w-full max-w-[360px] focus-within:border-white/40 transition-colors duration-300"
          >
            <input
              id={id}
              type="email"
              required
              autoFocus
              value={email}
              disabled={submitted}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={placeholder}
              aria-label="Work email"
              className="flex-1 min-w-0 bg-transparent text-white placeholder-white/45 outline-none"
            />
            <button
              type="submit"
              aria-label="Submit email"
              className="shrink-0 w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:bg-white/90 transition-colors cursor-pointer"
            >
              {submitted ? <Check className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
