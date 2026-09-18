"use client";

import { motion } from "motion/react";
import {
  CircuitBoard,
  Gauge,
} from "lucide-react";

import Reveal from "@/components/ui/Reveal";
import RevealGroup from "@/components/ui/RevealGroup";
import RevealItem from "@/components/ui/RevealItem";

/* =========================================================
   DATA
   ========================================================= */

const projects = [
  {
    number: "01",
    category: "ENGINEERING · TELEMETRY · ANALYSIS",
    title: "Formula Student",
    subtitle:
      "Software Engineering Manager · University of Edinburgh",
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
    number: "02",
    category: "EMBEDDED · HARDWARE / SOFTWARE",
    title: "CalgaryToSpace",
    subtitle:
      "Software Engineering Manager · University of Calgary",
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

/* =========================================================
   TELEMETRY VISUAL
   ========================================================= */

function TelemetryVisual() {
  return (
    <div
      className="project-mini-visual telemetry-visual"
      aria-hidden="true"
    >
      <div className="mini-visual-header">
        <span>TELEMETRY_STREAM</span>

        <Gauge size={15} />
      </div>

      <svg
        viewBox="0 0 500 180"
        preserveAspectRatio="none"
      >
        {/* Primary telemetry signal */}

        <motion.path
          d="M0 112 C25 110 38 68 65 74 C92 80 104 135 132 119 C160 103 170 44 199 57 C228 70 238 128 268 104 C298 80 309 93 335 84 C362 75 373 30 401 47 C430 65 447 117 500 78"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          initial={{
            pathLength: 0,
            opacity: 0,
          }}
          whileInView={{
            pathLength: 1,
            opacity: 1,
          }}
          viewport={{
            once: true,
            amount: 0.35,
          }}
          transition={{
            pathLength: {
              duration: 1.65,
              ease: [0.22, 1, 0.36, 1],
            },
            opacity: {
              duration: 0.35,
            },
          }}
        />

        {/* Secondary telemetry signal */}

        <motion.path
          d="M0 130 C38 125 50 102 84 110 C118 118 140 92 170 99 C203 107 225 143 255 125 C285 107 310 114 338 102 C368 89 393 100 420 91 C448 82 470 99 500 92"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.7"
          opacity="0.35"
          initial={{
            pathLength: 0,
          }}
          whileInView={{
            pathLength: 1,
          }}
          viewport={{
            once: true,
            amount: 0.35,
          }}
          transition={{
            duration: 1.85,
            delay: 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
        />

        {/* Moving sample point */}

        <motion.circle
          r="3"
          fill="currentColor"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: [0, 1, 1, 0],
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 2.1,
            delay: 0.35,
            times: [0, 0.1, 0.85, 1],
          }}
        >
          <animateMotion
            dur="2.1s"
            begin="0.35s"
            fill="freeze"
            path="M0 112 C25 110 38 68 65 74 C92 80 104 135 132 119 C160 103 170 44 199 57 C228 70 238 128 268 104 C298 80 309 93 335 84 C362 75 373 30 401 47 C430 65 447 117 500 78"
          />
        </motion.circle>
      </svg>

      <div className="telemetry-labels">
        <span>RPM</span>
        <span>VELOCITY</span>
        <span>SENSOR_04</span>
      </div>
    </div>
  );
}

/* =========================================================
   EMBEDDED VISUAL
   ========================================================= */

function EmbeddedVisual() {
  return (
    <div
      className="project-mini-visual embedded-visual"
      aria-hidden="true"
    >
      <div className="mini-visual-header">
        <span>ONBOARD_COMPUTE</span>

        <CircuitBoard size={15} />
      </div>

      <div className="circuit-stage">
        {/* Processor */}

        <motion.div
          className="chip"
          initial={{
            opacity: 0,
            scale: 0.88,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span>STM32</span>
          <small>MCU</small>
        </motion.div>

        {/* Circuit nodes */}

        {[
          "node-a",
          "node-b",
          "node-c",
          "node-d",
        ].map((node, index) => (
          <motion.span
            key={node}
            className={`circuit-node ${node}`}
            initial={{
              opacity: 0,
              scale: 0,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.4,
              delay: 0.3 + index * 0.09,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        ))}

        {/* Circuit connections */}

        {[
          "line-a",
          "line-b",
          "line-c",
          "line-d",
        ].map((line, index) => (
          <motion.span
            key={line}
            className={`circuit-line ${line}`}
            initial={{
              scaleX: 0,
              opacity: 0,
            }}
            whileInView={{
              scaleX: 1,
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.65,
              delay: 0.45 + index * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        ))}

        {/* Labels */}

        <motion.span
          className="circuit-label label-a"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.65 }}
        >
          SPI
        </motion.span>

        <motion.span
          className="circuit-label label-b"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.72 }}
        >
          UART
        </motion.span>

        <motion.span
          className="circuit-label label-c"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.79 }}
        >
          SENSOR
        </motion.span>

        <motion.span
          className="circuit-label label-d"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.86 }}
        >
          COMMS
        </motion.span>
      </div>
    </div>
  );
}

/* =========================================================
   SELECTED WORK
   ========================================================= */

export default function SelectedWork() {
  return (
    <section
      className="work-section"
      id="work"
      aria-labelledby="work-heading"
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

            <span>03 · SELECTED WORK</span>
          </div>

          <div className="section-heading-grid">
            <h2 id="work-heading">
              From systems to
              <span> real-world engineering.</span>
            </h2>

            <p>
              Selected engineering work spanning telemetry,
              simulation, embedded computing, sensor systems,
              and hardware-software integration.
            </p>
          </div>
        </Reveal>

        {/* =================================================
            ENGINEERING PROJECTS
            ================================================= */}

        <RevealGroup
          className="secondary-project-grid"
          stagger={0.1}
          delay={0.06}
        >
          {projects.map((project) => (
            <RevealItem
              key={project.title}
              className="secondary-project-reveal"
              y={36}
            >
              <motion.article
                className="secondary-project"
                whileHover={{
                  y: -5,
                }}
                transition={{
                  duration: 0.23,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {/* Project header */}

                <div className="secondary-project-header">
                  <span className="project-number">
                    {project.number}
                  </span>

                  <span className="project-category">
                    {project.category}
                  </span>
                </div>

                {/* Visual */}

                {project.visual === "telemetry" ? (
                  <TelemetryVisual />
                ) : (
                  <EmbeddedVisual />
                )}

                {/* Copy */}

                <div className="secondary-project-copy">
                  <h3>{project.title}</h3>

                  <span className="project-subtitle">
                    {project.subtitle}
                  </span>

                  <p>{project.description}</p>

                  <div
                    className="flagship-tags"
                    aria-label={`${project.title} technologies`}
                  >
                    {project.technologies.map(
                      (technology) => (
                        <span key={technology}>
                          {technology}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </motion.article>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}