import { useScrollAnimation } from '../hooks/useScrollAnimation'

const features = [
  {
    title: 'Segurança e Proteção',
    description: 'Profissionais capacitados garantem um ambiente seguro em todos os atendimentos, com protocolos rigorosos de segurança para a criança e as famílias.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Acolhimento e Respeito',
    description: 'Cada família recebe atendimento humanizado, com escuta ativa e respeito às particularidades de cada caso, sempre priorizando o bem-estar da criança.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: 'Imparcialidade e Ética',
    description: 'Atuamos com total neutralidade entre as partes, seguindo estritamente as determinações judiciais e os princípios éticos da nossa missão.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
  },
]

export default function FamiliaConflitos() {
  const ref = useScrollAnimation()

  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: 'var(--teal)' }}
      ref={ref}
    >
      {/* Background decorative circles */}
      <div
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full pointer-events-none opacity-10"
        style={{ backgroundColor: '#FFFFFF' }}
      />
      <div
        className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full pointer-events-none opacity-10"
        style={{ backgroundColor: '#FFFFFF' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="reveal text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-3">
            <div className="h-px w-14 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.5)' }} />
            <span
              className="text-sm font-bold uppercase tracking-widest"
              style={{ color: 'rgba(255,255,255,0.8)', fontFamily: 'var(--font-sans)' }}
            >
              Conflitos Familiares
            </span>
            <div className="h-px w-14 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.5)' }} />
          </div>
          <h2
            className="text-3xl md:text-5xl font-bold text-white leading-tight mb-5"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Conflitos Familiares?<br />
            <span style={{ color: '#FFE599' }}>Temos a Solução.</span>
          </h2>
          <p
            className="text-base max-w-2xl mx-auto leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.88)', fontFamily: 'var(--font-sans)' }}
          >
            Acompanhamento profissional e humanizado para garantir convivência familiar segura, respeitosa e em conformidade com as determinações judiciais.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-14">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`reveal reveal-delay-${i + 1} flex flex-col items-center text-center gap-5 p-8 rounded-2xl`}
              style={{ backgroundColor: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.2)' }}
            >
              {/* Icon circle */}
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: '#FFFFFF' }}
              >
                {f.icon}
              </div>
              <div>
                <h3
                  className="text-lg font-bold text-white mb-3"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {f.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'rgba(255,255,255,0.82)', fontFamily: 'var(--font-sans)' }}
                >
                  {f.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="reveal text-center">
          <a
            href="https://wa.me/5511940803060"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-md font-bold text-sm hover:opacity-90 transition-opacity"
            style={{ backgroundColor: '#FFFFFF', color: 'var(--teal)', fontFamily: 'var(--font-sans)' }}
          >
            Solicitar Atendimento
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  )
}
