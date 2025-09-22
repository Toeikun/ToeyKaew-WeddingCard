"use client";
import React from "react";
import { motion } from "framer-motion";

// Variants สำหรับการกำหนดลำดับและลักษณะของ animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // ทำให้ element ลูกแสดงผลทีละชิ้น
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

export default function WeddingInvitation() {
  return (
    <section className="bg-white py-16 px-4">
      <motion.h2
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-4xl uppercase font-semibold text-neutral-600 text-center mb-4"
      >
        On Behalf Of
      </motion.h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Left side - Text & Countdown */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <img
            src="./images/IMTL140.webp"
            alt="Wedding Couple 2"
            className="w-full h-full rounded-lg object-cover"
          />
        </motion.div>

        {/* Right side - Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="text-center">
            <p className="text-[#8b6b4f] mb-1 font-serif">BRIDE'S PARENTS</p>
            <div className="text-gray-500 tracking-wide leading-loose">
              <p>คุณปรีชา จินตเสรีวงศ์</p>
              <p>คุณพัชรา จินตเสรีวงศ์</p>
            </div>
          </div>
          <div className="text-3xl text-gray-500 font-serif px-3">&</div>
          <div className="text-center">
            <p className="text-[#8b6b4f] mb-1 font-serif">GROOM'S PARENTS</p>
            <div className="text-gray-500 tracking-wide leading-loose">
              <p>คุณมณฑล มนวรัชกรนุกูล</p>
              <p>คุณขนิษฐา คุ้มเสนียด</p>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-1 items-center gap-10">
        {/* Invitation Message */}
        <motion.div 
        initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          variants={itemVariants} className="text-center my-12 tracking-wide text-md leading-loose">
          <p className="text-[#8b6b4f] font-bold">WE ARE PLEASED TO INVITE YOU TO THE WEDDING</p>
          <p className='text-gray-500'>มีความยินดีขอเรียนเชิญท่านเพื่อเป็นเกียรติ</p>
          <p className='text-gray-500'>เนื่องในพิธีมงคลสมรส</p>
        </motion.div>
      </div>
      <div className="bg-white py-4 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-1 items-center gap-10">
          {/* Couple and Images Section */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 bg-[#F5F2F0] rounded-4xl z-20">
            {/* Left Box: Couple Names */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              variants={itemVariants}
              className="p-6 md:p-6 lg:p-8 rounded-lg w-full md:w-3/5 bg-[#F5F2F0] rounded-t-full z-10 "
            >
              <div className="text-center">
                <p className="font-serif text-md text-gray-500">
                  นางสาวศุภมาส จินตเสรีวงศ์ (แก้ว)
                </p>
                <p className="lg:text-4xl text-3xl font-semibold text-[#7a7a7a] mt-2">
                  Supamas Jintasereewong
                </p>
                <p className="my-2 text-gray-500 font-semibold text-sm">and</p>
                <p className="lg:text-4xl text-3xl font-semibold text-[#7a7a7a]">
                  Chayut Pruekthanes
                </p>
                <p className="font-serif text-md text-gray-500">
                  นายชยุต พฤกษ์ธเนศ (เต้ย)
                </p>
              </div>
            </motion.div>

            {/* Right Box: Couple Image */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              variants={itemVariants}
              className="w-full md:w-3/5 h-auto overflow-hidden rounded-lg shadow-lg -mt-10 md:mt-0"
            >
              <img
                src="./images/IMTL221.webp"
                alt="Wedding Couple 1"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
