"use client";
import { motion } from "framer-motion";
import { FacebookIcon, InstagramIcon, TagIcon } from "lucide-react";

const colors = [
  { name: "#91A096", hex: "#91A096" },
  { name: "#B8985F", hex: "#B8985F" },
  { name: "#959182", hex: "#959182" },
  { name: "#C8CDC8", hex: "#C8CDC8" },
];

const copyText = "#ToeyKaewNewChapter";

const handleCopy = async () => {
  try {
    await navigator.clipboard.writeText(copyText);
  } catch (err) {
    console.error("ไม่สามารถคัดลอกข้อความได้: ", err);
  }
};

export default function ThemeColor() {
  return (
    <section id="theme" className="py-20 px-4 bg-neutral-50">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl uppercase font-semibold text-neutral-600 text-center mb-6"
      >
        Theme Color
      </motion.h2>

      {/* วงกลมสี */}
      <div
        className="grid grid-cols-4 max-w-2xl mx-auto"
        style={{ gap: "5mm" }}
      >
        {colors.map((c, i) => (
          <motion.div
            key={c.hex}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div
              className="w-20 h-20 rounded-full shadow-md"
              style={{
                backgroundColor: c.hex,
                border: "1mm solid white",
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Social icons */}
      <div className="flex justify-center gap-6 mt-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1 * 0.2 }}
          viewport={{ once: true }}
          className="p-3 rounded-full shadow-md transition bg-blue-600"
        >
          <FacebookIcon className="w-6 h-6" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 2 * 0.2 }}
          viewport={{ once: true }}
          className="p-3 rounded-full shadow-md transition bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-300 ..."
        >
          <InstagramIcon className="w-6 h-6" />
        </motion.div>
        {/* ปุ่มสำหรับ Copy ด้วย Clipboard API */}
        <motion.button
          onClick={handleCopy}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 3 * 0.2 }}
          viewport={{ once: true }}
          data-tooltip-target="tooltip-click"
          data-tooltip-trigger="click"
          className="p-3 bg-white rounded-full shadow-md hover:bg-neutral-200 transition flex items-center gap-2"
        >
          <span className="text-neutral-600 font-semibold text-sm">
            #ToeyKaewNewChapter
          </span>
        </motion.button>
        <div id="tooltip-click" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-xs opacity-0 tooltip dark:bg-gray-700">
          Tooltip content
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
      </div>
    </section>
  );
}
