import { useScrollAnimation } from '../hooks/useScrollAnimation'

const JUDICIARY_IMG = 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80'

const partners = [
  'Varas da Família',
  'Ministério Público',
  'Defensoria Pública',
  'Advogados',
  'Conselhos Tutelares',
]

const benefits = [
  {
    title: 'Maior efetividade das decisões judiciais',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
  },
  {
    title: 'Redução de petições por descumprimento de convivência',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'Redução de conflitos recorrentes',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Diminuição da necessidade de intervenção policial',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Maior proteção à criança',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
]

export default function Judiciary() {
  const ref = useScrollAnimation()

  return (
    <section id="judiciario" className="py-24" style={{ backgroundColor: 'var(--gray-bg)' }} ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Top: image | text ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">

          {/* Image */}
          <div className="reveal rounded-2xl overflow-hidden shadow-xl h-80 lg:h-96">
            <img
              src={JUDICIARY_IMG}
              alt="Profissional em reunião de suporte familiar"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="reveal reveal-delay-1">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-10 rounded-full" style={{ backgroundColor: 'var(--gold)' }} />
              <span
                className="text-sm font-bold uppercase tracking-widest"
                style={{ color: 'var(--gold)', fontFamily: 'var(--font-sans)' }}
              >
                Área do Judiciário
              </span>
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold leading-snug mb-4"
              style={{ fontFamily: 'var(--font-serif)', color: 'var(--navy)' }}
            >
              Parceria e confiança com o Poder Judiciário
            </h2>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: 'var(--gray-text)', fontFamily: 'var(--font-sans)' }}
            >
              A CONVIVER é parceira de órgãos e profissionais que atuam na garantia dos direitos da criança e do adolescente. Atuamos junto a:
            </p>
            <ul className="flex flex-col gap-2 mb-7">
              {partners.map((p) => (
                <li key={p} className="flex items-center gap-3 text-sm font-medium" style={{ color: 'var(--navy)', fontFamily: 'var(--font-sans)' }}>
                  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" style={{ color: 'var(--teal)' }}>
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {p}
                </li>
              ))}
            </ul>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-white font-bold text-sm hover:opacity-90 transition-opacity"
              style={{ backgroundColor: 'var(--gold)', fontFamily: 'var(--font-sans)' }}
            >
              Saiba Mais
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* ── Benefits grid ── */}
        <div className="reveal reveal-delay-2">
          <h3
            className="text-center text-xl font-bold mb-8"
            style={{ fontFamily: 'var(--font-serif)', color: 'var(--navy)' }}
          >
            Benefícios ao Poder Judiciário
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {benefits.map((b, i) => (
              <div
                key={b.title}
                className={`reveal reveal-delay-${i + 1} flex flex-col items-center text-center gap-3 p-5 rounded-2xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow`}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'rgba(26,43,95,0.08)', color: 'var(--navy)' }}
                >
                  {b.icon}
                </div>
                <p
                  className="text-xs font-semibold leading-snug"
                  style={{ color: 'var(--navy)', fontFamily: 'var(--font-sans)' }}
                >
                  {b.title}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
