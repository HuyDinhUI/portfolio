"use client"

import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 900], [0, 300]);
  const brightness = useTransform(
    scrollY,
    [0, 900],
    ["brightness(100%)", "brightness(-20%)"]
  );

  return (
    <motion.div
      id="hero"
      className="min-h-screen bg-radial-[at_50%_40%] from-white/5 from-3% to-black to-130% z-1 relative"
      style={{ y, filter: brightness }}
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
          <span className="text-white">accelerating business</span> <br /> by
          improving user experiences.
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
    </motion.div>
  );
};

export default Hero;
