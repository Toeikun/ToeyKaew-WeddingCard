// src/components/WeddingFooter.js
"use client";
import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function WeddingFooter() {
  return (
    <section className="bg-white py-16 px-4">
      <motion.div
        className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Side: Main Image */}
        <motion.div
          variants={itemVariants}
          className="w-full md:w-1/2 lg:w-5/6 h-auto rounded-tl-4xl rounded-br-4xl overflow-hidden shadow-lg"
        >
          {/* Replace with your image */}
          <img
            src="./images/IMTL218.webp"
            alt="Wedding Couple"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Quote Section (แยกเป็น 3 motion.div) */}
        <div className="relative mb-6">
          {/* blockquote as the first motion element */}
          <motion.blockquote
            variants={itemVariants}
            className="text-lg md:text-xl italic text-neutral-600 tracking-wide leading-loose pl-8"
          >
            Thank you for being an important part of our story. We would
            especially like to thank our parents for giving us life, love, and
            opportunity, and for always supporting us wherever our dreams have
            taken us.
          </motion.blockquote>
          {/* Thank You Text (แยกเป็น motion.div) */}
          <div className="mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex items-center justify-center space-x-4 mb-4"
            >
              <hr className="border-[#6D5D51] w-20 md:w-28" />
              <p className="text-sm uppercase tracking-[0.2em] font-light text-[#6D5D51] leading-loose">
                Thank you
              </p>
              <hr className="border-[#6D5D51] w-20 md:w-28" />
            </motion.div>
            {/* ขอขอบคุณด้วยหัวใจ (แยกเป็น motion.div) */}
            <motion.p
              variants={itemVariants}
              className="text-3xl md:text-3xl font-serif text-center text-neutral-600 tracking-wide leading-loose"
            >
              ขอขอบคุณด้วยหัวใจ
            </motion.p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
