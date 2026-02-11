function Testimonials() {
  const testimonials = [
    {
      quote: "The ABY Way: Roots, Results & Reliability. Grounded Expertise, Reliable Results.",
      author: "Satisfied Customer",
      location: "Greater Victoria BC",
    },
    {
      quote: "Great landscaping starts with a great relationship. They treated our property with the same care they'd give their own gardens.",
      author: "Happy Homeowner",
      location: "Saanich Peninsula",
    },
    {
      quote: "Professional, friendly, and always left our yard tidy and beautiful. Highly recommend!",
      author: "Local Resident",
      location: "Oak Bay",
    },
  ]

  return (
    <section className="section-padding bg-primary-600 text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-primary-100">
            We're proud to be part of the community here in Greater Victoria
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"
            >
              <p className="text-lg mb-4 italic">"{testimonial.quote}"</p>
              <div className="border-t border-white/20 pt-4">
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-primary-200 text-sm">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
