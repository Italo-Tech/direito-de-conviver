import { useState, useEffect, useCallback } from 'react'

const slides = [
  {
    // Para pais e mães em processo judicial
    image: 'https://images.unsplash.com/photo-1543342384-1f1350e27861?w=1600&q=80',
    audience: 'Para Pais e Mães',
    tag: 'Convivência Familiar Garantida',
    title: 'SEU FILHO MERECE ESTAR COM VOCÊ',
    subtitle: 'Convivência segura, digna e sem conflito.',
    description:
      'Pai ou mãe em processo judicial? O direito de Conviver garante que você possa exercer o direito à convivência com seu filho de forma segura e respeitosa — com profissionais neutros presentes em cada encontro e transporte, sem exposição ao conflito.',
    cta1: { label: 'Solicitar Atendimento', href: 'https://wa.me/5511940803060' },
    cta2: { label: 'Como Funciona', href: '#como-funciona' },
  },
  {
    // Para a criança — missão central
    image: 'https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=1600&q=80',
    audience: 'Missão e Propósito',
    tag: 'O Direito Fundamental da Criança',
    title: 'TODA CRIANÇA TEM O DIREITO À FAMÍLIA',
    subtitle: 'Protegemos o vínculo mais fundamental da infância.',
    description:
      'Nascemos da convicção de que toda criança tem o direito de manter vínculos afetivos saudáveis com ambos os pais — de forma segura e protegida. Cada atendimento é conduzido com foco exclusivo no superior interesse da criança e do adolescente.',
    cta1: { label: 'Nossa História', href: '#historia' },
    cta2: { label: 'Nossos Serviços', href: '#servicos' },
  },
  {
    // Para famílias em conflito — solução prática
    image: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=1600&q=80',
    audience: 'Famílias em Conflito Judicial',
    tag: 'Solução para Conflitos Familiares',
    title: 'CONFLITO FAMILIAR? TEMOS A SOLUÇÃO',
    subtitle: 'Neutralidade profissional em cada encontro.',
    description:
      'Quando o conflito entre os responsáveis dificulta o cumprimento das visitas, o direito de Conviver atua como estrutura imparcial — realizando entregas protegidas, transporte assistido e visitas supervisionadas com registro completo e relatório técnico ao Judiciário.',
    cta1: { label: 'Conhecer os Serviços', href: '#servicos' },
    cta2: { label: 'Entre em Contato', href: 'https://wa.me/5511940803060' },
  },
  {
    // Para juízes, promotores e oficiais de justiça
    image: 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=1600&q=80',
    audience: 'Para Magistrados e Varas da Família',
    tag: 'Parceiro do Poder Judiciário',
    title: 'APOIO TÉCNICO PARA O JUDICIÁRIO',
    subtitle: 'Relatórios precisos. Decisões efetivadas na prática.',
    description:
      'Elaboramos relatórios técnicos objetivos e imparciais que reduzem a necessidade de novas audiências por descumprimento de convivência. Apoiamos a execução prática das determinações já proferidas — sem substituir a decisão judicial, mas tornando-a real e efetiva.',
    cta1: { label: 'Área do Judiciário', href: '#judiciario' },
    cta2: { label: 'Benefícios ao Judiciário', href: '#judiciario' },
  },
  {
    // Para promotores, defensores, rede de proteção
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80',
    audience: 'Para Promotores e Rede de Proteção',
    tag: 'Proteção Integral à Criança',
    title: 'PROTEÇÃO INTEGRAL EM CADA ATENDIMENTO',
    subtitle: 'Atuação em conformidade com o ECA e a legislação vigente.',
    description:
      'Apoiamos o Ministério Público, a Defensoria Pública e os Conselhos Tutelares na garantia dos direitos fundamentais de crianças e adolescentes. Cada atendimento é documentado e reportado, fortalecendo a rede de proteção e reduzindo situações de risco.',
    cta1: { label: 'Benefícios ao MP', href: '#ministerio-publico' },
    cta2: { label: 'Falar Conosco', href: 'https://wa.me/5511940803060' },
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
          {/* Audience badge */}
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest mb-3 px-3 py-1 rounded-full"
            style={{
              color: 'rgba(255,255,255,0.75)',
              border: '1px solid rgba(255,255,255,0.3)',
              fontFamily: 'var(--font-sans)',
            }}
          >
            {slide.audience}
          </span>

          {/* Tag badge */}
          <br />
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
              {...(slide.cta1.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
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
              {...(slide.cta2.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
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
