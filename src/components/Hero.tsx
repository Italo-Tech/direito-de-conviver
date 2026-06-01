import { useState, useEffect, useCallback } from 'react'

const slides = [
  {
    image: '/banner-1.png',
    tag: 'Nossos Serviços',
    title: 'TRANSPORTE ASSISTIDO FAMILIAR',
    subtitle: 'Segurança e cuidado em cada trajeto.',
    description:
      'Realizamos o transporte seguro de crianças e adolescentes para visitas familiares, acompanhados por profissionais capacitados e respeitando integralmente as determinações judiciais.',
    cta1: { label: 'Conhecer os Serviços', href: '#servicos' },
    cta2: { label: 'Falar Conosco', href: '#contato' },
  },
  {
    image: '/banner-2.jpg',
    tag: 'Direito de Conviver',
    title: 'DIREITO DE CONVIVER',
    subtitle: 'O direito que conecta. O respeito que protege.',
    description:
      'A CONVIVER atua na promoção da convivência familiar segura e no cumprimento de determinações judiciais, oferecendo transporte assistido e intermediação de convívio com ética, imparcialidade e respeito.',
    cta1: { label: 'Solicitar Atendimento', href: '#contato' },
    cta2: { label: 'Saiba Mais', href: '#quem-somos' },
  },
  {
    image: '/banner-3.jpg',
    tag: 'Área do Judiciário',
    title: 'PARCERIA COM O JUDICIÁRIO',
    subtitle: 'Relatórios técnicos e acompanhamento especializado.',
    description:
      'Somos parceiros do Poder Judiciário, do Ministério Público e da Defensoria Pública, elaborando relatórios técnicos objetivos e imparciais para apoio às decisões que protegem crianças e adolescentes.',
    cta1: { label: 'Área do Judiciário', href: '#judiciario' },
    cta2: { label: 'Entre em Contato', href: '#contato' },
  },
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

  const slide = slides[current]

  return (
    <section
      id="inicio"
      className="relative w-full overflow-hidden"
      style={{ height: '100vh' }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Background images ── */}
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0 }}
          aria-hidden={i !== current}
        >
          <img src={s.image} alt="" className="w-full h-full object-cover object-center" />
        </div>
      ))}

      {/* ── Dark overlay for text legibility ── */}
      <div
        className="absolute inset-0"
        style={{ background: 'rgba(15, 25, 60, 0.72)' }}
      />

      {/* ── Text content ── */}
      <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-8">
        <div
          key={current}
          className="w-full max-w-3xl text-center"
          style={{ animation: 'heroContentEnter 0.65s ease forwards' }}
        >
          {/* Tag badge */}
          <span
            className="inline-block text-xs sm:text-sm font-bold uppercase tracking-widest mb-5 px-4 py-1.5 rounded-full"
            style={{
              color: 'var(--gold)',
              border: '1.5px solid var(--gold)',
              fontFamily: 'var(--font-sans)',
            }}
          >
            {slide.tag}
          </span>

          {/* Title */}
          <h1
            className="mb-4 leading-tight"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2rem, 6vw, 4rem)',
              fontWeight: 800,
              color: '#FFFFFF',
              textShadow: '0 2px 12px rgba(0,0,0,0.5)',
            }}
          >
            {slide.title}
          </h1>

          {/* Decorative line */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-0.5 w-14 rounded-full" style={{ backgroundColor: 'var(--gold)' }} />
            <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: 'var(--gold)' }} />
            <div className="h-0.5 w-14 rounded-full" style={{ backgroundColor: 'var(--gold)' }} />
          </div>

          {/* Subtitle */}
          <p
            className="text-base sm:text-xl font-semibold italic mb-5"
            style={{
              color: 'var(--gold)',
              fontFamily: 'var(--font-serif)',
              textShadow: '0 1px 6px rgba(0,0,0,0.4)',
            }}
          >
            {slide.subtitle}
          </p>

          {/* Description */}
          <p
            className="text-sm sm:text-base leading-relaxed mb-8 mx-auto"
            style={{
              color: 'rgba(255,255,255,0.88)',
              fontFamily: 'var(--font-sans)',
              maxWidth: '600px',
              textShadow: '0 1px 4px rgba(0,0,0,0.4)',
            }}
          >
            {slide.description}
          </p>

          {/* CTAs */}
          <div className="flex gap-3 justify-center flex-wrap">
            <a
              href={slide.cta1.href}
              className="px-6 py-3 rounded-md font-bold text-sm hover:opacity-90 transition-opacity"
              style={{
                backgroundColor: 'var(--gold)',
                color: '#FFFFFF',
                fontFamily: 'var(--font-sans)',
              }}
            >
              {slide.cta1.label}
            </a>
            <a
              href={slide.cta2.href}
              className="px-6 py-3 rounded-md font-bold text-sm hover:bg-white hover:text-[#1A2B5F] transition-colors"
              style={{
                border: '2px solid rgba(255,255,255,0.75)',
                color: '#FFFFFF',
                fontFamily: 'var(--font-sans)',
              }}
            >
              {slide.cta2.label}
            </a>
          </div>
        </div>
      </div>

      {/* ── Arrows ── */}
      <button
        onClick={prev}
        className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
        style={{ backgroundColor: 'rgba(255,255,255,0.18)' }}
        aria-label="Slide anterior"
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.32)')}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.18)')}
      >
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={next}
        className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
        style={{ backgroundColor: 'rgba(255,255,255,0.18)' }}
        aria-label="Próximo slide"
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.32)')}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.18)')}
      >
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* ── Dots ── */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === current ? '28px' : '8px',
              height: '8px',
              backgroundColor: i === current ? 'var(--gold)' : 'rgba(255,255,255,0.45)',
            }}
            aria-label={`Ir para slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
