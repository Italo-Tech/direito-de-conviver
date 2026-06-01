import { useScrollAnimation } from '../hooks/useScrollAnimation'

const JUDICIARY_IMG = 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=600&q=80'

const partners = [
  'Varas da Família',
  'Ministério Público',
  'Defensoria Pública',
  'Advogados',
  'Conselhos Tutelares',
]

const CheckIcon = () => (
  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"
    style={{ color: 'var(--gold)' }}>
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
)

export default function Judiciary() {
  const ref = useScrollAnimation()

  return (
    <section id="judiciario" className="py-24" style={{ backgroundColor: 'var(--gray-bg)' }} ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

          {/* Col 1 — Text */}
          <div className="reveal">
            <span
              className="block text-sm font-bold uppercase tracking-widest mb-3"
              style={{ color: 'var(--gold)', fontFamily: 'var(--font-sans)' }}
            >
              Área do Judiciário
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold leading-snug mb-5"
              style={{ fontFamily: 'var(--font-serif)', color: 'var(--navy)' }}
            >
              Parceria e confiança com o Poder Judiciário
            </h2>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: 'var(--gray-text)', fontFamily: 'var(--font-sans)' }}
            >
              A CONVIVER é parceira de órgãos e profissionais que atuam na garantia dos direitos da criança e do adolescente.
            </p>
            <ul className="flex flex-col gap-3 mb-8">
              {partners.map((p) => (
                <li key={p} className="flex items-center gap-3 text-sm" style={{ color: 'var(--gray-text)' }}>
                  <CheckIcon />
                  <span style={{ fontFamily: 'var(--font-sans)' }}>{p}</span>
                </li>
              ))}
            </ul>
            <a
              href="#contato"
              aria-label="Saiba mais sobre a área do judiciário"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-white font-bold text-sm hover:opacity-90 transition-opacity"
              style={{ backgroundColor: 'var(--gold)', fontFamily: 'var(--font-sans)' }}
            >
              Saiba Mais
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Col 2 — Image */}
          <div className="reveal reveal-delay-2 rounded-xl overflow-hidden shadow-lg h-[420px]">
            <img
              src={JUDICIARY_IMG}
              alt="Balança da justiça sobre mesa com martelo de juiz"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Col 3 — Documents card */}
          <div
            className="reveal reveal-delay-3 rounded-xl p-8 text-white"
            style={{ backgroundColor: 'var(--navy)' }}
          >
            <h3
              className="text-xl font-bold mb-2"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Documentos e Relatórios
            </h3>
            <p
              className="text-sm mb-6 leading-relaxed"
              style={{ color: '#94a3b8', fontFamily: 'var(--font-sans)' }}
            >
              Elaboração de registros e relatórios técnicos com clareza, objetividade e responsabilidade.
            </p>
            <ul className="flex flex-col gap-3 mb-8">
              {[
                'Relatórios de acompanhamento',
                'Registros de ocorrências',
                'Controle de visitas',
                'Comprovantes de atendimento',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm" style={{ color: '#e2e8f0' }}>
                  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" style={{ color: 'var(--teal)' }} aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span style={{ fontFamily: 'var(--font-sans)' }}>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="#contato"
              aria-label="Acessar informações de documentos e relatórios"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-white font-bold text-sm hover:opacity-90 transition-opacity"
              style={{ backgroundColor: 'var(--gold)', fontFamily: 'var(--font-sans)' }}
            >
              Acessar Informações
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
