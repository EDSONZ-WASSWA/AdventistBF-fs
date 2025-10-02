import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import RecentObituaries from '@/components/RecentObituaries'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen stable-layout">
      <Header />
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