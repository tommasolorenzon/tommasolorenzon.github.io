import { useState, useEffect } from 'react'
import { meta } from '../data.js'

const NAV_LINKS = [
  { label: 'About',      href: '#about'      },
  { label: 'Research',   href: '#research'   },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Experience', href: '#experience' },
  { label: 'Expertise',  href: '#expertise'  },
]

function SunIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41
               M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

function MenuIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <line x1="3" y1="6"  x2="21" y2="6"  />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <line x1="18" y1="6"  x2="6"  y2="18" />
      <line x1="6"  y1="6"  x2="18" y2="18" />
    </svg>
  )
}

export default function Navbar({ dark, onToggle, onLogoClick }) {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Chiudi il menu quando si torna a desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || menuOpen
          ? 'bg-canvas/95 backdrop-blur-md border-b border-rim/70'
          : 'bg-transparent'
      }`}
    >
      <div className="section-wrap h-16 flex items-center justify-between">
        {/* Wordmark */}
        <a
          href="#top"
          onClick={() => { onLogoClick(); setMenuOpen(false) }}
          className="font-serif text-[1.1rem] font-medium tracking-widest text-ink
                     hover:text-gold transition-colors duration-200"
        >
          {meta.initials}
        </a>

        {/* Links — desktop */}
        <div className="hidden md:flex items-center gap-9">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-[11px] font-medium uppercase tracking-[0.2em]
                         text-muted hover:text-ink transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Right: theme toggle + hamburger (mobile) */}
        <div className="flex items-center gap-1">
          <button
            onClick={onToggle}
            aria-label="Toggle colour scheme"
            className="w-9 h-9 flex items-center justify-center rounded-full
                       text-muted hover:text-ink hover:bg-rim/50
                       transition-all duration-200"
          >
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>

          {/* Hamburger — only on mobile */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="md:hidden w-9 h-9 flex items-center justify-center
                       text-muted hover:text-ink transition-colors duration-200"
          >
            {menuOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="section-wrap pb-5 flex flex-col">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-[11px] font-medium uppercase tracking-[0.2em]
                         text-muted hover:text-ink py-3.5 border-b border-rim/40
                         last:border-0 transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
