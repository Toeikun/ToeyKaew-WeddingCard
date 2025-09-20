// ไฟล์ SpecialGallery.jsx

'use client';

import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { motion } from 'framer-motion';

const shuffleArray = (array) => {
  let newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

export const SpecialGallery = ({ allImages }) => {
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [shuffledImages, setShuffledImages] = useState([]);

  useEffect(() => {
    const shuffled = shuffleArray(allImages);
    setShuffledImages(shuffled);
    setItems(shuffled.slice(0, 10));
  }, [allImages]);

  const fetchMoreData = () => {
    if (items.length >= shuffledImages.length) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      setItems(items.concat(shuffledImages.slice(items.length, items.length + 10)));
    }, 1500);
  };

  return (
    <div className="section py-16 px-4 bg-[#F5F2F0]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-semibold text-[#6D5D51] mb-12">
          SPECIAL GALLERY
        </h2>

        <InfiniteScroll
          dataLength={items.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<h4 className="text-gray-500 my-8">Loading more photos...</h4>}
          endMessage={
            <p className="text-gray-500 my-8">
              <b>You have seen all the photos!</b>
            </p>
          }
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {items.map((imgSrc, index) => (
              <motion.div
                key={index}
                className="w-full h-auto"
                initial={{ opacity: 0, y: 50 }} // กำหนดสถานะเริ่มต้น: ซ่อนอยู่และอยู่ต่ำกว่า
                whileInView={{ opacity: 1, y: 0 }} // กำหนดสถานะเป้าหมาย: ปรากฏขึ้นและเลื่อนขึ้นมา
                transition={{ duration: 0.6, delay: index * 0.1 }} // กำหนดระยะเวลาและความหน่วง
                viewport={{ once: true, amount: 0.8 }} // กำหนดให้ animation ทำงานแค่ครั้งเดียวเมื่ออยู่ในหน้าจอ
              >
                <img
                  src={imgSrc}
                  alt={`Gallery photo ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg shadow-sm aspect-square"
                />
              </motion.div>
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
};