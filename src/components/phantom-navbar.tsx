"use client";

import { motion } from "framer-motion";

const links = [
  { href: "#hero", label: "TAKE YOUR TIME" },
  { href: "#confidants", label: "CONFIDANTS" },
  { href: "#calling", label: "CALLING CARD" },
  { href: "#sources", label: "SOURCES" },
] as const;

const listVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { x: -120, opacity: 0, skewX: -10 },
  show: {
    x: 0,
    opacity: 1,
    skewX: 0,
    transition: {
      type: "spring" as const,
      stiffness: 380,
      damping: 22,
      mass: 0.65,
    },
  },
};

export function PhantomNavbar() {
  return (
    <motion.header
      className="sticky top-0 z-50 border-b border-p5r-red/60 bg-black/85 px-3 py-3 backdrop-blur-md md:px-6"
      initial={{ y: -56, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 320,
        damping: 26,
        delay: 0.05,
      }}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <motion.p
          className="font-display text-xl tracking-[0.2em] text-p5r-red md:text-2xl"
          animate={{
            y: [0, -1.5, 0, 1, 0],
          }}
          transition={{
            duration: 5.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          PHANTOM NAV
        </motion.p>
        <motion.nav
          aria-label="Primary"
          variants={listVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-2 md:flex-row md:items-center md:gap-1 md:[transform:skewX(-5deg)]"
        >
          {links.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              variants={itemVariants}
              className="group relative block overflow-hidden border border-white/15 bg-black px-4 py-2 text-center text-xs font-bold uppercase tracking-widest text-white shadow-[inset_0_0_0_1px_rgba(209,0,0,0.35)] transition-colors hover:border-p5r-red hover:text-p5r-red md:inline-block md:-skew-x-6 md:px-3 md:py-2 md:text-[11px]"
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 0 2px #D10000, 0 12px 28px rgba(209,0,0,0.35)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 md:[transform:skewX(5deg)]">
                {link.label}
              </span>
              <span
                className="pointer-events-none absolute inset-0 bg-gradient-to-r from-p5r-red/25 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
                aria-hidden
              />
            </motion.a>
          ))}
        </motion.nav>
      </div>
    </motion.header>
  );
}
