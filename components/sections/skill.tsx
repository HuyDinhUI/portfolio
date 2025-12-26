"use client";

import { LIST_SKILLS } from "@/mock/skills-data";
import { motion } from "motion/react";
import { useState } from "react";
import Section from "../ui/section";


const Skill = () => {

  const [isViewAll, setIsViewAll] = useState<boolean>(false)

  return (
    <Section
      id="skill"
      classname="bg-line-to-t from-90% from-background to-[#343a40] py-20 px-30 max-w-screen"
    >
      <div className="pb-10">
        <motion.p className="text-4xl text-gray-be block pe-100 font-bold">
          Through <span className="text-white">research</span> and{" "}
          <span className="text-white">learning</span>, I have become proficient
          in the following <span className="text-white">frameworks</span> ​​and{" "}
          <span className="text-white">technologies</span>:
        </motion.p>
        <div className="grid grid-cols-2 gap-5 pt-20">
          {LIST_SKILLS.slice(0, 2).map((s, i) => (
            <motion.div
              initial={{ opacity: 0.5, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i / 10 }}
              viewport={{ once: true }}
              key={i}
              className={`flex gap-5 items-center text-gray-be min-h-50 bg-black rounded-2xl p-10 relative group cursor-pointer`}
            >
              <div>
                <h2 className="font-bold text-2xl group-hover:text-white transition-colors duration-200">{s.title}</h2>
                <p className="pt-5 text-justify">
                  {s.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        {isViewAll && <div className="grid grid-cols-3 gap-5 pt-5">
          {LIST_SKILLS.slice(2, LIST_SKILLS.length).map((s, i) => (
            <motion.div
              initial={{ opacity: 0.5, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i / 10 }}
              viewport={{ once: true }}
              key={i}
              className={`flex gap-5 items-center text-gray-be min-h-50 bg-black rounded-2xl p-10 relative group cursor-pointer`}
            >
              <div>
                <h2 className="font-bold text-2xl group-hover:text-white transition-colors duration-200">{s.title}</h2>
                <p className="pt-5 text-justify">
                  {s.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>}
        {!isViewAll && <div className="flex justify-center mt-10">
          <button onClick={() => setIsViewAll(true)} className="py-4 px-6 text-gray-be text-xl font-bold ring ring-gray-be rounded-full hover:text-white hover:ring-white transition-all duration-200 cursor-pointer">
            All skills
          </button>
        </div>}
      </div>
    </Section>
  );
};

export default Skill;
