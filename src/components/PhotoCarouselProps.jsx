'use client';

import React, { useState } from 'react';
import Slider from 'react-slick';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const PhotoCarousel = ({ images }) => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(-1);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const slides = images.map(src => ({ src }));

  return (
    <div className="section py-16 px-4 bg-[#F5F2F0]">
      <div className="max-w-7xl mx-auto">
        <Slider {...settings}>
          {images.map((imgSrc, i) => (
            <div key={i} className="px-2 cursor-pointer">
              <img
                src={imgSrc}
                alt={`Wedding photo ${i + 1}`}
                className="w-full h-full object-cover rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105"
                onClick={() => {
                  setOpen(true);
                  setIndex(i);
                }}
              />
            </div>
          ))}
        </Slider>

        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={slides}
          index={index}
        />
      </div>
    </div>
  );
};

