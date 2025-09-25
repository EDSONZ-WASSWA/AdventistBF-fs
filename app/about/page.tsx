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
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">About ABF Funeral Services</h1>
            <p className="text-lg sm:text-xl">Compassionate care for over 5 years</p>
          </div>
        </BackgroundCarousel>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12" style={{color: '#1030e6'}}>Our Story</h2>
            <div className="max-w-4xl mx-auto text-lg leading-relaxed" style={{color: '#C59560'}}>
              <p className="mb-6">
                Adventist Business Friends (ABF) is a fellowship that was started to build and strengthen the mutual relationship aspect among Adventist Entrepreneurs in Uganda.
 ABF was started officially in 2019 with a major aim of building a combined body of skills, expertise, professionalism and one voice of Adventist businessmen

              </p>
              <p className="mb-6">
               Adventist Business Friends Ltd is a registered company limited by shares. Adventist Business Friends Ltd is a registered company under Reg. no. 80020001933303
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12" style={{color: '#1030e6'}}>Our Mission</h2>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-2xl " style={{color: '#C59560'}}>To promote funeral events that glorify God in all aspects  </p>
              <p className='text-2xl 'style={{color: '#C59560'}}>2corinthians 9:11</p>
              <p style={{color: '#C59560'}}> "You will be enriched in every way so that you can be generous on every occasion, and through us your generosity will result in thanksgiving to God."</p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12" style={{color: '#1030e6'}}>Our Vision</h2>
            <div className="max-w-4xl mx-auto text-center">
              <p style={{color: '#C59560'}}>Being Economically and Spiritually Sound</p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16" style={{color: '#1030e6'}}>Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4 text-secondary">Integrity</h3>
                <p className="text-gray-600">We conduct our business with honesty, transparency, and ethical practices in all our dealings.</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4 text-secondary">Humility</h3>
                <p className="text-gray-600">We serve with humility, recognizing that every family deserves compassionate and respectful care.</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4 text-secondary">Teamwork</h3>
                <p className="text-gray-600">We work collaboratively as a team to provide comprehensive support and care to every family.</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4 text-secondary">Empathy</h3>
                <p className="text-gray-600">We understand and share the feelings of those we serve, providing comfort during difficult times.</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4 text-secondary">Personalized Service</h3>
                <p className="text-gray-600">We tailor our services to meet the unique needs and preferences of each family.</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4 text-secondary">Glorification of God</h3>
                <p className="text-gray-600">We strive to glorify God in all our services, reflecting His love and compassion.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16" style={{color: '#1030e6'}}>Our Team</h2>
            <p className="text-center text-lg mb-12 max-w-3xl mx-auto" style={{color: '#C59560'}}>
              Our dedicated team of leaders and members work together to provide compassionate and comprehensive funeral services.
            </p>
            <div className="overflow-hidden">
              <div className="flex animate-slide flex-nowrap">
                {[
                  { position: 'Chairman', name: 'RTN.STEPHEN KABUYE' },
                  { position: 'Vice Chairman', name: 'MR. MUGAMBA MATTIAS', image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80' },
                  { position: 'Secretary', name: 'MS.FAITH NABUKEERA', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80' },
                  { position: 'Treasurer', name: 'MRS. STELLA MIIRO', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80' },
                  { position: 'Director of Company Projects', name: 'DR.DALTON SSEGAWA', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80' },
                  { position: 'Asst. Director of Company Projects', name: 'MR.LUGGYA BENON', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80' },
                  { position: 'Legal Affairs', name: 'MRS.EVELYN NAMISANGO NUWAGABA', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80' },
                  { position: 'Public Relations', name: 'ENG. VALENTINE KATABIRA', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80' },
                  { position: 'Spiritual Affairs', name: 'MRS.MARY ELSA TAMALE', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80' },
                  { position: 'Gender, Social & Welfare', name: 'MR.MAWEJJE PAUL', image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80' },
                  { position: 'Asst. Gender, Social & Welfare', name: 'MRS.RUTH MIREMBE SEMPA', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80' },
                  { position: 'Member', name: 'ENG. HERBERT SSERUNKUUMA', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80' },
                  { position: 'Member', name: 'ENG. GODFREY KATANGAZA ', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80' },
                  { position: 'Member', name: 'ENG. JOSIAH SSERUJOGI', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80' },
                  { position: 'Member', name: 'MR. JJAGWE GEOFFREY NKALUBO', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80' },
                  { position: 'Member', name: 'MR.MBUGA JOSEPH', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80' }
                ].concat([
                  { position: 'Public Relations', name: 'Lisa Anderson' },
                  { position: 'Spiritual Affairs', name: 'James Taylor' },
                  { position: 'Gender, Social & Welfare', name: 'Emma Martinez' },
                  { position: 'Asst. Gender, Social & Welfare', name: 'Christopher Lee' },
                  { position: 'Member', name: 'Amanda Garcia' },
                  { position: 'Member', name: 'Daniel Rodriguez' },
                  { position: 'Member', name: 'Olivia Lopez' },
                  { position: 'Member', name: 'William Gonzalez' },
                  { position: 'Member', name: 'Sophia Hernandez' }
                ]).map((member, index) => (
                  <div key={index} className="flex-shrink-0 w-64 mx-4 bg-gradient-to-br from-white to-gray-50 rounded-lg shadow-lg p-6 border border-gray-200">
                    <h3 className="text-xl font-bold mb-2 text-secondary">{member.name}</h3>
                    <p className="text-gray-600 font-semibold">{member.position}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}