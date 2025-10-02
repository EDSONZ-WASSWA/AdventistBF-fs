import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BackgroundCarousel from '@/components/BackgroundCarousel'
import { obituariesImages } from '@/lib/carouselImages'
import { redirect } from 'next/navigation'

async function submitObituaryForm(formData: FormData) {
    'use server'

    const name = formData.get('name') as string
    const age = formData.get('age') as string
    const dateOfDeath = formData.get('date-of-death') as string
    const obituaryText = formData.get('obituary-text') as string
    const submitterName = formData.get('submitter-name') as string
    const submitterEmail = formData.get('submitter-email') as string

    const web3FormData = new FormData()
    web3FormData.append('access_key', process.env.WEB3FORMS_ACCESS_KEY!)
    web3FormData.append('to', 'enockkalumba213@gmail.com')
    web3FormData.append('from', 'noreply@abf-funeral-services.com')
    web3FormData.append('subject', 'New Obituary Submission')
    web3FormData.append('name', name)
    web3FormData.append('age', age)
    web3FormData.append('date-of-death', dateOfDeath)
    web3FormData.append('obituary-text', obituaryText)
    web3FormData.append('submitter-name', submitterName)
    web3FormData.append('submitter-email', submitterEmail)

    const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: web3FormData
    })

    const result = await response.json()

    if (!result.success) {
        throw new Error('Failed to submit obituary')
    }

    // Form will clear automatically
}

const obituaries = [
  {
    name: 'Emily',
    image: '/obituaries/emilly.obt.jpg',
    description: 'Beloved father and grandfather, passed away peacefully on October 1, 2023 at the age of 78. John was a devoted family man who loved spending time with his grandchildren and working in his garden.',
    survivors: 'Survived by his wife Mary, children Sarah and Michael, and grandchildren Emma and James.',
    services: 'Services will be held at ABF Funeral Home on October 5, 2023 at 2:00 PM.'
  },
  {
    name: 'Mrs Womeri',
    image: '/obituaries/womeri.obt.jpg',
    description: 'Dedicated teacher and community member, passed away on September 28, 2023 at the age of 65. Jane touched the lives of countless students during her 30-year teaching career.',
    survivors: 'Survived by her husband Robert, daughter Lisa, and son David.',
    services: 'A memorial service will be held at First Presbyterian Church on October 8, 2023 at 11:00 AM.'
  },
  {
    name: 'Pr. Eridad Mwanje Mwesigwa',
    image: '/obituaries/preridad.obt.jpg',
    description: 'Devoted husband, father, and longtime community volunteer, passed away on September 25, 2023 at the age of 72. Robert was known for his generosity and commitment to helping others.',
    survivors: 'Survived by his wife Susan, children Mark and Jennifer, and four grandchildren.',
    services: 'Services will be held at ABF Funeral Home on October 2, 2023 at 1:00 PM.'
  },
  {
    name: 'Erivanson Namuddu Mayanja',
    image: '/obituaries/namudu2.obt.jpg',
    description: 'Loving mother and grandmother, passed away on September 20, 2023 at the age of 85. Mary was known for her warm smile, generous spirit, and delicious homemade pies.',
    survivors: 'Survived by her children Thomas and Elizabeth, and grandchildren Sarah and Michael.',
    services: 'A celebration of life will be held at her home on October 1, 2023 at 3:00 PM.'
  },
  {
    name: 'Akurut Sarah',
    image: '/obituaries/sarah.obt.jpg',
    description: 'Dedicated community leader and businessman, passed away on September 15, 2023 at the age of 68. David was a pillar of the community, known for his philanthropy and leadership in local organizations.',
    survivors: 'Survived by his wife Linda, sons James and Robert, and daughter Emily.',
    services: 'Services will be held at ABF Funeral Home on September 25, 2023 at 11:00 AM.'
  },
  {
    name: 'Nyanziru Emmanuel',
    image: '/obituaries/emma.obt.jpg',
    description: 'Beloved nurse and healthcare worker, passed away on September 10, 2023 at the age of 62. Patricia dedicated her life to caring for others, both in her professional career and personal life.',
    survivors: 'Survived by her husband Mark, children Anna and Christopher, and two grandchildren.',
    services: 'A memorial service will be held at St. Mary\'s Church on September 20, 2023 at 2:00 PM.'
  },
  {
    name: 'Atim Merisa',
    image: '/obituaries/merisa.obt.jpg',
    description: 'Talented artist and creative spirit, passed away on September 5, 2023 at the age of 55. Michael\'s paintings brought joy to many and his creativity inspired those around him.',
    survivors: 'Survived by his partner Sarah, son Daniel, and extended family.',
    services: 'An art memorial exhibition and service will be held at the Community Art Center on September 15, 2023 at 4:00 PM.'
  },
  {
    name: 'Bahemuka Luka',
    image: '/obituaries/luka.obt.jpg',
    description: 'Passionate educator and lifelong learner, passed away on August 30, 2023 at the age of 70. Susan inspired generations of students with her love of knowledge and dedication to education.',
    survivors: 'Survived by her children Maria and Jose, and grandchildren Isabella and Carlos.',
    services: 'Services will be held at the University Chapel on September 10, 2023 at 10:00 AM.'
  }
]

export default function Obituaries() {

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-0">
        <BackgroundCarousel
          images={obituariesImages}
          interval={5000}
          className="h-[90vh] sm:h-[80vh] md:h-[110vh] lg:h-[140vh] xl:h-[140vh]"
        >
          <div className="text-center bg-black/60 p-6 rounded-lg">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">Obituaries & Tributes</h1>
            <p className="text-lg sm:text-xl text-white">Honoring the lives and memories of our loved ones</p>
          </div>
        </BackgroundCarousel>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16" style={{color: '#1030e6'}}>Recent Obituaries</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {obituaries.map((obituary, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="md:flex">
                    <div className="md:w-1/3 p-4 flex items-center justify-center">
                      <div className="relative group">
                        <div className="relative overflow-hidden rounded-full shadow-lg group-hover:shadow-2xl transition-all duration-500 border-4 border-white group-hover:border-primary/30">
                          <img
                            src={obituary.image}
                            alt={`Memorial for ${obituary.name}`}
                            className="w-48 h-48 md:w-56 md:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-gray-800 shadow-lg">
                              In Loving Memory
                            </div>
                          </div>
                          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-gradient-to-t from-gray-300 to-transparent rounded-full opacity-50"></div>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-2/3 p-6">
                      <h3 className="text-2xl font-bold mb-4 text-secondary hover:text-primary transition-colors duration-300">{obituary.name}</h3>
                      <p className="text-gray-700 mb-4 text-sm leading-relaxed">{obituary.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16" style={{color: '#1030e6'}}>Submit an Obituary</h2>
            <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
              If you would like to submit an obituary for a loved one, please contact us or fill out the form below.
            </p>
            <div className="max-w-2xl mx-auto">
              <form action={submitObituaryForm} className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-lg shadow-lg border border-gray-200 space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name of Deceased:</label>
                  <input type="text" id="name" name="name" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent" />
                </div>
                <div>
                  <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-2">Age:</label>
                  <input type="number" id="age" name="age" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent" />
                </div>
                <div>
                  <label htmlFor="date-of-death" className="block text-sm font-medium text-gray-700 mb-2">Date of Death:</label>
                  <input type="date" id="date-of-death" name="date-of-death" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent" />
                </div>

                <div>
                  <label htmlFor="obituary-text" className="block text-sm font-medium text-gray-700 mb-2">Obituary Text:</label>
                  <textarea id="obituary-text" name="obituary-text" rows={10} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"></textarea>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="submitter-name" className="block text-sm font-medium text-gray-700 mb-2">Your Name:</label>
                    <input type="text" id="submitter-name" name="submitter-name" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent" />
                  </div>
                  <div>
                    <label htmlFor="submitter-email" className="block text-sm font-medium text-gray-700 mb-2">Your Email:</label>
                    <input type="email" id="submitter-email" name="submitter-email" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent" />
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit" className="bg-secondary text-white px-8 py-3 rounded-md hover:bg-primary-dark transition-colors duration-300">Submit Obituary</button>
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