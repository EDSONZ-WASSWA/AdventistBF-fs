import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BackgroundCarousel from '@/components/BackgroundCarousel'
import { serviceImages } from '@/lib/carouselImages'

const services = [
  {
    title: 'Traditional Funeral Services',
    description: 'Complete traditional funeral service including visitation, funeral ceremony, and burial.',
    image: '/pictures/funeral home.jpg'
  },
  {
    title: 'Cremation Services',
    description: 'Personalized cremation options with memorial services and compassionate care.',
    image: '/pictures/funeral 1.jpg'
  },
  {
    title: 'Memorial Services',
    description: 'Dignified memorial service to celebrate the life of your loved one.',
    image: '/pictures/grave 4.jpg'
  },
  {
    title: 'Transportation',
    description: 'Professional transportation services with care and dignity.',
    image: '/pictures/car with team.jpg'
  },
  {
    title: 'Grief Support',
    description: 'Compassionate counseling and support groups for families.',
    image: '/pictures/serving team ABF.jpg'
  },
  {
    title: 'Floral Arrangements',
    description: 'Beautiful floral arrangements for services and memorials.',
    image: '/pictures/arrangements.jpg'
  }
]

export default function Services() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 sm:pt-24 md:pt-20">
        <BackgroundCarousel
          images={serviceImages}
          interval={5000}
          className="h-64 sm:h-80 md:h-96"
        >
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-lg sm:text-xl">Comprehensive funeral and memorial services tailored to your needs</p>
          </div>
        </BackgroundCarousel>

        <section className="section-padding stable-layout">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl smooth-transition transform hover:-translate-y-1 gpu-accelerated">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-40 sm:h-48 md:h-56 object-cover optimized-image"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="card-padding">
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-secondary">{service.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}