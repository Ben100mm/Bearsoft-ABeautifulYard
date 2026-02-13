function AboutPage() {
  return (
    <div className="bg-white">
      <section className="relative overflow-hidden pt-48 md:pt-64 lg:pt-80">
        <img 
          src="/assets/images/About1.png" 
          alt="Beautiful yard landscaping about background"
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black drop-shadow-lg" style={{ textShadow: '0 2px 8px rgba(255, 255, 255, 0.8), 0 1px 3px rgba(0, 0, 0, 0.3)' }}>
              About A Beautiful Yard Landscaping
            </h1>
            <p className="text-xl text-black drop-shadow-lg" style={{ textShadow: '0 2px 8px rgba(255, 255, 255, 0.8), 0 1px 3px rgba(0, 0, 0, 0.3)' }}>
              30+ Years of Hands-On Landscaping Excellence in Greater Victoria
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
      </section>

      <section className="section-padding bg-white relative">
        <div className="container-custom max-w-5xl relative z-10">
          <div className="flex flex-col gap-20 md:gap-28">
            {/* The ABY Way Section */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                  The ABY Way: Roots, Results & Reliability
                </h2>
              </div>
              <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed">
                <p>
                  Great landscaping starts with trust.
                </p>
                <p>
                  We know inviting a team onto your property is personal—that's why we treat your yard like our own.
                </p>
                <p className="font-semibold text-gray-900">What this means for you:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Hands-On Leadership</strong> – Mike on-site at every project, not just estimates</li>
                  <li><strong>Clear Communication</strong> – No jargon, no surprises, just honest updates</li>
                  <li><strong>Respect for Your Space</strong> – Tidy worksites left beautiful at day's end</li>
                  <li><strong>Local Expertise</strong> – Deep knowledge of Greater Victoria's unique growing conditions</li>
                  <li><strong>Friendly, Reliable Service</strong> – From your neighbors who care about this community</li>
                </ul>
                <p>
                  We're proud to serve Greater Victoria, and we're here to make your outdoor projects stress-free from start to finish. You focus on enjoying your outdoor space—we'll handle the rest.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200"></div>

            {/* Owner Section */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Meet Mike Simpson</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-primary-600">Owner & Lead Gardener</h3>
              </div>
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-1 space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed">
                  <p>
                    With 30+ years in Victoria's landscape industry, Mike brings both expertise and genuine passion to every project.
                  </p>
                  <p>
                    Unlike many landscaping companies, Mike is hands-on at every job site—not behind a desk. He loves the collaboration, the problem-solving, and seeing beauty restored to outdoor spaces.
                  </p>
                  <p className="font-semibold text-gray-900">What sets Mike apart:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Deep knowledge of plants that thrive in our coastal climate</li>
                    <li>An eye for design that balances beauty and function</li>
                    <li>Direct involvement from consultation through completion</li>
                    <li>A commitment to doing the work right, not just fast</li>
                  </ul>
                  <p>
                    When you work with A Beautiful Yard, you get Mike's three decades of experience, attention to detail, and dedication to quality on every visit.
                  </p>
                </div>
                <div className="w-full md:w-1/3 flex-shrink-0 md:-mt-8">
                  <img 
                    src="/assets/images/Mike Simpson.png" 
                    alt="Mike Simpson, Owner & Lead Gardener" 
                    className="w-full h-auto rounded-full object-cover aspect-square"
                  />
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200"></div>

            {/* Company Story Section */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Your Trusted Local Landscaping Partner
              </h2>
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-1 space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed">
                  <p>
                    For over 20 years, A Beautiful Yard Landscaping has been transforming outdoor spaces across Greater Victoria. What started as a lawn maintenance company has grown into a full-service landscaping and gardening team—but we've never lost our personal touch.
                  </p>
                  <p>
                    Owner Mike Simpson is on-site at every project, ensuring the quality and care your property deserves. We serve Sidney, Saanich Peninsula, Saanich, Oak Bay, Westshore, and Sooke with:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Landscape maintenance and lawn care</li>
                    <li>Garden design and restoration</li>
                    <li>Property improvements and upgrades</li>
                    <li>Seasonal cleanups and ongoing care</li>
                  </ul>
                </div>
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <img 
                    src="/assets/images/Humming1.png" 
                    alt="Hummingbird" 
                    className="w-full h-auto rounded-lg object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
