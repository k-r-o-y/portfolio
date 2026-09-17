"use client";

import { useState } from "react";

import {

  AnimatePresence,

  motion,

  useReducedMotion,

} from "motion/react";

import {

  Binary,

  BrainCircuit,

  ChartNoAxesCombined,

  CircuitBoard,

  Cpu,

  Database,

  Network,

  Orbit,

  Sigma,

  Zap,

  type LucideIcon,

} from "lucide-react";

type Node = {

  x: number;

  y: number;

  r: number;

  label: string;

  category: string;

  description: string;

  icon: LucideIcon;

  primary?: boolean;

};

type Edge = [number, number];

const nodes: Node[] = [

  {

    x: 89,

    y: 110,

    r: 4,

    label: "Distributed Systems",

    category: "SYSTEMS / DISTRIBUTED",

    description:

      "Scalable backend architectures, distributed computation, data movement, and reliable production systems.",

    icon: Network,

  },

  {

    x: 191,

    y: 68,

    r: 5,

    label: "High-Performance Computing",

    category: "HPC / PARALLEL COMPUTE",

    description:

      "Parallel systems, scientific workloads, performance optimisation, and computationally intensive software.",

    icon: Zap,

    primary: true,

  },

  {

    x: 305,

    y: 101,

    r: 4,

    label: "CPU / GPU Computing",

    category: "COMPUTE / HARDWARE",

    description:

      "Performance-oriented computing across CPU and GPU systems, profiling, benchmarking, and optimisation.",

    icon: Cpu,

  },

  {

    x: 392,

    y: 180,

    r: 5,

    label: "AI & Data",

    category: "AI / DATA",

    description:

      "Production AI, analytical pipelines, intelligent applications, and data-intensive computational systems.",

    icon: BrainCircuit,

    primary: true,

  },

  {

    x: 327,

    y: 276,

    r: 4,

    label: "Machine Learning",

    category: "AI / MODELLING",

    description:

      "Predictive modelling, neural networks, model evaluation, statistical learning, and applied AI systems.",

    icon: ChartNoAxesCombined,

  },

  {

    x: 210,

    y: 320,

    r: 5,

    label: "Scientific Computing",

    category: "SCIENCE / COMPUTATION",

    description:

      "Computational methods combining mathematics, numerical analysis, simulation, and scientific software.",

    icon: Sigma,

    primary: true,

  },

  {

    x: 102,

    y: 270,

    r: 4,

    label: "Numerical Methods",

    category: "MATH / NUMERICAL",

    description:

      "Numerical analysis, stability, conditioning, optimisation, approximation, and computational mathematics.",

    icon: Binary,

  },

  {

    x: 206,

    y: 186,

    r: 7,

    label: "Systems Engineering",

    category: "SYSTEMS / ENGINEERING",

    description:

      "Reliable software systems spanning architecture, infrastructure, computation, and engineering integration.",

    icon: CircuitBoard,

    primary: true,

  },

  {

    x: 302,

    y: 194,

    r: 6,

    label: "Performance Engineering",

    category: "PERFORMANCE / OPTIMISATION",

    description:

      "Profiling, benchmarking, bottleneck analysis, runtime behaviour, and system-level performance optimisation.",

    icon: Zap,

    primary: true,

  },

  {

    x: 150,

    y: 226,

    r: 4,

    label: "Simulation",

    category: "SCIENCE / SIMULATION",

    description:

      "Computational simulation, Monte Carlo methods, modelling, validation, and experimental analysis.",

    icon: Orbit,

  },

  {

    x: 254,

    y: 260,

    r: 4,

    label: "Data Systems",

    category: "DATA / INFRASTRUCTURE",

    description:

      "Data pipelines, ingestion, transformation, validation, analytical infrastructure, and production data flows.",

    icon: Database,

  },

];

const edges: Edge[] = [

  [0, 1],

  [0, 7],

  [0, 9],

  [1, 2],

  [1, 7],

  [1, 8],

  [2, 3],

  [2, 8],

  [3, 4],

  [3, 8],

  [3, 10],

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

const signalRoutes = [

  {

    start: 1,

    end: 8,

    delay: 0,

  },

  {

    start: 0,

    end: 7,

    delay: 1.8,

  },

  {

    start: 7,

    end: 10,

    delay: 3.4,

  },

  {

    start: 10,

    end: 3,

    delay: 5.1,

  },

  {

    start: 4,

    end: 5,

    delay: 6.7,

  },

];

export default function ComputationalVisual() {

  const [activeNode, setActiveNode] = useState<number | null>(null);

  const shouldReduceMotion = useReducedMotion();

  const isConnected = (nodeIndex: number) => {

    if (activeNode === null) {

      return false;

    }

    return edges.some(

      ([a, b]) =>

        (a === activeNode && b === nodeIndex) ||

        (b === activeNode && a === nodeIndex),

    );

  };

  const activeData =

    activeNode !== null ? nodes[activeNode] : null;

  return (

    <motion.div

      className="computational-visual"

      initial={{

        opacity: 0,

        scale: 0.92,

      }}

      animate={{

        opacity: 1,

        scale: 1,

      }}

      transition={{

        duration: shouldReduceMotion ? 0 : 1.1,

        delay: shouldReduceMotion ? 0 : 0.35,

        ease: [0.22, 1, 0.36, 1],

      }}

    >

      {/* Ambient orbital structure */}

      <div className="visual-orbit orbit-one" />

      <div className="visual-orbit orbit-two" />

      <motion.div

        className="visual-glow"

        animate={

          shouldReduceMotion

            ? undefined

            : {

                scale: [1, 1.08, 1],

                opacity: [0.45, 0.7, 0.45],

              }

        }

        transition={{

          duration: 6,

          repeat: Infinity,

          ease: "easeInOut",

        }}

      />

      {/* Main computational graph */}

      <svg

        viewBox="0 0 480 390"

        role="img"

        aria-label="Interactive computational systems network connecting high-performance computing, distributed systems, CPU and GPU computing, artificial intelligence, machine learning, scientific computing, numerical methods, simulation, performance engineering, and data systems"

      >

        <defs>

          {/* Standard edge */}

          <linearGradient

            id="edgeGradient"

            x1="0"

            y1="0"

            x2="1"

            y2="1"

          >

            <stop

              offset="0%"

              stopColor="#63e6ff"

              stopOpacity="0.12"

            />

            <stop

              offset="48%"

              stopColor="#6c8cff"

              stopOpacity="0.58"

            />

            <stop

              offset="100%"

              stopColor="#9c7cff"

              stopOpacity="0.14"

            />

          </linearGradient>

          {/* Selected edge */}

          <linearGradient

            id="activeEdgeGradient"

            x1="0"

            y1="0"

            x2="1"

            y2="1"

          >

            <stop

              offset="0%"

              stopColor="#63e6ff"

            />

            <stop

              offset="48%"

              stopColor="#72a4ff"

            />

            <stop

              offset="100%"

              stopColor="#9c7cff"

            />

          </linearGradient>

          {/* Node */}

          <radialGradient id="nodeGradient">

            <stop

              offset="0%"

              stopColor="#ffffff"

            />

            <stop

              offset="34%"

              stopColor="#9ceeff"

            />

            <stop

              offset="100%"

              stopColor="#668cff"

            />

          </radialGradient>

          {/* Selected node */}

          <radialGradient id="selectedNodeGradient">

            <stop

              offset="0%"

              stopColor="#ffffff"

            />

            <stop

              offset="28%"

              stopColor="#c7f7ff"

            />

            <stop

              offset="68%"

              stopColor="#63e6ff"

            />

            <stop

              offset="100%"

              stopColor="#7087ff"

            />

          </radialGradient>

          {/* Active node glow */}

          <filter

            id="activeNodeGlow"

            x="-250%"

            y="-250%"

            width="500%"

            height="500%"

          >

            <feGaussianBlur

              stdDeviation="5"

              result="blur"

            />

            <feMerge>

              <feMergeNode in="blur" />

              <feMergeNode in="SourceGraphic" />

            </feMerge>

          </filter>

          {/* Signal glow */}

          <filter

            id="signalGlow"

            x="-200%"

            y="-200%"

            width="400%"

            height="400%"

          >

            <feGaussianBlur

              stdDeviation="2.4"

              result="blur"

            />

            <feMerge>

              <feMergeNode in="blur" />

              <feMergeNode in="SourceGraphic" />

            </feMerge>

          </filter>

        </defs>

        {/* Network edges */}

        <g>

          {edges.map(([start, end], index) => {

            const a = nodes[start];

            const b = nodes[end];

            const highlighted =

              activeNode !== null &&

              (start === activeNode ||

                end === activeNode);

            return (

              <motion.line

                key={`${start}-${end}`}

                x1={a.x}

                y1={a.y}

                x2={b.x}

                y2={b.y}

                stroke={

                  highlighted

                    ? "url(#activeEdgeGradient)"

                    : "url(#edgeGradient)"

                }

                strokeLinecap="round"

                initial={{

                  pathLength:

                    shouldReduceMotion ? 1 : 0,

                  opacity:

                    shouldReduceMotion ? 1 : 0,

                }}

                animate={{

                  pathLength: 1,

                  opacity:

                    activeNode === null

                      ? 1

                      : highlighted

                        ? 1

                        : 0.1,

                  strokeWidth:

                    highlighted ? 1.8 : 1,

                }}

                transition={{

                  duration:

                    activeNode !== null

                      ? 0.22

                      : shouldReduceMotion

                        ? 0

                        : 1.4,

                  delay:

                    activeNode !== null ||

                    shouldReduceMotion

                      ? 0

                      : 0.55 + index * 0.035,

                }}

              />

            );

          })}

        </g>

        {/* Animated computational signals */}

{!shouldReduceMotion && (
  <g pointerEvents="none">
    {signalRoutes.map((route, index) => {
      const a = nodes[route.start];
      const b = nodes[route.end];

      return (
        <motion.circle
          key={`signal-${index}`}
          r="2.3"
          fill="#b8f5ff"
          filter="url(#signalGlow)"
          initial={{
            cx: a.x,
            cy: a.y,
            opacity: 0,
          }}
          animate={{
            cx: [a.x, b.x],
            cy: [a.y, b.y],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 2.1,
            delay: route.delay,
            repeat: Infinity,
            repeatDelay: 6.5,
            ease: "easeInOut",
          }}
        />
      );
    })}
  </g>
)}

        {/* Nodes */}

        <g>

          {nodes.map((node, index) => {

            const Icon = node.icon;

            const selected =

              activeNode === index;

            const connected =

              isConnected(index);

            const faded =

              activeNode !== null &&

              !selected &&

              !connected;

            return (

              <motion.g

                key={node.label}

                className="network-node"

                tabIndex={0}

                role="button"

                aria-label={`${node.label}: ${node.category}`}

                onMouseEnter={() =>

                  setActiveNode(index)

                }

                onMouseLeave={() =>

                  setActiveNode(null)

                }

                onFocus={() =>

                  setActiveNode(index)

                }

                onBlur={() =>

                  setActiveNode(null)

                }

                animate={{

                  opacity: faded

                    ? 0.22

                    : 1,

                }}

                transition={{

                  duration: 0.22,

                }}

                style={{

                  transformOrigin: `${node.x}px ${node.y}px`,

                  outline: "none",

                }}

              >

                {/* Large invisible hover target */}

                <circle

                  cx={node.x}

                  cy={node.y}

                  r="24"

                  fill="transparent"

                />

                {/* Connected-node emphasis */}

                {connected && (

                  <motion.circle

                    cx={node.x}

                    cy={node.y}

                    r={node.r + 5}

                    fill="none"

                    stroke="#6fdcff"

                    strokeWidth="0.55"

                    initial={{

                      opacity: 0,

                    }}

                    animate={{

                      opacity: 0.35,

                    }}

                    transition={{

                      duration: 0.2,

                    }}

                  />

                )}

                {/* Selected halo */}

                <AnimatePresence>

                  {selected && (

                    <>

                      <motion.circle

                        cx={node.x}

                        cy={node.y}

                        fill="#63e6ff"

                        filter="url(#activeNodeGlow)"

                        initial={{

                          r: 8,

                          opacity: 0,

                        }}

                        animate={{

                          r: 24,

                          opacity: 0.13,

                        }}

                        exit={{

                          r: 8,

                          opacity: 0,

                        }}

                        transition={{

                          duration: 0.25,

                        }}

                      />

                      <motion.circle

                        cx={node.x}

                        cy={node.y}

                        fill="none"

                        stroke="#63e6ff"

                        strokeWidth="0.7"

                        initial={{

                          r: 11,

                          opacity: 0,

                        }}

                        animate={{

                          r: 18,

                          opacity: 0.8,

                        }}

                        exit={{

                          r: 11,

                          opacity: 0,

                        }}

                        transition={{

                          duration: 0.25,

                        }}

                      />

                      <motion.circle

                        cx={node.x}

                        cy={node.y}

                        fill="none"

                        stroke="#8b7dff"

                        strokeWidth="0.45"

                        strokeDasharray="2 4"

                        initial={{

                          r: 17,

                          opacity: 0,

                          rotate: 0,

                        }}

                        animate={{

                          r: 23,

                          opacity: 0.55,

                          rotate: 360,

                        }}

                        exit={{

                          r: 17,

                          opacity: 0,

                        }}

                        transition={{

                          r: {

                            duration: 0.3,

                          },

                          opacity: {

                            duration: 0.25,

                          },

                          rotate: {

                            duration: 12,

                            repeat: Infinity,

                            ease: "linear",

                          },

                        }}

                        style={{

                          transformOrigin: `${node.x}px ${node.y}px`,

                        }}

                      />

                    </>

                  )}

                </AnimatePresence>

                {/* Node body */}

                <motion.circle

                  cx={node.x}

                  cy={node.y}

                  fill={

                    selected

                      ? "url(#selectedNodeGradient)"

                      : "url(#nodeGradient)"

                  }

                  animate={{

                    r: selected

                      ? 11

                      : connected

                        ? node.r + 1.5

                        : node.r,

                    opacity:

                      selected

                        ? 1

                        : connected

                          ? 1

                          : 0.82,

                  }}

                  transition={{

                    duration: 0.22,

                    ease: "easeOut",

                  }}

                />

                {/* Selected icon */}

                <AnimatePresence>

                  {selected && (

                    <motion.g

                      initial={{

                        opacity: 0,

                        scale: 0.35,

                        rotate: -15,

                      }}

                      animate={{

                        opacity: 1,

                        scale: 1,

                        rotate: 0,

                      }}

                      exit={{

                        opacity: 0,

                        scale: 0.35,

                      }}

                      transition={{

                        duration: 0.22,

                        ease: [

                          0.22,

                          1,

                          0.36,

                          1,

                        ],

                      }}

                      style={{

                        transformOrigin: `${node.x}px ${node.y}px`,

                      }}

                    >

                      <Icon

                        x={node.x - 6}

                        y={node.y - 6}

                        width={12}

                        height={12}

                        stroke="#07121b"

                        strokeWidth={2.1}

                      />

                    </motion.g>

                  )}

                </AnimatePresence>

                <title>

                  {node.label}

                </title>

              </motion.g>

            );

          })}

        </g>

        {/* Ambient central pulses */}

        {!shouldReduceMotion &&

          activeNode === null && (

            <>

              <motion.circle

                cx="206"

                cy="186"

                r="32"

                fill="none"

                stroke="#6fdcff"

                strokeWidth="0.8"

                animate={{

                  r: [25, 42, 25],

                  opacity: [

                    0,

                    0.35,

                    0,

                  ],

                }}

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

                animate={{

                  r: [20, 36, 20],

                  opacity: [

                    0,

                    0.3,

                    0,

                  ],

                }}

                transition={{

                  duration: 4.5,

                  delay: 1.3,

                  repeat: Infinity,

                  ease: "easeOut",

                }}

              />

            </>

          )}

      </svg>

      {/* Floating node information panel */}

      <AnimatePresence mode="wait">

        {activeData && (

          <motion.div

            key={activeData.label}

            className="network-readout"

            initial={{

              opacity: 0,

              y: -8,

              x: 8,

              scale: 0.97,

              filter: "blur(5px)",

            }}

            animate={{

              opacity: 1,

              y: 0,

              x: 0,

              scale: 1,

              filter: "blur(0px)",

            }}

            exit={{

              opacity: 0,

              y: -5,

              scale: 0.98,

              filter: "blur(4px)",

            }}

            transition={{

              duration: 0.24,

              ease: [

                0.22,

                1,

                0.36,

                1,

              ],

            }}

          >

            <div className="network-readout-accent" />

            <div className="network-readout-top">

              <span className="network-readout-index">

                {String(

                  activeNode! + 1,

                ).padStart(2, "0")}

              </span>

              <span className="network-readout-status">

                ACTIVE

              </span>

            </div>

            <span className="network-readout-category">

              {activeData.category}

            </span>

            <strong className="network-readout-title">

              {activeData.label}

            </strong>

            <p className="network-readout-description">

              {activeData.description}

            </p>

          </motion.div>

        )}

      </AnimatePresence>

      {/* Existing external visual labels */}

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

      <div className="visual-coordinate coordinate-one">

        01. HPC

      </div>

      <div className="visual-coordinate coordinate-two">

        02. SYSTEMS

      </div>

      <div className="visual-coordinate coordinate-three">

        03. SCIENCE

      </div>

    </motion.div>

  );

}