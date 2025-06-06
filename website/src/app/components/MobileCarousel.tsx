"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import React from "react";

const images = [
  "/images/1.png",
  "/images/2.png",
  "/images/3.png",
  "/images/4.png",
  "/images/5.png",
  "/images/6.png",
  "/images/7.png",
];

export default function MobileCarousel() {
  return (
    <div className="mobile-carousel">
      <Swiper
        spaceBetween={16}
        slidesPerView={2}
        centeredSlides
        loop
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        modules={[Autoplay]}
        style={{ width: "100%", height: 260, overflow: "hidden" }}
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <img
              src={src}
              alt={`NFT ${i + 1}`}
              style={{
                width: 180,
                height: 240,
                objectFit: "cover",
                boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
                margin: "0 auto",
                borderRadius: 16,
                display: "block"
              }}
              draggable={false}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
} 