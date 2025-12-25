"use client";

import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiDocker,
  SiMysql,
  SiMongodb,
  SiGithub,
} from "react-icons/si";
import { motion, useScroll, useTransform } from "motion/react";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";

const LIST_SKILLS = [
  {
    title: "REACTJS",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    icon: <SiReact />,
  },
  {
    title: "NEXTJS",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    icon: <SiNextdotjs />,
  },
  {
    title: "TYPESCRIPT",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    icon: <SiTypescript />,
  },
  {
    title: "NODEJS",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    icon: <SiNodedotjs />,
  },
  {
    title: "MYSQL",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    icon: <SiMysql />,
  },
  {
    title: "MongoDB",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    icon: <SiMongodb />,
  },
  {
    title: "DOCKER",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    icon: <SiDocker />,
  },
  {
    title: "GITHUB",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    icon: <SiGithub />,
  },
];

export default function Home() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 900], [0, 300]);
  const opacity = useTransform(scrollY, [0, 900], [1, 0]);

  return (
    <div className="flex min-h-screen">
      <main className="flex-1 bg-background">
        <motion.section
          id=""
          className="min-h-screen bg-radial-[at_50%_40%] from-white/5 from-3% to-black to-130% z-1 relative"
          style={{ y, opacity }}
        >
          <div className="flex flex-col justify-center items-center min-h-screen">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="w-45 h-45 rounded-full overflow-hidden bg-cover bg-center"
              style={{ backgroundImage: "url('/avatar_full.png')" }}
            >
              <div className="w-full h-full backdrop-grayscale-95"></div>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-be text-5xl mt-10 text-center"
            >
              I’m Huy Dinh,{" "}
              <span className="text-white">accelerating business</span> <br />{" "}
              by improving user experiences.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex text-gray-be mt-7 text-xl"
            >
              Frontend Developer
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-2 bg-[#111416] rounded-full mt-10 flex items-center justify-center"
            >
              <Link href={"#about"}>
                <FaChevronDown color="#b3b3b3" size={30} />
              </Link>
            </motion.div>
          </div>
        </motion.section>

        <section
          id="about"
          className="min-h-screen flex flex-col items-center bg-linear-to-tl from-white from-50% to-[#ced4da] z-2 relative"
        >
          <div className="min-h-30 w-full bg-[#24292e]"></div>
        </section>
        <motion.section id="skill" className="min-h-screen bg-linear-to-t from-80% from-background to-[#343a40] ">
          <div className="pt-10 pb-10">
            <motion.span className="uppercase font-heading text-[10rem] text-center block text-white">
              skill
            </motion.span>
            <div className="flex flex-col gap-10 px-50 pt-20">
              {LIST_SKILLS.map((s, i) => (
                <motion.div
                  initial={{ opacity: 0.5, x: (i+1)%2 === 0 ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{once: true}}
                  key={i}
                  className={`flex gap-10 justify-center items-center pb-10 ${(i+1)%2 === 0 ? 'flex-row-reverse' : ''}`}
                >
                  <div className="font-heading min-w-40 text-[10rem] flex justify-center text-white">
                    {s.icon}
                  </div>
                  <div className="flex-1 flex flex-col text-white">
                    <span className="min-w-50 font-heading text-3xl">
                      {s.title}
                    </span>
                    <p className="text-justify text-xl text-gray-be">{s.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
        <section id="project" className="min-h-screen z-2"></section>
        <section id="contact" className="min-h-screen z-2"></section>
      </main>
    </div>
  );
}
