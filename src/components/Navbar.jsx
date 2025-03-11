"use client";
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import { assets } from "../../assets/assets";
import { useTheme } from "../context/theme";

function Navbar() {
  const sideMenuRef = useRef();
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { theme, toggleTheme } = useTheme();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY - 15 || currentScrollY <= 0) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`flex justify-between items-center w-full px-5 lg:px-8 xl:px-[8%] py-4 z-50 shadow-md rounded-b-3xl fixed top-0 left-0 transition-transform duration-300 bg-white dark:bg-darkTheme dark:shadow-white/20 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div>
        <a href="/">
          <Image
            src={theme === "dark" ? assets.logo_dark : assets.logo}
            alt="logo"
            className="w-40 cursor-pointer mr-14"
          />
        </a>
      </div>
      <div className="flex gap-x-5">
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3">
          <li>
            <a className="font-Outfit text-lg" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="font-Outfit text-lg" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="font-Outfit text-lg" href="#project">
              Projects
            </a>
          </li>
          <li>
            <a className="font-Outfit text-lg" href="#contact">
              Contact
            </a>
          </li>
        </ul>
        <button onClick={toggleTheme}>
          <Image
            src={theme === "dark" ? assets.sun_icon : assets.moon_icon}
            alt={theme === "dark" ? "Light" : "Dark"}
            className="w-5"
          />
        </button>
        <button className="block md:hidden ml-3" onClick={openMenu}>
          <Image
            src={theme === "dark" ? assets.menu_white : assets.menu_black}
            alt="menu"
            className="w-5"
          />
        </button>
      </div>

      <ul
        ref={sideMenuRef}
        className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white"
      >
        <div className="absolute right-6 top-6" onClick={closeMenu}>
          <Image
            src={theme === "dark" ? assets.close_white : assets.close_black}
            alt="close"
            className="w-5 cursor-pointer"
          />
        </div>
        <li>
          <a className="font-Outfit text-lg" href="#home" onClick={closeMenu}>
            Home
          </a>
        </li>
        <li>
          <a className="font-Outfit text-lg" href="#about" onClick={closeMenu}>
            About
          </a>
        </li>
        <li>
          <a
            className="font-Outfit text-lg"
            href="#project"
            onClick={closeMenu}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            className="font-Outfit text-lg"
            href="#contact"
            onClick={closeMenu}
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
