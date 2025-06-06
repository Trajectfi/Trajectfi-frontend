"use client"

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const images = [
  "/images/1.png",
  "/images/2.png",
  "/images/3.png",
  "/images/4.png",
  "/images/5.png",
  "/images/6.png",
  "/images/7.png",
];

export default function GalleryCarousel() {
  const [carousel, setCarousel] = useState(images);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  // Autoplay
  useEffect(() => {
    autoplayRef.current = setInterval(() => {
      setCarousel((prev) => {
        const next = [...prev];
        next.push(next.shift()!);
        return next;
      });
    }, 2000);
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, []);

  const move = (dir: "next" | "prev") => {
    setCarousel((prev) => {
      const next = [...prev];
      if (dir === "next") {
        next.push(next.shift()!);
      } else {
        next.unshift(next.pop()!);
      }
      return next;
    });
  };

  return (
    <div className="gallery">
      <div className="gallery-container">
        {carousel.slice(0, 7).map((src, i) => (
          <motion.img
            key={src}
            src={src}
            className={`gallery-item gallery-item-${i + 1}`}
            data-index={i + 1}
            draggable={false}
            alt="NFT"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            style={{
              objectFit: 'cover',
              display: 'block',
            }}
          />
        ))}
      </div>
    </div>
  );
} 