'use client'

import { useEffect, useState } from 'react'

const heroStyles = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
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

  .hero-content {
    animation: fadeInUp 0.8s ease-out;
  }

  .status-badge {
    animation: fadeInUp 0.8s ease-out 0.1s both;
  }

  .hero-title {
    animation: fadeInUp 0.8s ease-out 0.2s both;
  }

  .hero-role {
    animation: fadeInUp 0.8s ease-out 0.3s both;
  }

  .hero-tagline {
    animation: fadeInUp 0.8s ease-out 0.4s both;
  }

  .hero-ctas {
    animation: fadeInUp 0.8s ease-out 0.5s both;
  }

  .hero-stats {
    animation: fadeInUp 0.8s ease-out 0.6s both;
  }

  @media (max-width: 768px) {
    .hero-content {
      padding-top: 40px !important;
    }
  }
`

if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style')
  styleElement.innerHTML = heroStyles
  document.head.appendChild(styleElement)
}

export default function Hero() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '0 24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle grid background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(30,30,30,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(30,30,30,0.4) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 0%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 0%, transparent 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Blue glow */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '300px',
          background: 'radial-gradient(ellipse, rgba(59,130,246,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          width: '100%',
          paddingTop: '80px',
        }}
        className="hero-content"
      >
        {/* Status badge */}
        <div
          className="status-badge"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 14px',
            borderRadius: '20px',
            border: '1px solid rgba(59,130,246,0.2)',
            background: 'rgba(59,130,246,0.06)',
            marginBottom: '36px',
            cursor: 'default',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'rgba(59,130,246,0.4)'
            e.currentTarget.style.background = 'rgba(59,130,246,0.12)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(59,130,246,0.2)'
            e.currentTarget.style.background = 'rgba(59,130,246,0.06)'
          }}
        >
          <div
            style={{
              width: '7px',
              height: '7px',
              borderRadius: '50%',
              background: '#22c55e',
              animation: 'pulse 2s infinite',
            }}
          />
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '11px',
              color: '#a0a0a0',
              letterSpacing: '0.08em',
            }}
          >
            Open to opportunities
          </span>
        </div>

        {/* Name */}
        <h1
          className="hero-title"
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: 'clamp(40px, 7vw, 82px)',
            fontWeight: 700,
            color: '#f0f0f0',
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            marginBottom: '8px',
          }}
        >
          Ritik Chouhan
        </h1>

        {/* Role */}
        <div
          className="hero-role"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '28px',
            flexWrap: 'wrap',
          }}
        >
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 'clamp(13px, 2vw, 16px)',
              color: '#3b82f6',
              fontWeight: 400,
            }}
          >
            Python Backend Engineer
          </span>
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 'clamp(13px, 2vw, 15px)',
              color: '#555',
            }}
          >
            2+ yrs · Capgemini · Pune
          </span>
        </div>

        {/* Tagline */}
        <p
          className="hero-tagline"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 'clamp(15px, 2.2vw, 19px)',
            color: '#a0a0a0',
            maxWidth: '560px',
            lineHeight: 1.65,
            marginBottom: '44px',
            fontWeight: 300,
          }}
        >
          Building scalable backend systems with automation and data pipelines.
          From Selenium-driven procurement to serverless cloud deployments.
        </p>

        {/* CTAs */}
        <div
          className="hero-ctas"
          style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '72px' }}
        >
          <a
            href="#projects"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '14px',
              fontWeight: 500,
              padding: '11px 24px',
              borderRadius: '4px',
              background: '#3b82f6',
              color: '#fff',
              textDecoration: 'none',
              transition: 'all 0.2s ease',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              border: '1px solid #3b82f6',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#2563eb'
              e.currentTarget.style.borderColor = '#2563eb'
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(59, 130, 246, 0.3)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#3b82f6'
              e.currentTarget.style.borderColor = '#3b82f6'
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            View Projects
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </a>

          <a
            href="/Ritik_Chouhan_Resume.pdf"
            download="Ritik_Chouhan_Resume.pdf"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '14px',
              fontWeight: 400,
              padding: '11px 24px',
              borderRadius: '4px',
              border: '1px solid #1e1e1e',
              color: '#a0a0a0',
              textDecoration: 'none',
              transition: 'all 0.2s ease',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(59,130,246,0.4)'
              e.currentTarget.style.color = '#f0f0f0'
              e.currentTarget.style.background = 'rgba(59,130,246,0.05)'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#1e1e1e'
              e.currentTarget.style.color = '#a0a0a0'
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Resume
          </a>

          <a
            href="#contact"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '14px',
              fontWeight: 400,
              padding: '11px 24px',
              borderRadius: '4px',
              border: '1px solid #1e1e1e',
              color: '#a0a0a0',
              textDecoration: 'none',
              transition: 'all 0.2s ease',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(59,130,246,0.4)'
              e.currentTarget.style.color = '#f0f0f0'
              e.currentTarget.style.background = 'rgba(59,130,246,0.05)'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#1e1e1e'
              e.currentTarget.style.color = '#a0a0a0'
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            Get in touch
          </a>
        </div>

        {/* Stats row */}
        <div
          className="hero-stats"
          style={{
            display: 'flex',
            gap: '0',
            borderTop: '1px solid #1e1e1e',
            paddingTop: '32px',
            flexWrap: 'wrap',
          }}
        >
          {[
            { value: '2+', label: 'Years Experience' },
            { value: '60%', label: 'Manual Effort Reduced' },
            { value: '10K+', label: 'Daily Operations' },
            { value: '99.9%', label: 'Uptime Achieved' },
          ].map((stat, i) => (
            <div
              key={stat.label}
              style={{
                padding: '0 40px 0 0',
                borderRight: i < 3 ? '1px solid #1e1e1e' : 'none',
                marginRight: i < 3 ? '40px' : '0',
                marginBottom: '16px',
              }}
            >
              <div
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: '28px',
                  fontWeight: 700,
                  color: '#3b82f6',
                  lineHeight: 1,
                  marginBottom: '4px',
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '12px',
                  color: '#555',
                  letterSpacing: '0.04em',
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(34,197,94,0.4); }
          50% { opacity: 0.8; box-shadow: 0 0 0 4px rgba(34,197,94,0); }
        }
      `}</style>
    </section>
  )
}
