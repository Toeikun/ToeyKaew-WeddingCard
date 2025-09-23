"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gift } from "lucide-react";

export default function WeddingGift() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section id="gift" className="py-20 px-4 bg-white">
      {/* Gift */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex flex-col items-center"
      >
        <div className="w-20 h-20 flex items-center justify-center rounded-full bg- shadow-md mb-6">
          <Gift className="w-10 h-10 text-pink-300" />
        </div>
      </motion.div>
      {/* Gift Section Content */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl uppercase font-semibold text-pink-300 text-center mb-4"
      >
        Wedding Gift
      </motion.h2>
      <div className="flex items-center justify-center gap-4 text-gray-600 mb-6">
        <span className="w-18 md:w-26 border-t border-gray-400" />
        <p className="text-sm font-light">ส่งของขวัญให้คู่บ่าวสาว</p>
        <span className="w-18 md:w-26 border-t border-gray-400" />
      </div>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
        ร่วมแสดงความยินดีและส่งมอบของขวัญให้คู่บ่าวสาว เนื่องในโอกาสพิเศษ ผ่านช่องทาง QR นี้
      </p>

      {/* Button to open the modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <button
          onClick={openModal}
          className="bg-pink-300 text-white px-8 py-3 rounded-full shadow-lg hover:bg-[#FAD4A8] transition-colors"
        >
          QR CODE ส่งของขวัญ
        </button>
      </motion.div>

      <p className="text-sx text-gray-600 text-center mb-4">
        ขอขอบคุณทุกท่านที่ร่วมเป็นส่วนหนึ่งในวันสำคัญของเรา หากส่งของขวัญให้เราแล้ว แจ้งให้เราทราบทาง Line นะคะ
      </p>

      {/* Full-screen Modal for QR Code */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="bg-white rounded-lg p-6 shadow-xl relative max-w-lg w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
              >
                &times;
              </button>
              <img
                src="./images/QRPayment.jpg"
                alt="QR Code"
                className="rounded-xl shadow w-full mb-4"
              />
              {/* <a
                href="./images/QRPayment.jpg"
                download
                className="block w-full text-center bg-[#d3c2b1] text-white py-3 rounded-full hover:bg-[#b4a395] transition-colors"
              >
                ดาวน์โหลด QR Code
              </a> */}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
