"use client";

import { motion } from "motion/react";
import {
  BrainCircuit,
  Braces,
  Cpu,
  Sigma,
} from "lucide-react";

const focusAreas = [
  {
    number: "01",
    icon: Braces,
    title: "Software & Systems",
    description:
      "Production software, distributed backends, data-intensive systems, APIs, and reliable engineering infrastructure.",
    skills: ["Python", "C++", "C# / .NET", "Distributed Systems"],
  },
  {
    number: "02",
    icon: Cpu,
    title: "HPC & Performance",
    description:
      "Performance-oriented computing across CPU/GPU systems, parallel workloads, profiling, benchmarking, and optimisation.",
    skills: ["CPU / GPU", "Parallel Computing", "Linux", "Profiling"],
  },
  {
    number: "03",
    icon: BrainCircuit,
    title: "AI & Data",
    description:
      "Machine learning and data systems spanning neural networks, retrieval, analytical pipelines, and production AI applications.",
    skills: ["PyTorch", "TensorFlow", "LLMs / RAG", "Data Pipelines"],
  },
  {
    number: "04",
    icon: Sigma,
    title: "Scientific Computing",
    description:
      "Mathematical and computational methods for numerical analysis, probabilistic modelling, optimisation, and simulation.",
    skills: ["Numerical Methods", "Statistics", "Monte Carlo", "Optimisation"],
  },
];

export default function About() {
  return (
    <section className="about-section" id="about">
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
            01 · ABOUT
          </div>

          <div className="section-heading-grid">
            <h2>
              Engineering across
              <span> disciplines.</span>
            </h2>

            <p>
              I work at the intersection of software engineering, applied
              mathematics, high-performance computing, data science, and
              artificial intelligence.
            </p>
          </div>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-statement"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.08 }}
          >
            <p className="about-lead">
              I build computational systems where{" "}
              <strong>performance</strong>, <strong>reliability</strong>, and{" "}
              <strong>technical depth</strong> matter.
            </p>

            <div className="about-body">
              <p>
                My work has ranged from production data and AI platforms to
                CPU/GPU performance engineering, distributed backend systems,
                scientific computing, and embedded engineering.
              </p>

              <p>
                That interdisciplinary background lets me approach engineering
                problems from both the software and mathematical sides:
                understanding not only how a system is implemented, but how it
                behaves, scales, and fails.
              </p>
            </div>

            <div className="about-index">
              <span>PROFILE</span>
              <span>UK / CANADA</span>
            </div>
          </motion.div>

          <div className="focus-grid">
            {focusAreas.map((area, index) => {
              const Icon = area.icon;

              return (
                <motion.article
                  key={area.title}
                  className="focus-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.08,
                  }}
                  whileHover={{ y: -6 }}
                >
                  <div className="focus-card-top">
                    <span className="focus-number">{area.number}</span>

                    <div className="focus-icon">
                      <Icon size={19} strokeWidth={1.5} />
                    </div>
                  </div>

                  <h3>{area.title}</h3>

                  <p>{area.description}</p>

                  <div className="focus-skills">
                    {area.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}