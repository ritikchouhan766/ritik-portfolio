'use client'

import { useEffect, useRef } from 'react'

const highlights = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    label: 'Backend Systems',
    detail: 'FastAPI · Flask · Django · REST APIs',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
      </svg>
    ),
    label: 'Automation',
    detail: 'Selenium WebDriver · Multi-source scraping',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>
    ),
    label: 'Data Engineering',
    detail: 'ETL Pipelines · SQL · PostgreSQL',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
      </svg>
    ),
    label: 'Cloud & DevOps',
    detail: 'AWS Lambda · Azure Functions · CI/CD',
  },
]

export default function About() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('in-view')
        })
      },
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      ref={ref}
      style={{
        padding: 'clamp(80px, 12vw, 140px) 24px',
        maxWidth: '1100px',
        margin: '0 auto',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.2fr)',
          gap: '80px',
          alignItems: 'start',
        }}
        className="grid-cols-1 md:grid-cols-2"
      >
        {/* Left */}
        <div className="animate-on-scroll">
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
            About
          </p>
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: 'clamp(28px, 4vw, 42px)',
              fontWeight: 700,
              color: '#f0f0f0',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              marginBottom: '28px',
            }}
          >
            Backend-first engineer who ships real systems
          </h2>

          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '15px',
              color: '#a0a0a0',
              lineHeight: 1.8,
              marginBottom: '20px',
              fontWeight: 300,
            }}
          >
            I'm a Python Backend Engineer at Capgemini, working in the insurance domain.
            I build the systems that move data — from automated extraction across 10+ portals to
            serverless pipelines processing 10,000+ daily operations at 99.9% uptime.
          </p>

          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '15px',
              color: '#a0a0a0',
              lineHeight: 1.8,
              marginBottom: '20px',
              fontWeight: 300,
            }}
          >
            My background spans Selenium-driven real-time data procurement, REST API design,
            ETL pipeline engineering, and cloud deployments on both AWS and Azure. I value
            clean architecture, measurable performance improvements, and code quality — backed
            by 80%+ test coverage enforced via SonarQube.
          </p>

          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '15px',
              color: '#a0a0a0',
              lineHeight: 1.8,
              fontWeight: 300,
            }}
          >
            Recognized as <span style={{ color: '#f0f0f0' }}>Highest Achiever — NGT 2025</span> at Capgemini,
            placing in the top 5% of a 200+ engineer cohort.
          </p>

          {/* Quick info */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              marginTop: '32px',
              paddingTop: '28px',
              borderTop: '1px solid #1e1e1e',
            }}
          >
            {[
              { label: 'Location', value: 'Pune, Maharashtra, India' },
              { label: 'Current role', value: 'Senior Software Engineer · Capgemini' },
              { label: 'Education', value: 'MCA · Chandigarh University' },
              { label: 'Email', value: 'ritikchouhan373@gmail.com' },
            ].map((item) => (
              <div key={item.label} style={{ display: 'flex', gap: '16px', alignItems: 'baseline' }}>
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '11px',
                    color: '#555',
                    minWidth: '90px',
                    letterSpacing: '0.05em',
                  }}
                >
                  {item.label}
                </span>
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '13px',
                    color: '#a0a0a0',
                  }}
                >
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — highlight cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '12px',
          }}
          className="animate-on-scroll"
        >
          {highlights.map((h) => (
            <div
              key={h.label}
              style={{
                background: '#141414',
                border: '1px solid #1e1e1e',
                borderRadius: '6px',
                padding: '20px',
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(59,130,246,0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#1e1e1e'
              }}
            >
              <div
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '6px',
                  background: 'rgba(59,130,246,0.08)',
                  border: '1px solid rgba(59,130,246,0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#3b82f6',
                  marginBottom: '14px',
                }}
              >
                {h.icon}
              </div>
              <div
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#f0f0f0',
                  marginBottom: '6px',
                }}
              >
                {h.label}
              </div>
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '12px',
                  color: '#555',
                  lineHeight: 1.5,
                }}
              >
                {h.detail}
              </div>
            </div>
          ))}

          {/* Award card */}
          <div
            style={{
              gridColumn: '1 / -1',
              background: 'rgba(59,130,246,0.05)',
              border: '1px solid rgba(59,130,246,0.15)',
              borderRadius: '6px',
              padding: '18px 20px',
              display: 'flex',
              gap: '14px',
              alignItems: 'flex-start',
            }}
          >
            <div style={{ color: '#3b82f6', marginTop: '2px' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="8" r="6"/>
                <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
              </svg>
            </div>
            <div>
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '13px',
                  color: '#93c5fd',
                  marginBottom: '2px',
                  fontWeight: 500,
                }}
              >
                Highest Achiever — NGT 2025, Capgemini
              </div>
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '12px',
                  color: '#555',
                }}
              >
                Ranked in top 5% of 200+ new graduate intake
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
