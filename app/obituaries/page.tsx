import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BackgroundCarousel from '@/components/BackgroundCarousel'
import { backgroundImages } from '@/lib/carouselImages'

const obituaries = [
  {
    name: 'John Doe',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    description: 'Beloved father and grandfather, passed away peacefully on October 1, 2023 at the age of 78. John was a devoted family man who loved spending time with his grandchildren and working in his garden.',
    survivors: 'Survived by his wife Mary, children Sarah and Michael, and grandchildren Emma and James.',
    services: 'Services will be held at ABF Funeral Home on October 5, 2023 at 2:00 PM.'
  },
  {
    name: 'Jane Smith',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    description: 'Dedicated teacher and community member, passed away on September 28, 2023 at the age of 65. Jane touched the lives of countless students during her 30-year teaching career.',
    survivors: 'Survived by her husband Robert, daughter Lisa, and son David.',
    services: 'A memorial service will be held at First Presbyterian Church on October 8, 2023 at 11:00 AM.'
  },
  {
    name: 'Robert Johnson',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    description: 'Devoted husband, father, and longtime community volunteer, passed away on September 25, 2023 at the age of 72. Robert was known for his generosity and commitment to helping others.',
    survivors: 'Survived by his wife Susan, children Mark and Jennifer, and four grandchildren.',
    services: 'Services will be held at ABF Funeral Home on October 2, 2023 at 1:00 PM.'
  },
  {
    name: 'Mary Williams',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    description: 'Loving mother and grandmother, passed away on September 20, 2023 at the age of 85. Mary was known for her warm smile, generous spirit, and delicious homemade pies.',
    survivors: 'Survived by her children Thomas and Elizabeth, and grandchildren Sarah and Michael.',
    services: 'A celebration of life will be held at her home on October 1, 2023 at 3:00 PM.'
  }
]

export default function Obituaries() {

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
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Obituaries & Tributes</h1>
            <p className="text-lg sm:text-xl">Honoring the lives and memories of our loved ones</p>
          </div>
        </BackgroundCarousel>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-primary" style={{color:'#264fa0'}}>Recent Obituaries</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {obituaries.map((obituary, index) => (
                <div key={index} className="bg-blue-50 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 card-hover">
                  <div className="md:flex">
                    <div className="md:w-1/3 p-4 flex items-center justify-center">
                      <div className="relative group">
                        <img
                          src={obituary.image}
                          alt={`Memorial for ${obituary.name}`}
                          className="w-full h-48 md:h-56 object-cover rounded-lg shadow-md group-hover:shadow-xl transition-all duration-300 border-2 border-gray-100 group-hover:border-primary/20"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          In Loving Memory
                        </div>
                      </div>
                    </div>
                    <div className="md:w-2/3 p-6">
                      <h3 className="text-2xl font-bold mb-4 text-secondary hover:text-primary transition-colors duration-300">{obituary.name}</h3>
                      <p className="text-gray-700 mb-4 text-sm leading-relaxed">{obituary.description}</p>
                      <div className="border-t border-gray-200 pt-4">
                        <p className="text-gray-600 mb-2 text-sm"><strong className="text-secondary">Survived by:</strong> {obituary.survivors}</p>
                        <p className="text-gray-600 text-sm"><strong className="text-secondary">Services:</strong> {obituary.services}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50" style={{backgroundColor:'#E6F7FF'}}>
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-primary" style={{color:'#264fa0'}}>Submit an Obituary</h2>
            <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
              If you would like to submit an obituary for a loved one, please contact us or fill out the form below.
            </p>
            <div className="max-w-2xl mx-auto  border border-blue-200 rounded-lg px-4">
              <form className="space-y-6 bg-blue-50">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-black-700 mb-2">Name of Deceased:</label>
                  <input type="text" id="name" name="name" required className="w-full px-4 py-2 border border-blue-200 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent" />
                </div>
                <div>
                  <label htmlFor="age" className="block text-sm font-bold text-black-700 mb-2">Age:</label>
                  <input type="number" id="age" name="age" className="w-full px-4 py-2 border border-blue-200 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent" />
                </div>
                <div>
                  <label htmlFor="date-of-death" className="block text-sm font-bold text-black-700 mb-2">Date of Death:</label>
                  <input type="date" id="date-of-death" name="date-of-death" className="w-full px-4 py-2 border border-blue-200 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent" />
                </div>

                <div>
                  <label htmlFor="obituary-text" className="block text-sm font-bold text-black-700 mb-2">Obituary Text:</label>
                  <textarea id="obituary-text" name="obituary-text" rows={10} required className="w-full px-4 py-2 border border-blue-200 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"></textarea>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="submitter-name" className="block text-sm font-bold text-black-700 mb-2">Your Name:</label>
                    <input type="text" id="submitter-name" name="submitter-name" required className="w-full px-4 py-2 border border-blue-200 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent" />
                  </div>
                  <div>
                    <label htmlFor="submitter-email" className="block text-sm font-bold text-black-700 mb-2">Your Email:</label>
                    <input type="email" id="submitter-email" name="submitter-email" required className="w-full px-4 py-2 border border-blue-200 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent" />
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit" className="bg-primary text-white px-8 py-3 rounded-md hover:bg-primary-dark transition-colors duration-300 card-hover">Submit Obituary</button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}