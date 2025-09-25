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

        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12" style={{color: '#1030e6'}}>Comprehensive Funeral Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
                <h3 className="text-2xl font-bold mb-6 text-secondary">Core Services</h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-secondary mr-3 mt-1">✓</span>
                    <span className="leading-relaxed">Funeral home</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-3 mt-1">✓</span>
                    <span className="leading-relaxed">Body Storage as requested</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-3 mt-1">✓</span>
                    <span className="leading-relaxed">Embalming services & beauty works</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-3 mt-1">✓</span>
                    <span className="leading-relaxed">Death announcements & awareness creation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-3 mt-1">✓</span>
                    <span className="leading-relaxed">Executive coffins & caskets</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-3 mt-1">✓</span>
                    <span className="leading-relaxed">Executive transport for body and bereaved family</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-3 mt-1">✓</span>
                    <span className="leading-relaxed">Pole bearers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-3 mt-1">✓</span>
                    <span className="leading-relaxed">Wears for bereaved family</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-3 mt-1">✓</span>
                    <span className="leading-relaxed">Free professional advice</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-3 mt-1">✓</span>
                    <span className="leading-relaxed">Order of Service</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-3 mt-1">✓</span>
                    <span className="leading-relaxed">Body tent</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-3 mt-1">✓</span>
                    <span className="leading-relaxed">Choirs & Soft music</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-3 mt-1">✓</span>
                    <span className="leading-relaxed">Condolence cards</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-3 mt-1">✓</span>
                    <span className="leading-relaxed">Counseling & depression management services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-3 mt-1">✓</span>
                    <span className="leading-relaxed">Coordination of religious services of any faith</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-3 mt-1">✓</span>
                    <span className="leading-relaxed">Postmortem (if required)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-3 mt-1">✓</span>
                    <span className="leading-relaxed">Repatriation (if required)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-3 mt-1">✓</span>
                    <span className="leading-relaxed">PA system</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
                <h3 className="text-2xl font-bold mb-6 text-secondary">Additional Services</h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-secondary mr-3 mt-1">✓</span>
                    <span className="leading-relaxed">Tents & Chairs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-3 mt-1">✓</span>
                    <span className="leading-relaxed">Sale of funeral equipment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-3 mt-1">✓</span>
                    <span className="leading-relaxed">Brass band</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-3 mt-1">✓</span>
                    <span className="leading-relaxed">Hope trumpet</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-3 mt-1">✓</span>
                    <span className="leading-relaxed">Piano services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-3 mt-1">✓</span>
                    <span className="leading-relaxed">Videographer & photo album</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-3 mt-1">✓</span>
                    <span className="leading-relaxed">Catering services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-3 mt-1">✓</span>
                    <span className="leading-relaxed">Grave finishing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-3 mt-1">✓</span>
                    <span className="leading-relaxed">Wills management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-3 mt-1">✓</span>
                    <span className="leading-relaxed">Exhuming</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-3 mt-1">✓</span>
                    <span className="leading-relaxed">Mobile toilet</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}