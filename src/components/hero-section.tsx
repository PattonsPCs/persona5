"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const heroTitle = "PERSONA 5 ROYAL";

const letterContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.04, delayChildren: 0.15 },
  },
};

const letterItem = {
  hidden: { y: 48, opacity: 0, rotateX: -70 },
  show: {
    y: 0,
    opacity: 1,
    rotateX: 0,
    transition: { type: "spring" as const, stiffness: 400, damping: 18 },
  },
};

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6 md:pb-24 md:pt-14"
    >
      <div className="p5r-jagged border border-p5r-red/70 bg-black/80 p5r-skew p-6 shadow-[0_0_60px_rgba(209,0,0,0.25)] md:p-10 md:[transform:skewX(-5deg)]">
        <div className="md:[transform:skewX(5deg)]">
          <motion.h1
            id="hero-title"
            className="font-display text-center text-5xl leading-none tracking-wide text-white drop-shadow-[4px_4px_0_#000] sm:text-6xl md:text-8xl"
            variants={letterContainer}
            initial="hidden"
            animate="show"
          >
            {heroTitle.split("").map((char, i) => (
              <motion.span
                key={`${char}-${i}`}
                variants={letterItem}
                className="inline-block"
                style={{ perspective: 600 }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            className="mt-4 text-center text-sm uppercase tracking-[0.35em] text-white/90 md:text-base"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, type: "spring", stiffness: 260, damping: 22 }}
          >
            Developed by Atlus | Published by Sega.
          </motion.p>

          <motion.div
            className="relative mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 md:gap-5"
            initial={{ opacity: 0, scale: 0.96, rotate: -0.5 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0,
              y: [0, -3, 0],
            }}
            transition={{
              opacity: { delay: 0.35, duration: 0.45 },
              scale: { delay: 0.35, type: "spring", stiffness: 200, damping: 20 },
              rotate: { delay: 0.35, type: "spring", stiffness: 200, damping: 20 },
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <motion.figure
              className="m-0"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.45, type: "spring", stiffness: 260, damping: 22 }}
            >
              <div
                className="relative overflow-hidden border-4 border-p5r-red bg-black"
                style={{
                  clipPath:
                    "polygon(2% 6%, 8% 0%, 92% 0%, 98% 8%, 100% 88%, 94% 100%, 6% 100%, 0% 90%)",
                }}
              >
                <Image
                  src="/1.jpg"
                  alt="Persona 5 Royal official-style key art: the Phantom Thieves on red and black artwork. © Atlus; published by Sega."
                  width={1920}
                  height={1080}
                  priority
                  className="h-auto w-full object-cover contrast-[1.08] saturate-[1.05]"
                  sizes="(max-width: 768px) 100vw, 45vw"
                />
                <div
                  className="pointer-events-none absolute inset-0 mix-blend-multiply"
                  style={{
                    background:
                      "linear-gradient(120deg, rgba(0,0,0,0.5) 0%, transparent 42%, rgba(209,0,0,0.22) 100%)",
                  }}
                  aria-hidden
                />
              </div>
              <figcaption className="mt-2 text-center text-xs text-white/70">
                Key art © Atlus; published by Sega.
              </figcaption>
            </motion.figure>

            <motion.figure
              className="m-0"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.55, type: "spring", stiffness: 260, damping: 22 }}
            >
              <div
                className="relative overflow-hidden border-4 border-p5r-red bg-black"
                style={{
                  clipPath:
                    "polygon(4% 0%, 100% 0%, 100% 92%, 96% 100%, 0% 100%, 0% 8%)",
                }}
              >
                <Image
                  src="/Persona-5-Royal_Review-Capture_06.png"
                  alt="Persona 5 Royal in-game scene from a review capture: Tokyo street and UI. © Atlus; published by Sega."
                  width={1920}
                  height={1080}
                  className="h-auto w-full object-cover contrast-[1.05] saturate-[1.08]"
                  sizes="(max-width: 768px) 100vw, 45vw"
                />
                <div
                  className="pointer-events-none absolute inset-0 mix-blend-multiply"
                  style={{
                    background:
                      "linear-gradient(210deg, rgba(209,0,0,0.2) 0%, transparent 45%, rgba(0,0,0,0.45) 100%)",
                  }}
                  aria-hidden
                />
              </div>
              <figcaption className="mt-2 text-center text-xs text-white/70">
                In-game capture © Atlus; published by Sega.
              </figcaption>
            </motion.figure>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
