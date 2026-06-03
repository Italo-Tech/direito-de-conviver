import { useState, useEffect } from 'react'

const InstagramIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
)

const YouTubeIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
)

const FacebookIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
)

const WhatsAppIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

const ChevronDown = () => (
  <svg className="w-3.5 h-3.5 ml-0.5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
)

const servicosItems = [
  { label: 'Transporte Assistido Familiar', href: '#servicos' },
  { label: 'Intermediação de Convivência', href: '#servicos' },
  { label: 'Relatórios para o Judiciário', href: '#servicos' },
  { label: 'Acompanhamento de Visitas', href: '#servicos' },
  { label: 'Apoio ao Cumprimento Judicial', href: '#servicos' },
]

const infoItems = [
  { label: 'Como Funciona', href: '#como-funciona' },
  { label: 'Perguntas Frequentes', href: '#informacoes' },
  { label: 'Área do Judiciário', href: '#judiciario' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeAll = () => {
    setMenuOpen(false)
    setDropdownOpen(null)
  }

  // Transparent state styles
  const linkStyle = scrolled
    ? { color: 'var(--navy)', fontFamily: 'var(--font-sans)' }
    : { color: '#FFFFFF', fontFamily: 'var(--font-sans)', textShadow: '0 1px 4px rgba(0,0,0,0.55)', fontWeight: 700 }

  const linkClass = `px-3 py-2 text-sm transition-all duration-300 hover:text-[#C89B3C]`

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-20 gap-1">

          {/* Logo — visible only when scrolled */}
          <a
            href="#inicio"
            className="hidden lg:flex absolute left-4 items-center gap-2 transition-all duration-300"
            style={{
              opacity: scrolled ? 1 : 0,
              pointerEvents: scrolled ? 'auto' : 'none',
            }}
          >
            <img
              src="/logo-1-sem-fundo.png"
              alt="Conviver"
              className="h-12 w-auto"
              onError={(e) => { ; (e.currentTarget as HTMLImageElement).style.display = 'none' }}
            />
          </a>

          {/* Desktop Nav — centered */}
          <div className="hidden lg:flex items-center gap-1">
            <a href="#inicio" className={linkClass} style={linkStyle}>
              Início
            </a>
            <a href="#quem-somos" className={linkClass} style={linkStyle}>
              Quem Somos
            </a>

            {/* Serviços Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen('servicos')}
              onMouseLeave={() => setDropdownOpen(null)}
            >
              <button
                className={`flex items-center ${linkClass}`}
                style={linkStyle}
                aria-expanded={dropdownOpen === 'servicos'}
              >
                Serviços <ChevronDown />
              </button>
              <div
                className={`absolute top-full left-0 mt-1 w-60 bg-white rounded-lg shadow-xl border border-gray-100 py-1 transition-all duration-200 ${dropdownOpen === 'servicos'
                  ? 'opacity-100 translate-y-0 pointer-events-auto'
                  : 'opacity-0 -translate-y-2 pointer-events-none'
                  }`}
              >
                {servicosItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[#F5F5F5] hover:text-[#1A2B5F] transition-colors"
                    onClick={closeAll}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <a href="#judiciario" className={linkClass} style={linkStyle}>
              Área do Judiciário
            </a>

            {/* Informações Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen('info')}
              onMouseLeave={() => setDropdownOpen(null)}
            >
              <button
                className={`flex items-center ${linkClass}`}
                style={linkStyle}
                aria-expanded={dropdownOpen === 'info'}
              >
                Informações <ChevronDown />
              </button>
              <div
                className={`absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-1 transition-all duration-200 ${dropdownOpen === 'info'
                  ? 'opacity-100 translate-y-0 pointer-events-auto'
                  : 'opacity-0 -translate-y-2 pointer-events-none'
                  }`}
              >
                {infoItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[#F5F5F5] hover:text-[#1A2B5F] transition-colors"
                    onClick={closeAll}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <a href="#contato" className={linkClass} style={linkStyle}>
              Contato
            </a>

            {/* PDF — Projeto de Lei */}
            {/*href="/projeto-de-lei-pndc.pdf"
              target="_blank"
              rel="noopener noreferrer"*/}
            <div
              aria-label="Ler Projeto de Lei PNDC"
              className="pdf-glow flex items-center gap-1.5 ml-2 px-4 py-2 rounded-md text-white text-xs font-bold hover:opacity-90 transition-opacity"
              style={{ backgroundColor: 'var(--teal)', fontFamily: 'var(--font-sans)', letterSpacing: '0.02em' }}
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Projeto de Lei em breve
              {/* <span
                className="ml-0.5 rounded px-1 py-0.5 text-[9px] font-extrabold tracking-wider leading-none"
                style={{ backgroundColor: 'rgba(255,255,255,0.25)' }}
              >
                PDF
              </span>*/}
            </div>

            {/* CTA WhatsApp */}
            <a
              href="https://wa.me/5511940803060"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Fale conosco pelo WhatsApp"
              className="wa-pulse flex items-center gap-2 ml-3 px-5 py-2.5 rounded-md text-white text-sm font-bold hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#25D366', fontFamily: 'var(--font-sans)' }}
            >
              <WhatsAppIcon />
              Fale Conosco
            </a>
          </div>

          {/* Social media — absolute right, desktop only */}
          <div className="hidden lg:flex absolute right-4 items-center gap-2">
            {[
              { href: 'https://www.instagram.com/direitodeconviver/', label: 'Instagram', icon: <InstagramIcon /> },
              { href: 'https://www.youtube.com/@DireitodeConviver', label: 'YouTube', icon: <YouTubeIcon /> },
              // { href: 'https://www.facebook.com/profile.php?id=61589489951657', label: 'Facebook', icon: <FacebookIcon /> },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{
                  backgroundColor: scrolled ? 'rgba(26,43,95,0.08)' : 'rgba(255,255,255,0.15)',
                  color: scrolled ? 'var(--navy)' : '#FFFFFF',
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>

          {/* Mobile hamburger (absolute so it doesn't break centering) */}
          <button
            className="lg:hidden absolute right-4 p-2 rounded-md transition-colors duration-300"
            style={{ color: scrolled ? 'var(--navy)' : '#FFFFFF' }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile drawer */}
        {menuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4 flex flex-col gap-1 bg-white">
            {[
              { label: 'Início', href: '#inicio' },
              { label: 'Quem Somos', href: '#quem-somos' },
              { label: 'Serviços', href: '#servicos' },
              { label: 'Como Funciona', href: '#como-funciona' },
              { label: 'Área do Judiciário', href: '#judiciario' },
              { label: 'Perguntas Frequentes', href: '#informacoes' },
              { label: 'Contato', href: '#contato' },
            ].map((link) => (
              <a
                key={link.href + link.label}
                href={link.href}
                className="px-4 py-2.5 text-sm font-medium rounded-md hover:bg-[#F5F5F5] transition-colors"
                style={{ color: 'var(--navy)' }}
                onClick={closeAll}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/projeto-de-lei-pndc.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 mx-4 mt-2 px-5 py-3 rounded-md text-white text-sm font-bold w-fit"
              style={{ backgroundColor: 'var(--teal)' }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Projeto de Lei (PDF)
            </a>
            <a
              href="https://wa.me/5511940803060"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 mx-4 mt-2 px-5 py-3 rounded-md text-white text-sm font-bold w-fit"
              style={{ backgroundColor: 'var(--navy)' }}
            >
              <WhatsAppIcon />
              Fale Conosco
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
