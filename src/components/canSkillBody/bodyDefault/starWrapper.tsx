"use client";
import { motion } from "framer-motion";
import { staggerContainer } from "./motion";

const StarWrapper = (Component: any, idName: any) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer(0, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0`}
        id={idName}
      >
        <Component />
      </motion.section>
    );
  };

export default StarWrapper;
