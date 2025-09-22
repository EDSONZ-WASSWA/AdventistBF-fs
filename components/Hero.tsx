import BackgroundCarousel from './BackgroundCarousel'
import { heroImages } from '@/lib/carouselImages'

export default function Hero() {
  return (
    <BackgroundCarousel
      images={heroImages}
      interval={6000}
      className="h-screen sm:h-[80vh] md:h-screen mt-16 sm:mt-20"
    >
      <div className="text-center container mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-shadow-lg">
          Compassionate Care During Your Time of Need
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 max-w-3xl mx-auto px-2">
          At ABF Funeral Services, we provide dignified and supportive funeral arrangements to honor your loved ones with warmth and respect.
        </p>
        <a href="/contact" className="btn inline-block text-sm sm:text-base px-6 py-3">
          Contact Us Today
        </a>
      </div>
    </BackgroundCarousel>
  )
}