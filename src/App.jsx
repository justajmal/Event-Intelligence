import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Stats from "./components/Stats.jsx";
import Thesis from "./components/Thesis.jsx";
import Features from "./components/Features.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import Teams from "./components/Teams.jsx";
import Faq from "./components/Faq.jsx";
import FinalCta from "./components/FinalCta.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <main className="relative bg-black min-h-screen w-full overflow-x-hidden selection:bg-white selection:text-black">
      <Navbar />
      <Hero />
      <Stats />
      <Thesis />
      <Features />
      <HowItWorks />
      <Teams />
      <Faq />
      <FinalCta />
      <Footer />
    </main>
  );
}
