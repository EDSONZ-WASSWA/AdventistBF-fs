import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import BackgroundCarousel from '@/components/BackgroundCarousel'
import { backgroundImages } from '@/lib/carouselImages'

const membershipSteps = [
  'Study the funding packages and choose your favourite.',
  'Fill a form and pay registration fee of Ugx 20,000/=. A savings account will be opened for you and you will be issued with a savings card',
  'Remit a monthly savings not less than Ugx 20,000/=.',
  'Kijja omanyi savings are remitted via mobile money through merchant codes (free of charge).',
  'If a member dies having saved half way of the registration package, the package is given without additional funds required from his/her family.',
  'If a member dies having saved any amount below half way of the registered package or has not been consistent in saving, they are given what fits into the saved amount.',
  'If a member completes a registered package, they can transfer it to any other person.',
  'Transfer of partial package shall be subject to cash top saved funds in the scheme and are non refundable except in the above mentioned ways. ABF does not refund. it should be a burial package',
  'If a member dies with notice to kijja omanyi secretariate or if a member is buried by government for any reason, the package is transifered to the registered next of kin, if the next of kin has not caused to the death of the member in any way.',
  'Kijja omanyi management respects all the information agreed upon by the kijja omanyi members but id the deceased\'s family wishes to revise the agreement for better, it is allowed.',
  'If a member recruites another member individual or company, a commission is transfered to the recuiter\'s account whenever the recuited remits a monthly subscription fee.',
  'In Executive of one\'s package, kijja omanyi management does not perform any cultural.............',
  'The membership.'
]

const savingPlans = [
  { name: 'Royal Package', duration: '10 Years', monthly: '125,000', total: '15,000,000' },
  { name: 'Executive Package', duration: '8 Years', monthly: '83,333', total: '8,000,000' },
  { name: 'Classic Package', duration: '5 Years', monthly: '83,333', total: '5,000,000' },
  { name: 'Standard Package', duration: '3 Years', monthly: '83,333', total: '3,000,000' },
  { name: 'Basic Package', duration: '3 Years', monthly: '66,667', total: '2,400,000' },
  { name: 'Mosleme Package', duration: '2.5 Years', monthly: '66,667', total: '2,000,000' },
  { name: 'Professional Package', duration: '2 Years', monthly: '75,000', total: '1,800,000' },
  { name: 'Selected Items Package', duration: '2 Years', monthly: '62,500', total: '1,500,000' }
]

const benefits = [
  { title: 'Financial Security', description: 'Guaranteed coverage ensures your family won\'t face unexpected funeral costs.' },
  { title: 'Inflation Protection', description: 'Plans are designed to account for inflation and rising funeral costs over time.' },
  { title: 'Family Support', description: 'Relieve your loved ones of the burden of making difficult decisions during grief.' },
  { title: 'Professional Service', description: 'Access to our full range of professional funeral services and support.' },
  { title: 'Flexible Payments', description: 'Easy monthly payments that fit your budget and financial situation.' },
  { title: 'Peace of Mind', description: 'Complete peace of mind knowing everything is arranged and paid for.' }
]

export default function EkijjaOmanyi() {
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Ekijja Omanyi Saving Scheme</h1>
            <p className="text-lg sm:text-xl">Plan ahead for the future with our comprehensive funeral savings program</p>
          </div>
        </BackgroundCarousel>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary">What is Ekijja Omanyi saving Scheme?</h2>
            <div className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed">
              <p className="mb-6">
                Ekijja Omanyi Saving Scheme Is an extension project of ABF Funeral Services. It is an arrangement of precautionary saving for hard times code-named; "Ekijja Omanyi" (kinyaga bitono).
                It is an arrangement in which ABF members and other interested members of the public can save a specific amount of money (in categories) with an insurance element that in case they die of lose someone,
                ABF funeral services gives them a corporate funeral package.
                Everyone would love to be sent off or send off a loved one with a dignified vigil and in a way that glofifies God but it sometimes fails due to unavailability of funds or failure to identify the best service providers.
                Kijja Omanyi has come to provide the solution.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-primary">How to Become a Member of Ekijja Omanyi Saving Scheme</h2>
            <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
              Joining our saving scheme is simple and straightforward. Follow these easy steps to secure your family's future.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {membershipSteps.map((step, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold mb-4 text-secondary">Step {index + 1}:</h3>
                  <p className="text-gray-600">{step}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-center mb-8 text-secondary">Required Documents</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 max-w-2xl mx-auto">
                <li>Valid National ID or Passport</li>
                <li>Recent passport-sized photographs (2 copies)</li>
                <li>Proof of residence</li>
                <li>Next of kin details</li>
                <li>Medical report from a registered physician</li>
                <li>Initial deposit payment</li>
              </ul>
            </div>

            <div className="text-center mt-16">
              <h3 className="text-2xl font-bold mb-6 text-primary">Ready to Join?</h3>
              <p className="text-lg text-gray-600 mb-8">Take the first step towards securing your family's future. Contact us today to start your membership application.</p>
              <div className="space-x-4">
                <Link href="#saving-application" className="bg-primary text-white px-8 py-3 rounded-md hover:bg-primary-dark transition-colors duration-300 inline-block">
                  Apply Online
                </Link>
                <Link href="/contact" className="bg-secondary text-white px-8 py-3 rounded-md hover:bg-secondary-dark transition-colors duration-300 inline-block">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-primary">Saving Plan Options</h2>

            <div className="overflow-x-auto">
              <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
                <thead className="bg-black text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-lg font-semibold">Plan Type</th>
                    <th className="px-6 py-4 text-left text-lg font-semibold">Duration</th>
                    <th className="px-6 py-4 text-left text-lg font-semibold">Monthly Contribution</th>
                    <th className="px-6 py-4 text-left text-lg font-semibold">Total Coverage</th>
                  </tr>
                </thead>
                <tbody>
                  {savingPlans.map((plan, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-6 py-4 font-semibold text-secondary">{plan.name}</td>
                      <td className="px-6 py-4">{plan.duration}</td>
                      <td className="px-6 py-4">{plan.monthly}</td>
                      <td className="px-6 py-4 font-bold">{plan.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-primary">Benefits of Ekijja Omanyo</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <h3 className="text-xl font-bold mb-4 text-secondary">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-8 text-primary">Online Payment Options</h2>
            <p className="text-center text-lg text-gray-600 mb-12">Make secure and convenient payments using mobile money services. We accept payments through all major mobile money platforms.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-secondary">Mobile Money Payment</h3>
                <p className="text-gray-600 mb-4">Pay instantly using your mobile phone</p>
                <div className="bg-gray-100 p-4 rounded-md">
                  <p className="font-semibold mb-2">Payment Details:</p>
                  <p>Business Name: ABF Funeral Services</p>
                  <p>Account: Ekijja Omanyi Scheme</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-secondary">Payment Instructions</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-600 text-sm">
                  <li>Select your preferred mobile money service</li>
                  <li>Dial *165*3# (MTN), *185*9# (Airtel)</li>
                  <li>Enter merchant code number 609750 (MTN), 1199015 (Airtel)</li>
                  <li>Enter Amount your paying</li>
                  <li>Enter Account reference (saver's name)</li>
                  <li>Confirm payment with your PIN</li>
                  <li>Receive confirmation SMS</li>
                </ol>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-secondary">Bank Transfer</h3>
                <p className="text-gray-600 mb-4">For larger payments or direct bank transfers</p>
                <div className="bg-gray-100 p-4 rounded-md">
                  <p className="font-semibold mb-2">Bank Details:</p>
                  <p>Bank: Centenary Bank</p>
                  <p>Account Name: ABF Funeral Services Ltd</p>
                  <p>Account Number: 1234567890</p>
                  <p>Swift Code: CERBUGKA</p>
                </div>
              </div>
            </div>

            <div className="mt-16 bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">Payment Confirmation</h3>
              <p className="text-lg mb-4">After making payment, please send confirmation details to:</p>
              <p className="text-xl font-bold text-secondary">+256 414 123 456</p>
              <p className="text-sm mt-4">Include: Transaction ID, Amount, Date, and Your Name</p>
            </div>
          </div>
        </section>

        <section id="saving-application" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-8 text-primary">Join Ekijja Omanyo Today</h2>
            <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
              Take the first step towards securing your family's future. Contact us to learn more about our saving scheme and find the plan that's right for you.
            </p>

            <div className="max-w-2xl mx-auto">
              <form className="bg-white p-8 rounded-lg shadow-lg space-y-6">
                <div>
                  <label htmlFor="full-name" className="block text-sm font-medium text-gray-700 mb-2">Full Name:</label>
                  <input type="text" id="full-name" name="full-name" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number:</label>
                    <input type="tel" id="phone" name="phone" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address:</label>
                    <input type="email" id="email" name="email" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent" />
                  </div>
                </div>

                <div>
                  <label htmlFor="preferred-plan" className="block text-sm font-medium text-gray-700 mb-2">Preferred Plan:</label>
                  <select id="preferred-plan" name="preferred-plan" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent">
                    <option value="">Select a plan</option>
                    <option value="royal">Royal Package (15,000,000)</option>
                    <option value="executive">Executive Package (8,000,000)</option>
                    <option value="classic">Classic Package (5,000,000)</option>
                    <option value="standard">Standard Package (3,000,000)</option>
                    <option value="basic">Basic Package (2,400,000)</option>
                    <option value="mosleme">Mosleme Package (2,000,000)</option>
                    <option value="professional">Professional Package (1,800,000)</option>
                    <option value="selected">Selected Items Package (1,500,000)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="payment-method" className="block text-sm font-medium text-gray-700 mb-2">Preferred Payment Method:</label>
                  <select id="payment-method" name="payment-method" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent">
                    <option value="">Select payment method</option>
                    <option value="mtn">MTN Mobile Money</option>
                    <option value="airtel">Airtel Money</option>
                    <option value="africell">Africell Money</option>
                    <option value="utl">UTL Mobile Money</option>
                    <option value="bank">Bank Transfer</option>
                    <option value="cash">Cash Payment</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="additional-info" className="block text-sm font-medium text-gray-700 mb-2">Additional Information:</label>
                  <textarea id="additional-info" name="additional-info" rows={4} placeholder="Any questions or special requirements..." className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"></textarea>
                </div>

                <div className="text-center">
                  <button type="submit" className="bg-primary text-white px-8 py-3 rounded-md hover:bg-primary-dark transition-colors duration-300">Apply Now</button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}