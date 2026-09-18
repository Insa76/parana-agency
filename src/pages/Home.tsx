import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import Introduction from "../components/sections/Introduction";
import Capabilities from "../components/sections/Capabilities";
import Region from "../components/sections/Region";
import Verticals from "../components/sections/Verticals";
import Projects from "../components/sections/Projects";
import Network from "../components/sections/Network";
import Contact from "../components/sections/Contact";
import Footer from "../components/layout/Footer";

function Home() {
  return (
    <main className="overflow-x-clip">
      <Navbar />

      <Hero />

      <Introduction />

      <Capabilities />

      <Region />

      <Verticals />

      <Projects />

      <Network />

      <Contact />

      <Footer />
    </main>
  );
}

export default Home;