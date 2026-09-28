import { LazyMotion, domAnimation } from "motion/react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Stats from "./components/Stats.jsx";
import Problem from "./components/Problem.jsx";
import Product from "./components/Product.jsx";
import Engine from "./components/Engine.jsx";
import EventAlpha from "./components/EventAlpha.jsx";
import Roadmap from "./components/Roadmap.jsx";
import Founding from "./components/Founding.jsx";
import Footer from "./components/Footer.jsx";
import ScrollBackground from "./components/ScrollBackground.jsx";

export default function App() {
  return (
    <LazyMotion features={domAnimation} strict>
      <main className="relative bg-black min-h-screen w-full overflow-x-clip selection:bg-white selection:text-black">
        <Navbar />
        <Hero />
        <ScrollBackground>
          <Stats />
          <Problem />
          <Product />
          <Engine />
          <EventAlpha />
          <Roadmap />
          <Founding />
          <Footer />
        </ScrollBackground>
      </main>
    </LazyMotion>
  );
}
