import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { hl } from '../utils/brand'

const faqs = [
  {
    question: 'O que é o transporte assistido familiar?',
    answer:
      'É um serviço especializado que realiza o transporte seguro de crianças e adolescentes para visitas familiares, conforme determinação judicial. Nossa equipe acompanha todo o trajeto garantindo a segurança e o bem-estar dos envolvidos, com registro de cada etapa do deslocamento.',
  },
  {
    question: 'Quais documentos são necessários para contratar os serviços?',
    answer:
      'É necessário apresentar a determinação judicial ou o acordo homologado que autoriza o serviço, além de documentos de identificação das partes envolvidas. Em casos urgentes, entre em contato conosco — nossa equipe orienta sobre toda a documentação necessária para cada situação.',
  },
  {
    question: 'O que são visitas supervisionadas e como funcionam?',
    answer:
      'Visitas supervisionadas são encontros familiares que ocorrem na presença de um profissional capacitado e imparcial do direito de Conviver. Esse acompanhamento garante a segurança da criança ou adolescente e o cumprimento das condições estabelecidas judicialmente, com elaboração de relatório ao final de cada visita.',
  },
  {
    question: 'O direito de Conviver atua em toda a Grande São Paulo?',
    answer:
      'Sim, atendemos São Paulo e toda a região metropolitana. Para municípios da Grande São Paulo e interior, entre em contato para verificar disponibilidade, prazos e condições de atendimento na sua localidade.',
  },
  {
    question: 'Como os relatórios técnicos são entregues ao Judiciário?',
    answer:
      'Elaboramos relatórios técnicos detalhados que podem ser encaminhados diretamente ao juízo competente, ao Ministério Público, à Defensoria Pública ou ao advogado responsável, conforme as orientações de cada caso. Todos os documentos seguem padrões técnicos e éticos e são emitidos com responsabilidade profissional.',
  },
  {
    question: 'Advogados e defensores podem solicitar os serviços diretamente?',
    answer:
      'Sim. Advogados, defensores públicos e promotores de justiça podem entrar em contato conosco para solicitar serviços em nome de seus representados, mediante apresentação da determinação judicial ou instrumento de mandato. Temos fluxo específico para atendimento a profissionais do Direito.',
  },
  {
    question: 'O direito de Conviver atua em casos de alienação parental?',
    answer:
      'Sim. Atuamos em situações que envolvam determinações judiciais relacionadas a conflitos de guarda e convivência, inclusive casos em que há suspeita ou reconhecimento de alienação parental, sempre com foco no superior interesse da criança e na imparcialidade técnica.',
  },
  {
    question: 'Os serviços são pagos pela família ou pelo Judiciário?',
    answer:
      'Depende de cada caso. Em algumas situações o pagamento é feito pelas partes diretamente; em outras, os serviços podem ser custeados por programas públicos ou por determinação judicial. Nossa equipe verifica as condições de cada processo e orienta sobre as formas de contratação disponíveis.',
  },
]

function FAQItem({ question, answer, isOpen, onToggle }: {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div
      className="border-b"
      style={{ borderColor: '#e5e7eb' }}
    >
      <button
        className="w-full flex items-start justify-between gap-4 py-5 text-left"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span
          className="text-base font-semibold leading-snug"
          style={{ color: 'var(--navy)', fontFamily: 'var(--font-sans)' }}
        >
          {hl(question)}
        </span>
        <svg
          className="w-5 h-5 flex-shrink-0 mt-0.5 transition-transform duration-300"
          style={{
            color: 'var(--gold)',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`faq-answer${isOpen ? ' open' : ''}`}>
        <p
          className="pb-5 text-sm leading-relaxed"
          style={{ color: 'var(--gray-text)', fontFamily: 'var(--font-sans)' }}
        >
          {hl(answer)}
        </p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const ref = useScrollAnimation()

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section id="informacoes" className="py-24" style={{ backgroundColor: 'var(--gray-bg)' }} ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

          {/* Left — header + CTA */}
          <div className="reveal lg:col-span-2 lg:sticky lg:top-28">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-10 rounded-full" style={{ backgroundColor: 'var(--gold)' }} />
              <span
                className="text-sm font-bold uppercase tracking-widest"
                style={{ color: 'var(--gold)', fontFamily: 'var(--font-sans)' }}
              >
                Perguntas Frequentes
              </span>
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold leading-snug mb-5"
              style={{ fontFamily: 'var(--font-serif)', color: 'var(--navy)' }}
            >
              Tudo que você precisa saber sobre nossos serviços
            </h2>
            <p
              className="text-sm leading-relaxed mb-8"
              style={{ color: 'var(--gray-text)', fontFamily: 'var(--font-sans)' }}
            >
              Reunimos as dúvidas mais comuns de famílias, advogados e profissionais do Judiciário. Não encontrou o que procura?
            </p>
            <a
              href="https://wa.me/5511940803060"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-white font-bold text-sm hover:opacity-90 transition-opacity"
              style={{ backgroundColor: 'var(--navy)', fontFamily: 'var(--font-sans)' }}
              aria-label="Entre em contato com o direito de Conviver pelo WhatsApp"
            >
              Entre em Contato
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Right — accordion */}
          <div className="reveal reveal-delay-2 lg:col-span-3 bg-white rounded-2xl shadow-sm px-6 py-2">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === i}
                onToggle={() => toggle(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
