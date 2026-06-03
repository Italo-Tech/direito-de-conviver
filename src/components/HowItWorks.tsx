import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { hl } from '../utils/brand'

const steps = [
  {
    number: '01',
    title: 'Determinação Judicial',
    description:
      'O magistrado emite a ordem de acompanhamento ou transporte assistido, estabelecendo as condições, periodicidade e partes envolvidas.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Contato com a Conviver',
    description:
      'A família, o advogado, a Defensoria Pública ou o próprio Juízo entra em contato com nossa equipe para dar início ao atendimento.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Planejamento do Atendimento',
    description:
      'Nossa equipe elabora o cronograma com datas, horários, rotas e condições, alinhado integralmente às determinações do processo.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Execução Profissional',
    description:
      'Realizamos o serviço com profissionais capacitados, garantindo a segurança, a imparcialidade e o bem-estar da criança ou adolescente.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    number: '05',
    title: 'Relatório ao Judiciário',
    description:
      'Entregamos relatório técnico detalhado ao órgão competente, Juízo, Ministério Público ou Defensoria, com objetividade e responsabilidade.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
]

export default function HowItWorks() {
  const ref = useScrollAnimation()

  return (
    <section id="como-funciona" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="reveal text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-3">
            <div className="h-px w-14 rounded-full" style={{ backgroundColor: 'var(--gold)' }} />
            <span
              className="text-sm font-bold uppercase tracking-widest"
              style={{ color: 'var(--gold)', fontFamily: 'var(--font-sans)' }}
            >
              Como Funciona
            </span>
            <div className="h-px w-14 rounded-full" style={{ backgroundColor: 'var(--gold)' }} />
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-serif)', color: 'var(--navy)' }}
          >
            Do mandado judicial ao relatório final
          </h2>
          <p
            className="text-base max-w-2xl mx-auto"
            style={{ color: 'var(--gray-text)', fontFamily: 'var(--font-sans)' }}
          >
            Nosso processo é estruturado para garantir segurança, imparcialidade e transparência em cada etapa do atendimento.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div
            className="hidden lg:block absolute top-[52px] left-0 right-0 h-px"
            style={{ backgroundColor: '#e5e7eb', zIndex: 0 }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`reveal reveal-delay-${i + 1} relative flex flex-col items-center text-center`}
                style={{ zIndex: 1 }}
              >
                {/* Number badge */}
                <div
                  className="text-xs font-bold mb-3 px-2 py-0.5 rounded-full"
                  style={{
                    color: 'var(--gold)',
                    border: '1px solid var(--gold)',
                    fontFamily: 'var(--font-sans)',
                    letterSpacing: '0.08em',
                  }}
                >
                  {step.number}
                </div>

                {/* Icon circle */}
                <div
                  className="w-[72px] h-[72px] rounded-full flex items-center justify-center mb-5 bg-white"
                  style={{
                    border: '2px solid var(--navy)',
                    color: 'var(--navy)',
                    boxShadow: '0 4px 16px rgba(26,43,95,0.10)',
                  }}
                >
                  {step.icon}
                </div>

                <h3
                  className="font-bold text-base mb-2 leading-snug"
                  style={{ color: 'var(--navy)', fontFamily: 'var(--font-serif)' }}
                >
                  {hl(step.title)}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'var(--gray-text)', fontFamily: 'var(--font-sans)' }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="reveal flex flex-col sm:flex-row items-center justify-center gap-4 mt-16 pt-12 border-t" style={{ borderColor: '#e5e7eb' }}>
          <p
            className="text-base font-semibold text-center sm:text-left"
            style={{ color: 'var(--navy)', fontFamily: 'var(--font-serif)' }}
          >
            Precisa de atendimento ou tem dúvidas sobre o processo?
          </p>
          <a
            href="https://wa.me/5511940803060"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-md text-white font-bold text-sm hover:opacity-90 transition-opacity whitespace-nowrap"
            style={{ backgroundColor: 'var(--navy)', fontFamily: 'var(--font-sans)' }}
          >
            Fale Conosco
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
