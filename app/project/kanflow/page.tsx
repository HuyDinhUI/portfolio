"use client";

import { useScroll, useTransform } from "motion/react";
import { motion } from "motion/react";
import Image from "next/image";
import { BiPlay } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { GoAlert, GoGoal } from "react-icons/go";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { SiJabber } from "react-icons/si";

const CHALLEGENS = [
  {
    title: "Dropping Cards into Empty Columns",
    desc: "DnD Kit relies on collision detection with existing elements.When a column is empty, there is no card to collide with, making it impossible to drop a card.",
    solution: [
      "Detect when a card is dragged over an empty column",
      "Dynamically create a temporary placeholder card",
      "The placeholder includes a isPlaceholder flag to distinguish it from real data",
      "Once the drop is completed, the placeholder is removed",
    ],
  },
  {
    title: "Infinite Collision Loop at Card Boundaries",
    desc: "The default collision algorithm caused infinite collision recalculations when dragging a card between two closely positioned cards.",
    solution: [
      "Implemented a custom collision detection strategy",
      "Leveraged existing DnD Kit collision utilities",
      "Added constraints to stabilize detection at boundaries",
    ],
  },
  {
    title: "Optimistic UI with Temporary IDs",
    desc: "With optimistic UI, new Columns or Cards are rendered immediately before the API responds. This causes a mismatch between temporary client-generated IDs and server-generated IDs.",
    solution: [
      "Generate temporary IDs on the client",
      "Render UI optimistically",
      "Once the API request succeeds, trigger a reconciliation flow: Replace temporary IDs with real server IDs; Update all related references in the Board state",
    ],
  },
];

const OUTCOME = [
  "Build complex drag & drop systems with custom behavior",
  "Design scalable state management for relational data",
  "Complete the operations with the card",
  "Deliver smooth, high-performance, and user-friendly interactions",
  "JWT-based and Oauth authentication integration",
  "Ready for production",
];

export default function ProjectKanflowPage() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 900], [0, 300]);
  const brightness = useTransform(
    scrollY,
    [0, 900],
    ["brightness(100%)", "brightness(-20%)"],
  );
  return (
    <main className="relative overflow-hidden text-white">
      <div className="pt-10 sm:pt-24">
        {/* Hero */}
        <motion.section
          className="flex justify-center items-center pb-50 relative-1"
          style={{ y, filter: brightness }}
        >
          <div className="grid items-center gap-9 lg:grid-cols-[1.15fr_0.85fr] w-[min(1100px,90vw)]">
            <div>
              <motion.span
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="inline-flex items-center gap-2 rounded-full border border-outline bg-black px-4 py-2 text-[12px] uppercase tracking-[0.12em] text-muted"
              >
                Case Study · Kanflow
              </motion.span>
              <motion.h1
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="font-display text-[clamp(36px,5vw,64px)] md:leading-[1.05] mt-4"
              >
                An Optimized Kanflow Featuring Smooth DnD with Next.js
              </motion.h1>
              <div className="flex justify-center items-center lg:hidden">
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ type: "keyframes", duration: 1, delay: 0.1 }}
                  className="mt-5"
                >
                  <Image
                    src={"/mockup/devices/mobile/kanflow-ui-ipad.png"}
                    width={700}
                    height={100}
                    alt=""
                  />
                </motion.div>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="col-span-2 rounded-[20px] border border-outline bg-card p-6 shadow-card"
                >
                  <strong className="block text-xs uppercase tracking-[0.08em] text-muted">
                    Tech Stack
                  </strong>
                  <p className="mt-2 text-base leading-relaxed">
                    Next.js, React, TypeScript, Tailwind CSS, RTK Query, DnD
                    Kit, Zod, React Hook Form, Node.js, MongoDB, OAuth, REST API
                  </p>
                </motion.div>
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="rounded-[20px] border border-outline bg-card p-5 shadow-card"
                >
                  <strong className="block text-xs uppercase tracking-[0.08em] text-muted">
                    Role
                  </strong>
                  <p className="mt-2">Frontend / Fullstack Developer</p>
                </motion.div>
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="rounded-[20px] border border-outline bg-card p-5 shadow-card"
                >
                  <strong className="block text-xs uppercase tracking-[0.08em] text-muted">
                    Duration
                  </strong>
                  <p className="mt-2">12/2025 – Present</p>
                </motion.div>
              </div>
            </div>

            <div className="flex justify-center items-center max-lg:hidden">
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "keyframes", duration: 1, delay: 0.1 }}
              >
                <Image
                  src={"/mockup/devices/mobile/kanflow-ui-ipad.png"}
                  width={700}
                  height={100}
                  alt=""
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Problem */}

        <section className="flex justify-center bg-white text-gray-700 py-20 relative z-2">
          <div className="w-[min(1100px,90vw)] grid lg:grid-cols-[1.15fr_0.85fr] gap-10">
            <div>
              <motion.h2
                className="font-bold text-[clamp(26px,3.2vw,50px)] lg:hidden text-center"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
              >
                Problem
              </motion.h2>
              <div className="mt-10 grid gap-6 border-l-2 border-black/5 pl-6">
                {[
                  [
                    "1.1 Drag & Drop Experience",
                    "Traditional drag & drop logic often feels laggy and unnatural, especially when handling nested structures like Columns and Cards.",
                  ],
                  [
                    "1.2 State Management",
                    "Managing both local and global state using useState and useContext becomes unmaintainable when working with relational data (Board → Columns → Cards).",
                  ],
                  [
                    "1.3 API Logic",
                    "A Kanban application requires frequent API interactions, but ad-hoc API calls lead to duplicated logic and hard-to-track data flow.",
                  ],
                  [
                    "1.4 Data Structures",
                    "Column and Card data structures are deeply nested, making manual array updates verbose, error-prone, and inefficient.",
                  ],
                ].map(([title, desc], i) => (
                  <div key={title} className="relative">
                    <motion.span
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 + (i + 1) / 10 }}
                      viewport={{ once: true }}
                      className="inline-flex items-center gap-2 rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-accent"
                    >
                      {title}
                    </motion.span>
                    <motion.p
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.3 + (i + 1) / 10 }}
                      viewport={{ once: true }}
                      className="mt-3 text-justify text-gray-500"
                    >
                      {desc}
                    </motion.p>
                    <motion.span
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.2 + (i + 1) / 10 }}
                      viewport={{ once: true }}
                      className="absolute -left-[31px] top-2 h-3 w-3 rounded-full bg-red-600 shadow-[0_0_0_6px_rgb(255,230,230)]"
                    />
                  </div>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="flex justify-center items-center max-lg:hidden"
            >
              <motion.h2
                className="font-bold text-[clamp(26px,3.2vw,50px)]"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
              >
                <GoAlert size={30} />
                Problem
              </motion.h2>
            </motion.div>
          </div>
        </section>

        {/* Goals */}

        <section className="pt-16 pb-20 flex justify-center bg-line-to-t from-90% from-background to-[#343a40]">
          <div className="w-[min(1100px,90vw)] grid lg:grid-cols-[1.15fr_0.85fr] gap-10">
            <div>
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="font-bold text-[clamp(26px,3.2vw,50px)] lg:hidden text-center"
              >
                Goals
              </motion.h2>
              <div className="mt-10 flex flex-col gap-5">
                {[
                  [
                    "Smooth UX",
                    "Drag & Drop interactions must feel natural and responsive.",
                  ],
                  [
                    "Scalable Architecture",
                    "Easy to extend with new features.",
                  ],
                  [
                    "Clean codebase",
                    "Predictable state flow and minimal duplication.",
                  ],
                  ["High performance", "Avoid unnecessary re-renders."],
                  ["Optimistic UI", "Instant feedback for user actions."],
                ].map(([title, desc], i) => (
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 + (i + 1) / 10 }}
                    viewport={{ once: true }}
                    key={title}
                    className="rounded-[20px] bg-black p-5 flex gap-5 items-center"
                  >
                    {i + 1}
                    <div>
                      <strong className="block text-xs uppercase tracking-[0.08em] text-muted">
                        {title}
                      </strong>
                      <p className="mt-2 text-gray-400">{desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ type: "keyframes", duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex justify-center items-center max-lg:hidden"
            >
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="font-bold text-[clamp(26px,3.2vw,50px)]"
              >
                <GoGoal size={30} />
                Goals
              </motion.h2>
            </motion.div>
          </div>
        </section>

        {/* Solution */}

        <section className="pt-16 pb-20 flex justify-center bg-white text-gray-700">
          <div className="w-[min(1100px,90vw)] grid lg:grid-cols-[1.15fr_0.85fr] gap-10">
            <div>
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="font-bold text-[clamp(26px,3.2vw,50px)] lg:hidden text-center"
              >
                Solution Approach
              </motion.h2>
              <div className="mt-10 grid gap-6 border-l-2 border-black/5 pl-6">
                {[
                  [
                    "Advanced Drag & Drop with DnD Kit",
                    "Instead of relying on basic drag & drop implementations, the project uses DnD Kit, a powerful drag & drop library based on collision detection algorithms. Collision-based detection allows precise identification of the dragged Column or Card. Enables fluid animations and accurate drop positioning.",
                  ],
                  [
                    "Centralized State Management with Redux Toolkit",
                    "Managing complex, relational state using useState or useContext no longer scales when data grows. RTK acts both as a state management solution and a clean code pattern. Eliminates boilerplate through: Immutable updates via Immer; Structured slices and reducers. Ensures predictable data flow and easier debugging.",
                  ],
                  [
                    "API Management with RTK Query",
                    "Given that users frequently interact with the API (create, update, move, delete), a clean and consistent API flow is critical. RTK Query, which is integrated directly into Redux Toolkit, is used to: Centralize all API definitions; Automatically handle caching, loading, and error states; Reduce manual useEffect + fetch logic; Keep UI state synchronized with server state.",
                  ],
                  [
                    "Data Normalization with Entity Adapters",
                    "Updating deeply nested arrays manually is inefficient and hard to maintain. To address this, the project uses Redux Toolkit Entity Adapters, which provide database-like utilities: Normalized data structure (similar to tables and relations); Efficient selectors for querying Cards and Columns; Simplified updates for insert, update, and delete operations",
                  ],
                ].map(([title, desc], i) => (
                  <div key={title} className="relative">
                    <motion.span
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 + (i + 1) / 10 }}
                      viewport={{ once: true }}
                      className="inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-accent"
                    >
                      {title}
                    </motion.span>
                    <motion.p
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.3 + (i + 1) / 10 }}
                      viewport={{ once: true }}
                      className="mt-3 text-justify"
                    >
                      {desc}
                    </motion.p>
                    <motion.span
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.2 + (i + 1) / 10 }}
                      viewport={{ once: true }}
                      className="absolute -left-[31px] top-2 h-3 w-3 rounded-full bg-green-600 shadow-[0_0_0_6px_rgb(234,250,234)]"
                    />
                  </div>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="flex justify-center items-center max-lg:hidden"
            >
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="font-bold text-[clamp(26px,3.2vw,50px)]"
              >
                <SiJabber size={30} />
                Solution
              </motion.h2>
            </motion.div>
          </div>
        </section>

        {/* Challegens */}

        <section className="pt-16 pb-20 flex justify-center">
          <div className="w-[min(1100px,90vw)]">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="font-bold text-[clamp(26px,3.2vw,50px)] text-center"
            >
              Challenges
            </motion.h2>
            <motion.div className="mt-10 grid gap-5 md:grid-cols-3">
              {CHALLEGENS.map((item, i) => (
                <div key={item.title} className="grid grid-rows-2 gap-5">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 + (i + 1) / 10 }}
                    viewport={{ once: true }}
                    className="min-h-50 bg-black rounded-2xl p-10 flex gap-5"
                  >
                    {i + 1}
                    <div>
                      <strong className="text-bold">{item.title}</strong>
                      <p className="mt-2 text-gray-be text">{item.desc}</p>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 + (i + 1) / 10 }}
                    viewport={{ once: true }}
                    className="min-h-50 ring ring-gray-500 rounded-2xl p-10"
                  >
                    <strong className="text-bold">Solution</strong>
                    <ul className="mt-2 text-gray-be list-disc">
                      {item.solution.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Outcome */}

        <section className="pt-16 pb-20 flex justify-center">
          <div className="w-[min(1100px,90vw)]">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="font-bold text-[clamp(26px,3.2vw,50px)] text-center"
            >
              Outcome
            </motion.h2>
            <motion.div className="mt-10 grid gap-5 md:grid-cols-2">
              {OUTCOME.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 + (i + 1) / 10 }}
                  viewport={{ once: true }}
                  className="min-h-20 bg-black rounded-2xl p-10 flex items-center gap-5"
                >
                  <div>
                    <IoIosCheckmarkCircle size={40} color="green" />
                  </div>
                  {item}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Links */}

        <section id="links" className="pt-16 pb-20 flex justify-center">
          <div className="w-[min(1100px,90vw)] flex justify-center">
            <motion.div className="text-gray-700 flex gap-5">
              <a
                className="rounded-full bg-white p-2"
                href="https://github.com/HuyDinhUI/trello-clone-nextjs"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub size={30} />
              </a>
              <a
                href="https://kanflow-pro.vercel.app/"
                className="rounded-full bg-white p-2"
                target="__blank"
              >
                <BiPlay size={30} />
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  );
}
