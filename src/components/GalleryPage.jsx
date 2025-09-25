// ไฟล์ GalleryPage.jsx

import React from 'react';
import { SpecialGallery } from './SpecialGallery'; // Path to your SpecialGallery component

const galleryImages = [
  './images/IMTL31.webp',
  './images/IMTL92.webp',
  './images/IMTL97.webp',
  './images/IMTL218.webp',
  './images/IMTL266.webp',
  './images/IMTL270.webp',
  './images/IMTL295.webp',
  './images/IMTL225.webp'
];

const GalleryPage = () => {
  return (
    <div className="bg-[#F5F2F0]">
      {/* ส่วนของ SpecialGallery */}
      <SpecialGallery allImages={galleryImages} />
    </div>
  );
};

export default GalleryPage;