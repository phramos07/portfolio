import React, { useEffect, useState } from 'react'
import { useActiveSection } from '../../hooks/useActiveSection'

interface NavigationProps {
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void
}

const SECTION_IDS = ['work', 'publications', 'academic-works', 'projects']

const Navigation: React.FC<NavigationProps> = ({ onNavClick }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const activeSection = useActiveSection(SECTION_IDS)

  const navItems = [
    { id: 'work', label: 'Work' },
    { id: 'publications', label: 'Publications' },
    { id: 'academic-works', label: 'Academic Works' },
    { id: 'projects', label: 'Projects' },
  ]

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string): void => {
    setMenuOpen(false)
    onNavClick(e, targetId)
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-lg shadow-black/20' : 'bg-[#0c0f14]/80 backdrop-blur-md border-b border-white/[0.04]'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8 md:py-4">
        {/* Logo / Name */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="font-display text-lg md:text-xl font-semibold text-ink hover:text-accent transition-colors"
        >
          PR
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8 lg:gap-12">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
                className={`nav-link ${activeSection === item.id ? 'nav-link-active' : ''}`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden relative z-50 flex h-10 w-10 items-center justify-center rounded-lg text-ink hover:bg-white/5 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
          <div className="flex w-5 flex-col gap-1.5">
            <span
              className={`block h-0.5 w-full bg-current transition-all duration-300 ${
                menuOpen ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-current transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-current transition-all duration-300 ${
                menuOpen ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`md:hidden fixed inset-0 top-[57px] z-40 glass transition-all duration-300 ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <ul className="flex flex-col items-center justify-center gap-8 h-full -mt-16">
          {navItems.map((item, index) => (
            <li
              key={item.id}
              className="animate-fade-up opacity-0"
              style={{
                animationDelay: menuOpen ? `${index * 0.08}s` : '0s',
                animationFillMode: 'forwards',
              }}
            >
              <a
                href={`#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
                className={`text-2xl font-display font-medium transition-colors ${
                  activeSection === item.id ? 'text-accent' : 'text-ink-muted hover:text-ink'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Navigation
