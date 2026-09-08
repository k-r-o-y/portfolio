"use client";

import { motion } from "motion/react";

const nodes = [
  { x: 89, y: 110, r: 4 },
  { x: 191, y: 68, r: 5 },
  { x: 305, y: 101, r: 4 },
  { x: 392, y: 180, r: 5 },
  { x: 327, y: 276, r: 4 },
  { x: 210, y: 320, r: 5 },
  { x: 102, y: 270, r: 4 },
  { x: 206, y: 186, r: 7 },
  { x: 302, y: 194, r: 6 },
  { x: 150, y: 226, r: 4 },
  { x: 254, y: 260, r: 4 },
];

const edges = [
  [0, 1],
  [0, 7],
  [0, 9],
  [1, 2],
  [1, 7],
  [2, 3],
  [2, 8],
  [3, 4],
  [3, 8],
  [4, 5],
  [4, 8],
  [4, 10],
  [5, 6],
  [5, 10],
  [6, 9],
  [6, 10],
  [7, 8],
  [7, 9],
  [7, 10],
  [8, 10],
  [9, 10],
];

export default function ComputationalVisual() {
  return (
    <motion.div
      className="computational-visual"
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.1, delay: 0.35 }}
    >
      <div className="visual-orbit orbit-one" />
      <div className="visual-orbit orbit-two" />

      <motion.div
        className="visual-glow"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.45, 0.7, 0.45],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <svg
        viewBox="0 0 480 390"
        role="img"
        aria-label="Animated computational network"
      >
        <defs>
          <linearGradient id="edgeGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#63e6ff" stopOpacity="0.12" />
            <stop offset="48%" stopColor="#6c8cff" stopOpacity="0.58" />
            <stop offset="100%" stopColor="#9c7cff" stopOpacity="0.14" />
          </linearGradient>

          <radialGradient id="nodeGradient">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="35%" stopColor="#8deaff" />
            <stop offset="100%" stopColor="#668cff" />
          </radialGradient>
        </defs>

        <g>
          {edges.map(([start, end], index) => {
            const a = nodes[start];
            const b = nodes[end];

            return (
              <motion.line
                key={`${start}-${end}`}
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                stroke="url(#edgeGradient)"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  duration: 1.4,
                  delay: 0.55 + index * 0.035,
                }}
              />
            );
          })}
        </g>

        <g>
          {nodes.map((node, index) => (
            <motion.circle
              key={`${node.x}-${node.y}`}
              cx={node.x}
              cy={node.y}
              r={node.r}
              fill="url(#nodeGradient)"
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [1, 1.35, 1],
                opacity: [0.75, 1, 0.75],
              }}
              transition={{
                scale: {
                  duration: 3.2 + (index % 4) * 0.45,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.11,
                },
                opacity: {
                  duration: 3.2 + (index % 4) * 0.45,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.11,
                },
              }}
              style={{
                transformOrigin: `${node.x}px ${node.y}px`,
              }}
            />
          ))}
        </g>

        <motion.circle
          cx="206"
          cy="186"
          r="32"
          fill="none"
          stroke="#6fdcff"
          strokeWidth="0.8"
          animate={{ r: [25, 42, 25], opacity: [0, 0.35, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />

        <motion.circle
          cx="302"
          cy="194"
          r="25"
          fill="none"
          stroke="#8a7dff"
          strokeWidth="0.7"
          animate={{ r: [20, 36, 20], opacity: [0, 0.3, 0] }}
          transition={{
            duration: 4.5,
            delay: 1.3,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      </svg>

      <div className="visual-label visual-label-one">
        <span />
        CPU / GPU
      </div>

      <div className="visual-label visual-label-two">
        <span />
        DISTRIBUTED
      </div>

      <div className="visual-label visual-label-three">
        <span />
        AI / DATA
      </div>

      <div className="visual-coordinate coordinate-one">01. HPC</div>
      <div className="visual-coordinate coordinate-two">02. SYSTEMS</div>
      <div className="visual-coordinate coordinate-three">03. SCIENCE</div>
    </motion.div>
  );
}