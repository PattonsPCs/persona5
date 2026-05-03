"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const pageMotion = {
  initial: {
    opacity: 0,
    x: 64,
    skewX: -3,
    filter: "blur(8px)",
  },
  animate: {
    opacity: 1,
    x: 0,
    skewX: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring" as const,
      stiffness: 400,
      damping: 26,
      mass: 0.82,
    },
  },
  exit: {
    opacity: 0,
    x: -48,
    skewX: 4,
    scale: 0.985,
    filter: "blur(6px)",
    transition: { duration: 0.2, ease: "easeIn" as const },
  },
};

export function MotionProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        className="relative z-10"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageMotion}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
