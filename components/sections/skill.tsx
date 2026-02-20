"use client";

import { LIST_SKILLS, LOGO_ITEMS } from "@/mock/skills-data";
import { motion } from "motion/react";
import Section from "../ui/section";
import LogoLoop from "../animations/logo-loop";

const Skill = () => {
  
  return (
    <Section
      id="skill"
      classname="flex justify-center bg-line-to-t from-90% from-background to-[#343a40] py-20"
    >
      <div className="pb-10 w-[min(1100px,90vw)]">
        <motion.p
          initial={{ opacity: 0.5, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-[clamp(25px,5vw,30px)] text-gray-be leading-12 font-bold"
        >
          Through <span className="text-white">research</span> and{" "}
          <span className="text-white">learning</span>, I have become proficient
          in the following <span className="text-white">frameworks</span> ​​and{" "}
          <span className="text-white">technologies</span>:
        </motion.p>
        <LogoLoop logos={LOGO_ITEMS} speed={70} className="mt-10"/>
        <div className="grid xl:grid-cols-3 gap-5 mt-10">
          {LIST_SKILLS.map(i => (
            <div key={i.title} className="min-h-30 p-10 bg-black text-gray-be rounded-xl">
              <h3 className="text-white">{i.title}</h3>
              <p className="mt-2">{i.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Skill;
