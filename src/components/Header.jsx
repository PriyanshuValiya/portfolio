import React from "react";
import { assets } from "../../assets/assets";
import Image from "next/image";
import * as motion from "motion/react-client";

function Header() {
  return (
    <div
      id="home"
      className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center pt-28 gap-4"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          type: "spring",
          stiffness: 100,
        }}
      >
        <Image
          src={assets.profile_img}
          alt="photo"
          className="h-[180px] w-[180px] rounded-full"
          width={180}
          height={180}
        />
      </motion.div>

      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-end gap-2 text-2xl md:text-3xl mb-3 font-Ovo"
      >
        Hello, I am <p className="font-semibold">Priyanshu Valiya</p>
      </motion.h3>

      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-4xl sm:text-6xl lg:text-[66px] font-Ovo"
      >
        Full Stack Web Developer based in India
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx-auto text-lg md:text-xl font-Ovo"
      >
        I am a fresher full stack developer from India. I am a fresher full
        stack developer from India
      </motion.p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 text-lg dark:bg-transparent"
        >
          Github
          <Image
            src={assets.right_arrow_white}
            alt="right_arrow"
            className="w-4"
            width={16}
            height={16}
          />
        </motion.a>
        <a  download href="http://"></a>
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="/PriyanshuValiya_Resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 text-lg bg-white dark:text-black"
        >
          Resume
          <Image
            src={assets.download_icon}
            alt="right_arrow"
            className="w-4"
            width={16}
            height={16}
          />
        </motion.a>
      </div>
    </div>
  );
}

export default Header;
