import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white">
      <div className="container-custom section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            A Beautiful Yard Landscaping
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-100">
            Trusted Landscaping & Gardening Services in Greater Victoria BC
          </p>
          <p className="text-lg mb-10 text-primary-200">
            Maintenance • Projects • Clean Ups
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-secondary">
              Get in Touch
            </Link>
            <Link to="/services" className="btn-primary bg-white text-primary-600 hover:bg-primary-50">
              Our Services
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}

export default Hero
