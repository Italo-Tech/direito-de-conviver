import { useCounter } from '../hooks/useCounter'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

interface StatItemProps {
  icon: React.ReactNode
  target: number
  prefix?: string
  suffix?: string
  label: string
  delay: number
}

function StatItem({ icon, target, prefix = '', suffix = '', label, delay }: StatItemProps) {
  const { ref, count } = useCounter(target)
  return (
    <div
      className={`flex flex-col items-center text-center gap-3 reveal reveal-delay-${delay}`}
    >
      <div style={{ color: 'var(--gold)' }}>{icon}</div>
      <p
        className="text-4xl font-extrabold text-white"
        style={{ fontFamily: 'var(--font-serif)' }}
      >
        <span ref={ref}>{prefix}{count.toLocaleString('pt-BR')}{suffix}</span>
      </p>
      <p
        className="text-sm leading-snug max-w-[160px]"
        style={{ color: '#cbd5e1', fontFamily: 'var(--font-sans)' }}
      >
        {label}
      </p>
    </div>
  )
}

export default function Stats() {
  const ref = useScrollAnimation()
  return (
    <section className="py-20" style={{ backgroundColor: 'var(--navy)' }} ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          <StatItem
            icon={
              <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            }
            target={1200}
            prefix="+"
            label="Famílias atendidas com acolhimento e respeito"
            delay={1}
          />
          <StatItem
            icon={
              <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            }
            target={3500}
            prefix="+"
            label="Acompanhamentos realizados"
            delay={2}
          />
          <StatItem
            icon={
              <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
            target={98}
            prefix="+"
            suffix="%"
            label="De avaliações positivas das famílias e parceiros"
            delay={3}
          />
          <StatItem
            icon={
              <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
            }
            target={100}
            suffix="%"
            label="Compromisso com decisões judiciais e proteção integral"
            delay={4}
          />
        </div>
      </div>
    </section>
  )
}
