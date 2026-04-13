import Navbar         from "@/components/Navbar";
import Hero           from "@/components/Hero";
import FeaturedProject from "@/components/FeaturedProject";
import Projects       from "@/components/Projects";
import Skills         from "@/components/Skills";
import About          from "@/components/About";
import Timeline       from "@/components/Timeline";
import Contact        from "@/components/Contact";
import Footer         from "@/components/Footer";

export default function Home() {
  return (
    <main style={{ background: "#fafaf8" }}>
      <Navbar />
      <Hero />
      <FeaturedProject />
      <Projects />
      <Skills />
      <About />
      <Timeline />
      <Contact />
      <Footer />
    </main>
  );
}