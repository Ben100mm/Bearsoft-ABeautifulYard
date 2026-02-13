import { useState } from 'react'

function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null)

  // Placeholder gallery items - replace with actual images
  const galleryItems = [
    {
      id: 1,
      title: 'Landscaping Project',
      category: 'Landscaping',
      image: '/assets/images/gallery-1.jpg',
      description: 'Complete yard transformation with new lawn and garden beds',
    },
    {
      id: 2,
      title: 'Garden Design',
      category: 'Garden',
      image: '/assets/images/gallery-2.jpg',
      description: 'Beautiful ornamental garden with hand-picked plants',
    },
    {
      id: 3,
      title: 'Lawn Installation',
      category: 'Landscaping',
      image: '/assets/images/gallery-3.jpg',
      description: 'Fresh sod installation for a lush, green lawn',
    },
    {
      id: 4,
      title: 'Garden Maintenance',
      category: 'Maintenance',
      image: '/assets/images/gallery-4.jpg',
      description: 'Ongoing maintenance keeps gardens looking pristine',
    },
    {
      id: 5,
      title: 'Seasonal Cleanup',
      category: 'Maintenance',
      image: '/assets/images/gallery-5.jpg',
      description: 'Spring cleanup and preparation for the growing season',
    },
    {
      id: 6,
      title: 'Property Overhaul',
      category: 'Landscaping',
      image: '/assets/images/gallery-6.jpg',
      description: 'Complete property transformation from start to finish',
    },
    {
      id: 7,
      title: 'Garden Bed Design',
      category: 'Garden',
      image: '/assets/images/gallery-7.jpg',
      description: 'Custom garden bed design with premium soil and plants',
    },
    {
      id: 8,
      title: 'Landscape Maintenance',
      category: 'Maintenance',
      image: '/assets/images/gallery-8.jpg',
      description: 'Regular maintenance ensures year-round beauty',
    },
    {
      id: 9,
      title: 'Outdoor Space Renovation',
      category: 'Landscaping',
      image: '/assets/images/gallery-9.jpg',
      description: 'Transforming tired outdoor spaces into beautiful areas',
    },
  ]

  const categories = ['All', 'Landscaping', 'Garden', 'Maintenance']
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredItems =
    activeCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory)

  const openModal = (item) => {
    setSelectedImage(item)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="section-padding bg-white relative">
        <div className="container-custom text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Our Gallery</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Take a look at some of our recent projects and transformations.
            From complete yard overhauls to ongoing maintenance, see the quality
            and care we bring to every job.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white relative">
        <div className="container-custom relative z-10">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                aria-label={`Filter gallery by ${category}`}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 ${
                  activeCategory === category
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white/80 text-gray-700 hover:bg-white hover:text-primary-600 backdrop-blur-sm'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-white relative">
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border border-gray-200 focus-within:ring-2 focus-within:ring-primary-500 focus-within:ring-offset-2"
                onClick={() => openModal(item)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    openModal(item)
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`View ${item.title} - ${item.description}`}
              >
                <div className="aspect-square bg-gradient-to-br from-gray-300 to-gray-500 relative overflow-hidden">
                  {/* Placeholder for image - replace with actual img tag when images are added */}
                  <div className="w-full h-full flex items-center justify-center text-white text-4xl font-bold">
                    {item.title}
                  </div>
                  {/* Uncomment when images are added:
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  */}
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300" />
                </div>
                <div className="p-6">
                  <span className="text-sm text-gray-700 font-semibold">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mt-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-sm mt-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-700 text-lg">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="max-w-4xl w-full bg-white rounded-lg shadow-2xl overflow-hidden border border-gray-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-900 rounded-full p-2 transition-colors duration-200 z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
                aria-label="Close image modal"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="aspect-video bg-gradient-to-br from-gray-300 to-gray-500 flex items-center justify-center">
                {/* Placeholder for image - replace with actual img tag when images are added */}
                <div className="text-white text-4xl font-bold">
                  {selectedImage.title}
                </div>
                {/* Uncomment when images are added:
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-full object-contain"
                />
                */}
              </div>
            </div>
            <div className="p-6">
              <span className="text-sm text-gray-700 font-semibold">
                {selectedImage.category}
              </span>
              <h3 className="text-2xl font-bold text-gray-900 mt-2">
                {selectedImage.title}
              </h3>
              <p className="text-gray-700 mt-2">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default GalleryPage
