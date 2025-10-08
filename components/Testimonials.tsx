'use client'
import { useScrollAnimation } from "@/lib/useScrollAnimation"
const testimonials = [
  {
    quote: "ABF provided us with the utmost compassion and support during our difficult time. Their team made everything so much easier.",
    author: "The Mwesigwa Family"
  },
  {
    quote: "We were impressed by the professionalism and warmth shown by the staff. Highly recommend their services.",
    author: "The Nyanziru Family"
  },
  {
    quote: "The personalized service and attention to detail made all the difference. Thank you for helping us through this difficult time.",
    author: "The Womeri Family"
  }
]
export default function Testimonials() {
  const sectionRef = useScrollAnimation()
  const titleRef= useScrollAnimation()
  return (
    <section ref={sectionRef}className="py-20  fade-in-up" style={{backgroundColor:'#E6F7FF'}}>
      <div className="container mx-auto px-4">
        <h2 ref={titleRef} className="text-4xl font-bold text-center mb-16 fade-in-up" style={{color: '#1030e6'}}>
          What Families Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" style={{backgroundColor:'#E6F7FF'}} >
        {testimonials.map((testimonial, index) => {
            const testimonialRef = useScrollAnimation()
            return (
              <div key={index} ref={testimonialRef} className={`bg-blue-95 pulse-glow1 p-8 rounded-lg shadow-lg fade-in-up ${index % 2 === 0 ? 'fade-in-left' : 'fade-in-right'}`}>
                <blockquote className="text-lg italic text-gray-700 mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <cite className="text-secondary font-bold text-lg">
                  - {testimonial.author}
                </cite>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}