'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

const images = [
  "/images/1.png",
  "/images/2.png",
  "/images/3.png",
  "/images/4.png",
  "/images/5.png",
  "/images/6.png",
  "/images/7.png",
];

export default function TopCollections() {
  return (
    <section className="w-full py-16 flex flex-col items-center bg-transparent">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent text-center">
        Top Collections
      </h2>
      <style>{`
        .top-collections-swiper {
          margin-left: auto;
          margin-right: auto;
          width: 100%;
          max-width: 1200px;
          overflow: visible;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 240px;
        }
        .top-collections-swiper .swiper-wrapper {
          display: flex;
          align-items: center;
          height: 240px;
          pointer-events: none;
        }
        .top-collections-swiper .swiper-slide {
          display: flex;
          justify-content: center;
          align-items: center;
          transition: transform 0.4s;
          height: 240px;
        }
        .top-collections-swiper .swiper-slide img {
          width: 120px;
          height: 180px;
          transition: width 0.4s, height 0.4s, box-shadow 0.4s;
          opacity: 1;
          object-fit: cover;
          display: block;
          margin: 0 auto;
        }
        .top-collections-swiper .swiper-slide-active img {
          width: 300px;
          height: 400px;
          box-shadow: 0 8px 32px 0 rgba(255,140,0,0.4);
          opacity: 1;
          z-index: 2;
        }
        .top-collections-swiper .swiper-slide-active {
          opacity: 1;
        }
        .top-collections-swiper .swiper-slide-next img,
        .top-collections-swiper .swiper-slide-prev img {
          width: 140px;
          height: 200px;
          opacity: 1;
        }
      `}</style>
      <div className="w-full flex justify-center items-center overflow-visible">
        <div className="w-full max-w-[1200px] overflow-visible flex justify-center items-center mx-auto">
          <Swiper
            effect="coverflow"
            grabCursor={false}
            centeredSlides={true}
            slidesPerView={7}
            loop={true}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            coverflowEffect={{
              rotate: 0,
              stretch: 80,
              depth: 0,
              modifier: 1,
              slideShadows: false,
            }}
            modules={[EffectCoverflow, Autoplay]}
            className="top-collections-swiper mx-auto"
            style={{height:540}}
          >
            {images.map((src, idx) => (
              <SwiperSlide key={idx} style={{height:240}}>
                <img
                  src={src}
                  alt={`Collection ${idx + 1}`}
                  className="rounded-xl object-cover mx-auto"
                  draggable={false}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
} 