import { useState, useEffect, useCallback } from 'react'

const slides = [
  { image: '/banner-1.jpg', alt: 'Banner Conviver 1' },
  { image: '/banner-2.jpg', alt: 'Banner Conviver 2' },
  { image: '/banner-3.jpg', alt: 'Banner Conviver 3' },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), [])
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), [])

  useEffect(() => {
    if (paused) return
    const id = setInterval(next, 6000)
    return () => clearInterval(id)
  }, [paused, next])

  return (
    <section
      id="inicio"
      className="relative w-full bg-white"
      style={{ marginTop: '80px', height: 'calc(100vh - 80px)' }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0 }}
          aria-hidden={i !== current}
        >
          <img
            src={s.image}
            alt={s.alt}
            className="w-full h-full object-contain"
          />
        </div>
      ))}

      {/* Arrow: prev */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
        style={{ backgroundColor: 'rgba(26,43,95,0.15)' }}
        aria-label="Slide anterior"
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(26,43,95,0.30)')}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(26,43,95,0.15)')}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--navy)' }}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Arrow: next */}
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
        style={{ backgroundColor: 'rgba(26,43,95,0.15)' }}
        aria-label="Próximo slide"
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(26,43,95,0.30)')}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(26,43,95,0.15)')}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--navy)' }}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === current ? '22px' : '8px',
              height: '8px',
              backgroundColor: i === current ? 'var(--gold)' : 'rgba(26,43,95,0.25)',
            }}
            aria-label={`Ir para slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
