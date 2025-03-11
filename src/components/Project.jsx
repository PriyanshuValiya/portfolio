"use client";

import React from "react";
import { assets, projects } from "../../assets/assets";
import Image from "next/image";
import { useTheme } from "../context/theme";
import { motion } from "framer-motion";

function Project() {
  const { theme } = useTheme();

  return (
    <motion.div
      id="project"
      className="w-full px-[10%] pt-10 pb-10 scroll-mt-20"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <motion.h4
        className="text-center mb-2 text-lg font-Ovo text-gray-600 dark:text-gray-300"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Learning
      </motion.h4>
      <motion.h2 className="text-center text-5xl font-Ovo text-gray-800 dark:text-white">
        About Projects
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {projects.map((project, idx) => (
          <motion.div
            className="border-[0.5px] border-gray-400 rounded-xl p-0.5 hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50 overflow-hidden"
            key={idx}
            whileInView={{ scale: 1.05 }}
          >
            <div className="overflow-hidden rounded-lg">
              <Image
                src={project.image}
                alt={project.title}
                className="hover:scale-105 duration-200"
                width={800}
                height={600}
              />
            </div>

            <div className="p-4">
              <h3 className="text-black dark:text-white text-lg">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-white text-sm">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1 mt-4">
                {project.tech.map((ele, idx) => (
                  <p
                    key={idx}
                    className="border border-black dark:border-white rounded-xl py-1 px-2 text-xs"
                  >
                    {ele}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="flex justify-center w-[100%] mb-20">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          href="/projects"
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 text-lg bg-white dark:text-black mx-auto"
        >
          Show more
          <Image
            src={
              theme === "dark" ? assets.right_arrow_bold : assets.right_arrow
            }
            alt="right_arrow"
            className="w-4"
            width={16}
            height={16}
          />
        </motion.a>
      </div>
    </motion.div>
  );
}

export default Project;
