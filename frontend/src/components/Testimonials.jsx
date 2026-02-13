function Testimonials() {
  const testimonials = [
    {
      quote: "The ABY Way: Roots, Results & Reliability. Grounded Expertise, Reliable Results.",
      author: "Satisfied Customer",
      location: "Greater Victoria BC",
      shape: "shape-1",
    },
    {
      quote: "Great landscaping starts with a great relationship. They treated our property with the same care they'd give their own gardens.",
      author: "Happy Homeowner",
      location: "Saanich Peninsula",
      shape: "shape-2",
    },
    {
      quote: "Professional, friendly, and always left our yard tidy and beautiful. Highly recommend!",
      author: "Local Resident",
      location: "Oak Bay",
      shape: "shape-3",
    },
  ]

  return (
    <section className="section-padding bg-white pt-16 md:pt-20">
      <div className="container-custom">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">What Our Clients Say</h2>
          <p className="text-lg text-gray-600">
            We're proud to be part of the community here in Greater Victoria
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-6 lg:gap-8 py-6 md:py-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`testimonial-watercolor-card ${testimonial.shape} w-full md:w-1/3 max-w-md px-8 py-10 md:px-6 md:py-10 lg:px-8 lg:py-12`}
            >
              <p className="text-lg md:text-xl mb-6 italic text-gray-800 leading-relaxed">"{testimonial.quote}"</p>
              <div className="pt-6">
                <p className="font-semibold text-gray-900 text-base md:text-lg">{testimonial.author}</p>
                <p className="text-primary-600 text-sm md:text-base mt-1">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
