import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Stats from "./components/Stats.jsx";
import Problem from "./components/Problem.jsx";
import Product from "./components/Product.jsx";
import Engine from "./components/Engine.jsx";
import EventAlpha from "./components/EventAlpha.jsx";
import Roadmap from "./components/Roadmap.jsx";
import FoundingFifty from "./components/FoundingFifty.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <main className="relative bg-black min-h-screen w-full overflow-x-hidden selection:bg-white selection:text-black">
      <Navbar />
      <Hero />
      <Stats />
      <Problem />
      <Product />
      <Engine />
      <EventAlpha />
      <Roadmap />
      <FoundingFifty />
      <Footer />
    </main>
  );
}
