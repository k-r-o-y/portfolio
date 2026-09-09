import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import SelectedWork from "@/components/sections/SelectedWork";
import Research from "@/components/sections/Research";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero />
      <About />
      <Experience />
      <SelectedWork />
      <Research />
      <Contact />
    </main>
  );
}