import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BackgroundCarousel from '@/components/BackgroundCarousel'
import { backgroundImages } from '@/lib/carouselImages'

const galleryImages = [
  { src: '/pictures/abf home.jpg', alt: 'ABF Funeral Home', title: 'Our Main Facility' },
  { src: '/pictures/arrangements.jpg', alt: 'Floral Arrangements', title: 'Beautiful Arrangements' },
  { src: '/pictures/car with team.jpg', alt: 'Funeral Car with Team', title: 'Professional Transport' },
  { src: '/pictures/car.jpg', alt: 'Funeral Car', title: 'Dignified Transportation' },
  { src: '/pictures/funeral 1.jpg', alt: 'Funeral Service 1', title: 'Memorial Service' },
  { src: '/pictures/funeral 2.jpg', alt: 'Funeral Service 2', title: 'Cemetery Service' },
  { src: '/pictures/funeral home.jpg', alt: 'Funeral Home Interior', title: 'Comfortable Facilities' },
  { src: '/pictures/funeral.jpg', alt: 'Funeral Ceremony', title: 'Traditional Ceremony' },
  { src: '/pictures/grave 4.jpg', alt: 'Gravesite 4', title: 'Peaceful Resting Place' },
  { src: '/pictures/grave 5.jpg', alt: 'Gravesite 5', title: 'Final Arrangements' },
  { src: '/pictures/grave 6.jpg', alt: 'Gravesite 6', title: 'Memorial Site' },
  { src: '/pictures/grave 7.jpg', alt: 'Gravesite 7', title: 'Graveside Service' },
  { src: '/pictures/grave 8.jpg', alt: 'Gravesite 8', title: 'Burial Site' },
  { src: '/pictures/grave conc.jpg', alt: 'Concrete Grave', title: 'Permanent Memorial' },
  { src: '/pictures/grave.jpg', alt: 'Grave Marker', title: 'Headstone' },
  { src: '/pictures/grave3.jpg', alt: 'Gravesite 3', title: 'Resting Place' },
  { src: '/pictures/grave9.jpg', alt: 'Gravesite 9', title: 'Cemetery' },
  { src: '/pictures/gravee.jpg', alt: 'Gravesite Extra', title: 'Memorial Garden' },
  { src: '/pictures/home prep.jpg', alt: 'Home Preparation', title: 'Preparation Services' },
  { src: '/pictures/serving team ABF.jpg', alt: 'ABF Serving Team', title: 'Our Dedicated Team' },
  { src: '/pictures/team casket.jpg', alt: 'Team with Casket', title: 'Professional Care' },
  { src: '/pictures/team in tent.jpg', alt: 'Team in Tent', title: 'Outdoor Services' },
  { src: '/pictures/team with car.jpg', alt: 'Team with Car', title: 'Complete Service' },
  { src: '/pictures/team with casket.jpg', alt: 'Team with Casket', title: 'Honorable Service' },
  { src: '/pictures/team.jpg', alt: 'ABF Team', title: 'Our Professionals' },
  { src: '/pictures/WhatsApp Image 2025-09-17 at 09.24.08_6656211f.jpg', alt: 'Additional Service', title: 'Special Arrangements' },
  { src: '/pictures/burial.jpg', alt: 'Burial Service', title: 'Burial Arrangements' },
  { src: '/pictures/casket.jpg', alt: 'Casket Selection', title: 'Quality Caskets' },
  { src: '/pictures/casketteam.jpg', alt: 'Team with Casket', title: 'Casket Handling' },
  { src: '/pictures/casketteam2.jpg', alt: 'Team with Casket 2', title: 'Professional Handling' },
  { src: '/pictures/funeral1.jpg', alt: 'Funeral Service 3', title: 'Memorial Ceremony' },
  { src: '/pictures/team1.jpg', alt: 'ABF Team 1', title: 'Our Staff' },
  { src: '/pictures/team3.jpg', alt: 'ABF Team 3', title: 'Professional Team' },
  { src: '/pictures/teamcar.jpg', alt: 'Team with Car', title: 'Vehicle Services' },
  { src: '/pictures/teamcasket1.jpg', alt: 'Team with Casket 1', title: 'Casket Services' },
  { src: '/pictures/vigil2.jpg', alt: 'Vigil Service 2', title: 'Night Vigil' },
  { src: '/pictures/vigil3.jpg', alt: 'Vigil Service 3', title: 'Overnight Service' }
]

export default function Gallery() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 sm:pt-24 md:pt-20">
        <BackgroundCarousel
          images={backgroundImages}
          interval={5000}
          className="h-64 sm:h-80 md:h-96"
        >
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Our Gallery</h1>
            <p className="text-lg sm:text-xl">A glimpse into our compassionate services and facilities</p>
          </div>
        </BackgroundCarousel>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-primary">Photo Gallery</h2>
            <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
              Explore our facilities, services, and the compassionate care we provide to families during their time of need.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {galleryImages.map((image, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                    <div className="text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-lg font-bold mb-2">{image.title}</h3>
                      <p className="text-sm">{image.alt}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8 text-primary">Our Facilities & Services</h2>
            <p className="text-lg text-gray-600 mb-12 max-w-4xl mx-auto">
              Our gallery showcases the comprehensive range of services we offer, from traditional funeral ceremonies to modern memorial services.
              We are committed to providing dignified, compassionate care that honors the memory of your loved ones.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-secondary">Funeral Home</h3>
                <p className="text-gray-600 mb-4">A comfortable and dignified space for visitations and memorial services.</p>
                <ul className="text-left text-gray-600 space-y-2">
                  <li>• Private viewing rooms</li>
                  <li>• Comfortable seating areas</li>
                  <li>• Professional staff support</li>
                  <li>• 24/7 accessibility</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-secondary">Transportation</h3>
                <p className="text-gray-600 mb-4">Professional and respectful transportation services for all occasions.</p>
                <ul className="text-left text-gray-600 space-y-2">
                  <li>• Modern fleet of vehicles</li>
                  <li>• Trained professional drivers</li>
                  <li>• Climate-controlled comfort</li>
                  <li>• Nationwide service area</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-secondary">Cemetery Services</h3>
                <p className="text-gray-600 mb-4">Beautiful and well-maintained cemetery facilities for final arrangements.</p>
                <ul className="text-left text-gray-600 space-y-2">
                  <li>• Peaceful garden settings</li>
                  <li>• Perpetual care provided</li>
                  <li>• Variety of memorial options</li>
                  <li>• Easy accessibility</li>
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