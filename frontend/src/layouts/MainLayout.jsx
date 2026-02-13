import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" className="flex-grow" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
