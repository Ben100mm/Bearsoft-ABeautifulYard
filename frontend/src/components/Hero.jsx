import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="relative overflow-hidden pt-48 md:pt-64 lg:pt-80">
      <img 
        src="/assets/images/Landing1.png" 
        alt="Beautiful yard landscaping background"
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          imageRendering: 'auto',
          minHeight: '100%',
          minWidth: '100%'
        }}
      />
      <div className="absolute inset-0 bg-black/5"></div>
      <div className="container-custom relative z-10 pt-8 md:pt-12 pb-8 md:pb-12 -mt-16 md:-mt-24 lg:-mt-32">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-artistic mb-6 text-gray-900 drop-shadow-lg" style={{ textShadow: '0 2px 8px rgba(255, 255, 255, 0.8), 0 1px 3px rgba(0, 0, 0, 0.3)' }}>
            A Beautiful Yard Landscaping
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-900 font-semibold drop-shadow-lg" style={{ textShadow: '0 2px 8px rgba(255, 255, 255, 0.8), 0 1px 3px rgba(0, 0, 0, 0.3)' }}>
            Trusted Landscaping & Gardening Services in Greater Victoria BC
          </p>
          <p className="text-lg md:text-xl mb-10 text-gray-900 font-medium drop-shadow-lg" style={{ textShadow: '0 2px 8px rgba(255, 255, 255, 0.8), 0 1px 3px rgba(0, 0, 0, 0.3)' }}>
            Maintenance • Projects • Clean Ups
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-secondary" aria-label="Get in touch with A Beautiful Yard Landscaping">
              Get in Touch
            </Link>
            <Link to="/services" className="btn-primary" aria-label="View our landscaping services">
              Our Services
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
    </section>
  )
}

export default Hero
