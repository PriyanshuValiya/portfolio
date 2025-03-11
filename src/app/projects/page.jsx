"use client";

import React from "react";
import { moreProjects } from "../../../assets/assets";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { ExternalLink, Github } from "lucide-react";

function Projects() {
  return (
    <div>
      <Navbar />

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-32 mb-8 px-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {moreProjects.map((project, idx) => (
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
              <div className="flex justify-between">
                <h3 className="text-black dark:text-white text-lg font-semibold">
                  {project.title}
                </h3>
                <div className="flex  gap-x-2">
                  <a href={project.githubUrl} target="_blank"><Github /></a>
                  <a href={project.prodUrl} target="_blank"><ExternalLink /></a>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
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

              <div className="mt-4">
                <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300">
                  {project.feats.map((feat, idx) => (
                    <li key={idx}>{feat}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Projects;
