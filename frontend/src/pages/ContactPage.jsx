import ContactForm from '../components/ContactForm'

function ContactPage() {
  return (
    <div className="bg-white">
      <section className="section-padding bg-white relative">
        <div className="container-custom text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Contact Us</h1>
          <p className="text-xl text-gray-700">
            We'd love to discuss your landscaping / gardening project!
          </p>
        </div>
      </section>

      <section className="section-padding bg-white relative pb-20">
        <div className="container-custom max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Contact Info & Hours */}
            <div className="space-y-10">
              {/* Contact Information Card */}
              <div className="bg-white border border-primary-200/50 rounded-lg p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Get in Touch</h2>
                <div className="space-y-6 text-lg text-gray-700">
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Address</p>
                    <p className="leading-relaxed">
                      5045 Mt Matheson Rd, Sooke, BC V9Z 1C4
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Phone</p>
                    <a href="tel:2502161183" className="text-primary-600 hover:text-primary-700 transition-colors duration-200">
                      (250) 216-1183
                    </a>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Email</p>
                    <a href="mailto:info@abylandscaping.com" className="text-primary-600 hover:text-primary-700 transition-colors duration-200 break-all">
                      info@abylandscaping.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Business Hours Card */}
              <div className="bg-white border border-primary-200/50 rounded-lg p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Business Hours</h2>
                <div className="space-y-3 text-lg">
                  {[
                    { day: 'Monday', hours: '8 a.m.–6 p.m.' },
                    { day: 'Tuesday', hours: '8 a.m.–6 p.m.' },
                    { day: 'Wednesday', hours: '8 a.m.–6 p.m.' },
                    { day: 'Thursday', hours: '8 a.m.–6 p.m.' },
                    { day: 'Friday', hours: '8 a.m.–6 p.m.' },
                    { day: 'Saturday', hours: '8 a.m.–6 p.m.' },
                    { day: 'Sunday', hours: 'Closed' },
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-1 border-b border-primary-100/50 last:border-0">
                      <span className="font-semibold text-gray-900">{item.day}</span>
                      <span className={`${item.hours === 'Closed' ? 'text-gray-500' : 'text-gray-700'}`}>
                        {item.hours}
                      </span>
                    </div>
                  ))}
                  <p className="text-sm text-gray-600 mt-6 italic">Hours might differ</p>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <div className="bg-white border border-primary-200/50 rounded-lg p-8 md:p-10 shadow-sm">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Send Us a Message</h2>
                <p className="text-lg text-gray-700 mb-8">
                  Please send along a few details in the form below or get in touch directly.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
