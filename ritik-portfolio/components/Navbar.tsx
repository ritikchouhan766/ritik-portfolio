'use client'

import { useState, useEffect } from 'react'

const navbarStyles = `
  @keyframes menuSlideDown {
    from {
      opacity: 0;
      transform: translateY(-12px);
      max-height: 0;
    }
    to {
      opacity: 1;
      transform: translateY(0);
      max-height: 500px;
    }
  }

  .mobile-menu {
    animation: menuSlideDown 0.3s ease-out;
  }

  @media (max-width: 768px) {
    .navbar-container {
      padding: 0 16px !important;
    }
  }
`

if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style')
  styleElement.innerHTML = navbarStyles
  document.head.appendChild(styleElement)
}

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [resumeLoading, setResumeLoading] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleResumeDownload = () => {
    setResumeLoading(true)
    // Simulate download delay
    setTimeout(() => setResumeLoading(false), 1000)
  }

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        borderBottom: scrolled ? '1px solid #1e1e1e' : '1px solid transparent',
        background: scrolled ? 'rgba(10,10,10,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0 24px',
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
        className="navbar-container"
      >
        {/* Logo */}
        <a
          href="#"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '14px',
            color: '#3b82f6',
            textDecoration: 'none',
            letterSpacing: '0.02em',
            transition: 'opacity 0.2s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.8')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
        >
          rc<span style={{ color: '#555' }}>.dev</span>
        </a>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', gap: '32px' }} className="hidden md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '13px',
                color: '#a0a0a0',
                textDecoration: 'none',
                letterSpacing: '0.02em',
                transition: 'color 0.2s ease, transform 0.2s ease',
                position: 'relative',
                display: 'inline-block',
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = '#f0f0f0'
                ;(e.target as HTMLElement).style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color = '#a0a0a0'
                ;(e.target as HTMLElement).style.transform = 'translateY(0)'
              }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Resume CTA */}
        <a
          href="/Ritik_Chouhan_Resume.pdf"
          download="Ritik_Chouhan_Resume.pdf"
          className="hidden md:inline-flex"
          onClick={handleResumeDownload}
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '13px',
            padding: '7px 18px',
            borderRadius: '4px',
            border: '1px solid rgba(59,130,246,0.4)',
            color: '#93c5fd',
            textDecoration: 'none',
            transition: 'all 0.2s ease',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            opacity: resumeLoading ? 0.7 : 1,
          }}
          onMouseEnter={(e) => {
            if (!resumeLoading) {
              e.currentTarget.style.background = 'rgba(59,130,246,0.1)'
              e.currentTarget.style.borderColor = '#3b82f6'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent'
            e.currentTarget.style.borderColor = 'rgba(59,130,246,0.4)'
            e.currentTarget.style.transform = 'translateY(0)'
          }}
        >
          {resumeLoading ? (
            <>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ animation: 'spin 1s linear infinite' }}>
                <circle cx="12" cy="12" r="10"/>
              </svg>
              Downloading...
            </>
          ) : (
            <>
              Resume
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
            </>
          )}
        </a>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: '#a0a0a0',
            padding: '4px',
            transition: 'color 0.2s ease, transform 0.2s ease',
            transform: open ? 'rotate(90deg)' : 'rotate(0deg)',
          }}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="mobile-menu"
          style={{
            borderTop: '1px solid #1e1e1e',
            padding: '20px 24px',
            background: 'rgba(10,10,10,0.97)',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '15px',
                color: '#a0a0a0',
                textDecoration: 'none',
                transition: 'color 0.2s ease, padding 0.2s ease',
                paddingLeft: '0px',
                display: 'block',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#f0f0f0'
                e.currentTarget.style.paddingLeft = '8px'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#a0a0a0'
                e.currentTarget.style.paddingLeft = '0px'
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="/Ritik_Chouhan_Resume.pdf"
            download="Ritik_Chouhan_Resume.pdf"
            onClick={() => {
              handleResumeDownload()
              setOpen(false)
            }}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '14px',
              color: '#93c5fd',
              textDecoration: 'none',
              padding: '8px 12px',
              borderRadius: '4px',
              border: '1px solid rgba(59,130,246,0.3)',
              transition: 'all 0.2s ease',
              display: 'inline-flex',
              gap: '6px',
              alignItems: 'center',
              width: 'fit-content',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(59,130,246,0.1)'
              e.currentTarget.style.borderColor = '#3b82f6'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.borderColor = 'rgba(59,130,246,0.3)'
            }}
          >
            {resumeLoading ? 'Downloading...' : 'Download Resume'}
            {!resumeLoading && (
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
            )}
          </a>
        </div>
      )}
    </header>
  )
}
