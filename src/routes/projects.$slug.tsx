import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Nav } from "@/components/portfolio/Nav";
import { Chip, Github, PhotoPlaceholder, Reveal, Sparkle } from "@/components/portfolio/bits";
import { projects, tintBg } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { useTitle } from "@/lib/use-title";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  notFoundComponent: () => (
    <div className="grid min-h-screen place-items-center p-6 text-center">
      <div>
        <h1 className="text-5xl">Hmm, no project here.</h1>
        <Link to="/" hash="projects" className="mt-6 inline-block font-semibold text-primary">← Back to projects</Link>
      </div>
    </div>
  ),
  component: CaseStudy,
});

function CaseStudy() {
  const { project: p } = Route.useLoaderData();
  const cs = p.caseStudy;
  useTitle(`${p.name} — Case Study · Teagan Rogers`);
  const blocks: [string, string][] = [
    ["The problem", cs.problem],
    ["My approach", cs.approach],
    ["Challenges & solutions", cs.challenges],
    ["Results & lessons", cs.results],
  ];
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-4xl px-5 py-14 md:py-20">
        <Link to="/" hash="projects" className="link-ink inline-flex items-center gap-1 text-sm font-semibold">
          <ArrowLeft className="h-4 w-4" /> All projects
        </Link>
        <Reveal className="mt-8">
          <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary"><Sparkle className="h-3.5 w-3.5 text-sky" /> Case study</p>
          <h1 className="mt-3 text-5xl font-medium leading-none md:text-7xl">{p.name}</h1>
          <p className="mt-5 text-xl text-muted-foreground">{p.description}</p>
          <div className="mt-6 flex flex-wrap items-center gap-2">
            {p.tech.map((t) => <Chip key={t}>{t}</Chip>)}
          </div>
          <p className="mt-4 text-sm"><span className="font-semibold">Role:</span> {p.role}</p>
          <div className="mt-5 flex gap-5 text-sm font-semibold">
            {p.github && <a href={p.github} className="link-ink inline-flex items-center gap-1"><Github className="h-4 w-4" /> GitHub</a>}
            {p.demo && <a href={p.demo} className="link-ink inline-flex items-center gap-1"><ArrowUpRight className="h-4 w-4" /> Live demo</a>}
          </div>
        </Reveal>
        <Reveal className={cn("mt-12 aspect-video rounded-3xl p-6", tintBg[p.tint])}>
          <div className="paper h-full rounded-xl">
            {p.image ? <img src={p.image} alt={`${p.name} screenshot`} className="h-full w-full rounded-xl object-cover" /> : <PhotoPlaceholder label="hero screenshot / demo" />}
          </div>
        </Reveal>
        <div className="mt-16 space-y-12">
          {blocks.slice(0, 2).map(([h, b]) => <Block key={h} title={h} body={b} />)}
          <Reveal>
            <h2 className="text-3xl font-medium">Key implementation details</h2>
            <ul className="mt-4 space-y-2 text-lg text-muted-foreground">
              {cs.implementation.map((it, i) => <li key={i} className="flex gap-3"><Sparkle className="mt-1.5 h-3.5 w-3.5 shrink-0 text-primary" />{it}</li>)}
            </ul>
          </Reveal>
          {blocks.slice(2).map(([h, b]) => <Block key={h} title={h} body={b} />)}
        </div>
      </main>
    </>
  );
}

function Block({ title, body }: { title: string; body: string }) {
  return (
    <Reveal>
      <h2 className="text-3xl font-medium">{title}</h2>
      <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{body}</p>
    </Reveal>
  );
}
