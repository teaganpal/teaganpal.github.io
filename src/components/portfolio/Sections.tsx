import { Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, ArrowUpRight, Download, Mail, GraduationCap } from "lucide-react";
import { useRef, useState } from "react";
import { education, experience, funFacts, polaroids, profile, projects, skills, tintBg } from "@/data/portfolio";
import { Chip, Github, Linkedin, PhotoPlaceholder, Reveal, SectionHeading, Sparkle, Squiggle } from "./bits";
import { cn } from "@/lib/utils";

const btn = "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200";
const btnPrimary = cn(btn, "bg-primary text-primary-foreground shadow-paper hover:-translate-y-0.5 hover:shadow-lift active:translate-y-0");
const btnGhost = cn(btn, "border-2 border-ink bg-paper hover:-rotate-2 hover:bg-sky");

/* ---------------- HERO ---------------- */
export function Hero() {
  const constraints = useRef<HTMLDivElement>(null);
  const [boops, setBoops] = useState(0);
  return (
    <section ref={constraints} className="relative mx-auto max-w-6xl overflow-hidden px-5 pb-20 pt-14 md:pb-28 md:pt-20">
      <div className="grid items-center gap-14 md:grid-cols-[1.25fr_1fr]">
        <div>
          <Reveal>
            <p className="mb-6 inline-flex -rotate-2 items-center gap-2 rounded-full bg-mist px-4 py-1.5 text-sm font-medium">
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary" /> Software engineer · open to opportunities
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="text-5xl font-medium leading-[0.98] sm:text-6xl lg:text-[5.5rem]">
              Hi, I'm Teagan! I build things for the <em className="font-normal text-primary">web</em>
              <span className="mt-4 block font-sans text-xl font-normal leading-snug tracking-normal text-muted-foreground sm:text-2xl">
                (and love making them <span className="hl font-serif italic text-foreground">look good</span>, too).
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
              I'm a software engineer who loves combining creativity, code, and thoughtful design to build digital experiences people actually enjoy using.
            </p>
          </Reveal>
          <Reveal delay={0.18} className="mt-10 flex flex-wrap items-center gap-3">
            <a href="#projects" className={btnPrimary}>See my projects <ArrowRight className="h-4 w-4" /></a>
            <a href="#contact" className={btnGhost}>Say hello</a>
            <a href={profile.resume} download className="link-ink ml-2 inline-flex items-center gap-1.5 text-sm font-semibold">
              <Download className="h-4 w-4" /> Resume
            </a>
          </Reveal>
        </div>

        {/* Collage */}
        <div className="relative mx-auto h-[400px] w-full max-w-[380px] md:h-[470px]">
          <div className="absolute inset-x-6 top-8 h-[300px] rotate-3 rounded-2xl bg-mauve md:h-[360px]" />
          <div className="absolute inset-x-2 top-4 h-[300px] -rotate-2 rounded-2xl bg-blush md:h-[360px]" />
          <motion.div
            whileHover={{ rotate: 0, scale: 1.02 }}
            initial={{ rotate: 2 }}
            className="paper absolute inset-x-6 top-0 h-[330px] rounded-sm p-3 pb-14 md:h-[390px]"
          >
            <span className="tape -top-3 left-1/2 -translate-x-1/2 -rotate-3" />
            <div className="h-full w-full overflow-hidden bg-mist">
              {profile.photo ? <img src={profile.photo} alt="Teagan Rogers" className="h-full w-full object-cover" /> : <PhotoPlaceholder label="your photo here" />}
            </div>
            <p className="absolute bottom-3 left-0 right-0 text-center font-hand text-2xl">that's me! ↑</p>
          </motion.div>

          {/* Draggable sticker easter egg */}
          <motion.button
            drag
            dragConstraints={constraints}
            dragElastic={0.3}
            whileHover={{ scale: 1.08, rotate: -12 }}
            whileTap={{ scale: 0.92 }}
            onClick={() => setBoops((b) => b + 1)}
            className="absolute -left-4 bottom-6 z-10 grid h-24 w-24 cursor-grab place-items-center rounded-full bg-honey text-center font-hand text-xl leading-none shadow-lift active:cursor-grabbing md:-left-10"
            aria-label="Sticker: drag me or click me"
          >
            <span>{boops === 0 ? "drag me!" : boops < 5 ? `boop ×${boops}` : "ok hi :)"}</span>
          </motion.button>

          <div className="absolute -right-2 top-16 z-10 grid h-16 w-16 place-items-center rounded-full bg-primary text-primary-foreground shadow-paper">
            <Sparkle className="spin-slow h-8 w-8" />
          </div>
          <span className="absolute -right-3 bottom-0 rotate-[-4deg] rounded-md bg-paper px-3 py-1.5 font-mono text-xs shadow-paper">&lt;Teagan /&gt;</span>
        </div>
      </div>
    </section>
  );
}

/* ---------------- ABOUT ---------------- */
export function About() {
  const details = ["☕ powered by [placeholder]", "🎨 pixel-pusher at heart", "🧩 loves a good bug hunt", "📍 [your city]"];
  return (
    <section id="about" className="scroll-mt-20 bg-mist/50 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <Reveal className="relative mx-auto w-full max-w-sm">
          <div className="paper relative -rotate-3 rounded-sm p-3 pb-12 transition-transform duration-300 hover:rotate-0">
            <span className="tape -top-3 left-6 -rotate-12" />
            <span className="tape -top-3 right-6 rotate-12" />
            <div className="aspect-[4/5] overflow-hidden bg-blush">
              <PhotoPlaceholder label="candid photo" />
            </div>
            <p className="absolute bottom-3 left-4 font-hand text-2xl">probably debugging something</p>
          </div>
          <Squiggle className="absolute -bottom-12 -right-2 rotate-12 text-primary" />
        </Reveal>
        <div>
          <SectionHeading kicker="About me" note="hi again!">
            Code, <em className="text-primary">curiosity</em>, and a little bit of <span className="hl">sparkle</span>.
          </SectionHeading>
          <Reveal className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>[PLACEHOLDER] I'm Teagan — a student at BYU studying Information Systems who fell in love with frontend development the first time I saw a design come alive in the browser.</p>
            <p>I love the moment where a messy problem turns into a clean, intuitive experience. Whether it's untangling a tricky state bug or obsessing over spacing, I care about the people on the other side of the screen.</p>
          </Reveal>
          <Reveal className="mt-8 flex flex-wrap gap-2">
            {details.map((d, i) => (
              <span key={d} className={cn("rounded-full bg-paper px-4 py-2 text-sm shadow-paper", i % 2 ? "rotate-1" : "-rotate-1")}>{d}</span>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROJECTS ---------------- */
function ProjectPreview({ tint, name }: { tint: keyof typeof tintBg; name: string }) {
  return (
    <div className={cn("relative aspect-[16/10] overflow-hidden rounded-xl border border-ink/10", tintBg[tint])}>
      <div className="absolute inset-x-5 top-5 bottom-0 rounded-t-lg bg-paper shadow-paper">
        <div className="flex gap-1.5 border-b border-ink/10 px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-blush" /><span className="h-2 w-2 rounded-full bg-honey" /><span className="h-2 w-2 rounded-full bg-mist" />
        </div>
        <div className="space-y-2 p-4">
          <div className="h-3 w-2/3 rounded bg-ink/15" />
          <div className="h-2 w-1/2 rounded bg-ink/10" />
          <div className="mt-4 grid grid-cols-3 gap-2">
            <div className={cn("h-10 rounded", tintBg[tint])} /><div className="h-10 rounded bg-ink/5" /><div className="h-10 rounded bg-ink/5" />
          </div>
        </div>
      </div>
      <span className="absolute bottom-3 right-3 rotate-3 rounded bg-paper/90 px-2 py-0.5 font-hand text-lg">screenshot of {name}</span>
    </div>
  );
}

export function Projects() {
  const reduce = useReducedMotion();
  return (
    <section id="projects" className="scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading kicker="Selected work" note="the fun part →">
          Things I've <em className="text-primary">built</em> lately.
        </SectionHeading>
        <div className="grid gap-8 md:grid-cols-2 md:gap-10">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 0.08} className={i % 2 ? "md:mt-16" : ""}>
              <motion.article
                whileHover={reduce ? {} : { y: -6, rotate: i % 2 ? 0.8 : -0.8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group paper relative rounded-2xl p-4 transition-shadow hover:shadow-lift"
              >
                {p.placeholder && (
                  <span className="absolute -right-3 -top-3 z-10 rotate-6 rounded-full bg-sky px-3 py-1 font-hand text-lg shadow-paper">placeholder!</span>
                )}
                <ProjectPreview tint={p.tint} name={p.name} />
                <div className="px-2 pb-2 pt-5">
                  <p className="text-sm text-muted-foreground">{p.tagline}</p>
                  <h3 className="mt-1 text-3xl font-medium">{p.name}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{p.description}</p>
                  <p className="mt-3 text-sm"><span className="font-semibold">Role:</span> {p.role}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">{p.tech.map((t) => <Chip key={t}>{t}</Chip>)}</div>
                  <div className="mt-6 flex flex-wrap items-center gap-5 text-sm font-semibold">
                    <Link to="/projects/$slug" params={{ slug: p.slug }} className="inline-flex items-center gap-1 text-primary">
                      Read case study <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                    {p.github && <a href={p.github} className="link-ink inline-flex items-center gap-1"><Github className="h-4 w-4" /> Code</a>}
                    {p.demo && <a href={p.demo} className="link-ink inline-flex items-center gap-1"><ArrowUpRight className="h-4 w-4" /> Live</a>}
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- EXPERIENCE ---------------- */
export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 bg-mauve/40 py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-5">
        <SectionHeading kicker="Experience">Where I've been <em className="text-primary">learning</em>.</SectionHeading>
        <ol className="relative space-y-10 border-l-2 border-dashed border-ink/25 pl-8 md:pl-12">
          {experience.map((e, i) => (
            <li key={e.company} className="relative">
              <span className={cn("absolute -left-[45px] top-6 grid h-7 w-7 place-items-center rounded-full border-2 border-ink md:-left-[61px]", tintBg[e.tint])}>
                <Sparkle className="h-3.5 w-3.5" />
              </span>
              <Reveal delay={i * 0.08}>
                <article className="paper rounded-2xl p-6 md:p-8">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-3xl font-medium">{e.company}</h3>
                    <span className="rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground">{e.dates}</span>
                  </div>
                  <p className="mt-1 font-semibold text-primary">{e.role}</p>
                  <p className="mt-4 text-muted-foreground">{e.summary}</p>
                  <ul className="mt-4 space-y-2">
                    {e.points.map((pt) => (
                      <li key={pt} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />{pt}</li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-1.5">{e.tech.map((t) => <Chip key={t} className={tintBg[e.tint]}>{t}</Chip>)}</div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------------- SKILLS ---------------- */
export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading kicker="Toolbox" note="always growing!">My sticker <em className="text-primary">collection</em>.</SectionHeading>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s, i) => (
            <Reveal key={s.category} delay={(i % 3) * 0.06}>
              <div className="paper h-full rounded-2xl p-6">
                <h3 className="mb-4 font-sans text-sm font-bold uppercase tracking-[0.15em]">{s.category}</h3>
                <ul className="flex flex-wrap gap-2">
                  {s.items.map((it, j) => (
                    <li key={it}>
                      <span className={cn("inline-block cursor-default rounded-lg border border-ink/10 px-3 py-1.5 text-sm font-medium transition-transform duration-200 hover:-translate-y-0.5 hover:rotate-[-3deg]", tintBg[s.tint], j % 3 === 1 && "rotate-1")}>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- EDUCATION ---------------- */
export function Education() {
  return (
    <section id="education" className="scroll-mt-20 bg-blush/35 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading kicker="Education">Go <em className="text-primary">Cougs</em>.</SectionHeading>
        <Reveal>
          <div className="paper grid gap-10 rounded-3xl p-8 md:grid-cols-[1.2fr_1fr] md:p-12">
            <div>
              <GraduationCap className="mb-4 h-8 w-8 text-primary" />
              <h3 className="text-3xl font-medium md:text-4xl">{education.school}</h3>
              <p className="mt-3 text-lg">{education.degree}</p>
              <p className="mt-4 inline-block -rotate-2 rounded-full bg-sky px-4 py-1 text-sm font-semibold">{education.graduation}</p>
              <ul className="mt-8 space-y-2 text-muted-foreground">
                {education.highlights.map((h, i) => <li key={i} className="flex gap-2"><Sparkle className="mt-1 h-3.5 w-3.5 shrink-0 text-primary" />{h}</li>)}
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-bold uppercase tracking-[0.15em]">Relevant coursework</h4>
              <ul className="grid gap-2">
                {education.coursework.map((c, i) => <li key={i} className="rounded-lg border border-ink/10 bg-background px-4 py-2.5">{c}</li>)}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- BEYOND ---------------- */
export function Beyond() {
  return (
    <section id="beyond" className="scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading kicker="Beyond the code" note="the scrapbook page">When I'm <em className="text-primary">offline</em>…</SectionHeading>
        <div className="grid items-start gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="flex flex-wrap justify-center gap-6 sm:flex-nowrap">
            {polaroids.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div style={{ rotate: `${p.rotate}deg` }} className="paper w-52 p-3 pb-10 transition-transform duration-300 hover:-translate-y-2 hover:rotate-0! sm:w-48">
                  <div className={cn("aspect-square", tintBg[p.tint])}>
                    {p.image ? <img src={p.image} alt={p.caption} className="h-full w-full object-cover" /> : <PhotoPlaceholder label="photo" />}
                  </div>
                  <p className="mt-2 text-center font-hand text-xl">{p.caption}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4">
            {funFacts.map((f, i) => (
              <Reveal key={f.label} delay={i * 0.05}>
                <div className={cn("hover-wiggle rounded-2xl border-2 border-ink p-5", tintBg[f.tint], i % 2 ? "rotate-2" : "-rotate-1")}>
                  <p className="text-xs font-bold uppercase tracking-wider">{f.label}</p>
                  <p className="mt-2 font-serif text-lg leading-tight">{f.value}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CONTACT ---------------- */
export function Contact() {
  const items = [
    { icon: Mail, label: "Email", href: `mailto:${profile.email}`, text: profile.email },
    { icon: Linkedin, label: "LinkedIn", href: profile.linkedin, text: "Connect" },
    { icon: Github, label: "GitHub", href: profile.github, text: "Browse code" },
    { icon: Download, label: "Resume", href: profile.resume, text: "Download PDF" },
  ];
  return (
    <section id="contact" className="scroll-mt-20 px-5 pb-16 pt-8">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-primary px-6 py-20 text-center text-primary-foreground md:py-28">
        <Sparkle className="absolute left-[8%] top-12 h-10 w-10 text-sky transition-transform duration-700 hover:rotate-180 hover:scale-125" />
        <Sparkle className="absolute bottom-14 right-[10%] h-14 w-14 text-blush transition-transform duration-700 hover:rotate-180 hover:scale-125" />
        <Sparkle className="absolute right-[22%] top-10 h-5 w-5 text-mauve" />
        <Reveal>
          <p className="font-hand text-3xl text-sky">psst — the door's open</p>
          <h2 className="mx-auto mt-3 max-w-3xl text-5xl font-medium leading-[1] md:text-7xl">
            Have something <em>cool</em> in mind? Let's chat!
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-lg opacity-85">Internships, full-time roles, collaborations, or just a friendly hello — my inbox is always open.</p>
        </Reveal>
        <Reveal className="mx-auto mt-12 grid max-w-3xl gap-3 sm:grid-cols-2">
          {items.map(({ icon: Icon, label, href, text }) => (
            <a key={label} href={href} {...(label === "Resume" ? { download: true } : { target: label === "Email" ? undefined : "_blank", rel: "noreferrer" })}
              className="group flex items-center gap-4 rounded-2xl bg-paper p-4 text-left text-foreground transition-transform duration-200 hover:-translate-y-1 hover:-rotate-1">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-mist"><Icon className="h-5 w-5" /></span>
              <span className="min-w-0 flex-1">
                <span className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">{label}</span>
                <span className="block truncate font-medium">{text}</span>
              </span>
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          ))}
        </Reveal>
      </div>
      <footer className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-2 pt-8 text-sm text-muted-foreground">
        <span>© {new Date().getFullYear()} Teagan Rogers</span>
        <span className="font-hand text-xl">hand-built with React, Tailwind & lots of tea ✿</span>
      </footer>
    </section>
  );
}
