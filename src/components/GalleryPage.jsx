// ไฟล์ GalleryPage.jsx

import React from 'react';
import { PhotoCarousel } from './PhotoCarouselProps'; // Path to your PhotoCarousel component
import { SpecialGallery } from './SpecialGallery'; // Path to your SpecialGallery component

// ใส่ path ของรูปภาพสำหรับแต่ละส่วน
const carouselImages = [
  './images/I mmotel Love (209).jpg',
  './images/I mmotel Love (213).jpg',
  './images/I mmotel Love (214).jpg',
  './images/SpecialGallery/I mmotel Love (11).jpg',
  './images/SpecialGallery/I mmotel Love (14).jpg',
  './images/SpecialGallery/I mmotel Love (19).jpg',
];

const galleryImages = [
  './images/SpecialGallery/I mmotel Love (31).jpg',
  './images/SpecialGallery/I mmotel Love (60).jpg',
  './images/SpecialGallery/I mmotel Love (92).jpg',
  './images/SpecialGallery/I mmotel Love (97).jpg',
  './images/SpecialGallery/I mmotel Love (101).jpg',
  './images/SpecialGallery/I mmotel Love (113).jpg',
  './images/SpecialGallery/I mmotel Love (266).jpg',
  './images/SpecialGallery/I mmotel Love (270).jpg',
  './images/SpecialGallery/I mmotel Love (295).jpg',
  './images/SpecialGallery/I mmotel Love (302).jpg'
];

const GalleryPage = () => {
  return (
    <div className="bg-[#F5F2F0]">
      {/* ส่วนของ PhotoCarousel */}
      <PhotoCarousel images={carouselImages} />

      {/* ส่วนของ SpecialGallery */}
      <SpecialGallery allImages={galleryImages} />
    </div>
  );
};

export default GalleryPage;