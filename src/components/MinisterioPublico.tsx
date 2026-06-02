import { useScrollAnimation } from '../hooks/useScrollAnimation'

const benefits = [
  {
    title: 'Apoio à Proteção Integral da Criança',
    description: 'Atuamos em conformidade com o ECA, garantindo que cada atendimento respeite os direitos fundamentais da criança e do adolescente.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Fortalecimento da Convivência Familiar Segura',
    description: 'Promovemos encontros familiares estruturados e supervisionados, fortalecendo vínculos de forma segura e respeitosa.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: 'Redução de Situações de Risco',
    description: 'Nossa presença profissional durante os encontros previne e reduz situações de vulnerabilidade e risco para a criança.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
  {
    title: 'Apoio à Rede de Proteção',
    description: 'Integramos a rede de proteção à criança e ao adolescente, colaborando com Conselhos Tutelares, assistência social e demais órgãos.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
]

export default function MinisterioPublico() {
  const ref = useScrollAnimation()

  return (
    <section id="ministerio-publico" className="py-24" style={{ backgroundColor: 'var(--navy)' }} ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="reveal text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-3">
            <div className="h-px w-14 rounded-full" style={{ backgroundColor: 'var(--gold)' }} />
            <span
              className="text-sm font-bold uppercase tracking-widest"
              style={{ color: 'var(--gold)', fontFamily: 'var(--font-sans)' }}
            >
              Ministério Público
            </span>
            <div className="h-px w-14 rounded-full" style={{ backgroundColor: 'var(--gold)' }} />
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold text-white"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Benefícios ao Ministério Público
          </h2>
          <p
            className="mt-4 text-sm max-w-xl mx-auto"
            style={{ color: '#94a3b8', fontFamily: 'var(--font-sans)' }}
          >
            O direito de <span className="brand-name">Conviver</span> fortalece a atuação do Ministério Público na defesa dos direitos da criança e do adolescente, oferecendo suporte técnico especializado.
          </p>
        </div>

        {/* Benefit cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className={`reveal reveal-delay-${i + 1} flex flex-col gap-4 p-7 rounded-2xl`}
              style={{ backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: 'rgba(200,155,60,0.15)', color: 'var(--gold)' }}
              >
                {b.icon}
              </div>

              <div>
                <h3
                  className="font-bold text-base mb-2 leading-snug text-white"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {b.title}
                </h3>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: '#94a3b8', fontFamily: 'var(--font-sans)' }}
                >
                  {b.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
