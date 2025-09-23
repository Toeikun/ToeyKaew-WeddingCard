"use client";
import { motion } from "framer-motion";
import { Church, Utensils, MapPinned } from "lucide-react";

export default function ReceptionSchedule() {
  return (
    <section
      id="reception"
      className="section relative py-10 px-4 bg-neutral-200 overflow-hidden"
    >
      {/* พื้นหลังตัดเฉียงด้านบน */}
      <div
        className="absolute top-0 left-0 w-full h-40 bg-white"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 70%, 0 100%)",
        }}
      />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-semibold text-neutral-600 mb-6"
        >
          WEDDING <p className="text-gray-500">SCHEDULE</p>
        </motion.h2>
        <div className="flex items-center justify-center gap-4 text-gray-600 mb-6">
          <span className="w-20 md:w-28 border-t border-gray-400" />
          <p className="text-lg font-light">กำหนดการ</p>
          <span className="w-20 md:w-28 border-t border-gray-400" />
        </div>
        {/* วันที่ */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-3xl md:text-1xl font-semibold text-[#7a7a7a] tracking-wide leading-loose">
            NOVEMBER 15<sup>th</sup>, 2025
          </p>
          <p className="text-lg font-medium text-[#7a7a7a] leading-loose">
            วันเสาร์ที่ 15 พฤศจิกายน 2568
          </p>
        </motion.div>
        {/* Schedule items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-3xl mx-auto">
          {/* พิธีมงคลสมรส */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gray-100 shadow-md mb-4">
              <Church className="w-10 h-10 text-[#B8985F]" />
            </div>
            <p className="text-lg text-gray-700">14:00 น.</p>
            <p className="font-medium text-[#B8985F]">พิธีมงคลสมรส</p>
            <p className="text-sm text-gray-500">
              WEDDING CEREMONY (IN CHURCH)
            </p>
          </motion.div>

          {/* รับประทานอาหาร */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gray-100 shadow-md mb-4">
              <Utensils className="w-10 h-10 text-[#B8985F]" />
            </div>
            <p className="text-lg text-gray-700">16:00 น.</p>
            <p className="font-medium text-[#B8985F]">
              รับประทานอาหาร (โต๊ะจีน)
            </p>
            <p className="text-sm text-gray-500">DINNER CELEBRATION</p>
          </motion.div>
        </div>
        {/* Location Section */}
        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center mb-6"
          >
            <MapPinned className="w-10 h-10 text-neutral-600" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img
              src="./images/Location2.png"
              alt="Location"
              className="w-4/5 rounded-xl shadow mb-4"
            />
          </motion.div>
          <p className="text-2xl md:text-1xl font-serif text-[#7A6C63] mb-6">
            วัดนักบุญเปโตร สามพราน
          </p>

          {/* Google Maps Button */}
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%9A%E0%B8%B8%E0%B8%8D%E0%B9%80%E0%B8%9B%E0%B9%82%E0%B8%95%E0%B8%A3%20%E0%B8%AA%E0%B8%B2%E0%B8%A1%E0%B8%9E%E0%B8%A3%E0%B8%B2%E0%B8%99%20%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%9B%E0%B8%90%E0%B8%A1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 rounded-lg bg-[#B9A693] text-white font-semibold text-sm md:text-base tracking-wider hover:bg-[#B9A693] transition duration-300 shadow-md"
          >
            VENUE : สถานที่จัดงาน
          </a>
        </div>
      </div>
    </section>
  );
}
