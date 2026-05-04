'use client'

import { useEffect, useRef } from 'react'

const experiences = [
  {
    company: 'Capgemini Pvt Ltd',
    role: 'Senior Software Engineer',
    period: 'Apr 2024 – Present',
    domain: 'Insurance Domain',
    type: 'Full-time',
    bullets: [
      {
        text: 'Spearheaded multi-source real-time data procurement using Selenium WebDriver, automating extraction from 10+ insurance and government portals.',
        metric: '60% reduction in manual effort',
      },
      {
        text: 'Engineered Python REST APIs and ETL pipelines to ingest, validate, and transform high-volume insurance data.',
        metric: '35% improvement in data accuracy',
      },
      {
        text: 'Designed reusable backend modules for metadata-driven data processing, cutting pipeline build time across the team.',
        metric: '40% faster pipeline delivery',
      },
      {
        text: 'Deployed scalable serverless services on Azure (Function Apps, Blob Storage, Logic Apps) supporting high daily operational load.',
        metric: '10,000+ daily ops at 99.9% uptime',
      },
      {
        text: 'Authored unit and integration tests with SonarQube-enforced coverage, reducing production bug leakage.',
        metric: '80%+ coverage · 25% fewer bugs in prod',
      },
    ],
    stack: ['Python', 'Selenium', 'FastAPI', 'Azure Functions', 'Blob Storage', 'ETL', 'PostgreSQL', 'SonarQube', 'Pytest'],
    award: 'Highest Achiever — NGT 2025 (top 5% of 200+ new grad batch)',
  },
  {
    company: 'BLG Construction',
    role: 'Python Developer Intern',
    period: 'Sep 2023 – Apr 2024',
    domain: 'Construction / HR Systems',
    type: 'Internship',
    bullets: [
      {
        text: 'Built Python and Selenium automation workflows for contractor tracking; implemented a 24-hour ticketing system.',
        metric: '40% reduction in response time',
      },
      {
        text: 'Optimized SQL queries for attendance, leave, and payment data through indexing and query restructuring.',
        metric: '30% improvement in query performance',
      },
      {
        text: 'Developed REST APIs for internal HR and contractor portals, handling structured operational data across departments.',
        metric: null,
      },
    ],
    stack: ['Python', 'Selenium', 'REST APIs', 'SQL', 'PostgreSQL'],
    award: null,
  },
]

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add('in-view')
      }),
      { threshold: 0.06 }
    )
    ref.current?.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="experience"
      ref={ref}
      style={{
        padding: 'clamp(80px, 12vw, 140px) 24px',
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
            Work Experience
          </p>
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: 700,
              color: '#f0f0f0',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
            }}
          >
            Where I've worked
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {experiences.map((exp, i) => (
            <div
              key={exp.company}
              className="animate-on-scroll"
              style={{
                background: '#111111',
                border: '1px solid #1e1e1e',
                borderRadius: '8px',
                padding: 'clamp(24px, 4vw, 36px)',
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(59,130,246,0.2)')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#1e1e1e')}
            >
              {/* Header */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                  gap: '12px',
                  marginBottom: '24px',
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      marginBottom: '4px',
                      flexWrap: 'wrap',
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "'Syne', sans-serif",
                        fontSize: '18px',
                        fontWeight: 700,
                        color: '#f0f0f0',
                      }}
                    >
                      {exp.role}
                    </h3>
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '10px',
                        padding: '3px 8px',
                        borderRadius: '3px',
                        background: i === 0 ? 'rgba(59,130,246,0.1)' : 'rgba(100,100,100,0.1)',
                        border: `1px solid ${i === 0 ? 'rgba(59,130,246,0.2)' : 'rgba(100,100,100,0.2)'}`,
                        color: i === 0 ? '#93c5fd' : '#666',
                        letterSpacing: '0.06em',
                      }}
                    >
                      {exp.type}
                    </span>
                  </div>
                  <div
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '14px',
                      color: '#555',
                    }}
                  >
                    {exp.company}
                    <span style={{ margin: '0 8px', color: '#333' }}>·</span>
                    {exp.domain}
                  </div>
                </div>

                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '12px',
                    color: '#444',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {exp.period}
                </span>
              </div>

              {/* Award */}
              {exp.award && (
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '7px 14px',
                    borderRadius: '4px',
                    background: 'rgba(59,130,246,0.06)',
                    border: '1px solid rgba(59,130,246,0.15)',
                    marginBottom: '24px',
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2">
                    <circle cx="12" cy="8" r="6"/>
                    <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
                  </svg>
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '12px',
                      color: '#93c5fd',
                    }}
                  >
                    {exp.award}
                  </span>
                </div>
              )}

              {/* Bullets */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
                {exp.bullets.map((b, bi) => (
                  <div
                    key={bi}
                    style={{
                      display: 'flex',
                      gap: '12px',
                      alignItems: 'flex-start',
                    }}
                  >
                    <div
                      style={{
                        width: '5px',
                        height: '5px',
                        borderRadius: '50%',
                        background: '#3b82f6',
                        marginTop: '8px',
                        flexShrink: 0,
                      }}
                    />
                    <div>
                      <span
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: '14px',
                          color: '#888',
                          lineHeight: 1.7,
                          fontWeight: 300,
                        }}
                      >
                        {b.text}
                      </span>
                      {b.metric && (
                        <span
                          style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: '11px',
                            color: '#3b82f6',
                            marginLeft: '8px',
                            padding: '2px 8px',
                            borderRadius: '3px',
                            background: 'rgba(59,130,246,0.06)',
                            border: '1px solid rgba(59,130,246,0.12)',
                            whiteSpace: 'nowrap',
                            display: 'inline-block',
                            marginTop: '4px',
                          }}
                        >
                          {b.metric}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Stack */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {exp.stack.map((s) => (
                  <span
                    key={s}
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '11px',
                      padding: '3px 10px',
                      borderRadius: '3px',
                      background: '#0a0a0a',
                      border: '1px solid #1e1e1e',
                      color: '#555',
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
