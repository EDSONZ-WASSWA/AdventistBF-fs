import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import BackgroundCarousel from '@/components/BackgroundCarousel'
import { pricingImages } from '@/lib/carouselImages'

const packages = [
  { name: 'Royal Package', price: '15,000,000' },
  { name: 'Executive Package', price: '8,000,000' },
  { name: 'Classic Package', price: '5,000,000' },
  { name: 'Standard Package', price: '3,000,000' },
  { name: 'Basic Package', price: '2,400,000' },
  { name: 'Mosleme Package', price: '2,000,000' },
  { name: 'Professional Package', price: '1,800,000' },
  { name: 'Selected Items (Not Full Package)', price: '1,500,000' }
]

export default function Pricing() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-0">
        <BackgroundCarousel
          images={pricingImages}
          interval={5000}
          className="h-[90vh] sm:h-[80vh] md:h-[110vh] lg:h-[140vh] xl:h-[140vh]"
        >
          <div className="text-center bg-black/60 p-6 rounded-lg">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">Pricing Packages</h1>
            <p className="text-lg sm:text-xl text-white">Transparent pricing for our comprehensive funeral services</p>
          </div>
        </BackgroundCarousel>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-8" style={{color: '#1030e6'}}>Service Packages</h2>
            <p className="text-center text-lg text-gray-600 mb-12 max-w-4xl mx-auto">
              We offer two comprehensive packages designed to meet different needs and budgets. All packages include professional services, transportation, and basic arrangements.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
                <thead className="bg-black text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-lg font-semibold">Package</th>
                    <th className="px-6 py-4 text-left text-lg font-semibold">Charges</th>
                  </tr>
                </thead>
                <tbody>
                  {packages.map((pkg, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-6 py-4 font-semibold text-secondary">{pkg.name}</td>
                      <td className="px-6 py-4 font-bold text-black">{pkg.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>


            <div className="text-center mt-16">
              <p className="text-lg text-gray-600 mb-8">All packages can be customized to meet your specific needs and preferences.</p>
              <p className="text-lg text-gray-600 mb-8">Additional services and arrangements are available upon request.</p>
              <div className="space-x-4">
                <Link href="/contact" className="bg-primary text-white px-8 py-3 rounded-md hover:bg-primary-dark transition-colors duration-300 inline-block">
                  Contact Us for More Information
                </Link>
                <Link href="/ekijja-omanyi" className="bg-secondary text-white px-8 py-3 rounded-md hover:bg-secondary-dark transition-colors duration-300 inline-block">
                  View Payment Options
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16" style={{color: '#1030e6'}}>Payment Information</h2>
            <p className="text-center text-lg text-gray-600 mb-12">Make your payments securely and conveniently through our various payment channels.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-secondary">Mobile Money Payment</h3>
                <p className="text-gray-600 mb-4">Instant payments via mobile money</p>
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg shadow-md border border-green-200">
                  <p className="font-semibold text-base mb-4 text-primary">📱 Mobile Money Details:</p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>MTN Mobile Money (*165*3#)</li>
                    <li>Airtel Money (*185*9#)</li>
                    <li>Enter merchant code number <strong>609750</strong> (MTN) and <strong>1199015</strong> (Airtel)</li>
                    <li>Enter Amount your paying</li>
                    <li>Enter reference (package type)</li>
                    <li>Enter your PIN to complete transaction</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-secondary">Bank Transfer</h3>
                <p className="text-gray-600 mb-4">Direct bank transfers for larger amounts</p>
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg shadow-md border border-blue-200">
                  <p className="font-semibold text-base mb-4 text-primary">🏦 Bank Details:</p>
                  <div className="space-y-2">
                    <p className="text-sm"><span className="font-medium text-gray-700">BANK:</span> <span className="text-secondary">CENTENARY BANK – ENTEBBE RD BRANCH</span></p>
                    <p className="text-sm"><span className="font-medium text-gray-700">ABF ACCOUNT NAME:</span> <span className="text-secondary">ADVENTIST BUSINESS FRIENDS LTD</span></p>
                    <p className="text-sm"><span className="font-medium text-gray-700">ABF ACCOUNT NO:</span> <span className="text-secondary">3100075872</span></p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-secondary">Cash Payment</h3>
                <p className="text-gray-600 mb-4">Visit our office for cash payments</p>
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg shadow-md border border-yellow-200">
                  <p className="font-semibold text-base mb-4 text-primary">💰 Cash Payment Details:</p>
                  <div className="space-y-2">
                    <p className="text-sm"><span className="font-medium text-gray-700">Office Hours:</span></p>
                    <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                      <li>Sunday - Sunday: 9:00 AM - 6:00 PM</li>
                    </ul>
                    <p className="text-sm mt-4"><span className="font-medium text-gray-700">Address:</span> <span className="text-secondary">123 Main Street, City, State</span></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 bg-yellow-50 border border-yellow-200 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-yellow-800 mb-4">Payment Confirmation</h3>
              <p className="text-lg mb-4">After making any payment, please send confirmation to:</p>
              <div className="space-x-4">
                  <Link href="https://wa.me/256776514528" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-8 py-3 rounded-md hover:bg-green-600 transition-colors duration-300 inline-flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    +256 776 514528
                  </Link>
              </div>
              <p className="text-sm mt-4">Include: Transaction ID, Amount, Date, Package Type, and Your Name</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}