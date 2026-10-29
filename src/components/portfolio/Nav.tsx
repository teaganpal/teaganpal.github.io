import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Sparkle } from "./bits";

const links = [
  ["About", "about"],
  ["Projects", "projects"],
  ["Experience", "experience"],
  ["Skills", "skills"],
  ["Contact", "contact"],
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-background/85 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3" aria-label="Main">
        <Link to="/" className="group flex items-center gap-2 font-serif text-xl font-semibold">
          <Sparkle className="h-5 w-5 text-sky transition-transform duration-500 group-hover:rotate-180" />
          teagan<span className="text-primary">.</span>
        </Link>
        <ul className="hidden items-center gap-7 text-sm font-medium md:flex">
          {links.map(([l, id]) => (
            <li key={id}><a href={`/#${id}`} className="link-ink pb-0.5">{l}</a></li>
          ))}
        </ul>
        <button className="rounded-full p-2 md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <ul className="border-t border-ink/10 px-5 py-3 md:hidden">
          {links.map(([l, id]) => (
            <li key={id}><a href={`/#${id}`} onClick={() => setOpen(false)} className="block py-2 font-serif text-2xl">{l}</a></li>
          ))}
        </ul>
      )}
    </header>
  );
}
