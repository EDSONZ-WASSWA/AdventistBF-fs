import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import BackgroundCarousel from '@/components/BackgroundCarousel'
import { backgroundImages } from '@/lib/carouselImages'

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
      <main className="pt-32 sm:pt-24 md:pt-20">
        <BackgroundCarousel
          images={backgroundImages}
          interval={5000}
          className="h-64 sm:h-80 md:h-96"
        >
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Pricing Packages</h1>
            <p className="text-lg sm:text-xl">Transparent pricing for our comprehensive funeral services</p>
          </div>
        </BackgroundCarousel>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-8 text-primary" style={{color:'#264fa0'}}>Service Packages</h2>
            <p className="text-center text-lg text-gray-600 mb-12 max-w-4xl mx-auto">
              We offer two comprehensive packages designed to meet different needs and budgets. All packages include professional services, transportation, and basic arrangements.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-4 border-[#264fa0] shadow-lg rounded-lg overflow-hidden">
                <thead className="bg-[#264fa0] text-[#E6F7FF]">
                  <tr style={{backgroundColor:'#264fa0'}}>
                    <th className="px-6 py-4 text-left text-lg font-semibold" style={{color:'#E6F7FF'}}>Package</th>
                    <th className="px-6 py-4 text-left text-lg font-semibold" style={{color:'#E6F7FF'}}>Charges</th>
                  </tr>
                </thead>
                <tbody>
                  {packages.map((pkg, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-[#E6F7FF] hover:bg-blue-100' : 'bg-white hover:bg-blue-50'}>
                      <td className="px-6 py-4 font-semibold text-secondary">{pkg.name}</td>
                      <td className="px-6 py-4 font-bold text-black">{pkg.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-16">
              <h3 className="text-2xl font-bold mb-6 text-primary" style={{color:'#264fa0'}}>Royal Package Includes:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 max-w-4xl mx-auto">
                <li>Complete traditional funeral service</li>
                <li>Premium casket selection</li>
                <li>Full visitation and viewing</li>
                <li>Limousine transportation</li>
                <li>Floral arrangements</li>
                <li>Memorial service</li>
                <li>Graveside ceremony</li>
                <li>Reception following service</li>
                <li>Professional photography</li>
                <li>Guest book and memorial cards</li>
              </ul>

              <h3 className="text-2xl font-bold mt-12 mb-6 text-primary" style={{color:'#264fa0'}}>Executive Package Includes:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 max-w-4xl mx-auto">
                <li>Complete funeral service</li>
                <li>Standard casket selection</li>
                <li>Visitation and viewing</li>
                <li>Hearse transportation</li>
                <li>Basic floral arrangements</li>
                <li>Memorial service</li>
                <li>Graveside ceremony</li>
                <li>Guest book</li>
              </ul>
            </div>

            <div className="text-center mt-16">
              <p className="text-lg text-gray-600 mb-8">All packages can be customized to meet your specific needs and preferences.</p>
              <p className="text-lg text-gray-600 mb-8">Additional services and arrangements are available upon request.</p>
              <div className="space-x-4">
                <Link href="/contact" className="bg-primary text-white px-8 py-3 rounded-md hover:bg-primary-dark transition-colors duration-300 inline-block card-hover">
                  Contact Us for More Information
                </Link>
                <Link href="/ekijja-omanyi" className="bg-secondary text-white px-8 py-3 rounded-md hover:bg-secondary-dark transition-colors duration-300 inline-block card-hover">
                  View Payment Options
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-blue-50" style={{backgroundColor:'#E6F7FF'}}>
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-primary" style={{color:'#264fa0'}}>Payment Information</h2>
            <p className="text-center text-lg text-gray-600 mb-12">Make your payments securely and conveniently through our various payment channels.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-blue-50 p-6 rounded-lg shadow-lg card-hover">
                <h3 className="text-xl font-bold mb-4 text-secondary">Mobile Money Payment</h3>
                <p className="text-gray-600 mb-4">Instant payments via mobile money</p>
                <div className="bg-gray-100 p-4 rounded-md">
                  <p className="font-semibold mb-2">Supported Networks:</p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>MTN Mobile Money (*165#)</li>
                    <li>Airtel Money (*185#)</li>
                    <li>Africell Money</li>
                    <li>Uganda Telecom Money</li>
                  </ul>
                  <p className="mt-4 font-semibold">Business Number: 123456</p>
                  <p className="font-semibold">Account: Package Payment</p>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg shadow-lg card-hover">
                <h3 className="text-xl font-bold mb-4 text-secondary">Bank Transfer</h3>
                <p className="text-gray-600 mb-4">Direct bank transfers for larger amounts</p>
                <div className="bg-gray-100 p-4 rounded-md">
                  <p className="font-semibold mb-2">Bank Details:</p>
                  <p>Bank: Centenary Bank</p>
                  <p>Account Name: ABF Funeral Services</p>
                  <p>Account Number: 1234567890</p>
                  <p>Swift Code: CERBUGKA</p>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg shadow-lg card-hover">
                <h3 className="text-xl font-bold mb-4 text-secondary">Cash Payment</h3>
                <p className="text-gray-600 mb-4">Visit our office for cash payments</p>
                <div className="bg-gray-100 p-4 rounded-md">
                  <p className="font-semibold mb-2">Office Hours:</p>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p className="mt-4 font-semibold">Address:</p>
                  <p>123 Main Street, City, State</p>
                </div>
              </div>
            </div>
            <div className="mt-16 border border-blue-100 rounded-lg p-8 text-center" style={{backgroundColor:'#E6F7FF'}}>
              <h3 className="text-2xl font-bold text-yellow-800 mb-4">Payment Confirmation</h3>
              <p className="text-lg mb-4">After making any payment, please send confirmation to:</p>
              <p className="text-xl font-bold text-secondary">+256 414 123 456</p>
              <p className="text-sm mt-4">Include: Transaction ID, Amount, Date, Package Type, and Your Name</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}