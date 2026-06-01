import { useScrollAnimation } from '../hooks/useScrollAnimation'

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2.5 1M13 16H3m10 0l3-8h3.5l1.5 4 1 4H13z" />
      </svg>
    ),
    title: 'Transporte Assistido Familiar',
    description: 'Realizamos o transporte seguro de crianças e adolescentes para visitas familiares, seguindo as determinações judiciais.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Intermediação de Convivência',
    description: 'Facilitamos a convivência familiar de forma neutra e profissional, promovendo um ambiente seguro, respeitoso e acolhedor.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'Relatórios para o Judiciário',
    description: 'Elaboramos relatórios técnicos objetivos e imparciais para apoio ao Poder Judiciário e órgãos competentes.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: 'Acompanhamento de Visitas',
    description: 'Acompanhamento profissional durante visitas supervisionadas, sempre com foco na segurança da criança.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Apoio ao Cumprimento Judicial',
    description: 'Atuamos no cumprimento de decisões judiciais, acordos homologados e planos de convivência familiar.',
  },
]

export default function Services() {
  const ref = useScrollAnimation()

  return (
    <section id="servicos" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="reveal text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-3">
            <div className="h-px w-14 rounded-full" style={{ backgroundColor: 'var(--gold)' }} />
            <span
              className="text-sm font-bold uppercase tracking-widest"
              style={{ color: 'var(--gold)', fontFamily: 'var(--font-sans)' }}
            >
              Nossos Serviços
            </span>
            <div className="h-px w-14 rounded-full" style={{ backgroundColor: 'var(--gold)' }} />
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ fontFamily: 'var(--font-serif)', color: 'var(--navy)' }}
          >
            Atuação especializada para cada fase do processo
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`service-card reveal reveal-delay-${i + 1} border-2 rounded-xl p-7 flex flex-col items-center text-center cursor-default`}
              style={{ borderColor: '#e5e7eb' }}
            >
              {/* Icon circle */}
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-5 border-2"
                style={{ borderColor: 'var(--navy)', color: 'var(--navy)' }}
              >
                {service.icon}
              </div>
              <h3
                className="font-bold text-base mb-3 leading-snug"
                style={{ color: 'var(--navy)', fontFamily: 'var(--font-serif)' }}
              >
                {service.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'var(--gray-text)', fontFamily: 'var(--font-sans)' }}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA button */}
        <div className="reveal flex justify-center mt-12">
          <a
            href="#contato"
            className="flex items-center gap-2 px-8 py-3 rounded-md border-2 font-bold text-sm hover:text-white transition-colors"
            style={{
              borderColor: 'var(--navy)',
              color: 'var(--navy)',
              fontFamily: 'var(--font-sans)',
            }}
            onMouseEnter={(e) => {
              ; (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'var(--navy)'
                ; (e.currentTarget as HTMLAnchorElement).style.color = '#fff'
            }}
            onMouseLeave={(e) => {
              ; (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent'
                ; (e.currentTarget as HTMLAnchorElement).style.color = 'var(--navy)'
            }}
          >
            Ver Todos os Serviços
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
