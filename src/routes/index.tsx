import { createFileRoute } from "@tanstack/react-router";
import { useTitle } from "@/lib/use-title";
import { Nav } from "@/components/portfolio/Nav";
import { About, Beyond, Contact, Education, Experience, Hero, Projects, Skills } from "@/components/portfolio/Sections";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  useTitle("Teagan Rogers — Software Engineer");
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-paper focus:px-4 focus:py-2">Skip to content</a>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Beyond />
        <Contact />
      </main>
    </>
  );
}
