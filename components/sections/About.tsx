"use client";

import { motion } from "motion/react";
import {
  BrainCircuit,
  Braces,
  Cpu,
  Sigma,
} from "lucide-react";

import Reveal from "@/components/ui/Reveal";
import RevealGroup from "@/components/ui/RevealGroup";
import RevealItem from "@/components/ui/RevealItem";

/* =========================================================
   FOCUS AREAS
   ========================================================= */

const focusAreas = [
  {
    number: "01",
    icon: Braces,
    title: "Software & Systems",
    description:
      "Production software, distributed backends, data-intensive systems, APIs, and reliable engineering infrastructure.",
    skills: [
      "Python",
      "C++",
      "C# / .NET",
      "Distributed Systems",
    ],
  },
  {
    number: "02",
    icon: Cpu,
    title: "HPC & Performance",
    description:
      "Performance-oriented computing across CPU/GPU systems, parallel workloads, profiling, benchmarking, and optimisation.",
    skills: [
      "CPU / GPU",
      "Parallel Computing",
      "Linux",
      "Profiling",
    ],
  },
  {
    number: "03",
    icon: BrainCircuit,
    title: "AI & Data",
    description:
      "Machine learning and data systems spanning neural networks, retrieval, analytical pipelines, and production AI applications.",
    skills: [
      "PyTorch",
      "TensorFlow",
      "LLMs / RAG",
      "Data Pipelines",
    ],
  },
  {
    number: "04",
    icon: Sigma,
    title: "Scientific Computing",
    description:
      "Mathematical and computational methods for numerical analysis, probabilistic modelling, optimisation, and simulation.",
    skills: [
      "Numerical Methods",
      "Statistics",
      "Monte Carlo",
      "Optimisation",
    ],
  },
];

/* =========================================================
   ABOUT
   ========================================================= */

export default function About() {
  return (
    <section
      className="about-section"
      id="about"
      aria-labelledby="about-heading"
    >
      <div className="section-container">
        {/* =================================================
            SECTION HEADING
            ================================================= */}

        <Reveal
          className="section-heading"
          y={24}
          duration={0.7}
        >
          <div className="section-kicker">
            <span
              className="section-kicker-line"
              aria-hidden="true"
            />

            <span>01 · ABOUT</span>
          </div>

          <div className="section-heading-grid">
            <h2 id="about-heading">
              Engineering across
              <span> disciplines.</span>
            </h2>

            <p>
              I work at the intersection of software engineering,
              applied mathematics, high-performance computing,
              data science, and artificial intelligence.
            </p>
          </div>
        </Reveal>

        {/* =================================================
            ABOUT CONTENT
            ================================================= */}

        <div className="about-content">
          {/* ===============================================
              ABOUT STATEMENT
              =============================================== */}

          <Reveal
            className="about-statement"
            y={28}
            delay={0.06}
          >
            <p className="about-lead">
              I build computational systems where{" "}
              <strong>performance</strong>,{" "}
              <strong>reliability</strong>, and{" "}
              <strong>technical depth</strong> matter.
            </p>

            <div className="about-body">
              <p>
                My work has ranged from production data and AI
                platforms to CPU/GPU performance engineering,
                distributed backend systems, scientific computing,
                and embedded engineering.
              </p>

              <p>
                That interdisciplinary background lets me approach
                engineering problems from both the software and
                mathematical sides: understanding not only how a
                system is implemented, but how it behaves, scales,
                and fails.
              </p>
            </div>

            <div
              className="about-index"
              aria-label="Profile locations"
            >
              <span>PROFILE</span>
              <span>UK / CANADA</span>
            </div>
          </Reveal>

          {/* ===============================================
              FOCUS AREAS
              =============================================== */}

          <RevealGroup
            className="focus-grid"
            stagger={0.09}
            delay={0.08}
          >
            {focusAreas.map((area) => {
              const Icon = area.icon;

              return (
                <RevealItem
                  key={area.title}
                  className="focus-card-reveal"
                  y={30}
                >
                  <motion.article
                    className="focus-card"
                    whileHover={{
                      y: -6,
                    }}
                    transition={{
                      duration: 0.22,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {/* =====================================
                        CARD HEADER
                        ===================================== */}

                    <div className="focus-card-top">
                      <span className="focus-number">
                        {area.number}
                      </span>

                      <div
                        className="focus-icon"
                        aria-hidden="true"
                      >
                        <Icon
                          size={19}
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>

                    {/* =====================================
                        CARD CONTENT
                        ===================================== */}

                    <h3>{area.title}</h3>

                    <p>{area.description}</p>

                    {/* =====================================
                        SKILLS
                        ===================================== */}

                    <div
                      className="focus-skills"
                      aria-label={`${area.title} technologies`}
                    >
                      {area.skills.map((skill) => (
                        <span key={skill}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.article>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}