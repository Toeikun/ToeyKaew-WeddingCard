"use client";
import { useEffect, useState } from "react";

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

  const renderCountdownBox = (value, label) => (
    <div className="bg-[#d3c2b1] text-center rounded-2xl p-4 m-2 shadow-md flex-1">
      <div className="text-white text-3xl">
        {String(value).padStart(2, '0')}
      </div>
      <div className="text-white text-sm mt-1">
        {label}
      </div>
    </div>
  );
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Left side - Text & Countdown */}
        <div className="text-center md:text-center">
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

          {/* Countdown */}
          <div className="flex justify-center items-center">
            {renderCountdownBox(timeLeft.days, 'Days')}
            {renderCountdownBox(timeLeft.hours, 'Hours')}
            {renderCountdownBox(timeLeft.minutes, 'Minutes')}
            {renderCountdownBox(timeLeft.seconds, 'Seconds')}
          </div>
        </div>

        {/* Right side - Image */}
        <div>
          <img
            src="./images/IMTL207.webp" // 👈 เปลี่ยน path รูปเองได้
            alt="Wedding Couple"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
  
}
