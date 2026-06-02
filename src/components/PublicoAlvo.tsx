import { useScrollAnimation } from '../hooks/useScrollAnimation'

const diretos = [
  {
    title: 'Crianças e Adolescentes',
    description: 'Beneficiários principais de todos os nossos serviços, sempre com o superior interesse da criança como princípio norteador.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: 'Pais e Mães Separados',
    description: 'Apoio especializado para garantir que o direito à convivência com os filhos seja exercido de forma segura e respeitosa.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: 'Responsáveis Legais',
    description: 'Avós, tios e demais responsáveis legais que necessitem de suporte para o cumprimento de determinações judiciais de convivência.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Famílias em Conflito Judicial',
    description: 'Famílias que enfrentam processos litigiosos e precisam de uma estrutura imparcial para viabilizar os encontros e deslocamentos.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
]

const indiretos = [
  { label: 'Poder Judiciário / Varas da Família' },
  { label: 'Ministério Público' },
  { label: 'Defensoria Pública' },
  { label: 'Conselhos Tutelares' },
  { label: 'Secretarias de Assistência Social' },
  { label: 'Advogados e Operadores do Direito' },
  { label: 'Rede de Proteção à Infância e Juventude' },
]

export default function PublicoAlvo() {
  const ref = useScrollAnimation()

  return (
    <section className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="reveal text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-3">
            <div className="h-px w-14 rounded-full" style={{ backgroundColor: 'var(--gold)' }} />
            <span
              className="text-sm font-bold uppercase tracking-widest"
              style={{ color: 'var(--gold)', fontFamily: 'var(--font-sans)' }}
            >
              Público-Alvo
            </span>
            <div className="h-px w-14 rounded-full" style={{ backgroundColor: 'var(--gold)' }} />
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold mb-3"
            style={{ fontFamily: 'var(--font-serif)', color: 'var(--navy)' }}
          >
            Quem Atendemos
          </h2>
          <p
            className="text-sm max-w-xl mx-auto"
            style={{ color: 'var(--gray-text)', fontFamily: 'var(--font-sans)' }}
          >
            O Direito de Conviver destina-se a crianças, adolescentes e famílias que necessitem de apoio especializado para o cumprimento de decisões judiciais relacionadas à convivência familiar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

          {/* Direct beneficiaries */}
          <div className="lg:col-span-2">
            <p
              className="reveal text-xs font-bold uppercase tracking-wider mb-5 flex items-center gap-2"
              style={{ color: 'var(--navy)', fontFamily: 'var(--font-sans)' }}
            >
              <span
                className="inline-block w-5 h-5 rounded-full text-center text-white text-xs font-bold leading-5"
                style={{ backgroundColor: 'var(--navy)' }}
              >1</span>
              Beneficiários Diretos
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {diretos.map((item, i) => (
                <div
                  key={item.title}
                  className={`reveal reveal-delay-${i + 1} flex gap-4 p-5 rounded-xl`}
                  style={{ border: '1.5px solid #e5e7eb' }}
                >
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'rgba(26,43,95,0.08)', color: 'var(--navy)' }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h4
                      className="font-bold text-sm mb-1"
                      style={{ color: 'var(--navy)', fontFamily: 'var(--font-serif)' }}
                    >
                      {item.title}
                    </h4>
                    <p
                      className="text-xs leading-relaxed"
                      style={{ color: 'var(--gray-text)', fontFamily: 'var(--font-sans)' }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indirect beneficiaries */}
          <div className="reveal reveal-delay-3 rounded-2xl p-7" style={{ backgroundColor: 'var(--navy)' }}>
            <p
              className="text-xs font-bold uppercase tracking-wider mb-5 flex items-center gap-2"
              style={{ color: 'var(--gold)', fontFamily: 'var(--font-sans)' }}
            >
              <span
                className="inline-block w-5 h-5 rounded-full text-center text-navy text-xs font-bold leading-5"
                style={{ backgroundColor: 'var(--gold)', color: 'var(--navy)' }}
              >2</span>
              Beneficiários Indiretos
            </p>
            <ul className="flex flex-col gap-3">
              {indiretos.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center gap-3 text-sm"
                  style={{ color: '#e2e8f0', fontFamily: 'var(--font-sans)' }}
                >
                  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" style={{ color: 'var(--teal)' }}>
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {item.label}
                </li>
              ))}
            </ul>
            <div className="mt-7 pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
              <p
                className="text-xs leading-relaxed"
                style={{ color: '#94a3b8', fontFamily: 'var(--font-sans)' }}
              >
                Colaboramos com toda a rede de proteção, fornecendo relatórios técnicos e apoio operacional aos órgãos responsáveis pela garantia dos direitos da criança.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
