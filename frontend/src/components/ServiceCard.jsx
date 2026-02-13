function ServiceCard({ title, description, icon }) {
  return (
    <div className="watercolor-card rounded-watercolor-sm p-6 transition-all duration-300 hover:scale-105 relative z-10">
      {icon && <div className="text-primary-600 text-4xl mb-4">{icon}</div>}
      <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  )
}

export default ServiceCard
