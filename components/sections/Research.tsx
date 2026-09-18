"use client";

import { motion } from "motion/react";
import {
  ArrowUpRight,
  BookOpen,
  FileText,
  GraduationCap,
  Microscope,
  ShieldCheck,
  Sigma,
  TrendingUp,
} from "lucide-react";

/* =========================================================
   EDUCATION
   ========================================================= */

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

/* =========================================================
   RESEARCH FOCUS
   ========================================================= */

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
      "Statistical modelling and biostatistical analysis using regression, model diagnostics, predictive methods, and reproducible computational workflows.",
    topics: [
      "Regression",
      "Model Diagnostics",
      "Machine Learning",
      "Biostatistics",
    ],
  },
  {
    icon: GraduationCap,
    number: "R03",
    title: "Monte Carlo & Statistical Computing",
    description:
      "Investigating exact and asymptotic statistical behaviour through large-scale Monte Carlo experiments, convergence analysis, simulation, and empirical validation of theoretical results.",
    topics: [
      "Monte Carlo",
      "Simulation",
      "Convergence",
      "Statistical Theory",
    ],
  },
];

/* =========================================================
   SELECTED ACADEMIC RESEARCH
   ========================================================= */

const researchProjects = [
  {
    number: "P01",
    type: "MSc Dissertation",
    year: "2026",
    icon: Microscope,
    title:
      "Investigating the Numerical Stability of Polynomial Basis Representations in Constrained Probabilistic Inference",
    institution:
      "University of Edinburgh · School of Informatics / EPCC",
    description:
      "A computational investigation of numerical stability in polynomial representations used for constrained probabilistic inference, examining how basis choice, conditioning, floating-point precision, perturbations, and constraint handling affect downstream computation.",
    highlights: [
      "Monomial, Legendre & Chebyshev bases",
      "Conditioning & sensitivity",
      "Reduced-precision experiments",
      "Constrained probabilistic inference",
    ],
    technologies: [
      "Python",
      "NumPy",
      "pandas",
      "Numerical Analysis",
      "Probabilistic Inference",
    ],
    pdf: "/research/numerical-stability-dissertation.pdf",
    pdfLabel: "Read dissertation",
  },
  {
    number: "P02",
    type: "Collaborative Research Project",
    year: "2024",
    icon: ShieldCheck,
    title:
      "Foundations and Analysis of the CRYSTALS-Kyber Algorithm",
    institution:
      "University of Calgary · Applied Mathematics",
    description:
      "A mathematical study of the CRYSTALS-Kyber post-quantum cryptographic scheme, examining its lattice-based foundations, Module-LWE construction, core algorithmic stages, and security considerations.",
    highlights: [
      "Post-quantum cryptography",
      "Module-LWE",
      "Key generation & encapsulation",
      "Mathematical cryptography",
    ],
    technologies: [
      "Applied Mathematics",
      "Cryptography",
      "Lattices",
      "Algorithms",
    ],
    pdf: "/research/crystals-kyber.pdf",
    pdfLabel: "View PDF",
  },
  {
    number: "P03",
    type: "Mathematical Statistics Project",
    year: "2024",
    icon: Sigma,
    title:
      "Asymptotic and Exact Sampling Distributions of S²",
    institution:
      "University of Calgary · Mathematical Statistics",
    description:
      "A simulation-driven investigation of the exact and asymptotic behaviour of sample variance, connecting probability theory with large-scale Monte Carlo experiments and empirical validation.",
    highlights: [
      "Exact sampling distributions",
      "Central Limit Theorem",
      "WLLN & Slutsky's theorem",
      "Monte Carlo simulation",
    ],
    technologies: [
      "R",
      "Statistics",
      "Probability",
      "Monte Carlo",
      "Simulation",
    ],
    pdf: "/research/sampling-distributions.pdf",
    pdfLabel: "View PDF",
  },
  {
    number: "P04",
    type: "Collaborative Biostatistics Project",
    year: "2024",
    icon: TrendingUp,
    title:
      "Longitudinal Data Analysis Involving Binary Outcomes",
    institution:
      "University of Calgary · Statistics / Biostatistics",
    description:
      "A statistical investigation of longitudinal binary outcomes using graphical analysis, statistical modelling, and reproducible computational methods for repeated-measures data.",
    highlights: [
      "Longitudinal data",
      "Binary outcomes",
      "Statistical modelling",
      "Repeated measures",
    ],
    technologies: [
      "R",
      "Biostatistics",
      "Statistical Modelling",
      "Data Analysis",
    ],
    pdf: "/research/longitudinal-data-analysis.pdf",
    pdfLabel: "View PDF",
  },
];

/* =========================================================
   COMPONENT
   ========================================================= */

export default function Research() {
  return (
    <section
      className="research-section"
      id="research"
      aria-labelledby="research-heading"
    >
      <div className="section-container">
        {/* =====================================================
            SECTION HEADING
            ===================================================== */}

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
            <span
              className="section-kicker-line"
              aria-hidden="true"
            />
            04 · RESEARCH & EDUCATION
          </div>

          <div className="section-heading-grid">
            <h2 id="research-heading">
              Mathematics meets
              <span> computation.</span>
            </h2>

            <p>
              Academic work spanning numerical computing,
              statistical modelling, machine learning,
              simulation, and high-performance scientific
              software.
            </p>
          </div>
        </motion.div>

        {/* =====================================================
            EDUCATION + RESEARCH FOCUS
            ===================================================== */}

        <div className="research-layout">
          {/* ===================================================
              EDUCATION
              =================================================== */}

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

          {/* ===================================================
              RESEARCH FOCUS
              =================================================== */}

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
                          <Icon
                            size={17}
                            strokeWidth={1.4}
                            aria-hidden="true"
                          />
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
              <span
                className="research-note-symbol"
                aria-hidden="true"
              >
                ∑
              </span>

              <p>
                My research focuses on computational problems
                where mathematical structure, statistical
                reasoning, numerical behaviour, and efficient
                software implementation intersect.
              </p>
            </motion.div>
          </div>
        </div>

        {/* =====================================================
            SELECTED ACADEMIC RESEARCH
            ===================================================== */}

        <div className="research-projects">
          <motion.div
            className="research-projects-heading"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="research-column-label">
              <span>SELECTED ACADEMIC RESEARCH</span>
              <span>P01 — P04</span>
            </div>

            <div className="research-projects-intro">
              <h3>
                Selected academic
                <span> research.</span>
              </h3>

              <p>
                Research spanning numerical analysis,
                probabilistic inference, post-quantum
                cryptography, mathematical statistics,
                Monte Carlo simulation, and biostatistics.
                Full research documents are available below.
              </p>
            </div>
          </motion.div>

          {/* ===================================================
              RESEARCH PROJECT GRID
              =================================================== */}

          <div className="research-project-grid">
            {researchProjects.map((project, index) => {
              const Icon = project.icon;

              return (
                <motion.article
                  className="research-project-card"
                  key={project.number}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.16 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {/* Project number + year */}

                  <div className="research-project-card-top">
                    <span>{project.number}</span>
                    <span>{project.year}</span>
                  </div>

                  {/* Icon */}

                  <div className="research-project-card-icon">
                    <Icon
                      size={19}
                      strokeWidth={1.35}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Project type */}

                  <p className="research-project-card-type">
                    {project.type}
                  </p>

                  {/* Title */}

                  <h3>{project.title}</h3>

                  {/* Institution */}

                  <p className="research-project-institution">
                    {project.institution}
                  </p>

                  {/* Description */}

                  <p className="research-project-card-description">
                    {project.description}
                  </p>

                  {/* Research highlights */}

                  <div className="research-project-card-highlights">
                    {project.highlights.map((highlight) => (
                      <span key={highlight}>{highlight}</span>
                    ))}
                  </div>

                  {/* Technologies / methods */}

                  <div className="research-project-tags">
                    {project.technologies.map((technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* PDF */}

                  <div className="research-project-card-footer">
                    <span>FULL RESEARCH DOCUMENT</span>

                    <a
                      className="research-pdf-link"
                      href={project.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.pdfLabel}: ${project.title}`}
                    >
                      <FileText
                        size={14}
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />

                      {project.pdfLabel}

                      <ArrowUpRight
                        size={13}
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </motion.article>
              );
            })}
          </div>

          {/* ===================================================
              RESEARCH ARCHIVE FOOTNOTE
              =================================================== */}

          <motion.div
            className="research-archive-note"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span>04 DOCUMENTS</span>

            <p>
              Full research reports and presentation material
              are provided for readers interested in the
              underlying mathematics, methodology, experiments,
              and analysis.
            </p>

            <span>PDF ARCHIVE ↗</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}