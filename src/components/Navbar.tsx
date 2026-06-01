import { useState, useEffect } from 'react'

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

            {/* CTA */}
            <a
              href="https://wa.me/5511999990000"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Fale conosco pelo WhatsApp"
              className="flex items-center gap-2 ml-3 px-5 py-2.5 rounded-md text-sm font-bold hover:opacity-90 transition-all duration-300"
              style={
                scrolled
                  ? { backgroundColor: 'var(--navy)', color: '#FFFFFF', fontFamily: 'var(--font-sans)' }
                  : {
                    backgroundColor: 'transparent',
                    color: '#FFFFFF',
                    border: '2px solid rgba(255,255,255,0.85)',
                    fontFamily: 'var(--font-sans)',
                    textShadow: '0 1px 4px rgba(0,0,0,0.4)',
                    fontWeight: 700,
                  }
              }
            >
              <WhatsAppIcon />
              Fale Conosco
            </a>
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
              href="https://wa.me/5511999990000"
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
