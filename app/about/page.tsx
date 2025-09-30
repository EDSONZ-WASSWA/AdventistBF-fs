import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BackgroundCarousel from '@/components/BackgroundCarousel'
import { aboutImages } from '@/lib/carouselImages'

export default function About() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 sm:pt-24 md:pt-20">
        <BackgroundCarousel
          images={aboutImages}
          interval={5000}
          className="h-64 sm:h-80 md:h-96"
        >
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4" >About ABF Funeral Services</h1>
            <p className="text-lg sm:text-xl">Compassionate care for over 5 years</p>
          </div>
        </BackgroundCarousel>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary"  style={{color:'#264fa0'}}>Our Story</h2>
            <div className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed">
              <p className="mb-6">
                Founded in 2020, ABF Funeral Services has been a cornerstone of our community, providing dignified and compassionate funeral services to families during their time of need. Our commitment to excellence and personalized care has made us a trusted partner for generations.
              </p>
              <p className="mb-6">
                We understand that each family is unique, and we work closely with you to create meaningful ceremonies that honor the life and legacy of your loved ones. Our experienced team combines traditional values with modern sensibilities to provide the highest level of service.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 " style={{backgroundColor:'#E6F7FF'}}>
          <div className="container mx-auto px-4  border border-bg-blue-900 rounded-lg" style={{backgroundColor:'#E6F7FF'}}>
            <h2 className="text-4xl font-bold text-center mb-16 text-primary"  style={{color:'#264fa0'}}>Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4 text-secondary">Compassion</h3>
                <p className="text-gray-600">We approach every family with empathy and understanding during their difficult time.</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4 text-secondary">Dignity</h3>
                <p className="text-gray-600">We honor the memory of your loved ones with the utmost respect and dignity.</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4 text-secondary">Excellence</h3>
                <p className="text-gray-600">We strive for perfection in every aspect of our service, from planning to execution.</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4 text-secondary">Community</h3>
                <p className="text-gray-600">We are proud to be part of this community and committed to serving its families.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-primary"  style={{color:'#264fa0'}}>Our Team</h2>
            <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
              Our dedicated team of professionals includes licensed funeral directors, counselors, and support staff who are here to guide you through every step of the process. We are committed to providing personalized service that meets your unique needs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" alt="John Smith" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
                <h3 className="text-xl font-bold mb-2 text-secondary">John Smith</h3>
                <p className="text-gray-600">Lead Funeral Director</p>
              </div>
              <div className="text-center">
                <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" alt="Sarah Johnson" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
                <h3 className="text-xl font-bold mb-2 text-secondary">Sarah Johnson</h3>
                <p className="text-gray-600">Grief Counselor</p>
              </div>
              <div className="text-center">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" alt="Michael Davis" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
                <h3 className="text-xl font-bold mb-2 text-secondary">Michael Davis</h3>
                <p className="text-gray-600">Operations Manager</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}