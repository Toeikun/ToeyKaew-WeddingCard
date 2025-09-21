"use client";
import React from 'react';
import { motion } from 'framer-motion';

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
    <section className="bg-white py-16 px-4 ">
      <motion.div
        className="container mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Top Section: Image and "On Behalf Of" */}
        <div className="flex flex-col md:flex-row items-center md:items-start md:justify-center gap-12 mb-12">
          {/* Left Side: Main Image */}
          <motion.div variants={itemVariants} className="w-full md:w-3/5 h-auto overflow-hidden rounded-lg shadow-lg">
            <img 
              src="./images/IMTL171.webp" 
              alt="Wedding Couple 2" 
              className="w-full h-full object-cover" 
            />
          </motion.div>
          {/* Right Side: On Behalf Of Section */}
          <motion.div variants={itemVariants} className="w-full md:w-3/5 items-center">
            <div className="text-center md:text-center">  
              <h1 className="text-4xl font-semibold text-neutral-600 text-center mb-8">
                On Behalf Of
              </h1>
              <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6 md:gap-18">
                <div className="flex-1 text-center">
                  <p className="text-[#8b6b4f] mb-1">BRIDE'S PARENTS</p>
                  <div className="text-gray-500 text-sm tracking-wide leading-loose">
                    <p>คุณปรีชา จินตเสรีวงศ์</p>
                    <p>Preecha Jintasereewong</p>
                    <p>คุณพัชรา จินตเสรีวงศ์</p>
                    <p>Patchara Jintasereewong</p>
                  </div>
                </div>
                <div className="text-3xl text-gray-500 font-serif hidden md:block">&</div>
                <div className="flex-1 text-center">
                  <p className="text-[#8b6b4f] mb-1">GROOM'S PARENTS</p>
                  <div className="text-gray-500 text-sm tracking-wide leading-loose">
                    <p>คุณมณฑล มนวรัชกรนุกูล</p>
                    <p>Monthon Manwaratkanukul</p>
                    <p>คุณขนิษฐา คุ้มเสนียด</p>
                    <p>Khanitha Khumsaniat</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Invitation Message */}
        <motion.div variants={itemVariants} className="text-center my-12 tracking-wide text-md leading-loose">
          <p className="text-[#8b6b4f] font-bold">WE ARE PLEASED TO INVITE YOU TO THE WEDDING</p>
          <p className='text-gray-500'>มีความยินดีขอเรียนเชิญท่านเพื่อเป็นเกียรติ</p>
          <p className='text-gray-500'>เนื่องในพิธีมงคลสมรส</p>
        </motion.div>
        
        {/* Couple and Images Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Left Box: Couple Names */}
          <motion.div
            variants={itemVariants}
            className="p-6 md:p-6 lg:p-8 rounded-lg w-full md:w-3/5"
          >
            <div className="text-center">
              <p className="font-serif text-xl text-gray-500">
                นางสาวศุภมาส จินตเสรีวงศ์ (แก้ว)
              </p>
              <p className="romantic-text text-[#7a7a7a] mt-2">
                Supamas Jintasereewong
              </p>
              <p className="my-2 text-gray-500 romantic-text text-sm">and</p>
              <p className="romantic-text text-[#7a7a7a]">
                Chayut Pruekthanes
              </p>
              <p className="font-serif text-xl text-gray-500">
                นายชยุต พฤกษ์ธเนศ (เต้ย)
              </p>
            </div>
          </motion.div>
          {/* Right Box: Couple Image */}
          <motion.div
            variants={itemVariants}
            className="w-full md:w-3/5 h-auto overflow-hidden rounded-lg shadow-lg"
          >
            <img 
              src="./images/IMTL221.webp" 
              alt="Wedding Couple 1" 
              className="w-full h-full object-cover" 
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
