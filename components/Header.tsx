'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="navbar-fixed text-white shadow-lg stable-layout gpu-accelerated"style={{backgroundColor:'#264fa0'}}>
      <div className="container mx-auto px-4">
        <div className="flex flex-block items-center py-4 prevent-cls">
           {/* Logo */}
           <div className="flex items-center mb-2 sm:mb-4 px-4">
             <Image
               src="/pictures/logo1.jpg"
               alt="ABF Funeral Services Logo"
               width={60}
               height={60}
               className="rounded-full mr-2 sm:mr-3 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
             />
             <div className="flex flex-col">
               <span className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{ color: '#E6F7FF', letterSpacing: '0.25rem sm:0.5rem md:0.75rem' }}>ABF</span>
               <h2 className="text-lg sm:text-xl font-bold tracking-wide" style={{ color: '#E6F7FF' }}>
                 Funeral Services{/**#0BA6DF */}
               </h2>
               <p className="text-xs sm:text-sm font-medium italic" style={{ color: '#E6F7FF', marginTop: '1px sm:2px' }}>
                 Reflecting God in Service
               </p>
             </div>
           </div>

           {/* Desktop Navigation */}
           <nav className="hidden md:flex space-x-8">
            <Link href="/" className="nav-text-gradient transition-all duration-300 font-bold" style={{color:'#C59560'}}>
              Home
            </Link>
            <Link href="/about" className="nav-text-gradient transition-all duration-300 font-bold text-white">
              About Us
            </Link>
            <Link href="/services" className="nav-text-gradient transition-all duration-300 font-bold text-white">
              Services
            </Link>
            <Link href="/pricing" className="nav-text-gradient transition-all duration-300 font-bold text-white">
              Pricing
            </Link>
            <Link href="/ekijja-omanyi" className="nav-text-gradient transition-all duration-300 font-bold text-white">
              Ekijja Omanyi
            </Link>
            <Link href="/obituaries" className="nav-text-gradient transition-all duration-300 font-bold text-white">
              Obituaries
            </Link>
            <Link href="/gallery" className="nav-text-gradient transition-all duration-300 font-bold text-white">
              Gallery
            </Link>
            <Link href="/contact" className="nav-text-gradient transition-all duration-300 font-bold text-white">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-4 rounded-md hover:bg-gray-200 transition-colors duration-200 absolute top-0 right-0"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-300 bg-white/95 backdrop-blur-sm">
            <nav className="flex flex-col space-y-2 px-4">
              <Link href="/" className="py-3 transition-all duration-300 font-bold text-base nav-text-gradient" style={{color:'#C59560'}}>
                Home
              </Link>
              <Link href="/about" className="py-3 transition-all duration-300 font-bold text-base text-white nav-text-gradient">
                About Us
              </Link>
              <Link href="/services" className="py-3 transition-all duration-300 font-bold text-base text-white nav-text-gradient">
                Services
              </Link>
              <Link href="/pricing" className="py-3 transition-all duration-300 font-bold text-base text-white nav-text-gradient">
                Pricing
              </Link>
              <Link href="/ekijja-omanyi" className="py-3 transition-all duration-300 font-bold text-base text-white nav-text-gradient">
                Ekijja Omanyi
              </Link>
              <Link href="/obituaries" className="py-3 transition-all duration-300 font-bold text-base text-white nav-text-gradient">
                Obituaries
              </Link>
              <Link href="/gallery" className="py-3 transition-all duration-300 font-bold text-base text-white nav-text-gradient">
                Gallery
              </Link>
              <Link href="/contact" className="py-3 transition-all duration-300 font-bold text-base text-white nav-text-gradient">
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}