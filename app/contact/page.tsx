import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BackgroundCarousel from '@/components/BackgroundCarousel'
import { backgroundImages } from '@/lib/carouselImages'
import { redirect } from 'next/navigation'

async function submitContactForm(formData: FormData) {
    'use server'

    const firstName = formData.get('first-name') as string
    const lastName = formData.get('last-name') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const subject = formData.get('subject') as string
    const message = formData.get('message') as string

    const web3FormData = new FormData()
    web3FormData.append('access_key', process.env.WEB3FORMS_ACCESS_KEY!)
    web3FormData.append('to', 'enockkalumba213@gmail.com')
    web3FormData.append('from', 'noreply@abf-funeral-services.com')
    web3FormData.append('subject', `Contact Form: ${subject}`)
    web3FormData.append('first-name', firstName)
    web3FormData.append('last-name', lastName)
    web3FormData.append('email', email)
    web3FormData.append('phone', phone)
    web3FormData.append('subject', subject)
    web3FormData.append('message', message)

    const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: web3FormData
    })

    const result = await response.json()

    if (!result.success) {
        throw new Error('Failed to send message')
    }

    // Form will clear automatically
}

export default function Contact() {
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg sm:text-xl">We're here to help you during this difficult time</p>
          </div>
        </BackgroundCarousel>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16" style={{color: '#1030e6'}}>Get In Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4 text-secondary">Phone</h3>
                <p className="text-gray-600 mb-2">Main: +256-776 514 531</p>
                <p className="text-gray-600 mb-2">Emergency: +256 709 727 832</p>
                <p className="text-gray-600">24/7 Support Available</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4 text-secondary">Address</h3>
                <p className="text-gray-600 mb-2">Nakasero Plot 7/1 Entebbe road</p>
                <p className="text-gray-600 mb-2">&</p>
                <p className="text-gray-600 mb-2">Wandegeya branch</p>
                <p className="text-gray-600 mb-2">Near veteran Market Opp Shell</p>
                <p className="text-gray-600">Uganda</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4 text-secondary">Hours</h3>
                <p className="text-gray-600 mb-2">Sunday - Sunday</p>
                <p className="text-gray-600">24/7 Support Available</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16" style={{color: '#1030e6'}}>Send Us a Message</h2>
            <div className="max-w-2xl mx-auto">
              <form action={submitContactForm} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-2">First Name:</label>
                    <input type="text" id="first-name" name="first-name" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent" />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-2">Last Name:</label>
                    <input type="text" id="last-name" name="last-name" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email:</label>
                  <input type="email" id="email" name="email" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone:</label>
                  <input type="tel" id="phone" name="phone" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject:</label>
                  <select id="subject" name="subject" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent">
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="services">Funeral Services</option>
                    <option value="preplanning">Pre-Planning</option>
                    <option value="obituary">Obituary Submission</option>
                    <option value="grief-support">Grief Support</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message:</label>
                  <textarea id="message" name="message" rows={6} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"></textarea>
                </div>
                <div className="text-center">
                  <button type="submit" className="bg-secondary text-white px-8 py-3 rounded-md hover:bg-primary-dark transition-colors duration-300">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16" style={{color: '#1030e6'}}>Our Locations</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-secondary">Main Office - Nakasero</h3>
                <p className="text-gray-600 mb-4">Nakasero Plot 7/1 Entebbe road, Uganda</p>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.028!2d32.5825!3d0.3476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb42a2b2b2b2b%3A0x2b2b2b2b2b2b2b2b!2sNakasero%2C%20Kampala%2C%20Uganda!5e0!3m2!1sen!2s!4v1634567890123!5m2!1sen!2s"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg shadow-lg"
                ></iframe>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-secondary">Branch Office - Wandegeya</h3>
                <p className="text-gray-600 mb-4">Wandegeya branch, Near veteran Market Opp Shell, Uganda</p>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.028!2d32.5731!3d0.3308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbba8b8b8b8b8b%3A0xb8b8b8b8b8b8b8b8!2sWandegeya%2C%20Kampala%2C%20Uganda!5e0!3m2!1sen!2s!4v1634567890123!5m2!1sen!2s"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg shadow-lg"
                ></iframe>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-primary">Directions & Accessibility</h3>
              <p className="text-lg text-gray-600 mb-4">ABF Funeral Services is conveniently located and easily accessible from major highways and public transportation.</p>
              <p className="text-lg text-gray-600 mb-8">Free parking is available on-site for your convenience.</p>
              <div className="bg-gray-50 p-6 rounded-lg inline-block">
                <p className="text-gray-700 font-semibold">📍 Easy Access Points:</p>
                <ul className="text-left mt-2 text-gray-600">
                  <li>• Main highways and arterial roads</li>
                  <li>• Public transportation routes</li>
                  <li>• Walking distance from key landmarks</li>
                  <li>• 24/7 accessibility for emergency services</li>
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