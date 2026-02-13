import Accordion from '../components/Accordion'

function ServicesPage() {
  const services = [
    {
      title: 'Landscaping Projects',
      description: [],
      details: [
        'Climate-Smart Plant Selection – We choose species that thrive in Greater Victoria\'s unique coastal conditions',
        'Quality Materials – Premium soil, fresh sod, and carefully selected ornamentals',
        'Proper Preparation – Grading, drainage, and soil work done right the first time',
        'Ongoing Guidance – We don\'t just "plant and leave"—we ensure you know how to maintain your investment',
        'Lawn Installation – New sod or seed lawns with proper base preparation for lasting beauty',
        'Garden Design & Renovation – Complete garden makeovers tailored to your style and our local climate',
        'Property Transformations – Full outdoor overhauls that maximize your property\'s potential',
        'Site Work & Grading – Professional bobcat services for excavation, grading, and drainage solutions',
      ],
      icon: '',
    },
    {
      title: 'Garden Projects',
      description: [],
      details: [
        'Garden Bed Rejuvenation – Complete restoration of tired beds with fresh soil, compost, and strategic replanting',
        'Soil Enhancement – Premium mulch and organic compost applications to boost plant health and vitality',
        'Plant Selection & Installation – Climate-smart plantings chosen for our coastal environment and year-round beauty',
        'Specialty Pruning & Restoration – Expert pruning that saves and reshapes mature shrubs instead of replacing them',
        'Seasonal Color Planning – Thoughtful design that maintains visual interest through Victoria\'s changing seasons',
      ],
      icon: '',
    },
    {
      title: 'Landscape & Garden Maintenance',
      description: [],
      details: [
        'Seasonal Lawn Care – Regular mowing, trimming, and edging to keep your lawn healthy and sharp',
        'Garden Bed Maintenance – Weeding, deadheading, and seasonal cleanup to keep beds looking fresh',
        'Health Monitoring – Ongoing assessment of plant vitality, pest issues, and irrigation needs',
        'Pruning & Shaping – Regular trimming to maintain structure and encourage healthy growth',
        'Debris Removal – Leaf cleanup, branch removal, and keeping your property tidy year-round',
      ],
      icon: '',
    },
    {
      title: 'Seasonal Maintenance',
      description: [],
      details: [
        'Spring Renewal – Fresh mulch installation, fertilization, bed edging, and debris removal to kickstart the growing season',
        'Summer Prep – Lawn aeration and overseeding to strengthen turf before heat stress sets in',
        'Fall Cleanup – Intensive leaf removal, bed clearing, and soil conditioning to prepare your garden for winter',
        'Winter Pruning & Projects – Precision pruning while plants are dormant, plus off-season improvements and installations',
        'Seasonal Deep Cleans – Perfect for gardens that have grown wild or lost their shape—we restore structure and vitality',
      ],
      icon: '',
    },
  ]

  return (
    <div className="bg-white">
      <section className="section-padding bg-white relative">
        <div className="container-custom text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Our Services</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-4">
            A great yard starts with a solid foundation. Our project team specializes in the heavy lifting 
            required to give your property a fresh start. We utilize mini-bobcat equipment for efficient site 
            preparation, ensuring proper drainage and soil grading before any greenery goes in. From the lush 
            feel of a freshly installed sod lawn to the structural removal of overgrown hedges that have 
            reclaimed your view, we manage the transition from "messy" to "masterpiece" with precision and care.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white relative">
        <div className="container-custom relative z-10 max-w-4xl">
          <div className="flex flex-col items-center justify-center">
            {services.map((service, index) => (
              <Accordion
                key={index}
                title={service.title}
                isOpen={index === 0}
              >
                {service.icon && <div className="text-6xl mb-4">{service.icon}</div>}
                {service.title === 'Landscaping Projects' ? (
                  <>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Transform Your Outdoor Space with Expert Design & Installation</h3>
                    <p className="text-lg text-gray-700 mb-6">
                      From creating vibrant new garden beds to installing lush, durable lawns, we bring tired outdoor spaces back to life. Whether you're removing an overgrown hedge that's blocking your view or completely reimagining your property, we have the expertise and equipment to make it happen.
                    </p>
                    <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 mt-8">Built to Last: The Right Foundation Matters</h4>
                    <p className="text-lg text-gray-700 mb-6">
                      A beautiful yard isn't just about what you see on the surface—it's about what's underneath. We start every project with proper site preparation and drainage using professional-grade equipment. Then we bring in premium soil, hand-selected plants, and quality materials that set your landscape up for long-term success.
                    </p>
                    <h4 className="text-xl font-semibold mb-4 text-primary-600 mt-6">Our approach:</h4>
                    <ul className="space-y-2 mb-6">
                      {service.details.slice(0, 4).map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-primary-600 mr-2">✓</span>
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-lg text-gray-700 mb-6">
                      From small residential upgrades to full property transformations, we handle the heavy lifting so you can enjoy the results.
                    </p>
                    <h4 className="text-xl font-semibold mb-4 text-primary-600 mt-6">Our Landscaping Services</h4>
                    <ul className="space-y-2 mb-6">
                      {service.details.slice(4).map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-primary-600 mr-2">✓</span>
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-lg text-gray-700 mb-4">
                      Ready to start your project? Contact us for a free consultation and let's discuss how we can transform your outdoor space.
                    </p>
                  </>
                ) : service.title === 'Garden Projects' ? (
                  <>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Breathe New Life Into Your Garden</h3>
                    <p className="text-lg text-gray-700 mb-6">
                      Your garden is more than just plants—it's a living extension of your home that deserves expert care and attention. We specialize in garden rejuvenation, transforming tired, overgrown beds into vibrant outdoor spaces you'll love spending time in. Our approach goes deeper than surface-level fixes—we restore soil health, select climate-appropriate plants, and skillfully prune mature greenery to reveal its natural beauty.
                    </p>
                    <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 mt-8">Beyond Basic Planting: A Foundation-First Approach</h4>
                    <div className="space-y-6 mb-6">
                      <div>
                        <h5 className="text-lg font-semibold text-gray-900 mb-2">Soil Health is Everything</h5>
                        <p className="text-lg text-gray-700">
                          Healthy plants start with healthy soil. We don't just pull weeds and drop in new plants—we rebuild your garden beds from the ground up with premium organic compost and mulch that feed your plants and improve long-term vitality.
                        </p>
                      </div>
                      <div>
                        <h5 className="text-lg font-semibold text-gray-900 mb-2">Smart Plant Selection</h5>
                        <p className="text-lg text-gray-700">
                          Every plant we choose is selected for Victoria's coastal climate and your garden's specific conditions. We design for year-round color and texture, ensuring your property looks beautiful through every season.
                        </p>
                      </div>
                      <div>
                        <h5 className="text-lg font-semibold text-gray-900 mb-2">Preservation Over Replacement</h5>
                        <p className="text-lg text-gray-700">
                          Many companies will tell you to rip out mature shrubs and start over. We see potential where others see problems. Through expert pruning and restoration, we give overgrown greenery a clean, modern shape—preserving your landscape's established character while bringing it into the present.
                        </p>
                      </div>
                    </div>
                    <h4 className="text-xl font-semibold mb-4 text-primary-600 mt-6">Our Garden Services</h4>
                    <ul className="space-y-2 mb-6">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-primary-600 mr-2">✓</span>
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-lg text-gray-700 mb-4">
                      Have a garden that needs attention? Let's discuss how we can restore its beauty and health. Contact us for a free consultation.
                    </p>
                  </>
                ) : service.title === 'Landscape & Garden Maintenance' ? (
                  <>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Keep Your Outdoor Investment Thriving Year-Round</h3>
                    <p className="text-lg text-gray-700 mb-6">
                      A beautiful landscape doesn't happen by accident—it requires consistent, knowledgeable care. Our maintenance programs take the guesswork (and the work) out of keeping your property looking its best through every season.
                    </p>
                    <p className="text-lg text-gray-700 mb-6">
                      We provide reliable, scheduled visits that keep your lawn green, your beds weed-free, and your entire landscape healthy and vibrant. No last-minute scrambles, no overgrown corners—just steady care from professionals who know Greater Victoria's unique growing conditions.
                    </p>
                    <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 mt-8">Customized Care, Not Cookie-Cutter Service</h4>
                    <h5 className="text-lg font-semibold text-gray-900 mb-4">Your Property is Unique—Your Maintenance Plan Should Be Too</h5>
                    <p className="text-lg text-gray-700 mb-4">
                      We don't believe in one-size-fits-all lawn care. Instead, we create a custom maintenance schedule tailored to your property's specific needs and your priorities.
                    </p>
                    <p className="text-lg text-gray-700 mb-4">Whether you want:</p>
                    <ul className="space-y-2 mb-6 ml-4">
                      <li className="flex items-start">
                        <span className="text-primary-600 mr-2">•</span>
                        <span className="text-gray-700">Pristine curb appeal that impresses year-round</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary-600 mr-2">•</span>
                        <span className="text-gray-700">Organic vegetable garden care and support</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary-600 mr-2">•</span>
                        <span className="text-gray-700">Estate-level management for larger properties</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary-600 mr-2">•</span>
                        <span className="text-gray-700">Low-maintenance native plantings kept tidy and healthy</span>
                      </li>
                    </ul>
                    <p className="text-lg text-gray-700 mb-6">
                      ...we design a program that fits your landscape and your life.
                    </p>
                    <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 mt-8">What Sets Our Maintenance Apart</h4>
                    <div className="space-y-6 mb-6">
                      <div>
                        <h5 className="text-lg font-semibold text-gray-900 mb-2">Proactive, Not Reactive</h5>
                        <p className="text-lg text-gray-700">
                          We don't just show up and mow. We actively monitor your garden's health, catching potential issues before they become problems. Pest pressure building? Irrigation needs adjusting? We're on it.
                        </p>
                      </div>
                      <div>
                        <h5 className="text-lg font-semibold text-gray-900 mb-2">Clear Communication</h5>
                        <p className="text-lg text-gray-700">
                          You'll always know when we're coming, what we're doing, and what we're seeing in your garden. No surprises, no confusion—just straightforward updates and expert recommendations.
                        </p>
                      </div>
                      <div>
                        <h5 className="text-lg font-semibold text-gray-900 mb-2">Respect for Your Property</h5>
                        <p className="text-lg text-gray-700">
                          We treat your home like our own: careful around plantings, mindful of pets and kids, and always leaving your property tidy.
                        </p>
                      </div>
                    </div>
                    <h4 className="text-xl font-semibold mb-4 text-primary-600 mt-6">Our Maintenance Services</h4>
                    <ul className="space-y-2 mb-6">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-primary-600 mr-2">✓</span>
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-lg text-gray-700 mb-4">
                      Want to take yard work off your to-do list? Let's create a custom maintenance plan for your property. Contact us for a free consultation.
                    </p>
                  </>
                ) : service.title === 'Seasonal Maintenance' ? (
                  <>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Keep Your Landscape Thriving Through Every Season</h3>
                    <p className="text-lg text-gray-700 mb-6">
                      Gardens don't stay static—they shift and change with Victoria's seasons. Our specialized seasonal services ensure your landscape gets exactly what it needs, when it needs it, to stay healthy and beautiful year-round.
                    </p>
                    <p className="text-lg text-gray-700 mb-6">
                      Whether you prefer targeted seasonal visits or want to add them to a regular maintenance plan, these timely interventions keep your property looking its best and prevent small issues from becoming big problems.
                    </p>
                    <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 mt-8">Why Seasonal Care Matters</h4>
                    <p className="text-lg text-gray-700 mb-4">
                      Each season brings unique opportunities and challenges for your landscape. Spring demands fertilization and fresh mulch. Fall requires intensive cleanup before winter arrives. Winter is prime time for strategic pruning that sets your plants up for vigorous spring growth.
                    </p>
                    <p className="text-lg text-gray-700 mb-4">
                      Our seasonal visits are perfectly timed to work with nature, not against it—addressing your garden's changing needs as the weather shifts throughout the year.
                    </p>
                    <p className="text-lg text-gray-700 mb-6">
                      The result? A yard that's always prepared for what's next, with healthier plants, richer soil, and fewer surprises.
                    </p>
                    <h4 className="text-xl font-semibold mb-4 text-primary-600 mt-6">Our Seasonal Services</h4>
                    <ul className="space-y-2 mb-6">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-primary-600 mr-2">✓</span>
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                    <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 mt-8">Perfect for Busy Homeowners</h4>
                    <p className="text-lg text-gray-700 mb-4">
                      Not ready for year-round maintenance? Seasonal services are ideal if you:
                    </p>
                    <ul className="space-y-2 mb-6 ml-4">
                      <li className="flex items-start">
                        <span className="text-primary-600 mr-2">•</span>
                        <span className="text-gray-700">Handle day-to-day care yourself but want expert help with bigger seasonal tasks</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary-600 mr-2">•</span>
                        <span className="text-gray-700">Need to get an overgrown garden back under control</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary-600 mr-2">•</span>
                        <span className="text-gray-700">Want to protect your landscape investment without a full maintenance contract</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary-600 mr-2">•</span>
                        <span className="text-gray-700">Prefer timely professional intervention at critical points in the growing season</span>
                      </li>
                    </ul>
                    <p className="text-lg text-gray-700 mb-4">
                      Ready to give your garden the seasonal care it deserves? Contact us to discuss which seasonal services are right for your property.
                    </p>
                  </>
                ) : (
                  <>
                    {service.description.map((paragraph, pIdx) => (
                      <p key={pIdx} className="text-lg text-gray-700 mb-4">{paragraph}</p>
                    ))}
                    <h3 className="text-xl font-semibold mb-4 text-primary-600 mt-6">Specialties include:</h3>
                    <ul className="space-y-2">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-primary-600 mr-2">✓</span>
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </Accordion>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage
