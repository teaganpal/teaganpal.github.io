import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Sparkle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={cn("h-6 w-6", className)} fill="currentColor">
      <path d="M12 1c.6 5.2 2.8 8.4 11 11-8.2 2.6-10.4 5.8-11 11-.6-5.2-2.8-8.4-11-11 8.2-2.6 10.4-5.8 11-11z" />
    </svg>
  );
}

export function Squiggle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 40" aria-hidden className={cn("h-10 w-28", className)} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <path d="M4 30 C 30 4, 50 4, 60 20 S 90 38, 108 12" />
      <path d="M100 6 L109 12 L102 20" />
    </svg>
  );
}

export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({ kicker, children, note }: { kicker: string; children: ReactNode; note?: string }) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <p className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
        <Sparkle className="h-3.5 w-3.5 text-sky" /> {kicker}
      </p>
      <div className="relative inline-block">
        <h2 className="text-4xl font-medium leading-[1.05] md:text-6xl">{children}</h2>
        {note && (
          <span className="absolute -top-8 right-0 hidden rotate-6 font-hand text-2xl text-primary md:block">
            {note}
          </span>
        )}
      </div>
    </Reveal>
  );
}

export function Chip({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn("inline-flex items-center rounded-full border border-ink/15 bg-paper px-3 py-1 text-xs font-medium", className)}>
      {children}
    </span>
  );
}

export function PhotoPlaceholder({ label, className }: { label: string; className?: string }) {
  return (
    <div className={cn("flex h-full w-full flex-col items-center justify-center gap-1 border-2 border-dashed border-ink/20 text-center", className)}>
      <Sparkle className="h-5 w-5 text-ink/30" />
      <span className="font-hand text-xl text-ink/50">{label}</span>
    </div>
  );
}

export function Github({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="currentColor">
      <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5z" />
    </svg>
  );
}

export function Linkedin({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="currentColor">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}
