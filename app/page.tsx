import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import RecentObituaries from '@/components/RecentObituaries'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className=" min-h-screen ">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0046FF] shadow-lg shadow-blue-400/50">
      <Header/>
        </header>
      <main className="gpu-accelerated pt-0">
        <Hero />
        <Services />
        <Testimonials />
        <RecentObituaries />
      </main>
      <Footer />
    </div>
  )
}