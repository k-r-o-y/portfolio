"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import Reveal from "@/components/ui/Reveal";
import RevealGroup from "@/components/ui/RevealGroup";
import RevealItem from "@/components/ui/RevealItem";

/* =========================================================
   EXPERIENCE DATA
   ========================================================= */

const experiences = [
  {
    number: "01",
    company: "EquiRisk AI",
    role: "Software Engineer — Data & AI",
    period: "2025 — 2026",
    type: "AI · DATA · BACKEND",
    summary:
      "Built production software and data systems supporting analytics, reporting, machine learning, and AI-assisted workflows.",
    highlights: [
      "Developed Python-based ingestion, transformation, extraction, validation, and analytical pipelines across structured and unstructured data.",
      "Worked with neural networks, ensemble methods, LLMs, embeddings, RAG, and semantic retrieval for production AI applications.",
      "Built backend services and API integrations with emphasis on validation, evaluation, traceability, and reliable production behaviour.",
    ],
    technologies: [
      "Python",
      "Machine Learning",
      "LLMs",
      "RAG",
      "Data Pipelines",
      "APIs",
    ],
  },
  {
    number: "02",
    company: "AMD Canada",
    role: "Software Engineer — Part-Time",
    period: "2024 — 2025",
    type: "HPC · PERFORMANCE · SYSTEMS",
    summary:
      "Worked on performance-oriented CPU/GPU software in a hardware-aware engineering environment.",
    highlights: [
      "Developed and analysed Python and C++ workloads across CPU/GPU environments using profiling, benchmarking, and systematic performance investigation.",
      "Investigated regressions, bottlenecks, resource behaviour, and software/hardware interactions to improve performance and reliability.",
      "Worked across numerical analysis, signal-processing techniques, compilers, toolchains, embedded systems, and hardware/software debugging.",
    ],
    technologies: [
      "C++",
      "Python",
      "CPU / GPU",
      "Profiling",
      "Compilers",
      "Linux",
    ],
  },
  {
    number: "03",
    company: "Symend",
    role: "Software Engineer — Platform Dataflow",
    period: "2023 — 2024",
    type: "DISTRIBUTED SYSTEMS · DATA",
    summary:
      "Built and supported distributed backend and data-processing systems operating across high-volume production workloads.",
    highlights: [
      "Developed production pipelines and backend services using Python, SQL, C#, and .NET.",
      "Worked with Snowflake, Snowpark, Snowpipe, Streams, Tasks, Kafka, Confluent, SQL/NoSQL systems, and service APIs.",
      "Improved reliability through automated testing, monitoring, observability, data-quality checks, debugging, and root-cause analysis.",
    ],
    technologies: [
      "Python",
      "C# / .NET",
      "SQL",
      "Snowflake",
      "Kafka",
      "Distributed Systems",
    ],
  },
];

/* =========================================================
   EXPERIENCE
   ========================================================= */

export default function Experience() {
  return (
    <section
      className="experience-section"
      id="experience"
      aria-labelledby="experience-heading"
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

            <span>02 · EXPERIENCE</span>
          </div>

          <div className="section-heading-grid">
            <h2 id="experience-heading">
              Building systems in
              <span> production.</span>
            </h2>

            <p>
              Experience across AI and data platforms, CPU/GPU
              performance engineering, and distributed production
              infrastructure.
            </p>
          </div>
        </Reveal>

        {/* =================================================
            EXPERIENCE TIMELINE
            ================================================= */}

        <RevealGroup
          className="experience-list"
          stagger={0.11}
          delay={0.05}
        >
          {experiences.map((experience) => (
            <RevealItem
              key={experience.company}
              className="experience-item-reveal"
              y={34}
            >
              <motion.article
                className="experience-item"
                whileHover={{
                  x: 4,
                }}
                transition={{
                  duration: 0.22,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {/* =========================================
                    TIMELINE INDEX
                    ========================================= */}

                <div
                  className="experience-index"
                  aria-hidden="true"
                >
                  <span>{experience.number}</span>

                  <motion.div
                    className="experience-line"
                    initial={{
                      scaleY: 0,
                      transformOrigin: "top",
                    }}
                    whileInView={{
                      scaleY: 1,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.2,
                    }}
                    transition={{
                      duration: 0.75,
                      delay: 0.15,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />
                </div>

                {/* =========================================
                    COMPANY
                    ========================================= */}

                <div className="experience-company">
                  <span className="experience-type">
                    {experience.type}
                  </span>

                  <h3>{experience.company}</h3>

                  <p className="experience-role">
                    {experience.role}
                  </p>

                  <p className="experience-period">
                    {experience.period}
                  </p>
                </div>

                {/* =========================================
                    EXPERIENCE DETAILS
                    ========================================= */}

                <div className="experience-details">
                  <p className="experience-summary">
                    {experience.summary}
                  </p>

                  <ul>
                    {experience.highlights.map((highlight) => (
                      <li key={highlight}>
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {/* =======================================
                      TECHNOLOGIES
                      ======================================= */}

                  <div
                    className="experience-technologies"
                    aria-label={`${experience.company} technologies`}
                  >
                    {experience.technologies.map(
                      (technology) => (
                        <span key={technology}>
                          {technology}
                        </span>
                      ),
                    )}
                  </div>
                </div>

                {/* =========================================
                    DECORATIVE ARROW
                    ========================================= */}

                <motion.div
                  className="experience-arrow"
                  aria-hidden="true"
                  whileHover={{
                    x: 2,
                    y: -2,
                  }}
                  transition={{
                    duration: 0.18,
                  }}
                >
                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.4}
                  />
                </motion.div>
              </motion.article>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}