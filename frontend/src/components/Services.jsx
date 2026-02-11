import ServiceCard from './ServiceCard'
import { Link } from 'react-router-dom'

function Services() {
  const services = [
    {
      title: 'Landscaping Projects',
      description: 'From garden renovations to full property overhauls, we handle the heavy lifting with professional-grade machinery and expertise.',
      icon: '🌳',
    },
    {
      title: 'Garden Projects',
      description: 'Transform tired outdoor spaces into beautiful, thriving gardens with our hand-picked ornamental plants and premium soil.',
      icon: '🌺',
    },
    {
      title: 'Landscape & Garden Maintenance',
      description: 'Ongoing seasonal maintenance to keep your yard beautiful and healthy year-round.',
      icon: '🌿',
    },
    {
      title: 'Seasonal Maintenance',
      description: 'Comprehensive seasonal care including lawn care, pruning, and garden cleanup services.',
      icon: '🍂',
    },
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A great yard starts with a solid foundation. We specialize in transforming outdoor spaces from messy to masterpiece.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>

        <div className="text-center">
          <Link to="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Services
