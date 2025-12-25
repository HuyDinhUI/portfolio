"use client";
import { motion } from "framer-motion";

type SplitTextProps = {
  text: string;
};

export default function SplitText({ text }: SplitTextProps) {
  const letters = text.split("");

  return (
    <>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: index * 0.03, ease: "easeOut" }}
          style={{ display: "inline-block" }}
          viewport={{ once: true }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </>
  );
}
