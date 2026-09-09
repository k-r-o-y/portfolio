import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";

export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero />

      <About />

      <Experience />

      {/*
        Temporary anchors.
        These will be replaced by the actual sections next.
      */}

      <section className="placeholder-section" id="work">
        <span>03</span>
        <p>Selected Work</p>
      </section>

      <section className="placeholder-section" id="research">
        <span>04</span>
        <p>Research</p>
      </section>

      <section className="placeholder-section" id="contact">
        <span>05</span>
        <p>Contact</p>
      </section>
    </main>
  );
}