import { useScrollAnimation } from '../hooks/useScrollAnimation'

const ABOUT_IMG = '/historia.png'

export default function About() {
  const ref = useScrollAnimation()

  return (
    <section id="quem-somos" className="py-0 bg-[#F5F5F5]" ref={ref}>
      <div className="mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[520px]">

          {/* Image */}
          <div className="reveal relative overflow-hidden min-h-[340px] lg:min-h-0">
            <img
              src={ABOUT_IMG}
              alt="Mãos adultas formando teto sobre família de papel, representando proteção"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center px-10 lg:px-16 py-16 bg-white">
            <div className="reveal flex items-center gap-3 mb-3">
              <div className="h-px w-10 rounded-full" style={{ backgroundColor: 'var(--gold)' }} />
              <span
                className="text-sm font-bold uppercase tracking-widest"
                style={{ color: 'var(--gold)', fontFamily: 'var(--font-sans)' }}
              >
                Quem Somos
              </span>
            </div>

            <h2
              className="reveal reveal-delay-1 text-3xl md:text-4xl font-bold leading-snug mb-6"
              style={{ fontFamily: 'var(--font-serif)', color: 'var(--navy)' }}
            >
              Compromisso com o que realmente importa: a família.
            </h2>

            <p
              className="reveal reveal-delay-2 text-sm leading-relaxed mb-4"
              style={{ color: 'var(--gray-text)', fontFamily: 'var(--font-sans)' }}
            >
              A CONVIVER nasceu com o propósito de garantir o direito fundamental à convivência familiar, oferecendo suporte profissional às famílias e ao Poder Judiciário.
            </p>
            <p
              className="reveal reveal-delay-2 text-sm leading-relaxed mb-8"
              style={{ color: 'var(--gray-text)', fontFamily: 'var(--font-sans)' }}
            >
              Nossas ações são pautadas na ética, responsabilidade, imparcialidade e respeito, sempre priorizando o melhor interesse da criança e do adolescente.
            </p>

            <a
              href="#quem-somos"
              aria-label="Conheça nossa história"
              className="reveal reveal-delay-3 flex items-center gap-2 px-6 py-3 rounded-md text-white font-bold text-sm w-fit hover:opacity-90 transition-opacity"
              style={{ backgroundColor: 'var(--navy)', fontFamily: 'var(--font-sans)' }}
            >
              Conheça Nossa História
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
