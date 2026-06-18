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

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string): void => {
    setMenuOpen(false)
    onNavClick(e, targetId)
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 border-b border-white/[0.04] pt-[env(safe-area-inset-top)] ${
        scrolled
          ? 'bg-[#0c0f14] md:glass shadow-lg shadow-black/20'
          : 'bg-[#0c0f14] md:bg-[#0c0f14]/80 md:backdrop-blur-md'
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

      {/* Mobile menu dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-[#0c0f14] ${
          menuOpen ? 'max-h-80 border-t border-white/[0.06]' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col items-center gap-6 py-6">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
                className={`text-xl font-display font-medium transition-colors ${
                  activeSection === item.id ? 'text-accent' : 'text-ink hover:text-accent'
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
