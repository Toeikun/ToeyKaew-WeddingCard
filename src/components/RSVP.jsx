"use client";
import { motion } from "framer-motion";

export default function RSVP() {
  return (
    <section id="rsvp" className="py-20 px-4 bg-white">
      <div className="flex justify-center items-center min-h-screen bg-white">
        <div className="max-w-6xl w-full flex flex-col lg:flex-row bg-white rounded-3xl shadow-lg overflow-hidden">
          {/* Left Section - RSVP Text */}
          <div className="w-full lg:w-1/2 p-8 md:p-12 flex flex-col justify-center items-center text-center">
            <h2 className="text-4xl md:text-5xl font-serif text-[#7A6C63] mb-4 tracking-wide">
              R.S.V.P
            </h2>
            <div className="flex items-center justify-center space-x-4 mb-8">
              <hr className="border-[#7A6C63] w-16 md:w-20" />
              <p className="text-base md:text-lg font-light text-[#7A6C63]">
                คำตอบของคุณ มีค่าสำหรับพวกเรา
              </p>
              <hr className="border-[#7A6C63] w-16 md:w-20" />
            </div>

            <p className="text-sm md:text-base text-gray-500 mb-6 max-w-sm leading-relaxed">
              Please fill-in attending information for our arrangement in advance.
            </p>

            <p className="text-sm md:text-base text-gray-500 mb-8 max-w-sm leading-relaxed">
              เพื่อเป็นการให้เราได้จัดเตรียมล่วงหน้าได้อย่างเหมาะสม <br />
              ขอรบกวนทุกท่านทำแบบตอบรับการเข้าร่วมงานให้เราด้วยนะคะ
            </p>

            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSfR2T7_0LTWSh9oJTgp2Zu7lEWojiFxodcbQfUvx8HP5QWmlg/viewform?usp=preview"
              target="_black"
              className="flex items-center space-x-2 px-6 py-3 bg-[#AE9F99] text-white rounded-full hover:bg-[#9B8C86] transition duration-300">
              <span className="text-xl">✉️</span> {/* หรือ <EnvelopeIcon /> จาก Heroicons */}
              <span className="text-sm md:text-base font-semibold">RSVP : ตอบรับเข้าร่วมงาน</span>
            </a>
          </div>

          {/* Right Section - Image with Curved Edge */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative h-96 lg:h-full w-full">
              {/* Image container with custom curved shape */}
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/IMTL241.webp')" }}>
                <div className="absolute inset-0 bg-white lg:bg-transparent custom-curved-overlay-lg"></div>
                <div className="absolute inset-0 bg-white custom-curved-overlay-sm"></div>
              </div>
              {/* Fallback for smaller screens, if the curved overlay creates issues, use a simpler rounded one */}
              <img
                src="./images/IMTL241.webp" // แทนที่ด้วย path รูปภาพของคุณ
                alt="Couple"
                className="absolute inset-0 w-full h-full object-cover rounded-br-3xl rounded-tr-3xl" // Rounded for small screens
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
