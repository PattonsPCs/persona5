"use client";

import { motion } from "framer-motion";

const heading = "THE CALLING CARD";

const rotations = [-2.5, 1.8, -1.2, 2.4, -1.6, 2.1, -2, 1.4, -1.9, 2.2, -1.1, 1.7, -2.3, 1.2, -1.4, 2, -1.8, 1.5];

export function CallingCardSection() {
  return (
    <section
      id="calling"
      aria-labelledby="calling-heading"
      className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24"
    >
      <motion.div
        className="relative overflow-hidden border-y-4 border-p5r-red bg-[#0c0c0c] px-5 py-10 md:px-12 md:py-14"
        initial={{ opacity: 0, scaleX: 0.92 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ type: "spring", stiffness: 260, damping: 26 }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, #fff 0 1px, transparent 1px 3px), repeating-linear-gradient(90deg, #fff 0 1px, transparent 1px 3px)",
            backgroundSize: "100% 4px, 4px 100%",
          }}
          aria-hidden
        />

        <motion.h2
          id="calling-heading"
          className="font-calling relative flex flex-wrap justify-center gap-1 text-center text-2xl leading-tight text-white sm:text-3xl md:gap-2 md:text-4xl"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.045, delayChildren: 0.05 },
            },
          }}
        >
          {heading.split("").map((ch, i) => (
            <motion.span
              key={`${ch}-${i}`}
              className="inline-block bg-white px-1 py-0.5 text-black shadow-[3px_3px_0_#000]"
              style={{
                transform: `rotate(${rotations[i % rotations.length]}deg)`,
              }}
              variants={{
                hidden: { opacity: 0, y: 18, scale: 0.85 },
                show: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { type: "spring", stiffness: 400, damping: 18 },
                },
              }}
            >
              {ch === " " ? "\u00A0" : ch}
            </motion.span>
          ))}
        </motion.h2>

        <motion.p
          className="relative mx-auto mt-10 max-w-3xl text-center text-base leading-relaxed text-white/90 md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, type: "spring", stiffness: 220, damping: 22 }}
        >
          I chose this game because I resonate with the concept of being the change you want to
          see in the world. Also, the aura farming is unmatched.
        </motion.p>
      </motion.div>
    </section>
  );
}
