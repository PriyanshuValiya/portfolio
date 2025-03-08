"use client";

import React from "react";
import { assets, serviceData } from "../../assets/assets";
import Image from "next/image";
import { useTheme } from "../context/theme";
import * as motion from "motion/react-client";
 
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
        What I Provided
      </motion.h4>
      <motion.h2
        className="text-center text-5xl font-Ovo"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Contributions
      </motion.h2>

      <motion.div
        className="grid grid-cols-auto gap-6 my-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        {serviceData.map((service, idx) => (
          <motion.div
            key={idx}
            className="border border-gray-300 rounded-lg px-8 py-12 cursor-pointer hover:-translate-y-1 duration-500 hover:shadow-black dark:hover:bg-darkHover dark:hover:shadow-white"
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src={service.icon}
              alt={service.title}
              width={40}
              height={40}
              className="w-10"
            />
            <h3 className="text-lg my-4 text-neutral-700 dark:text-white">
              {service.title}
            </h3>
            <p className="text-sm text-neutral-600 leading-5 dark:text-white/80">
              {service.description}
            </p>
            <a
              href={service.link}
              className={`flex items-center gap-2 text-sm mt-5 ${
                theme === "dark" ? "text-white" : "text-blue-600"
              } hover:underline`}
            >
              Know more
              <Image
                src={assets.right_arrow}
                alt="arrow"
                width={16}
                height={16}
              />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Contribution;
