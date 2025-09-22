'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 text-black z-50 shadow-lg stable-layout gpu-accelerated" style={{ backgroundColor: '#F5EFE6' }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center py-4 prevent-cls">
           {/* Logo */}
           <div className="flex items-center mb-2 sm:mb-4">
             <Image
               src="/pictures/logo1.jpg"
               alt="ABF Funeral Services Logo"
               width={60}
               height={60}
               className="rounded-full mr-2 sm:mr-3 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
             />
             <div className="flex flex-col">
               <span className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{ color: '#0BA6DF', letterSpacing: '0.25rem sm:0.5rem md:0.75rem' }}>ABF</span>
               <h2 className="text-lg sm:text-xl font-bold tracking-wide" style={{ color: '#C59560' }}>
                 Funeral Services
               </h2>
               <p className="text-xs sm:text-sm font-medium italic" style={{ color: '#0BA6DF', marginTop: '1px sm:2px' }}>
                 Reflecting God in Service
               </p>
             </div>
           </div>

           {/* Desktop Navigation */}
           <nav className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-secondary transition-colors duration-300 font-bold">
              Home
            </Link>
            <Link href="/about" className="hover:text-secondary transition-colors duration-300 font-bold">
              About Us
            </Link>
            <Link href="/services" className="hover:text-secondary transition-colors duration-300 font-bold">
              Services
            </Link>
            <Link href="/pricing" className="hover:text-secondary transition-colors duration-300 font-bold">
              Pricing
            </Link>
            <Link href="/ekijja-omanyi" className="hover:text-secondary transition-colors duration-300 font-bold">
              Ekijja Omanyi
            </Link>
            <Link href="/obituaries" className="hover:text-secondary transition-colors duration-300 font-bold">
              Obituaries
            </Link>
            <Link href="/gallery" className="hover:text-secondary transition-colors duration-300 font-bold">
              Gallery
            </Link>
            <Link href="/contact" className="hover:text-secondary transition-colors duration-300 font-bold">
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
              <Link href="/" className="py-3 px-4 rounded-md hover:bg-gray-100 hover:text-secondary transition-all duration-300 font-bold text-base">
                Home
              </Link>
              <Link href="/about" className="py-3 px-4 rounded-md hover:bg-gray-100 hover:text-secondary transition-all duration-300 font-bold text-base">
                About Us
              </Link>
              <Link href="/services" className="py-3 px-4 rounded-md hover:bg-gray-100 hover:text-secondary transition-all duration-300 font-bold text-base">
                Services
              </Link>
              <Link href="/pricing" className="py-3 px-4 rounded-md hover:bg-gray-100 hover:text-secondary transition-all duration-300 font-bold text-base">
                Pricing
              </Link>
              <Link href="/ekijja-omanyi" className="py-3 px-4 rounded-md hover:bg-gray-100 hover:text-secondary transition-all duration-300 font-bold text-base">
                Ekijja Omanyi
              </Link>
              <Link href="/obituaries" className="py-3 px-4 rounded-md hover:bg-gray-100 hover:text-secondary transition-all duration-300 font-bold text-base">
                Obituaries
              </Link>
              <Link href="/gallery" className="py-3 px-4 rounded-md hover:bg-gray-100 hover:text-secondary transition-all duration-300 font-bold text-base">
                Gallery
              </Link>
              <Link href="/contact" className="py-3 px-4 rounded-md hover:bg-gray-100 hover:text-secondary transition-all duration-300 font-bold text-base">
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}