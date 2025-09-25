export default function Footer() {
  return (
    <footer className="text-white py-6" style={{ backgroundColor: '#44444E' }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="lg:col-span-1">
            <div className="flex items-start mb-2">
              <img
                src="/pictures/logo1.jpg"
                alt="ABF Funeral Services Logo"
                className="h-16 w-16 rounded-full border-2 border-white object-cover mr-2 flex-shrink-0"
                style={{ backgroundColor: '#808080' }}
              />
              <div className="text-left">
                <div className="text-2xl font-bold mb-1" style={{ color: '#0BA6DF', letterSpacing: '0.5rem' }}>ABF</div>
                <h3 className="text-sm font-bold text-secondary mb-1">
                  Funeral Services
                </h3>
                <p className="text-xs font-medium italic" style={{ color: '#0BA6DF' }}>
                  Reflecting God in Service
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1 text-center lg:text-left">
            <h3 className="text-sm font-bold mb-2 text-secondary flex items-center justify-center lg:justify-start">
              <span className="mr-1 text-sm">📱</span>
              Contact
            </h3>
            <div className="space-y-2">
              <div className="text-xs">
                <p className="font-semibold text-white">Phone</p>
                <p className="text-gray-300">+256 776 514 531</p>
              </div>
              <div className="text-xs">
                <p className="font-semibold text-red-400">🚨 Emergency</p>
                <p className="text-gray-300">+256 709 727 832</p>
              </div>
              <div className="text-xs">
                <p className="font-semibold text-green-400">📧 Email</p>
                <a href="mailto:adventistbusinessfriends2022@gmail.com" className="text-gray-300 hover:text-white transition-colors">adventistbusinessfriends2022@gmail.com</a>
              </div>
              <div className="text-xs">
                <p className="font-semibold text-green-400">📱 WhatsApp</p>
                <a href="https://wa.me/256776514528" className="text-gray-300 hover:text-white transition-colors">+256 776 514528</a>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1 text-center lg:text-left">
            <h3 className="text-sm font-bold mb-2 text-secondary flex items-center justify-center lg:justify-start">
              <span className="mr-1 text-sm">📍</span>
              Locations
            </h3>
            <div className="space-y-2">
              <div className="text-xs">
                <p className="font-semibold text-white">Main Office</p>
                <p className="text-gray-300 leading-tight">Nakasero Plot 7/1 Entebbe Road</p>
              </div>
              <div className="text-xs">
                <p className="font-semibold text-white">Branch</p>
                <p className="text-gray-300 leading-tight">Wandegeya near Veteran Market</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1 text-center lg:text-left">
            <h3 className="text-sm font-bold mb-2 text-secondary text-center lg:text-left">Quick Links</h3>
            <div className="grid grid-cols-2 gap-1">
              <a href="/" className="text-xs hover:text-secondary transition-colors duration-300">Home</a>
              <a href="/about" className="text-xs hover:text-secondary transition-colors duration-300">About</a>
              <a href="/services" className="text-xs hover:text-secondary transition-colors duration-300">Services</a>
              <a href="/pricing" className="text-xs hover:text-secondary transition-colors duration-300">Pricing</a>
              <a href="/contact" className="text-xs hover:text-secondary transition-colors duration-300">Contact</a>
              <a href="/gallery" className="text-xs hover:text-secondary transition-colors duration-300">Gallery</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-4 pt-3 text-center">
          <p className="text-xs">&copy; 2025 ABF Funeral Services. All rights reserved.</p>
          <p className="text-sm mt-1 font-medium text-secondary">@enock-kalumba</p>
        </div>
      </div>
    </footer>
  )
}