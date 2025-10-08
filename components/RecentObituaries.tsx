const obituaries = [
  {
    name: 'Bahemuka Luke',
    date: '',
    description: 'Beloved father and grandfather, passed away peacefully.'
  },
  {
    name: 'Atim Merisa',
    date: 'September 28, 2023',
    description: 'Dedicated  and committed member, remembered for her kindness.'
  },
  {
    name: 'Pr.Eridad Mwange Mwesigwa',
    date: 'September 25, 2023',
    description: 'Devoted Pastor, father, and longtime community volunteer.'
  }
]

export default function RecentObituaries() {
  return (
    <section className="py-20 " style={{backgroundColor:'#E6F7FF'}}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16" style={{color: '#1030e6'}}>
          Recent Obituaries
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {obituaries.map((obituary, index) => (
            <div key={index} className="bg-blue-95 p-6 rounded-lg shadow-lg card-hover pulse-glow1">
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
          <a href="/obituaries" className="btn card-hover">
            View All Obituaries
          </a>
        </div>
      </div>
    </section>
  )
}