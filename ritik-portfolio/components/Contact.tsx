'use client'

import { useEffect, useRef, useState } from 'react'

// Keyframe animations
const styles = `
  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-16px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }

  @keyframes spinner {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  .success-banner {
    animation: slideDown 0.3s ease-out;
  }

  .button-loading svg {
    animation: spinner 1s linear infinite;
  }

  @media (max-width: 768px) {
    .contact-grid {
      gap: 24px !important;
    }
  }
`

if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style')
  styleElement.innerHTML = styles
  document.head.appendChild(styleElement)
}

const contactLinks = [
  {
    label: 'Email',
    value: 'ritikchouhan373@gmail.com',
    href: 'mailto:ritikchouhan373@gmail.com',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'github.com/ritikchouhan766',
    href: 'https://github.com/ritikchouhan766',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/ritikchouhan',
    href: 'https://linkedin.com/in/ritik-chouhan-4a297b192/',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: '+91 6377216003',
    href: 'tel:+916377216003',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.9a16 16 0 0 0 6 6l.97-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
  },
]

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const sentTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add('in-view')
      }),
      { threshold: 0.08 }
    )
    ref.current?.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el))
    return () => {
      observer.disconnect()
      if (sentTimeoutRef.current) clearTimeout(sentTimeoutRef.current)
    }
  }, [])

  const handleSubmit = () => {
    if (!formState.name || !formState.email || !formState.message) return
    
    setLoading(true)
    
    // Simulate sending delay (for better UX)
    setTimeout(() => {
      // In production: connect to EmailJS, Resend, or Formspree
      const subject = encodeURIComponent(`Portfolio inquiry from ${formState.name}`)
      const body = encodeURIComponent(formState.message)
      window.open(`mailto:ritikchouhan373@gmail.com?subject=${subject}&body=${body}`)
      
      setLoading(false)
      setSent(true)
      
      // Auto-dismiss success message after 4 seconds
      if (sentTimeoutRef.current) clearTimeout(sentTimeoutRef.current)
      sentTimeoutRef.current = setTimeout(() => {
        setSent(false)
        setFormState({ name: '', email: '', message: '' })
      }, 4000)
    }, 600)
  }

  const handleReset = () => {
    setSent(false)
    setFormState({ name: '', email: '', message: '' })
    if (sentTimeoutRef.current) clearTimeout(sentTimeoutRef.current)
  }

  const inputStyle = {
  }

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        padding: 'clamp(80px, 12vw, 140px) 24px',
        borderTop: '1px solid #111',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div className="animate-on-scroll" style={{ marginBottom: '56px' }}>
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '11px',
              color: '#3b82f6',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginBottom: '14px',
            }}
          >
            Contact
          </p>
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: 700,
              color: '#f0f0f0',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              marginBottom: '14px',
            }}
          >
            Let's connect
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '15px',
              color: '#555',
              maxWidth: '480px',
              lineHeight: 1.7,
              fontWeight: 300,
            }}
          >
            Open to backend engineering roles, freelance contracts, and interesting technical conversations.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.3fr)',
            gap: '40px',
            alignItems: 'start',
          }}
          className="grid-cols-1 md:grid-cols-2 animate-on-scroll contact-grid"
        >
          {/* Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  padding: '16px 20px',
                  borderRadius: '6px',
                  background: '#111',
                  border: '1px solid #1e1e1e',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(59,130,246,0.3)'
                  e.currentTarget.style.background = '#141414'
                  e.currentTarget.style.transform = 'translateX(4px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#1e1e1e'
                  e.currentTarget.style.background = '#111'
                  e.currentTarget.style.transform = 'translateX(0)'
                }}
              >
                <div
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '6px',
                    background: 'rgba(59,130,246,0.06)',
                    border: '1px solid rgba(59,130,246,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#3b82f6',
                    flexShrink: 0,
                  }}
                >
                  {link.icon}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '10px',
                      color: '#444',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      marginBottom: '2px',
                    }}
                  >
                    {link.label}
                  </div>
                  <div
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '13px',
                      color: '#a0a0a0',
                    }}
                  >
                    {link.value}
                  </div>
                </div>
                <div style={{ marginLeft: 'auto', color: '#333' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <line x1="7" y1="17" x2="17" y2="7"/>
                    <polyline points="7 7 17 7 17 17"/>
                  </svg>
                </div>
              </a>
            ))}
          </div>

          {/* Form */}
          <div
            style={{
              background: '#111',
              border: '1px solid #1e1e1e',
              borderRadius: '8px',
              padding: 'clamp(20px, 5vw, 28px)',
              position: 'relative',
            }}
          >
            {/* Success Banner */}
            {sent && (
              <div
                className="success-banner"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  borderRadius: '8px 8px 0 0',
                  background: 'linear-gradient(135deg, rgba(34,197,94,0.1) 0%, rgba(34,197,94,0.05) 100%)',
                  border: '1px solid rgba(34,197,94,0.3)',
                  borderBottom: 'none',
                  padding: '14px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  zIndex: 10,
                }}
              >
                <div style={{ color: '#22c55e', flexShrink: 0 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                </div>
                <div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', color: '#22c55e', fontWeight: 500 }}>
                    Message sent successfully!
                  </div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', color: '#888' }}>
                    Your default mail client has opened. Resending in 4s...
                  </div>
                </div>
              </div>
            )}
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', paddingTop: sent ? '60px' : 0, transition: 'padding 0.3s ease' }}>
              <div>
                <label style={{ display: 'block', fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#555', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>
                  Name
                </label>
                <input
                  type="text"
                  value={formState.name}
                  onChange={(e) => setFormState((p) => ({ ...p, name: e.target.value }))}
                  placeholder="Your name"
                  style={{
                    width: '100%',
                    background: '#0a0a0a',
                    border: '1px solid #1e1e1e',
                    borderRadius: '4px',
                    padding: '12px 14px',
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '14px',
                    color: '#f0f0f0',
                    outline: 'none',
                    transition: 'border-color 0.2s ease, background 0.2s ease',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(59,130,246,0.4)'
                    e.currentTarget.style.background = '#111'
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = '#1e1e1e'
                    e.currentTarget.style.background = '#0a0a0a'
                  }}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#555', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>
                  Email
                </label>
                <input
                  type="email"
                  value={formState.email}
                  onChange={(e) => setFormState((p) => ({ ...p, email: e.target.value }))}
                  placeholder="your@email.com"
                  style={{
                    width: '100%',
                    background: '#0a0a0a',
                    border: '1px solid #1e1e1e',
                    borderRadius: '4px',
                    padding: '12px 14px',
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '14px',
                    color: '#f0f0f0',
                    outline: 'none',
                    transition: 'border-color 0.2s ease, background 0.2s ease',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(59,130,246,0.4)'
                    e.currentTarget.style.background = '#111'
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = '#1e1e1e'
                    e.currentTarget.style.background = '#0a0a0a'
                  }}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#555', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>
                  Message
                </label>
                <textarea
                  value={formState.message}
                  onChange={(e) => setFormState((p) => ({ ...p, message: e.target.value }))}
                  placeholder="What's on your mind?"
                  rows={5}
                  style={{
                    width: '100%',
                    background: '#0a0a0a',
                    border: '1px solid #1e1e1e',
                    borderRadius: '4px',
                    padding: '12px 14px',
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '14px',
                    color: '#f0f0f0',
                    outline: 'none',
                    transition: 'border-color 0.2s ease, background 0.2s ease',
                    resize: 'vertical',
                    minHeight: '120px',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(59,130,246,0.4)'
                    e.currentTarget.style.background = '#111'
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = '#1e1e1e'
                    e.currentTarget.style.background = '#0a0a0a'
                  }}
                />
              </div>
              <div style={{ display: 'flex', gap: '10px', marginTop: '6px' }}>
                <button
                  onClick={handleSubmit}
                  disabled={loading || !formState.name || !formState.email || !formState.message}
                  style={{
                    flex: 1,
                    padding: '12px 24px',
                    borderRadius: '4px',
                    background: loading ? '#1e3a8a' : '#3b82f6',
                    border: 'none',
                    color: '#fff',
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '14px',
                    fontWeight: 500,
                    cursor: loading ? 'wait' : 'pointer',
                    transition: 'all 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    opacity: loading || (!formState.name || !formState.email || !formState.message) ? 0.6 : 1,
                  }}
                  onMouseEnter={(e) => {
                    if (!loading && formState.name && formState.email && formState.message) {
                      e.currentTarget.style.background = '#2563eb'
                      e.currentTarget.style.transform = 'translateY(-2px)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!loading) {
                      e.currentTarget.style.background = '#3b82f6'
                      e.currentTarget.style.transform = 'translateY(0)'
                    }
                  }}
                >
                  {loading ? (
                    <>
                      <svg className="button-loading" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M12 6v6l4 2"/>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="22" y1="2" x2="11" y2="13"/>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                      </svg>
                    </>
                  )}
                </button>
                {sent && (
                  <button
                    onClick={handleReset}
                    style={{
                      padding: '12px 16px',
                      borderRadius: '4px',
                      background: '#1e1e1e',
                      border: '1px solid #333',
                      color: '#a0a0a0',
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '13px',
                      fontWeight: 500,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#262626'
                      e.currentTarget.style.borderColor = '#444'
                      e.currentTarget.style.color = '#f0f0f0'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#1e1e1e'
                      e.currentTarget.style.borderColor = '#333'
                      e.currentTarget.style.color = '#a0a0a0'
                    }}
                  >
                    Send Again
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
