"use client";

import { motion } from "framer-motion";

const sources = [
  { href: "https://persona.atlus.com/p5r/", label: "Atlus — Official Persona 5 Royal" },
  { href: "https://games.sega.com/", label: "Sega — Official Games Store" },
  { href: "https://blog.playstation.com/", label: "PlayStation Blog" },
] as const;

export function SourcesFooter() {
  return (
    <footer
      id="sources"
      className="mx-auto max-w-6xl border-t border-white/15 px-4 py-14 md:px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 260, damping: 28 }}
      >
        <h2 className="font-display text-center text-2xl tracking-[0.25em] text-white/80 md:text-3xl">
          SOURCES
        </h2>
        <ul className="mx-auto mt-8 flex max-w-xl flex-col gap-4 text-center">
          {sources.map((s, i) => (
            <motion.li
              key={s.href}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, type: "spring", stiffness: 280, damping: 24 }}
            >
              <a
                href={s.href}
                className="text-sm uppercase tracking-widest text-white/70 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                {s.label}
              </a>
            </motion.li>
          ))}
        </ul>
        <p className="mt-10 text-center text-xs uppercase tracking-[0.2em] text-white/40">
          Fan site · Not affiliated with Atlus or Sega
        </p>
      </motion.div>
    </footer>
  );
}
