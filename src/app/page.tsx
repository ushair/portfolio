import Bio from "./components/Bio";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills/Skills";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Bio />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
