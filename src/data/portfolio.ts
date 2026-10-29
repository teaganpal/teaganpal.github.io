// ✏️ All site content lives here. Edit this file to update the portfolio.
// Anything marked [PLACEHOLDER] should be replaced with real content.

export const profile = {
  name: "Teagan Rogers",
  email: "teagan@example.com", // [PLACEHOLDER]
  linkedin: "https://www.linkedin.com/in/your-handle", // [PLACEHOLDER]
  github: "https://github.com/your-handle", // [PLACEHOLDER]
  resume: "/resume.pdf", // [PLACEHOLDER] add your resume PDF to /public/resume.pdf
  photo: "", // [PLACEHOLDER] e.g. "/images/teagan.jpg" in /public/images
};

export type Tint = "mist" | "blush" | "mauve" | "sky" | "honey";

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  tint: Tint;
  tech: string[];
  role: string;
  github?: string;
  demo?: string;
  image?: string;
  placeholder?: boolean;
  caseStudy: {
    problem: string;
    approach: string;
    implementation: string[];
    challenges: string;
    results: string;
  };
};

const tbd = "[PLACEHOLDER] Replace with your own write-up.";

export const projects: Project[] = [
  {
    slug: "project-one",
    name: "Project One",
    tagline: "A frontend project you're proud of",
    description: "[PLACEHOLDER] One or two sentences about what this project does and who it's for.",
    tint: "mist",
    tech: ["React", "TypeScript", "Tailwind"],
    role: "[PLACEHOLDER] e.g. Solo designer & developer",
    placeholder: true,
    caseStudy: { problem: tbd, approach: tbd, implementation: [tbd], challenges: tbd, results: tbd },
  },
  {
    slug: "project-two",
    name: "Project Two",
    tagline: "A mobile or full-stack build",
    description: "[PLACEHOLDER] Describe the problem this solves in plain language.",
    tint: "blush",
    tech: ["React Native", "Node.js", "SQL"],
    role: "[PLACEHOLDER] e.g. Frontend lead on a team of 4",
    placeholder: true,
    caseStudy: { problem: tbd, approach: tbd, implementation: [tbd], challenges: tbd, results: tbd },
  },
  {
    slug: "project-three",
    name: "Project Three",
    tagline: "Something experimental & fun",
    description: "[PLACEHOLDER] A playful side project, design experiment, or class project.",
    tint: "mauve",
    tech: ["Swift", "Figma"],
    role: "[PLACEHOLDER] Your role",
    placeholder: true,
    caseStudy: { problem: tbd, approach: tbd, implementation: [tbd], challenges: tbd, results: tbd },
  },
  {
    slug: "project-four",
    name: "Project Four",
    tagline: "A data or backend project",
    description: "[PLACEHOLDER] Show off range — APIs, data, or systems work.",
    tint: "honey",
    tech: ["Python", "ASP.NET", "SQL"],
    role: "[PLACEHOLDER] Your role",
    placeholder: true,
    caseStudy: { problem: tbd, approach: tbd, implementation: [tbd], challenges: tbd, results: tbd },
  },
];

export const experience = [
  {
    company: "Melaleuca",
    role: "Software Engineering Intern",
    dates: "[Add dates]",
    tint: "mist" as Tint,
    summary: "Worked on a mobile app development team.",
    points: [
      "Built a dashboard to monitor mobile app versions and release statuses across regions and platforms",
      "Contributed to accessibility improvements and bug fixes",
    ],
    tech: ["React", "JavaScript", "TypeScript", "React Native"],
  },
  {
    company: "Walmart",
    role: "Quality Engineer Intern",
    dates: "[Add dates]",
    tint: "honey" as Tint,
    summary: "Worked on data analysis and quality improvement.",
    points: [
      "Investigated large datasets to identify patterns and root causes",
      "Developed recommendations based on analytical findings",
      "Communicated results to stakeholders",
    ],
    tech: ["Data analysis", "Root-cause analysis", "Stakeholder communication"],
  },
];

export const skills: { category: string; tint: Tint; items: string[] }[] = [
  { category: "Frontend", tint: "blush", items: ["React", "React Native", "TypeScript", "JavaScript", "Tailwind CSS", "HTML & CSS"] },
  { category: "Backend", tint: "mist", items: ["Node.js", "ASP.NET"] },
  { category: "Languages", tint: "mauve", items: ["TypeScript", "JavaScript", "Python", "Swift", "SQL", "C#"] },
  { category: "Databases", tint: "honey", items: ["SQL"] },
  { category: "Tools", tint: "mist", items: ["Git", "GitHub", "VS Code"] },
  { category: "Design & Collab", tint: "blush", items: ["Figma", "UI/UX design", "Accessibility", "Agile teams"] },
];

export const education = {
  school: "Brigham Young University",
  degree: "B.S. Information Systems + Master of Information Systems Management",
  graduation: "Expected April 2027",
  coursework: ["[PLACEHOLDER] Course", "[PLACEHOLDER] Course", "[PLACEHOLDER] Course", "[PLACEHOLDER] Course"],
  highlights: ["[PLACEHOLDER] Academic highlight, award, or club", "[PLACEHOLDER] Academic project"],
};

export const funFacts = [
  { label: "Currently into", value: "[PLACEHOLDER] a hobby", tint: "blush" as Tint },
  { label: "Go-to snack", value: "[PLACEHOLDER]", tint: "sky" as Tint },
  { label: "On repeat", value: "[PLACEHOLDER] a song/album", tint: "mauve" as Tint },
  { label: "Weekend plans", value: "[PLACEHOLDER]", tint: "mist" as Tint },
];

export const polaroids = [
  { caption: "[photo caption]", image: "", tint: "mist" as Tint, rotate: -4 },
  { caption: "[photo caption]", image: "", tint: "blush" as Tint, rotate: 3 },
  { caption: "[photo caption]", image: "", tint: "mauve" as Tint, rotate: -2 },
];

export const tintBg: Record<Tint, string> = {
  mist: "bg-mist",
  blush: "bg-blush",
  mauve: "bg-mauve",
  sky: "bg-sky",
  honey: "bg-honey",
};
