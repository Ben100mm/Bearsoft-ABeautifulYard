import ContactForm from '../components/ContactForm'

function ContactPage() {
  return (
    <div className="bg-white">
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-primary-100">
            We'd love to discuss your landscaping / gardening project!
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-3xl">
          <div className="bg-gray-50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Get in Touch</h2>
            <div className="space-y-3 text-lg">
              <p>
                <span className="font-semibold">Phone:</span>{' '}
                <a href="tel:250-216-1183" className="text-primary-600 hover:text-primary-700">
                  250-216-1183
                </a>
              </p>
              <p>
                <span className="font-semibold">Email:</span>{' '}
                <a href="mailto:info@abylandscaping.com" className="text-primary-600 hover:text-primary-700">
                  info@abylandscaping.com
                </a>
              </p>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Send Us a Message</h2>
            <p className="text-gray-600 mb-6">
              Please send along a few details in the form below or get in touch directly.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
