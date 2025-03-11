"use client";

import React from "react";
import Image from "next/image";
import { useTheme } from "../context/theme";
import * as motion from "motion/react-client";
import { assets } from "../../assets/assets";

function Contribution() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.div
      className="w-full px-[12%] pb-10 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        className="text-center mb-2 text-lg font-Ovo"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        Wall of frame
      </motion.h4>
      <motion.h2
        className="text-center text-5xl font-Ovo"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Certificates
      </motion.h2>

      <motion.div
        className="grid grid-cols-auto gap-6 my-10 mt-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        <div className="flex justify-around flex-wrap gap-5 mb-20">
          <motion.div
            className="border border-gray-300 rounded-xl cursor-pointer hover:-translate-y-1 duration-500 hover:shadow-black dark:hover:bg-darkHover dark:hover:shadow-white"
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src={assets.lesson_appreciation}
              alt="lesson_appreciation"
              width="300"
              height="200"
              className="rounded-xl"
            />
          </motion.div>
          <motion.div
            className="border border-gray-300 rounded-xl cursor-pointer hover:-translate-y-1 duration-500 hover:shadow-black dark:hover:bg-darkHover dark:hover:shadow-white"
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src={assets.gssoc}
              alt="lesson_appreciation"
              width="420"
              height="372"
              className="rounded-xl"
            />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Contribution;
