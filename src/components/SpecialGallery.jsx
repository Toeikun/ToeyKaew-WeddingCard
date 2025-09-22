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

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="section py-16 px-4 bg-[#F5F2F0]">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-semibold text-[#6D5D51] mb-12"
        >
          SPECIAL GALLERY
        </motion.h2>

        <InfiniteScroll
          dataLength={items.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<h4 className="text-gray-500 my-8">Loading more photos...</h4>}
        >
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-4">
            {items.map((imgSrc, index) => (
              <motion.div
                key={index}
                className="w-full h-auto"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.8 }}
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

        {/* Section of final message */}
        <div className="mt-16 max-w-2xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={textVariants}
            viewport={{ once: true }}
            className="text-4xl font-semibold text-[#6D5D51] mb-4"
          >
            We can't wait to hear from you.
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            variants={textVariants}
            viewport={{ once: true }}
            className="text-gray-600 leading-relaxed text-sm"
          >
            We truly hope you can join us on our special day.  
            <br />
            Please come as you are no need for anything too formal.
            <br />
            Let's celebrate, laugh, and make great memories together. See you there!
          </motion.p>
        </div>
      </div>
    </div>
  );
};