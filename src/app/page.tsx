import dynamic from "next/dynamic";
const Bio = dynamic(() => import("./components/Bio/Bio"), { ssr: false });
const Contact = dynamic(() => import("./components/Contact/Contact"), {
  ssr: false,
});
const Experience = dynamic(() => import("./components/Experience/Experience"), {
  ssr: false,
});
const Footer = dynamic(() => import("./components/Footer/Footer"), {
  ssr: false,
});
const Header = dynamic(() => import("./components/Header/Header"), {
  ssr: false,
});
const Projects = dynamic(() => import("./components/Header/Projects"), {
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
