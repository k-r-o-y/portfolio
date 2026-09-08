import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />

      {/*
        Temporary anchor sections.
        We'll replace these with the real portfolio sections next.
      */}
      <section className="placeholder-section" id="about">
        <span>01</span>
        <p>About</p>
      </section>

      <section className="placeholder-section" id="experience">
        <span>02</span>
        <p>Experience</p>
      </section>

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