'use client'
import BackgroundCarousel from './BackgroundCarousel'
import { heroImages } from '@/lib/carouselImages'
import { useScrollAnimation } from '@/lib/useScrollAnimation'
export default function Hero() {
  const heroRef = useScrollAnimation()
  return (
    <BackgroundCarousel
      images={heroImages}
      interval={6000}
      className="landscape-hero h-[90vh] sm:h-[80vh] md:h-[110vh] lg:h-[140vh] xl:h-[140vh] mt-0"
    >
      <div ref={heroRef} className="text-center container mx-auto px-4 pt-16 sm:pt-20 md:pt-24 pb-0 fade-in-up">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 text-shadow-lg">
          Compassionate Care During Your Time of Need
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 max-w-3xl mx-auto px-2">
          At ABF Funeral Services, we provide dignified and supportive funeral arrangements to honor your loved ones with warmth and respect.
        </p>
        <a href="/contact" className="btn inline-block text-sm sm:text-base px-6 py-3 hover:scale-105 transition-transform duration-300">
          Contact Us Today
        </a>
      </div>
    </BackgroundCarousel>
  )
}