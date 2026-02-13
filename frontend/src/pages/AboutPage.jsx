function AboutPage() {
  return (
    <div className="bg-white">
      <section className="section-padding bg-white relative">
        <div className="container-custom text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            About A Beautiful Yard Landscaping
          </h1>
          <p className="text-xl text-gray-700">
            30+ Years of Hands-On Landscaping Excellence in Greater Victoria
          </p>
        </div>
      </section>

      <section className="section-padding bg-white relative">
        <div className="container-custom max-w-5xl relative z-10">
          <div className="flex flex-col gap-20 md:gap-28">
            {/* The ABY Way Section */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-4xl md:text-5xl font-bold text-gray-900">
                  The ABY Way: Roots, Results & Reliability
                </h3>
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
              <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed">
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
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
