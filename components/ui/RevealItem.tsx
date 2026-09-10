"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";

type RevealItemProps = {
  children: ReactNode;
  className?: string;
  y?: number;
};

export default function RevealItem({
  children,
  className,
  y = 24,
}: RevealItemProps) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: {
          opacity: 0,
          y,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}