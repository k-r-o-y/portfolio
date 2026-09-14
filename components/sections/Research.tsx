"use client";

import { motion } from "motion/react";
import {
  BookOpen,
  GraduationCap,
  Microscope,
} from "lucide-react";

const education = [
  {
    number: "01",
    degree: "MSc Informatics",
    specialization: "High Performance Computing with Data Science",
    institution: "University of Edinburgh",
    school: "School of Informatics · EPCC",
    period: "2025 — 2026",
    description:
      "Advanced study in high-performance and data-intensive computing, combining parallel systems, scientific software, numerical computing, data engineering, and computational research.",
    modules: [
      "High Performance Data Analytics",
      "MPI",
      "Threaded Programming",
      "Data Management",
      "Practical Software Development",
      "Scientific Computing",
    ],
  },
  {
    number: "02",
    degree: "BSc",
    specialization: "Applied Mathematics & Computer Science",
    institution: "University of Calgary",
    school: "Faculty of Science",
    period: "2019 — 2025",
    description:
      "Interdisciplinary training across mathematics and computer science, with emphasis on numerical methods, probability, statistics, algorithms, modelling, machine learning, and scientific software development.",
    modules: [
      "Applied Mathematics",
      "Computer Science",
      "Probability & Statistics",
      "Numerical Methods",
      "Algorithms",
      "Scientific Computing",
    ],
  },
];

const researchAreas = [
  {
    icon: Microscope,
    number: "R01",
    title: "Numerical Stability",
    description:
      "Investigating conditioning, sensitivity, floating-point precision, constraint preservation, and numerical failure modes in constrained probabilistic computation.",
    topics: [
      "Conditioning",
      "Sensitivity",
      "Floating Point",
      "Constraints",
    ],
  },
  {
    icon: BookOpen,
    number: "R02",
    title: "Statistical & Biostatistical Modelling",
    description:
      "Studied hypertension risk using multivariable logistic regression, interaction effects, model selection, diagnostics, and tree-based machine-learning models across a structured clinical dataset.",
    topics: [
      "Logistic Regression",
      "Random Forest",
      "ROC / AUC",
      "Biostatistics",
    ],
  },
  {
    icon: GraduationCap,
    number: "R03",
    title: "Monte Carlo & Statistical Computing",
    description:
      "Investigated exact and asymptotic statistical behaviour through large-scale Monte Carlo experiments, convergence analysis, simulation, and empirical validation of theoretical results.",
    topics: [
      "Monte Carlo",
      "Simulation",
      "Convergence",
      "Statistical Theory",
    ],
  },
];

export default function Research() {
  return (
    <section className="research-section" id="research">
      <div className="section-container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="section-kicker">
            <span className="section-kicker-line" />
            04 · RESEARCH & EDUCATION
          </div>

          <div className="section-heading-grid">
            <h2>
              Mathematics meets
              <span> computation.</span>
            </h2>

            <p>
              Academic work spanning numerical computing, statistical
              modelling, machine learning, simulation, and high-performance
              scientific software.
            </p>
          </div>
        </motion.div>

        <div className="research-layout">
          <div className="education-column">
            <div className="research-column-label">
              <span>EDUCATION</span>
              <span>01 — 02</span>
            </div>

            {education.map((item, index) => (
              <motion.div
                className="education-item-reveal"
                key={`${item.degree}-${item.institution}`}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <article className="education-item">
                  <div className="education-top">
                    <span>{item.number}</span>
                    <span>{item.period}</span>
                  </div>

                  <h3>{item.degree}</h3>

                  <p className="education-specialization">
                    {item.specialization}
                  </p>

                  <div className="education-institution">
                    <strong>{item.institution}</strong>
                    <span>{item.school}</span>
                  </div>

                  <p className="education-description">
                    {item.description}
                  </p>

                  <div className="education-modules">
                    {item.modules.map((module) => (
                      <span key={module}>{module}</span>
                    ))}
                  </div>
                </article>
              </motion.div>
            ))}
          </div>

          <div className="research-column">
            <div className="research-column-label">
              <span>RESEARCH FOCUS</span>
              <span>R01 — R03</span>
            </div>

            <div className="research-cards">
              {researchAreas.map((area, index) => {
                const Icon = area.icon;

                return (
                  <motion.div
                    className="research-card-reveal"
                    key={area.number}
                    initial={{ opacity: 0, x: 28 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.65,
                      delay: index * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <article className="research-card">
                      <div className="research-card-index">
                        <span>{area.number}</span>

                        <div>
                          <Icon size={17} strokeWidth={1.4} />
                        </div>
                      </div>

                      <h3>{area.title}</h3>

                      <p>{area.description}</p>

                      <div className="research-topics">
                        {area.topics.map((topic) => (
                          <span key={topic}>{topic}</span>
                        ))}
                      </div>
                    </article>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              className="research-note"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.75,
                delay: 0.18,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <span className="research-note-symbol">∑</span>

              <p>
                My research focuses on computational problems where
                mathematical structure, statistical reasoning, numerical
                behaviour, and efficient software implementation intersect.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}