"use client";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
};

export default function MyComponent() {
  return (
    <motion.div
      variants={fadeInAnimationVariants}
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 100 }}
      viewport={{ once: true }}
    >
      <div className="block max-w-sm p-6 rounded-lg shadow  bg-zinc-900 border-700 hover:bg-gray-700 ">
        <h5 className="mb-2 text-2xl font-bold tracking-tight  text-white text-center">
          OCTOBER
        </h5>
        <p className="font-normal  text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </div>
    </motion.div>
  );
}
