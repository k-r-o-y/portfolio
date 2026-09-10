"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";

type RevealGroupProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
};

export default function RevealGroup({
  children,
  className,
  stagger = 0.08,
  delay = 0,
}: RevealGroupProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.1,
        margin: "0px 0px -50px 0px",
      }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            delayChildren: delay,
            staggerChildren: stagger,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}