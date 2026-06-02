import { useScrollAnimation } from '../hooks/useScrollAnimation'

const contextCards = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Judicialização crescente',
    text: 'Nas últimas décadas, questões de guarda, convivência, alienação parental e violência doméstica ocupam parcela cada vez maior das demandas judiciais no Brasil.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Crianças no centro do conflito',
    text: 'A literatura especializada demonstra que o conflito parental crônico compromete o desenvolvimento emocional e a formação de vínculos afetivos seguros em crianças e adolescentes.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'A decisão existe, a execução falha',
    text: 'Em muitos casos a decisão judicial já existe, mas sua execução prática encontra obstáculos gerados pelo conflito entre os responsáveis — aumentando a litigiosidade e o sofrimento da criança.',
  },
]

export default function Historia() {
  const ref = useScrollAnimation()

  return (
    <section id="historia" className="py-24" style={{ backgroundColor: 'var(--gray-bg)' }} ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Story ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-20 items-start">

          {/* Left — narrative */}
          <div className="lg:col-span-3 flex flex-col gap-5">
            <div className="reveal flex items-center gap-3">
              <div className="h-px w-10 rounded-full" style={{ backgroundColor: 'var(--gold)' }} />
              <span
                className="text-sm font-bold uppercase tracking-widest"
                style={{ color: 'var(--gold)', fontFamily: 'var(--font-sans)' }}
              >
                Nossa História
              </span>
            </div>

            <h2
              className="reveal reveal-delay-1 text-3xl md:text-4xl font-bold leading-snug"
              style={{ fontFamily: 'var(--font-serif)', color: 'var(--navy)' }}
            >
              Como Nasceu o Direito de <span className="brand-name">Conviver</span>
            </h2>

            <p
              className="reveal reveal-delay-2 text-sm leading-relaxed"
              style={{ color: 'var(--gray-text)', fontFamily: 'var(--font-sans)' }}
            >
              O Projeto Direito de <span className="brand-name">Conviver</span> nasceu da experiência real de um pai chamado <strong>Miguel</strong>. Sua história representa a realidade enfrentada diariamente por milhares de pais e famílias nas Varas da Família de todo o Brasil: conflitos familiares, falsas acusações, alienação parental, descumprimento de decisões judiciais e medidas protetivas que impactam diretamente a convivência familiar — uma realidade muitas vezes silenciosa.
            </p>

            <p
              className="reveal reveal-delay-2 text-sm leading-relaxed"
              style={{ color: 'var(--gray-text)', fontFamily: 'var(--font-sans)' }}
            >
              Foi nesse contexto que Miguel vivenciou a interrupção abrupta da convivência com seu filho. Uma medida protetiva alterou completamente sua vida: a rotina mudou, o convívio foi interrompido, o equilíbrio emocional foi abalado, e a distância imposta entre pai e filho trouxe desafios profundos e a difícil sensação de impotência diante de um sistema complexo.
            </p>

            <p
              className="reveal reveal-delay-3 text-sm leading-relaxed"
              style={{ color: 'var(--gray-text)', fontFamily: 'var(--font-sans)' }}
            >
              Durante essa trajetória, Miguel compreendeu que o sofrimento não era apenas seu. <strong>Milhares de crianças e adolescentes também são privados do direito fundamental de manter vínculos afetivos saudáveis</strong> com ambos os pais e suas famílias. Foi dessa reflexão que surgiu o Projeto Direito de <span className="brand-name">Conviver</span> — transformando dor em propósito, para que nenhuma criança seja privada do direito de conviver com sua família.
            </p>

            {/* Objective list */}
            <div
              className="reveal reveal-delay-3 rounded-xl p-5 mt-2"
              style={{ backgroundColor: 'rgba(26,43,95,0.05)', border: '1px solid rgba(26,43,95,0.1)' }}
            >
              <p
                className="text-xs font-bold uppercase tracking-wider mb-3"
                style={{ color: 'var(--navy)', fontFamily: 'var(--font-sans)' }}
              >
                Objetivos do projeto
              </p>
              <ul className="flex flex-col gap-2">
                {[
                  'Garantir segurança nos deslocamentos e encontros familiares',
                  'Reduzir conflitos parentais durante a convivência',
                  'Apoiar o cumprimento prático das decisões judiciais',
                  'Preservar e fortalecer os vínculos familiares',
                  'Proteger crianças e adolescentes em situações de vulnerabilidade',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm" style={{ color: 'var(--gray-text)', fontFamily: 'var(--font-sans)' }}>
                    <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" style={{ color: 'var(--teal)' }}>
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right — pull quote */}
          <div className="reveal reveal-delay-2 lg:col-span-2 flex flex-col gap-6">
            <blockquote
              className="relative rounded-2xl p-8"
              style={{ backgroundColor: 'var(--navy)' }}
            >
              {/* Quotation mark */}
              <span
                className="absolute top-4 left-6 text-7xl leading-none font-serif opacity-20 text-white select-none"
                aria-hidden="true"
              >"</span>
              <p
                className="relative z-10 text-lg font-semibold italic leading-relaxed mb-5"
                style={{ color: '#FFFFFF', fontFamily: 'var(--font-serif)' }}
              >
                Nasceu da dor de um pai. Transformou-se em uma missão de proteger o direito de milhares de crianças.
              </p>
              <div className="flex items-center gap-3">
                <div className="h-px flex-1 rounded-full" style={{ backgroundColor: 'var(--gold)', opacity: 0.5 }} />
                <span
                  className="text-xs font-bold uppercase tracking-wider"
                  style={{ color: 'var(--gold)', fontFamily: 'var(--font-sans)' }}
                >
                  Miguel — Fundador
                </span>
              </div>
            </blockquote>

            {/* Legal basis */}
            <div
              className="rounded-xl p-6"
              style={{ border: '1.5px solid rgba(26,43,95,0.15)', backgroundColor: '#FFFFFF' }}
            >
              <div className="flex items-center gap-3 mb-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--gold)' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
                <span
                  className="text-sm font-bold"
                  style={{ color: 'var(--navy)', fontFamily: 'var(--font-sans)' }}
                >
                  Fundamentação Jurídica
                </span>
              </div>
              <p
                className="text-xs leading-relaxed"
                style={{ color: 'var(--gray-text)', fontFamily: 'var(--font-sans)' }}
              >
                O projeto encontra fundamento no ECA, no Código Civil e na legislação de proteção integral à criança. Não substitui decisões judiciais nem exerce função jurisdicional — apoia a <strong>execução prática</strong> das determinações já estabelecidas pelas autoridades competentes.
              </p>
            </div>
          </div>
        </div>

        {/* ── Context cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contextCards.map((card, i) => (
            <div
              key={card.title}
              className={`reveal reveal-delay-${i + 1} flex flex-col gap-4 p-6 rounded-2xl bg-white shadow-sm`}
              style={{ border: '1px solid #e5e7eb' }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: 'rgba(26,43,95,0.07)', color: 'var(--navy)' }}
              >
                {card.icon}
              </div>
              <div>
                <h4
                  className="font-bold text-sm mb-2"
                  style={{ color: 'var(--navy)', fontFamily: 'var(--font-serif)' }}
                >
                  {card.title}
                </h4>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: 'var(--gray-text)', fontFamily: 'var(--font-sans)' }}
                >
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
