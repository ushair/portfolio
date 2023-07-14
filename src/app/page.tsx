import Bio from "./components/Bio";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className="max-w-[1440px] w-full mx-auto mb-8">
      <Header />
      <Bio />
      <Experience />
      <Projects />
    </main>
  );
}
