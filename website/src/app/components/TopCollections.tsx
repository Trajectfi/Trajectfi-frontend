import React from 'react'
import GalleryCarousel from './GalleryCarousel'
import MobileCarousel from './MobileCarousel'
const TopCollections = () => {
    return (
        <>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent text-center">
                Top Collections
            </h2>
            <GalleryCarousel />
            <MobileCarousel />
        </>
    )
}

export default TopCollections