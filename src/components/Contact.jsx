"use client";

import Image from "next/image";
import React, { useState } from "react";
import { assets } from "../../assets/assets";
import { toast } from "sonner";
import * as motion from "motion/react-client";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    toast("Email Sent Successfully...");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <motion.div
      id="contact"
      className="w-full px-[12%] pb-10 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        className="text-center mb-2 text-lg font-Ovo"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Connect with me
      </motion.h4>
      <motion.h2
        className="text-center text-5xl font-Ovo"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        Get in touch
      </motion.h2>
      <motion.p
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        I'd love to hear from you! If you have any questions, comments, or
        feedback, please use the form below.
      </motion.p>

      <motion.form
        className="max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        onSubmit={handleOnSubmit}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-8">
          <motion.input
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
            value={formData.name}
            type="text"
            placeholder="Enter your name"
            required
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          />
          <motion.input
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
            value={formData.email}
            type="email"
            placeholder="Enter your email"
            required
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          />
        </div>
        <motion.textarea
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90"
          rows="6"
          value={formData.message}
          placeholder="Type your message..."
          required
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        ></motion.textarea>
        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="py-3 px-8 w-max flex items-center justify-between gap-2 gap-x-5 bg-black/90 text-white rounded-full mx-auto hover:scale-105 hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover"
          type="submit"
        >
          Submit
          <motion.div initial={{ x: -10 }} whileHover={{ x: 0 }}>
            <Image
              src={assets.right_arrow_white}
              alt="submit"
              className="w-4"
            />
          </motion.div>
        </motion.button>
      </motion.form>
    </motion.div>
  );
}

export default Contact;
