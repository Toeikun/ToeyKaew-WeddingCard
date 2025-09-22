"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function IntroSection() {
  const targetDate = new Date("2025-11-15T00:00:00"); // กำหนดวันที่งาน

  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      let timeLeft = {};

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      return timeLeft;
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeSegments = [
    { value: timeLeft.days, label: "DAYS" },
    { value: timeLeft.hours, label: "HOURS" },
    { value: timeLeft.minutes, label: "MINUTES" },
    { value: timeLeft.seconds, label: "SECONDS" },
  ];

  // Variants สำหรับ animation แบบ fade-in และ scale-up
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section className="bg-white py-16 px-4">
      <motion.div
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10"
        variants={containerVariants}
      >
        {/* Left side - Text & Countdown */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible" // 👈 เปลี่ยนจาก animate เป็น whileInView
          viewport={{ once: true }} // 👈 เพิ่ม viewport เพื่อให้ animation ทำงานแค่ครั้งเดียว
          className="w-full md:w-1/2 text-center"
        >
          <h2 className="text-4xl font-semibold tracking-widest text-neutral-600 mb-6">
            SATURDAY
          </h2>
          <div className="flex items-center justify-center gap-4 text-gray-600 mb-6">
            <span className="w-20 md:w-28 border-t border-gray-400" />
            <p className="text-lg font-medium">15ᵗʰ NOV 2025</p>
            <span className="w-20 md:w-28 border-t border-gray-400" />
          </div>
          <p className="text-gray-500 text-sm mb-8">
            Please join us in celebrating our love and marriage, countdown in...
          </p>
          <div className="flex justify-center items-center font-sans tracking-wide text-center">
            {timeSegments.map((segment, index) => (
              <React.Fragment key={index}>
                <div className="flex flex-col items-center mx-2 md:mx-4">
                  <span className="text-4xl md:text-6xl text-[#b49a94]">
                    {String(segment.value).padStart(2, "0")}
                  </span>
                  <span className="text-sm md:text-base text-[#b49a94]">
                    {segment.label}
                  </span>
                </div>
                {index < timeSegments.length - 1 && (
                  <span className="text-4xl md:text-6xl text-[#b49a94] font-light">
                    :
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        {/* Right side - Image */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible" // 👈 เปลี่ยนจาก animate เป็น whileInView
          viewport={{ once: true }} // 👈 เพิ่ม viewport เพื่อให้ animation ทำงานแค่ครั้งเดียว
          className="w-full md:w-1/2"
        >
          <img
            src="./images/IMTL207.webp"
            alt="Wedding Couple"
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
