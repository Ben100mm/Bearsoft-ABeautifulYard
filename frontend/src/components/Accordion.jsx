import { useState } from 'react'

function Accordion({ title, children, isOpen = false }) {
  const [open, setOpen] = useState(isOpen)

  return (
    <div className="w-full mb-3 bg-white border-b border-primary-200/40 hover:border-primary-300/60 transition-colors duration-300">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left py-5 md:py-6 flex items-center justify-between gap-4 focus:outline-none focus:ring-0 group"
        aria-expanded={open}
        aria-controls={`accordion-content-${title}`}
      >
        <h2 className="text-xl md:text-2xl font-light text-gray-800 flex-1 pr-4 min-w-0 tracking-wide group-hover:text-primary-700 transition-colors duration-300">
          {title}
        </h2>
        <div className="flex-shrink-0">
          <svg
            className={`w-4 h-4 text-primary-500 transition-transform duration-400 ease-out ${open ? 'transform rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      <div
        id={`accordion-content-${title}`}
        className={`transition-all duration-400 ease-out ${
          open ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="pb-5 md:pb-6 pt-2 text-gray-700">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Accordion
