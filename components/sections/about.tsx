"use client";

import { LIST_ABOUT } from "@/mock/about-data";
import Section from "../ui/section";
import { motion } from "motion/react";

const About = () => {
  return (
    <Section
      id="about"
      classname="bg-linear-to-tl from-white from-50% to-[#ced4da] z-2 relative py-20 px-30"
    >
      <div className="">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold"
        >
          Who I Am?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-4xl text-gray-500 leading-12 pt-5 pe-100"
        >
          I started out as a student majoring in{" "}
          <span className="text-black">Information Security</span> and I can now
          create websites with <span className="text-black">modern</span> and{" "}
          <span className="text-black">user-friendly</span> interfaces.
        </motion.p>
        <div className="grid grid-cols-3 gap-5 pt-10">
          {LIST_ABOUT.map((item, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (idx+1)/10 + 0.2 }}
              viewport={{ once: true }}
              key={idx}
              className="min-h-50 bg-gray-100 to-white rounded-2xl p-10"
            >
              <h2 className="text-xl font-bold">{item.title}</h2>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default About;
