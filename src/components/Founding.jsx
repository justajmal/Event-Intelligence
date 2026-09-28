import { useState } from "react";
import { m, AnimatePresence } from "motion/react";
import { ArrowRight, Check } from "lucide-react";
import { Reveal, Eyebrow, Heading, Section } from "./ui.jsx";

const CLAIMED = 18;
const SEATS = 100;
const perks = [
  "First 30 days on us",
  "Founding pricing, locked for life",
  "First access to every new feature",
  "Referrals that can make it free",
];

const LINKEDIN = /^(https?:\/\/)?([a-z]{2,3}\.)?linkedin\.com\/in\/[\w\-%.]+\/?$/i;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PERSONAL = /@(gmail|yahoo|hotmail|outlook|live|icloud|me|aol|proton(mail)?)\./i;

const checks = {
  linkedin: (v) => (LINKEDIN.test(v.trim()) ? "" : "Enter a LinkedIn profile, like linkedin.com/in/yourname"),
  email: (v) => {
    const s = v.trim();
    if (!EMAIL.test(s)) return "Enter a valid email address";
    if (PERSONAL.test(s)) return "Please use your work email";
    return "";
  },
};

function Field({ id, label, value, error, showError, onChange, onBlur, ...props }) {
  const valid = value && !error;
  return (
    <div className="relative text-left">
      <input
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder=" "
        aria-invalid={showError}
        aria-describedby={`${id}-hint`}
        className="peer w-full bg-transparent border-b border-white/15 pt-6 pb-2 pr-8 text-[14px] tracking-[-0.01em] text-white outline-none transition-colors duration-300 hover:border-white/30"
        {...props}
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-0 top-[1.35rem] text-[14px] text-white/40 transition-all duration-300 ease-out peer-focus:top-0.5 peer-focus:text-[11px] peer-focus:text-white/60 peer-[:not(:placeholder-shown)]:top-0.5 peer-[:not(:placeholder-shown)]:text-[11px]"
      >
        {label}
      </label>
      <span
        className={`pointer-events-none absolute left-0 bottom-0 h-px w-full origin-center transition-transform duration-500 ease-out ${
          showError ? "bg-[#ff6961] scale-x-100" : "bg-white scale-x-0 peer-focus:scale-x-100"
        }`}
      />
      <Check
        className={`absolute right-0 top-6 w-4 h-4 text-white transition-all duration-300 ${
          valid ? "opacity-100 scale-100" : "opacity-0 scale-50"
        }`}
        aria-hidden="true"
      />
      <p
        id={`${id}-hint`}
        className={`lede-sm overflow-hidden transition-all duration-300 ${
          showError ? "max-h-6 opacity-100 mt-2 text-[#ff6961]" : "max-h-0 opacity-0"
        }`}
      >
        {error}
      </p>
    </div>
  );
}

export default function Founding() {
  const [values, setValues] = useState({ linkedin: "", email: "" });
  const [touched, setTouched] = useState({});
  const [sent, setSent] = useState(false);

  const errors = { linkedin: checks.linkedin(values.linkedin), email: checks.email(values.email) };
  const ready = !errors.linkedin && !errors.email;

  const bind = (name) => ({
    value: values[name],
    error: errors[name],
    showError: touched[name] && !!values[name] && !!errors[name],
    onChange: (e) => setValues((v) => ({ ...v, [name]: e.target.value })),
    onBlur: () => setTouched((t) => ({ ...t, [name]: true })),
  });

  const onSubmit = (e) => {
    e.preventDefault();
    setTouched({ linkedin: true, email: true });
    if (ready) setSent(true);
  };

  return (
    <Section id="founding">
      <div className="max-w-2xl mx-auto flex flex-col items-center text-center gap-16">
        <Reveal className="flex flex-col items-center gap-6">
          <Eyebrow>The Founding 100</Eyebrow>
          <Heading>Something new is coming.</Heading>
        </Reveal>

        <Reveal delay={0.1} className="w-full">
          <ul className="grid grid-cols-2 md:grid-cols-4 border-t border-white/10">
            {perks.map((p, i) => (
              <li key={p} className="flex flex-col gap-3 pt-6 px-3 text-left">
                <span className="text-white/30 text-[11px] tabular-nums tracking-[0.2em]">0{i + 1}</span>
                <span className="lede-sm text-[#d2d2d7]">{p}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.15} className="w-full max-w-md flex flex-col gap-6">
          <AnimatePresence mode="wait">
            {sent ? (
              <m.div
                key="done"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center gap-3"
              >
                <span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </span>
                <p className="lede text-[#d2d2d7]">Application received. We'll be in touch.</p>
              </m.div>
            ) : (
              <m.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -8 }}
                onSubmit={onSubmit}
                noValidate
                className="flex flex-col gap-4"
              >
                <Field
                  id="f-linkedin"
                  label="LinkedIn profile URL"
                  type="text"
                  inputMode="url"
                  autoComplete="url"
                  spellCheck={false}
                  {...bind("linkedin")}
                />
                <Field id="f-email" label="Professional email" type="email" autoComplete="email" {...bind("email")} />
                <button
                  type="submit"
                  aria-disabled={!ready}
                  className={`group mt-6 self-center flex items-center gap-2 rounded-full border px-6 py-2.5 text-[14px] font-medium transition-all duration-300 ${
                    ready
                      ? "border-white/30 text-white hover:bg-white hover:text-black cursor-pointer"
                      : "border-white/10 text-white/35 cursor-not-allowed"
                  }`}
                >
                  Apply for a seat
                  <ArrowRight
                    className={`w-4 h-4 transition-transform duration-300 ${ready ? "group-hover:translate-x-1" : ""}`}
                  />
                </button>
              </m.form>
            )}
          </AnimatePresence>
          <p className="lede-sm text-white/35 tabular-nums">
            {CLAIMED} of {SEATS} seats claimed · Every application reviewed personally
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
