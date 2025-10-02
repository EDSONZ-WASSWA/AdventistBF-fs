'use client'
import { useScrollAnimation } from '@/lib/useScrollAnimation'
const services = [
  {
    title: 'Traditional Burial',
    description: 'Dignified ceremonies to honor your loved one\'s memory.',
    image: '/pictures/funeral 1.jpg'
  },
  {
    title: 'Grieve Support',
    description: 'Compassionate counseling and support groups for families.',
    image: '/pics/grieve support.jpg'
  },
  {
    title: 'Pre-Planning',
    description: 'Plan ahead for peace of mind and ease for your family.',
    image: '/pictures/arrangements.jpg'
  },
  {
    title: 'Memorial Services',
    description: 'Personalized memorial ceremonies to celebrate life.',
    image: '/pics/inspection.jpg'
  },
  {
    title: 'Transportation',
    description: 'Professional transportation with care and dignity.',
    image: '/pictures/car with team.jpg'
  },
  {
    title: 'Executive coffins & caskets',
    description: 'Executive caskets that define diginity and respect.',
    image: '/pictures/exec.coffins.jpg'
  }
]
  export default function Services() {
    const sectionRef = useScrollAnimation()
    const titleRef = useScrollAnimation()
  return (
    <section ref={sectionRef} className="py-20 bg-gray-50 fade-in-up">
      <div className="container mx-auto px-4">
        <h2  ref={titleRef} className="text-4xl font-bold text-center mb-16 fade-in-up" style={{color: '#1030e6'}}>
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => {
            const serviceRef = useScrollAnimation()
            return (
              <div key={index} ref={serviceRef} className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 fade-in-up ${index % 2 === 0 ? 'fade-in-left' : 'fade-in-right'}`}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3" style={{color: '#264fa0'}}>{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}