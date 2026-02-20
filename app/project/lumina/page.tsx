"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { BiPlay } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { GoAlert, GoGoal } from "react-icons/go";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { SiJabber } from "react-icons/si";

const CHALLEGENS = [
  {
    title: "API error in flow Optimistic UI",
    desc: "When using the UI optimizations, the interface updates first, then calls the API. At this point, the API may encounter errors, causing data between the UI and the database to become unsynchronized.",
    solution: [
      "UI updates immediately before API response returns.",
      "A snapshot of previous state is stored before updating.",
      "If the API fails: The system rolls back to the previous snapshot.",
    ],
  },
  {
    title: "Client Fetch",
    desc: "Fetching data on the client can harm SEO and increase Time to First Byte (TTFB).",
    solution: [
      "Pages that only display data → Server Components.",
      "Pages requiring interactions (add/edit/delete) → Client Components.",
      "Avoid unnecessary client-side fetching",
    ],
  },
  {
    title: "Complex data structures",
    desc: "Raw data queried from the database makes rendering the user interface and UX logic difficult.",
    solution: [
      "Data is transformed into render-ready objects",
      "Unified data shape between frontend and backend",
    ],
  },
];

const OUTCOME = [
  "Green of Lighthouse score",
  "Sync cart between Guest and User",
  "Realistic checkout & payment flow",
  "JWT-based authentication integration",
  "Ready for production",
];

export default function ProjectLuminaPage() {
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
                Case Study · E‑Commerce
              </motion.span>
              <motion.h1
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="font-display text-[clamp(36px,5vw,64px)] md:leading-[1.05] mt-4"
              >
                Project Fullstack <br /> E-commerce <br /> SEO-friendly With
                Next.js
              </motion.h1>
              <div className="flex justify-center items-center xl:hidden">
                <motion.div
                  className="rotate-5 mt-10"
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ type: "keyframes", duration: 1, delay: 0.1 }}
                >
                  <Image
                    src={"/mockup/devices/mobile/lumina-landing-mobile.png"}
                    width={100}
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
                    Next.js, React, TypeScript, Prisma, Jest, Tailwind CSS,
                    React Hook Form, Zod, React Query, PayPal API
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
                className="rotate-5"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "keyframes", duration: 1, delay: 0.1 }}
              >
                <Image
                  src={"/mockup/devices/mobile/lumina-landing-mobile.png"}
                  width={250}
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
                className="font-bold text-[clamp(26px,3.2vw,50px)] xl:hidden text-center"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
              >
                Problem
              </motion.h2>
              <div className="mt-10 grid gap-6 border-l-2 border-black/5 pl-6">
                {[
                  ["Requirement", "Optimize both SEO and performance."],
                  [
                    "User experience",
                    "Guest users often add items to cart before logging in. Without proper handling, cart data would be lost.",
                  ],
                  [
                    "Speed & Cost",
                    "Avoid time-consuming and repetitive raw SQL implementation.",
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
                className="font-bold text-[clamp(26px,3.2vw,50px)] xl:hidden text-center"
              >
                Goals
              </motion.h2>
              <div className="mt-10 flex flex-col gap-5">
                {[
                  [
                    "SEO First",
                    "Build an SEO‑friendly e‑commerce website using Next.js App Router.",
                  ],
                  [
                    "Scalable Data",
                    "Design a scalable product & variant data model.",
                  ],
                  [
                    "Real Checkout",
                    "Implement a realistic checkout flow with online payment.",
                  ],
                  [
                    "Clean Architecture",
                    "Apply strong type safety and clear frontend boundaries.",
                  ],
                  [
                    "Reduce JS Bundle Size",
                    "Reusable custom components to reduce unnecessary JS bundle size.",
                  ],
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
                className="font-bold text-[clamp(26px,3.2vw,50px)] xl:hidden text-center"
              >
                Solution Approach
              </motion.h2>
              <div className="mt-10 grid gap-6 border-l-2 border-black/5 pl-6">
                {[
                  [
                    "Full-Stack Implementation with Next.js",
                    "The project is built with Next.js App Router, leveraging: Server-Side Rendering (SSR) for SEO optimization; Server Components for faster initial load; Client Components only where interactivity is required; Smart separation between rendering logic and business logic. This hybrid approach ensures both discoverability (SEO) and smooth user interaction.",
                  ],
                  [
                    "Guest Cart & User Cart Merge Strategy",
                    "When a user is a guest, a cart is still persisted in the database, the system stores a cartId in cookies. After login then the system retrieves the stored cartId -> Merges the guest cart with the authenticated user’s existing cart (if any) -> Resolves duplicate items by updating quantity instead of duplicating rows.",
                  ],
                  [
                    "ORM with Prisma + PostgreSQL",
                    "Instead of writing repetitive SQL queries, I used: PostgreSQL as the relational database; Prisma ORM to interact with the database using type-safe object queries. It's benifits are faster development speed, strong TypeScript integration, reduced human error in raw SQL and easier schema evolution and migration management. This approach improves maintainability while preserving relational data integrity.",
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
                href="https://github.com/HuyDinhUI/ecommerce-nextjs"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub size={30} />
              </a>
              <a
                href="https://lumina-eco.vercel.app/"
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
