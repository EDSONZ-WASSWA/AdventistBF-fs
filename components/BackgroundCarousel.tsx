'use client'

import { useState, useEffect } from 'react'

interface BackgroundCarouselProps {
  images: string[]
  interval?: number
  className?: string
  children?: React.ReactNode
}

export default function BackgroundCarousel({
  images,
  interval = 5000,
  className = '',
  children
}: BackgroundCarouselProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!images || images.length === 0) {
    return null
  }

  // Auto-cycling effect - works on all devices
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      )
    }, interval)

    return () => clearInterval(timer)
  }, [images.length, interval])

  return (
    <section
      className={`relative flex items-center justify-center text-white overflow-hidden stable-layout gpu-accelerated ${className}`}
      style={{
        backgroundImage: `url("${images[currentImageIndex]}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
        transition: 'background-image 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        willChange: 'background-image',
        containIntrinsicSize: 'auto 300px'
      }}
    >
      {/* Preload all images to prevent loading delays and layout shifts */}
      <div className="absolute inset-0 opacity-0 pointer-events-none overflow-hidden">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt=""
            className="w-full h-full object-cover optimized-image"
            loading="eager"
            decoding="async"
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent smooth-transition"></div>

      {/* Carousel indicators - Visible on all devices */}
      <div className="absolute bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 hover:bg-white hover:scale-110 focus:bg-white focus:scale-110 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 ${
              index === currentImageIndex ? 'bg-white scale-110' : 'bg-white bg-opacity-50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 text-center">
        {children}
      </div>
    </section>
  )
}