"use client";

import { motion } from "motion/react";
import {
  ArrowDown,
  ArrowRight,
  Download,
  MapPin,
} from "lucide-react";
import ComputationalVisual from "@/components/ui/ComputationalVisual";

const disciplines = [
  "Applied Mathematics",
  "High-Performance Computing",
  "Data Science",
  "Artificial Intelligence",
];

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-background">
        <div className="hero-grid" />
        <div className="hero-radial hero-radial-one" />
        <div className="hero-radial hero-radial-two" />
      </div>

      <div className="hero-container">
        <div className="hero-copy">
          <motion.div
            className="eyebrow"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.15 }}
          >
            <span className="eyebrow-line" />
            SOFTWARE · SYSTEMS · COMPUTATION
          </motion.div>

          <div className="hero-title-wrap">
            <motion.h1
              initial={{ opacity: 0, y: 45 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.85,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <span>KANISHKA</span>
              <span className="hero-name-accent">ROY</span>
            </motion.h1>

            <motion.div
              className="title-index"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              01
            </motion.div>
          </div>

          <motion.p
            className="hero-role"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.48 }}
          >
            Software Engineer
          </motion.p>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.58 }}
          >
            Building reliable, high-performance computational systems across
            software, data, AI, and scientific computing.
          </motion.p>

          <motion.div
            className="discipline-list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            {disciplines.map((discipline, index) => (
              <motion.div
                key={discipline}
                className="discipline"
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.72 + index * 0.08 }}
              >
                <span>0{index + 1}</span>
                {discipline}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.95 }}
          >
            <a className="button button-primary" href="#work">
              Explore my work
              <ArrowRight size={17} />
            </a>

            <a
  className="button button-secondary"
  href="/kanishka-roy-cv.pdf"
  target="_blank"
  rel="noreferrer"
>
  <Download size={16} />
  View CV
</a>
          </motion.div>

          <motion.div
            className="hero-meta"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.1 }}
          >
            <div className="availability">
              <span className="availability-dot">
                <span />
              </span>
              Open to opportunities
            </div>

            <div className="location">
              <MapPin size={14} />
              United Kingdom / Canada
            </div>
          </motion.div>
        </div>

        <div className="hero-visual-column">
          <ComputationalVisual />

          <motion.div
            className="visual-caption"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            <span>INTERDISCIPLINARY ENGINEERING</span>
            <span>2026</span>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        aria-label="Scroll to about section"
      >
        <span>SCROLL</span>

        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.7, repeat: Infinity }}
        >
          <ArrowDown size={15} />
        </motion.div>
      </motion.a>
    </section>
  );
}