import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import Introduction from "../components/sections/Introduction";
import Capabilities from "../components/sections/Capabilities";
import Region from "../components/sections/Region";
import Verticals from "../components/sections/Verticals";
import Projects from "../components/sections/Projects";
import Solutions from "../components/sections/Solutions";
import Contact from "../components/sections/Contact";

function Home() {
  return (
    <main className="overflow-x-clip">
      <Navbar />
      <Hero />
      <Introduction />
      <Capabilities />
      <Solutions />
      <Projects />
      <Verticals />
      <Region />
      <Contact />
      <Footer />
    </main>
  );
}

export default Home;
