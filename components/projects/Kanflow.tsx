"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const Kanflow = () => {
  const router = useRouter()
  return (
    <div className="mt-30">
      <div className="p-20 gap-30 relative">
        <div className="pe-170">
          <div className="flex items-center">
            <motion.div
              initial={{ x: -20, opacity: 0.5 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Image
                src={"/logo-kanflow.png"}
                width={100}
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
              Kanflow
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
              An <strong>optimized</strong> Kanflow featuring{" "}
              <strong>smooth drag-and-drop</strong> and{" "}
              <strong>scalable</strong>, <strong>normalized</strong> state
              architecture built with Next.js, React.js, TypeScript, and Redux
              Toolkit. Designed for <strong>high performance</strong> and{" "}
              <strong>maintainability</strong>.
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
            <Button title="Case study" onClick={() => router.push("/project/kanflow")} />
            <Button title="Live" variant="dark" />
          </motion.div>
        </div>

        <motion.div
          className="absolute right-0 top-30"
          initial={{ x: 300 }}
          whileInView={{ x: 200 }}
          viewport={{ once: true }}
          transition={{ type: "tween", duration: 0.5, delay: 0.1 }}
        >
          <Image
            src={"/mockup/devices/desktop/kanflow-ui-desktop.png"}
            width={800}
            height={100}
            alt="Kanflow UI Desktop"
            className=""
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Kanflow;
