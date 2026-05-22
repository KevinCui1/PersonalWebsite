import { useState, useEffect } from 'react'

const NAV_ITEMS = [
  { num: '01', label: 'About', id: 'about' },
  { num: '02', label: 'Research & Projects', id: 'research' },
  { num: '03', label: 'Awards & Honors', id: 'awards' },
]

export default function MobileNav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNavClick = (id) => {
    setMenuOpen(false)
    setTimeout(() => {
      if (id === 'about') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }
    }, 300)
  }

  return (
    <>
      <nav
        className="lg:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={
          scrolled
            ? {
                backgroundColor: 'rgba(19, 27, 38, 0.95)',
                backdropFilter: 'blur(12px)',
                borderBottom: '1px solid var(--bg-border)',
              }
            : { backgroundColor: 'transparent' }
        }
      >
        <div className="flex items-center justify-between px-6 py-4">
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            style={{
              fontFamily: "'Times New Roman', Times, serif",
              fontSize: '1.5rem',
              fontWeight: '700',
              color: 'var(--accent)',
              textDecoration: 'none',
            }}
            aria-label="Back to top"
          >
            KC
          </a>

          <button
            onClick={() => setMenuOpen(true)}
            className="flex flex-col gap-[5px] p-2 text-text-muted hover:text-accent transition-colors"
            aria-label="Open menu"
          >
            <span style={{ display: 'block', width: '22px', height: '2px', backgroundColor: 'currentColor' }} />
            <span style={{ display: 'block', width: '22px', height: '2px', backgroundColor: 'currentColor' }} />
            <span style={{ display: 'block', width: '14px', height: '2px', backgroundColor: 'currentColor' }} />
          </button>
        </div>
      </nav>

      {/* Full-screen overlay menu */}
      {menuOpen && (
        <div
          className="lg:hidden mobile-menu fixed inset-0 z-[60] flex flex-col"
          style={{ backgroundColor: 'var(--bg-surface)' }}
        >
          <div className="flex items-center justify-between px-6 py-4">
            <span
              style={{
                fontFamily: "'Times New Roman', Times, serif",
                fontSize: '1.5rem',
                fontWeight: '700',
                color: 'var(--accent)',
              }}
            >
              KC
            </span>
            <button
              onClick={() => setMenuOpen(false)}
              className="p-2 text-text-muted hover:text-accent transition-colors"
              aria-label="Close menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col items-center justify-center flex-1 gap-10">
            {NAV_ITEMS.map(({ num, label, id }) => (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                className="flex flex-col items-center gap-1 group"
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
              >
                <span
                  style={{
                    color: 'var(--accent)',
                    fontFamily: 'monospace',
                    fontSize: '0.75rem',
                    letterSpacing: '0.1em',
                  }}
                >
                  {num}.
                </span>
                <span
                  className="group-hover:text-accent transition-colors"
                  style={{
                    color: 'var(--text-primary)',
                    fontFamily: "'Times New Roman', Times, serif",
                    fontSize: '1.5rem',
                    fontWeight: '700',
                  }}
                >
                  {label}
                </span>
              </button>
            ))}
          </nav>

          <div className="flex justify-center gap-8 pb-12">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent transition-colors" aria-label="GitHub">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" /></svg>
            </a>
            <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent transition-colors" aria-label="LinkedIn">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
            </a>
            <a href="mailto:kevinkcui1@gmail.com" className="text-text-muted hover:text-accent transition-colors" aria-label="Email">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
            </a>
          </div>
        </div>
      )}
    </>
  )
}
