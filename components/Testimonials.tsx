const testimonials = [
  {
    quote: "ABF provided us with the utmost compassion and support during our difficult time. Their team made everything so much easier.",
    author: "The Johnson Family"
  },
  {
    quote: "We were impressed by the professionalism and warmth shown by the staff. Highly recommend their services.",
    author: "The Smith Family"
  },
  {
    quote: "The personalized service and attention to detail made all the difference. Thank you for helping us through this difficult time.",
    author: "The Williams Family"
  }
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-primary">
          What Families Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
              <blockquote className="text-lg italic text-gray-700 mb-4">
                "{testimonial.quote}"
              </blockquote>
              <cite className="text-secondary font-bold text-lg">
                - {testimonial.author}
              </cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}