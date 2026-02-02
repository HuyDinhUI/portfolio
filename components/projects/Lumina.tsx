"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Button } from "../ui/button";

const Lumina = () => {
  return (
    <div className="mt-50 pb-70">
      <div className="p-20 gap-30 relative">
        <div className="ps-170">
          <div className="flex gap-5 items-center">
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
              React.js, TypeScript, Tailwind CSS, DnD Kit, RTK, Node.js,
              MongoDB.
            </motion.p>
          </div>
          <motion.div
            initial={{ x: -20, opacity: 0.5 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
            className="flex gap-2 mt-5"
          >
            <Button title="Case study" />
            <Button title="Live" variant="dark" />
          </motion.div>
        </div>

        <div>
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
              className=""
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
              className=""
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Lumina;
