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
      "Advanced study in high-performance and data-intensive computing, combining parallel systems, scientific software, data engineering, and computational research.",
    modules: [
      "High Performance Data Analytics",
      "MPI",
      "Threaded Programming",
      "Data Management",
      "Practical Software Development",
      "Dissertation",
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
      "Interdisciplinary training across mathematics and computer science, with emphasis on numerical methods, probability, statistics, algorithms, modelling, and software development.",
    modules: [
      "Applied Mathematics",
      "Computer Science",
      "Probability",
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
      "Studying conditioning, sensitivity, precision effects, constraint preservation, and numerical failure modes in probabilistic computation.",
    topics: ["Conditioning", "Precision", "Constraints"],
  },
  {
    icon: BookOpen,
    number: "R02",
    title: "Statistical Computing",
    description:
      "Computational statistics and biostatistical analysis using reproducible numerical and data-analysis workflows.",
    topics: ["R", "Statistics", "Biostatistics"],
  },
  {
    icon: GraduationCap,
    number: "R03",
    title: "ML, Simulation & Optimisation",
    description:
      "Research involving predictive modelling, machine learning, Monte Carlo methods, simulation, and optimisation.",
    topics: ["Machine Learning", "Monte Carlo", "Optimisation"],
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
          transition={{ duration: 0.7 }}
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
              Academic work grounded in applied mathematics, computer science,
              high-performance computing, data science, and computational
              research.
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
              <motion.article
                className="education-item"
                key={`${item.degree}-${item.institution}`}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                }}
              >
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

                <p className="education-description">{item.description}</p>

                <div className="education-modules">
                  {item.modules.map((module) => (
                    <span key={module}>{module}</span>
                  ))}
                </div>
              </motion.article>
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
                  <motion.article
                    className="research-card"
                    key={area.number}
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.65,
                      delay: index * 0.08,
                    }}
                  >
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
                  </motion.article>
                );
              })}
            </div>

            <motion.div
              className="research-note"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="research-note-symbol">∑</span>

              <p>
                My research interests centre on computational problems where
                mathematical structure, numerical behaviour, and software
                implementation interact.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}