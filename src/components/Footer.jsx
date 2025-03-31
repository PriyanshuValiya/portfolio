"use client";

import Image from "next/image";
import React from "react";
import { assets } from "../../assets/assets";
import { useTheme } from "../context/theme";

function Footer() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="mt-20">
      <div className="text-center">
        <Image src={theme === "dark" ? assets.logo : assets.logo} alt="logo" className="w-72 mx-auto mb-2" />

        <div className="w-max sm:flex gap-2 mx-auto">
          <p>valiyapriyansukumar@gmail.com</p>
          <p className="hidden sm:block">|</p>
          <p>+91 6351597276</p>
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <a href="#home">Priyanshu Valiya</a>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a href="https://github.com/PriyanshuValiya" target="_blank">
              Github
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/priyanshu-valiya19012006"
              target="_blank"
            >
              Linkedin
            </a>
          </li>
          <li>
            <a
              href="https://x.com/ValiyaPriyanshu?t=BguDeLByQSzAIHQ7ldhmrg&s=08"
              target="_blank"
            >
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
