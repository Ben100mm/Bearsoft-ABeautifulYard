function AboutPage() {
  return (
    <div className="bg-white">
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-primary-100">
            Trusted Landscaping in Greater Victoria BC
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              A Beautiful Yard Landscaping
            </h2>
            <p className="text-gray-700 mb-6 text-lg">
              A Beautiful Yard Landscaping was started over 20 years ago as a lawn maintenance company. 
              Since then, we have become a full-service landscaping and gardening company, offering maintenance, 
              property improvements, and a wide range of lawn care services.
            </p>
            <p className="text-gray-700 mb-6 text-lg">
              We're locally owned and operated, and we serve all areas in Greater Victoria BC, including 
              Sidney and the Saanich Peninsula, Saanich, Oak Bay, the Westshore and Sooke.
            </p>
            <p className="text-gray-700 mb-8 text-lg">
              We're excited to discover how we can help with your landscape and garden projects!
            </p>
          </div>

          <div className="bg-primary-50 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Owner & Operator</h3>
            <p className="text-xl font-semibold mb-4 text-primary-700">Mike Simpson</p>
            <p className="text-gray-700 mb-4 text-lg">
              Owner, operator and lead gardener Mike Simpson has over 30 years of experience in the 
              landscape/garden industry in and around Victoria. Throughout these years he's grown his 
              business and discovered that he is most happy and fulfilled being very hands-on with his projects.
            </p>
            <p className="text-gray-700 text-lg">
              With a passion for restoring beauty and function to outdoor spaces, Mike approaches each 
              project with a love for plants, collaboration, and an eye for design. You'll see his smiling 
              face and dusty hands at every job site working directly with any other professionals needed 
              to create magic for your ongoing landscape maintenance or garden project.
            </p>
          </div>

          <div className="bg-white border-2 border-primary-200 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">
              The ABY Way: Roots, Results & Reliability
            </h3>
            <h4 className="text-xl font-semibold mb-4 text-primary-700">
              Grounded Expertise, Reliable Results
            </h4>
            <p className="text-gray-700 mb-4 text-lg">
              At A Beautiful Yard, we believe that great landscaping starts with a great relationship. 
              We know that your home is your sanctuary, and inviting a team onto your property is a big deal. 
              That's why we treat every project with the same care and respect we'd give our own gardens.
            </p>
            <p className="text-gray-700 mb-4 text-lg">
              For us, being professional means more than just doing the heavy lifting; it means showing up 
              with a smile, staying true to our word, and keeping you in the loop every step of the way.
            </p>
            <p className="text-gray-700 text-lg">
              We're proud to be part of the community here in Greater Victoria—from the gardens of Sidney 
              and Saanich out to the Westshore. Our goal is to make the process easy and stress-free for you. 
              We swap the complicated technical talk for clear, helpful solutions and always make sure your 
              yard is left tidy and beautiful when we're done for the day. We're here to bring a steady hand 
              and a friendly face to your outdoor projects, ensuring you can simply sit back and enjoy the view.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
