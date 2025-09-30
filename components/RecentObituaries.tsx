const obituaries = [
  {
    name: 'John Doe',
    date: 'October 1, 2023',
    description: 'Beloved father and grandfather, passed away peacefully.'
  },
  {
    name: 'Jane Smith',
    date: 'September 28, 2023',
    description: 'Dedicated teacher and community member, remembered for her kindness.'
  },
  {
    name: 'Robert Johnson',
    date: 'September 25, 2023',
    description: 'Devoted husband, father, and longtime community volunteer.'
  }
]

export default function RecentObituaries() {
  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-primary"  style={{color:'#264fa0'}}>
          Recent Obituaries
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {obituaries.map((obituary, index) => (
            <div key={index} className="bg-blue-50 p-6 rounded-lg shadow-lg border border-bg-blue-900 pulse-glow1 card-hover">
              <h3 className="text-xl font-bold mb-2 text-secondary">{obituary.name}</h3>
              <p className="text-sm text-gray-500 mb-3">{obituary.date}</p>
              <p className="text-gray-700 mb-4">{obituary.description}</p>
              <a href="/obituaries" className="btn text-sm">
                Read Full Obituary
              </a>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="/obituaries" className="btn">
            View All Obituaries
          </a>
        </div>
      </div>
    </section>
  )
}