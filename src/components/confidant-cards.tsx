"use client";

import { motion } from "framer-motion";
import { confidants } from "@/lib/confidants";

const gridVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 36, scale: 0.92, skewX: -4 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    skewX: 0,
    transition: { type: "spring" as const, stiffness: 320, damping: 22 },
  },
};

export function ConfidantCards() {
  return (
    <section
      id="confidants"
      aria-labelledby="confidants-heading"
      className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20"
    >
      <motion.div
        className="mb-10"
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ type: "spring", stiffness: 280, damping: 24 }}
      >
        <h2
          id="confidants-heading"
          className="font-display animate-float-slow text-center text-4xl tracking-[0.12em] text-p5r-red md:text-5xl"
        >
          CONFIDANTS
        </h2>
      </motion.div>

      <motion.ul
        className="grid list-none grid-cols-1 gap-6 p-0 sm:grid-cols-2 lg:grid-cols-3"
        variants={gridVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
      >
        {confidants.map((c) => (
          <motion.li key={c.id} variants={cardVariants} className="p-0">
            <motion.article
              className="group relative h-full border border-white/20 bg-black/90 p-5 shadow-[inset_0_0_0_1px_rgba(209,0,0,0.4)] outline outline-1 outline-transparent transition-[outline-color] md:[transform:skewX(-4deg)]"
              whileHover={{
                scale: 1.045,
                rotate: -0.6,
                boxShadow:
                  "0 0 0 2px #D10000, 0 22px 48px rgba(209,0,0,0.55), 0 0 80px rgba(209,0,0,0.25)",
                zIndex: 5,
              }}
              transition={{ type: "spring", stiffness: 420, damping: 18 }}
              style={{ transformOrigin: "center" }}
            >
              <div className="md:[transform:skewX(4deg)]">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-p5r-red">
                  {c.tag}
                </p>
                <h3 className="font-display mt-2 text-3xl tracking-wide text-white">
                  {c.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/80">{c.role}</p>
                <div
                  className="pointer-events-none absolute -right-1 -top-1 h-10 w-10 border-r-2 border-t-2 border-p5r-red opacity-60"
                  aria-hidden
                />
              </div>
            </motion.article>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
