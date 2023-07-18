import dynamic from "next/dynamic";
import Projects from "./components/Projects/Projects";
import Header from "./components/Header/Header";
import Experience from "./components/Experience/Experience";

const Bio = dynamic(() => import("./components/Bio/Bio"), { ssr: false });
const Contact = dynamic(() => import("./components/Contact/Contact"), {
  ssr: false,
});
const Footer = dynamic(() => import("./components/Footer/Footer"), {
  ssr: false,
});
const Skills = dynamic(() => import("./components/Skills/Skills"), {
  ssr: false,
});

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
