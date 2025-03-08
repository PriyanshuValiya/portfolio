"use client";

import React from "react";
import { assets, infoList } from "../../assets/assets";
import Image from "next/image";
import { useTheme } from "../context/theme";
import * as motion from "motion/react-client";

function About() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.div
      id="about"
      className="w-full px-[12%] pt-10 pb-10 scroll-mt-20"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <motion.h4
        className="text-center mb-2 text-lg font-Ovo"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Introduction
      </motion.h4>
      <motion.h2 className="text-center text-5xl font-Ovo">About me</motion.h2>

      <motion.div
        className="flex w-full flex-col lg:flex-row items-center gap-20 mt-8 mb-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="w-64 sm:w-80 rounded-3xl max-w-none"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src={assets.profile_img}
            alt="user_image"
            className="w-full rounded-3xl"
          />
        </motion.div>

        <div className="flex-1 pt-16">
          <p className="mb-10 max-w-2xl font-Ovo">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            aspernatur eius, dolorum neque optio omnis culpa sint ut vitae ipsum
            hic delectus eveniet possimus at voluptate officia ratione,
            consequatur natus!
          </p>

          <motion.ul
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {infoList.map((ele, idx) => (
              <motion.li
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
                key={idx}
                whileInView={{ scale: 1.05 }}
              >
                <Image
                  src={theme === "dark" ? ele.iconDark : ele.icon}
                  alt={ele.title}
                  className="w-7 mt-3"
                />
                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                  {ele.title}
                </h3>
                <p className="text-gray-600 text-sm dark:text-white/80">
                  {ele.description}
                </p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default About;
