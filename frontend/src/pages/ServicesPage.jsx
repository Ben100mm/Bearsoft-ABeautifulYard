import ServiceCard from '../components/ServiceCard'

function ServicesPage() {
  const services = [
    {
      title: 'Landscaping Projects',
      description: 'Whether you are looking to carve out a brand-new garden bed, install a lush, durable lawn, or finally remove that overgrown hedge that\'s blocking your view, our team has the tools and expertise to make it happen. We specialize in taking "tired" outdoor spaces and giving them a complete makeover that you can truly be proud of.',
      details: [
        'Installing new lawns (sod or seed)',
        'Garden renovations',
        'Overhauling outdoor spaces',
        'Mini bobcat work',
        'Site preparation and drainage',
        'Premium soil installation',
        'Hand-picked ornamental plants',
      ],
      icon: '🌳',
    },
    {
      title: 'Garden Projects',
      description: 'A beautiful yard starts with the right foundation. By utilizing professional-grade machinery, we ensure proper site preparation and drainage before bringing in premium soil, fresh sod, or hand-picked ornamental plants.',
      details: [
        'Garden bed design and installation',
        'Plant selection for local climate',
        'Soil preparation and grading',
        'Irrigation system planning',
        'Sustainable garden practices',
      ],
      icon: '🌺',
    },
    {
      title: 'Landscape & Garden Maintenance',
      description: 'Ongoing maintenance to keep your yard beautiful and healthy. We don\'t just "plant and leave"—we work with you to ensure your new yard stays beautiful for years to come.',
      details: [
        'Regular lawn mowing and edging',
        'Garden bed maintenance',
        'Pruning and trimming',
        'Weed control',
        'Fertilization programs',
      ],
      icon: '🌿',
    },
    {
      title: 'Seasonal Maintenance',
      description: 'Comprehensive seasonal care tailored to Greater Victoria\'s climate. From spring cleanups to winter preparation, we keep your landscape thriving year-round.',
      details: [
        'Spring cleanup and preparation',
        'Summer lawn care',
        'Fall leaf removal',
        'Winter protection',
        'Seasonal planting',
      ],
      icon: '🍂',
    },
  ]

  return (
    <div className="bg-white">
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            A great yard starts with a solid foundation. Our project team specializes in the heavy lifting 
            required to give your property a fresh start.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
              >
                <div className="flex-1">
                  <div className="text-6xl mb-4">{service.icon}</div>
                  <h2 className="text-3xl font-bold mb-4 text-gray-900">{service.title}</h2>
                  <p className="text-lg text-gray-700 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary-600 mr-2">✓</span>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 bg-gray-50 rounded-lg p-8">
                  <ServiceCard
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage
