const logo = '/logo-1-sem-fundo.png'

const WA_LINK = 'https://wa.me/5511940803060'

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Quem Somos', href: '#quem-somos' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Área do Judiciário', href: '#judiciario' },
  { label: 'Informações', href: '#informacoes' },
  { label: 'Contato', href: '#contato' },
]

const serviceLinks = [
  'Transporte Assistido Familiar',
  'Entrega Protegida entre Genitores',
  'Intermediação de Convivência',
  'Acompanhamento de Visitas',
  'Apoio em Medidas Protetivas',
  'Registros e Relatórios Operacionais',
]

const WhatsAppSVG = () => (
  <svg className="w-7 h-7 fill-white" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

const InstagramIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
)

const YouTubeIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
)

//const FacebookIcon = () => (
//  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
//    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
//  </svg>
//)

export default function Footer() {
  return (
    <footer className="pt-16 pb-8 text-white" style={{ backgroundColor: 'var(--navy)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div>
            <img
              src={logo}
              alt="Conviver"
              className="h-14 w-auto mb-4 brightness-0 invert"
              onError={(e) => {
                const t = e.currentTarget
                t.style.display = 'none'
                const fallback = t.nextElementSibling as HTMLElement | null
                if (fallback) fallback.style.display = 'block'
              }}
            />
            <span
              className="hidden text-2xl font-bold mb-4"
              style={{ display: 'none', fontFamily: 'var(--font-serif)', color: 'var(--gold)' }}
            >
              Conviver
            </span>
            <p
              className="text-sm leading-relaxed mb-5"
              style={{ color: '#94a3b8', fontFamily: 'var(--font-sans)' }}
            >
              O direito que conecta.<br />O respeito que protege.
            </p>

            {/* Social media */}
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/direitodeconviver/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram do Direito de Conviver"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:bg-white/20"
                style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#E1306C' }}
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.youtube.com/@DireitodeConviver"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube do Direito de Conviver"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:bg-white/20"
                style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#FF0000' }}
              >
                <YouTubeIcon />
              </a>
              {/* 
              <a
                href="https://www.facebook.com/profile.php?id=61589489951657"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook do Direito de Conviver"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:bg-white/20"
                style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#1877F2' }}
              >
                <FacebookIcon />
              </a>
              */}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="text-white font-bold mb-4 text-sm uppercase tracking-wider"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Navegação
            </h4>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:opacity-80"
                    style={{ color: '#94a3b8', fontFamily: 'var(--font-sans)' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-white font-bold mb-4 text-sm uppercase tracking-wider"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Serviços
            </h4>
            <ul className="flex flex-col gap-2">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a
                    href="#servicos"
                    className="text-sm transition-colors hover:opacity-80"
                    style={{ color: '#94a3b8', fontFamily: 'var(--font-sans)' }}
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-white font-bold mb-4 text-sm uppercase tracking-wider"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Contato
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm hover:opacity-80 transition-opacity"
                  style={{ color: '#94a3b8' }}
                >
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--gold)' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span style={{ fontFamily: 'var(--font-sans)' }}>(11) 94080-3060</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:direitodeconviver@gmail.com"
                  className="flex items-center gap-2 text-sm hover:opacity-80 transition-opacity"
                  style={{ color: '#94a3b8' }}
                >
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--gold)' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span style={{ fontFamily: 'var(--font-sans)' }}>direitodeconviver@gmail.com</span>
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm" style={{ color: '#94a3b8' }}>
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--gold)' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span style={{ fontFamily: 'var(--font-sans)' }}>São Paulo - SP</span>
              </li>
              <li className="flex items-center gap-2 text-sm" style={{ color: '#94a3b8' }}>
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--gold)' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span style={{ fontFamily: 'var(--font-sans)' }}>Seg a Sex: 8h às 18h</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderColor: 'rgba(255,255,255,0.1)' }}
        >
          <p className="text-xs" style={{ color: '#64748b', fontFamily: 'var(--font-sans)' }}>
            © {new Date().getFullYear()} <span className="brand-name">CONVIVER</span> — Todos os direitos reservados.
          </p>
          <p className="text-xs flex items-center gap-1.5" style={{ color: '#64748b', fontFamily: 'var(--font-sans)' }}>
            Desenvolvido por{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://liondev.com.br"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-lg font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <div className="w-6 h-6 p-0.5 bg-black/80 rounded-full flex items-center justify-center overflow-hidden">
                <img
                  src="/lion-dev.png"
                  alt="Lion Dev"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    const img = e.currentTarget
                    img.style.display = 'none'
                    const fallback = img.nextElementSibling as HTMLElement | null
                    if (fallback) fallback.style.display = 'block'
                  }}
                />
                <span className="text-xs font-bold text-yellow-400 hidden">L</span>
              </div>
              <span>Lion Dev</span>
            </a>{' '}
            para transformar sonhos em realidade.
          </p>
        </div>
      </div>

      {/* WhatsApp Float */}
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="wa-pulse fixed bottom-6 right-6 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50"
        style={{ backgroundColor: '#25D366' }}
      >
        <WhatsAppSVG />
      </a>
    </footer>
  )
}
