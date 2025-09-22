"use client";
import { motion } from "framer-motion";

export default function HeroHeader() {
  return (
    <section className="relative bg-[#f9f6f1] pt-10 pb-25">
      <div className="container mx-auto text-center gap-12">
        {/* อักษรย่อ KT */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-2xl romantic-text text-[#8b6b4f] leading-loose"
          >
            K&T
          </motion.h1>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* รูปภาพ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 2, y: 0 }}
          transition={{ duration: 3 }}
          viewport={{ once: true }}
          className="md:w-1/2 px-4"
        >
          <img
            src="./images/IMTL243.webp"
            alt="Couple"
            className="rounded-2xl shadow-lg"
          />
        </motion.div>

        {/* ข้อความ */}
        <div className="md:w-1/2 text-center w-full max-w-lg">
          {/* New Chapter Begins */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <h2 className="text-1xs md:text-2md font-semibold text-[#6D5D51] tracking-wide leading-loose">
              New Chapter Begins
            </h2>
          </motion.div>

          {/* Save the Date */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex items-center justify-center space-x-4 mb-4"
          >
            <hr className="border-[#6D5D51] w-20 md:w-28" />
            <p className="text-sm uppercase tracking-[0.2em] font-light text-[#6D5D51] leading-loose">
              Save the Date
            </p>
            <hr className="border-[#6D5D51] w-20 md:w-28" />
          </motion.div>

          {/* วันที่ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-3xl md:text-4xl font-semibold text-[#7a7a7a] tracking-wide leading-loose">
              NOVEMBER 15<sup>th</sup>, 2025
            </p>
          </motion.div>

          {/* ข้อความบรรยาย */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-sm text-gray-500 leading-loose px-4"
          >
            You are invited to our wedding ceremony and to the celebration of
            our marriage. We hope to see you on our special day.
          </motion.p>
        </div>
      </div>

      {/* Wave Shape ที่ด้านล่าง */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          className="w-full h-24"
        >
          <path
            className="fill-[#ffffff]"
            opacity="0.33"
            d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 
        c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"
          ></path>
          <path
            className="fill-[#ffffff]"
            opacity="0.66"
            d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 
        s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"
          ></path>
          <path
            className="fill-[#ffffff]"
            d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,
        132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
