import Bio from "./components/Bio";
import Header from "./components/Header";

export default function Home() {
  return (
    <main className="max-w-[1440px] w-full mx-auto mb-8">
      <Header />
      <Bio />
    </main>
  );
}
