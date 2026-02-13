import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white watercolor-bg relative">
      <div className="container-custom section-padding relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary-400">A Beautiful Yard Landscaping</h3>
            <p className="text-gray-400">
              Trusted landscaping and gardening services in Greater Victoria BC.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-primary-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                5045 Mt Matheson Rd, Sooke, BC V9Z 1C4
              </li>
              <li>
                <a href="tel:2502161183" className="hover:text-primary-400 transition-colors">
                  (250) 216-1183
                </a>
              </li>
              <li>
                <a href="mailto:info@abylandscaping.com" className="hover:text-primary-400 transition-colors">
                  info@abylandscaping.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} A Beautiful Yard Landscaping. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
