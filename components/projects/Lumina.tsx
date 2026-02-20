"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";

const Lumina = () => {
  return (
    <div className="mt-50 pb-70">
      <div className="gap-30 relative">
        <div className="flex gap-5 items-center justify-center md:hidden mb-20">
          <motion.div
            initial={{ x: -20, opacity: 0.5 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Image
              src={"/logo-lumina.svg"}
              width={50}
              height={50}
              alt="Logo Kanflow"
            />
          </motion.div>
          <motion.h2
            initial={{ x: -20, opacity: 0.5 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold"
          >
            Lumina
          </motion.h2>
        </div>
        <div className="flex justify-center gap-5 md:hidden">
          <motion.div
            className="-rotate-5"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: -20, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "keyframes", duration: 1, delay: 0.1 }}
          >
            <Image
              src={"/mockup/devices/mobile/lumina-landing-mobile.png"}
              width={100}
              height={100}
              alt=""
            />
          </motion.div>
          <motion.div
            className="rotate-5"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "keyframes", duration: 1, delay: 0.2 }}
          >
            <Image
              src={"/mockup/devices/mobile/lumina-product-mobile.png"}
              width={100}
              height={100}
              alt=""
            />
          </motion.div>
        </div>
        <div className="lg:ps-170">
          <div className="flex gap-5 items-center max-md:hidden">
            <motion.div
              initial={{ x: -20, opacity: 0.5 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Image
                src={"/logo-lumina.svg"}
                width={50}
                height={50}
                alt="Logo Kanflow"
              />
            </motion.div>
            <motion.h2
              initial={{ x: -20, opacity: 0.5 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl font-bold"
            >
              Lumina
            </motion.h2>
          </div>
          <div className="text-xl leading-10 text-gray-600">
            <motion.p
              initial={{ x: -20, opacity: 0.5 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="mt-5 text-justify"
            >
              <strong>SEO-optimized</strong> e-commerce platform built with
              Next.js App Router, featuring{" "}
              <strong>scalable product variants</strong>, a complete{" "}
              <strong>checkout flow</strong>, and secure <strong>PayPal</strong>{" "}
              payment integration.
            </motion.p>
            <motion.p
              initial={{ x: -20, opacity: 0.5 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
              className="mt-2 text-justify"
            >
              <strong className="text-black">Tech stack: </strong>Next.js,
              React.js, TypeScript, Tailwind CSS, Zustand, React Query, PayPal, Prisma.
            </motion.p>
          </div>
          <motion.div
            initial={{ x: -20, opacity: 0.5 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
            className="flex gap-2 mt-5"
          >
            <Link
              className="px-3 py-1.5 bg-gray-200 font-bold rounded-md"
              href="/project/lumina"
              target="_blank"
              title="Case study"
            >
              Case study
            </Link>
            <a
              className="px-3 py-1.5 bg-black font-bold text-white rounded-md"
              href={"https://lumina-eco.vercel.app/"}
              target="_blank"
              title="Live"
            >
              Live
            </a>
          </motion.div>
        </div>

        <div className="max-md:hidden">
          <motion.div
            className="absolute left-20 top-10 -rotate-5"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "keyframes", duration: 1, delay: 0.1 }}
          >
            <Image
              src={"/mockup/devices/mobile/lumina-landing-mobile.png"}
              width={200}
              height={100}
              alt=""
            />
          </motion.div>
          <motion.div
            className="absolute left-80 top-20 rotate-5"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 50, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "keyframes", duration: 1, delay: 0.2 }}
          >
            <Image
              src={"/mockup/devices/mobile/lumina-product-mobile.png"}
              width={200}
              height={100}
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Lumina;
