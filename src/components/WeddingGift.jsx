"use client";
import { motion } from "framer-motion";

export default function WeddingGift() {
  return (
    <section id="gift" className="py-20 px-4 bg-white">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-semibold text-neutral-600 text-center mb-4"
      >
        Wedding Gift
      </motion.h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
        สามารถส่งของขวัญได้ผ่าน QR Code
      </p>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-sm mx-auto bg-white rounded-2xl shadow p-6 text-center"
      >
        <img
          src="./images/QRPayment.jpg"
          alt="QR Code"
          className="rounded-xl shadow mb-4"
        />
        <p className="text-gray-600">กรุณาแจ้งหลังโอนเรียบร้อย ขอบคุณค่ะ/ครับ</p>
      </motion.div>
    </section>
  );
}
