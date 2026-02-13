import { Link } from 'react-router-dom'

function About() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              About A Beautiful Yard Landscaping
            </h2>
            <p className="text-lg text-gray-700">
              Trusted Landscaping in Greater Victoria BC
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              A Beautiful Yard Landscaping was started over 20 years ago as a lawn maintenance company. 
              Since then, we have become a full-service landscaping and gardening company, offering maintenance, 
              property improvements, and a wide range of lawn care services.
            </p>
            <p className="text-gray-700 mb-6">
              We're locally owned and operated, and we serve all areas in Greater Victoria BC, including 
              Sidney and the Saanich Peninsula, Saanich, Oak Bay, the Westshore and Sooke.
            </p>
            <p className="text-gray-700 mb-8">
              We're excited to discover how we can help with your landscape and garden projects!
            </p>

          </div>

          <div className="bg-primary-50 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Owner & Operator</h3>
            <p className="text-xl font-semibold mb-4 text-primary-700">Mike Simpson</p>
            <p className="text-gray-700 mb-4">
              Owner, operator and lead gardener Mike Simpson has over 30 years of experience in the 
              landscape/garden industry in and around Victoria. Throughout these years he's grown his 
              business and discovered that he is most happy and fulfilled being very hands-on with his projects.
            </p>
            <p className="text-gray-700">
              With a passion for restoring beauty and function to outdoor spaces, Mike approaches each 
              project with a love for plants, collaboration, and an eye for design. You'll see his smiling 
              face and dusty hands at every job site working directly with any other professionals needed 
              to create magic for your ongoing landscape maintenance or garden project.
            </p>
          </div>

          <div className="text-center">
            <Link to="/about" className="btn-primary" aria-label="Learn more about A Beautiful Yard Landscaping">
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
