"use client";

import { motion } from "motion/react";
import {
  ArrowUpRight,
  Binary,
  CircuitBoard,
  Gauge,
} from "lucide-react";

const benchmarkBars = [
  42, 57, 48, 71, 62, 82, 67, 91, 76, 58, 73, 88, 64, 79, 93, 69,
];

const projects = [
  {
    number: "02",
    category: "ENGINEERING · TELEMETRY · ANALYSIS",
    title: "Formula Student",
    subtitle: "Software Engineering Manager · University of Edinburgh",
    description:
      "Engineering software for telemetry, high-frequency sensor acquisition, data processing, simulation, and vehicle-performance analysis in a multidisciplinary motorsport environment.",
    technologies: [
      "Python",
      "MATLAB",
      "Telemetry",
      "Signal Processing",
      "Simulation",
    ],
    visual: "telemetry",
  },
  {
    number: "03",
    category: "EMBEDDED · HARDWARE / SOFTWARE",
    title: "CalgaryToSpace",
    subtitle: "Software Engineering Manager · University of Calgary",
    description:
      "Embedded and onboard computing systems spanning telemetry, sensors, communications, hardware interfaces, and low-level software for student space engineering.",
    technologies: [
      "C / C++",
      "ARM",
      "STM32",
      "Embedded Systems",
      "Hardware Debugging",
    ],
    visual: "embedded",
  },
];

function DissertationVisual() {
  return (
    <div className="dissertation-visual" aria-hidden="true">
      <div className="benchmark-header">
        <span>NUMERICAL_STABILITY.EXP</span>
        <span>FLOAT64</span>
      </div>

      <div className="benchmark-chart">
        <div className="chart-axis">
          <span>1.0</span>
          <span>0.5</span>
          <span>0.0</span>
        </div>

        <div className="chart-bars">
          {benchmarkBars.map((height, index) => (
            <motion.span
              key={`${height}-${index}`}
              initial={{ height: 0, opacity: 0 }}
              whileInView={{
                height: `${height}%`,
                opacity: index === 13 ? 1 : 0.58,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.75,
                delay: index * 0.035,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={index === 13 ? "benchmark-bar-active" : ""}
            />
          ))}
        </div>

        <div className="chart-grid-lines">
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>

      <div className="benchmark-footer">
        <span>REPRESENTATION / CONDITIONING</span>
        <span>n ≈ 600</span>
      </div>
    </div>
  );
}

function TelemetryVisual() {
  return (
    <div className="project-mini-visual telemetry-visual" aria-hidden="true">
      <div className="mini-visual-header">
        <span>TELEMETRY_STREAM</span>
        <Gauge size={15} />
      </div>

      <svg viewBox="0 0 500 180" preserveAspectRatio="none">
        <motion.path
          d="M0 112 C25 110 38 68 65 74 C92 80 104 135 132 119 C160 103 170 44 199 57 C228 70 238 128 268 104 C298 80 309 93 335 84 C362 75 373 30 401 47 C430 65 447 117 500 78"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6 }}
        />

        <motion.path
          d="M0 130 C38 125 50 102 84 110 C118 118 140 92 170 99 C203 107 225 143 255 125 C285 107 310 114 338 102 C368 89 393 100 420 91 C448 82 470 99 500 92"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.7"
          opacity="0.35"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, delay: 0.15 }}
        />
      </svg>

      <div className="telemetry-labels">
        <span>RPM</span>
        <span>VELOCITY</span>
        <span>SENSOR_04</span>
      </div>
    </div>
  );
}

function EmbeddedVisual() {
  return (
    <div className="project-mini-visual embedded-visual" aria-hidden="true">
      <div className="mini-visual-header">
        <span>ONBOARD_COMPUTE</span>
        <CircuitBoard size={15} />
      </div>

      <div className="circuit-stage">
        <div className="chip">
          <span>STM32</span>
          <small>MCU</small>
        </div>

        <span className="circuit-node node-a" />
        <span className="circuit-node node-b" />
        <span className="circuit-node node-c" />
        <span className="circuit-node node-d" />

        <span className="circuit-line line-a" />
        <span className="circuit-line line-b" />
        <span className="circuit-line line-c" />
        <span className="circuit-line line-d" />

        <span className="circuit-label label-a">SPI</span>
        <span className="circuit-label label-b">UART</span>
        <span className="circuit-label label-c">SENSOR</span>
        <span className="circuit-label label-d">COMMS</span>
      </div>
    </div>
  );
}

export default function SelectedWork() {
  return (
    <section className="work-section" id="work">
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
            03 · SELECTED WORK
          </div>

          <div className="section-heading-grid">
            <h2>
              From theory to
              <span> engineered systems.</span>
            </h2>

            <p>
              Selected research and engineering work spanning numerical
              computing, telemetry and embedded systems.
            </p>
          </div>
        </motion.div>

        <motion.article
          className="flagship-project"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flagship-topline">
            <div>
              <span className="project-number">01</span>
              <span className="project-category">
                RESEARCH · NUMERICAL COMPUTING
              </span>
            </div>

            <Binary size={19} strokeWidth={1.4} />
          </div>

          <div className="flagship-grid">
            <div className="flagship-copy">
              <span className="flagship-label">MSc DISSERTATION · 2026</span>

              <h3>
                Investigating the Numerical Stability of Polynomial Basis
                Representations in Constrained Probabilistic Inference
              </h3>

              <p>
                A reproducible numerical study of polynomial representations
                under constrained probabilistic inference, examining accuracy,
                conditioning, sensitivity, runtime, stability and constraint
                preservation across controlled benchmark families.
              </p>

              <div className="flagship-tags">
                <span>Python</span>
                <span>NumPy</span>
                <span>pandas</span>
                <span>Numerical Analysis</span>
                <span>Monte Carlo</span>
              </div>
            </div>

            <DissertationVisual />
          </div>

          <div className="project-metrics">
            <div>
              <strong>≈600</strong>
              <span>FINITE BENCHMARK RECORDS</span>
            </div>

            <div>
              <strong>32 → 64</strong>
              <span>PRECISION ANALYSIS</span>
            </div>

            <div>
              <strong>04</strong>
              <span>CORE EVALUATION AXES</span>
            </div>

            <div>
              <strong>∞</strong>
              <span>CONDITIONING STRESS</span>
            </div>
          </div>

          <div className="flagship-footer">
            <span>
              NUMERICAL STABILITY · CONDITIONING · SENSITIVITY · CONSTRAINTS
            </span>

            <div className="project-detail-hint">
              Research case study
              <ArrowUpRight size={15} />
            </div>
          </div>
        </motion.article>

        <div className="secondary-project-grid">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="secondary-project"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
              }}
            >
              <div className="secondary-project-header">
                <span className="project-number">{project.number}</span>
                <span className="project-category">{project.category}</span>
              </div>

              {project.visual === "telemetry" ? (
                <TelemetryVisual />
              ) : (
                <EmbeddedVisual />
              )}

              <div className="secondary-project-copy">
                <h3>{project.title}</h3>
                <span className="project-subtitle">{project.subtitle}</span>

                <p>{project.description}</p>

                <div className="flagship-tags">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}