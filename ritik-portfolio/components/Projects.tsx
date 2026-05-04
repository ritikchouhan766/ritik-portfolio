'use client'

import { useEffect, useRef } from 'react'

const projects = [
  {
    number: '01',
    title: 'Multi-Source Data Ingestion System',
    subtitle: 'Real-time procurement engine for insurance & government portals',
    description:
      'A production-grade ingestion platform engineered to extract, validate, and normalize high-volume data from 10+ heterogeneous sources in real time. Built with Flask REST APIs orchestrating Selenium-driven extraction workers backed by AWS Lambda auto-scaling. Designed for resilience — downstream consumers see 99.9% uptime backed by full CI/CD pipeline automation.',
    achievements: [
      { label: 'Throughput', value: '10K+ ops/day' },
      { label: 'Uptime', value: '99.9%' },
      { label: 'Manual effort', value: '↓ 60%' },
      { label: 'Data accuracy', value: '↑ 35%' },
    ],
    stack: ['Python', 'Flask', 'Selenium WebDriver', 'AWS Lambda', 'PostgreSQL', 'SQLAlchemy', 'CI/CD', 'Docker'],
    github: 'https://github.com/ritikchouhan766',
    type: 'Professional · Insurance Domain',
  },
  {
    number: '02',
    title: 'Transaction Processing Backend',
    subtitle: 'Multi-service banking platform with CQRS & async FastAPI',
    description:
      'A banking-grade backend platform architected as independent FastAPI microservices communicating via CQRS patterns. Async endpoint optimization significantly improved API throughput. Deployed on AWS EC2 with S3-backed audit logging and JWT/RBAC-enforced security model. Built to be auditable, secure, and horizontally scalable.',
    achievements: [
      { label: 'API Throughput', value: '↑ 30%' },
      { label: 'Auth model', value: 'JWT + RBAC' },
      { label: 'Audit', value: 'S3 logging' },
      { label: 'Architecture', value: 'CQRS' },
    ],
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'AWS EC2', 'AWS S3', 'JWT', 'Docker', 'Pytest'],
    github: 'https://github.com/ritikchouhan766',
    type: 'POC · Banking Systems',
  },
  {
    number: '03',
    title: 'HR & Contractor Management Portal',
    subtitle: 'Internal automation platform for construction operations',
    description:
      'End-to-end automation of contractor tracking and HR workflows using Selenium pipelines and a REST API backend. Introduced a 24-hour ticketing SLA system and significantly reduced SQL bottlenecks on attendance, leave, and payment queries through systematic indexing and query restructuring.',
    achievements: [
      { label: 'Response time', value: '↓ 40%' },
      { label: 'Query perf', value: '↑ 30%' },
      { label: 'Coverage', value: 'HR + Contractors' },
    ],
    stack: ['Python', 'Selenium', 'REST APIs', 'SQL', 'PostgreSQL', 'Indexing'],
    github: 'https://github.com/ritikchouhan766',
    type: 'Internship · BLG Construction',
  },
]

export default function Projects() {
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
      id="projects"
      ref={ref}
      style={{
        padding: 'clamp(80px, 12vw, 140px) 24px',
        background: '#0d0d0d',
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
            Projects
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
            Systems I've built
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '14px',
              color: '#555',
              maxWidth: '500px',
              fontWeight: 300,
            }}
          >
            Real-world backend systems with measurable outcomes — not todo apps.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {projects.map((project, i) => (
            <div
              key={project.number}
              className="animate-on-scroll"
              style={{
                background: '#111111',
                border: '1px solid #1e1e1e',
                borderRadius: '8px',
                padding: 'clamp(24px, 4vw, 36px)',
                transition: 'border-color 0.2s',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(59,130,246,0.25)')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#1e1e1e')}
            >
              {/* Big number watermark */}
              <div
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '24px',
                  fontFamily: "'Syne', sans-serif",
                  fontSize: '80px',
                  fontWeight: 800,
                  color: 'rgba(30,30,30,0.6)',
                  lineHeight: 1,
                  userSelect: 'none',
                  pointerEvents: 'none',
                }}
              >
                {project.number}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '20px', alignItems: 'start' }}>
                <div>
                  {/* Type badge */}
                  <div
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '10px',
                      color: '#555',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      marginBottom: '10px',
                    }}
                  >
                    {project.type}
                  </div>

                  <h3
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: 'clamp(18px, 2.5vw, 22px)',
                      fontWeight: 700,
                      color: '#f0f0f0',
                      marginBottom: '6px',
                      lineHeight: 1.2,
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '13px',
                      color: '#3b82f6',
                      marginBottom: '16px',
                    }}
                  >
                    {project.subtitle}
                  </p>

                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '14px',
                      color: '#777',
                      lineHeight: 1.75,
                      fontWeight: 300,
                      maxWidth: '620px',
                      marginBottom: '24px',
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div
                    style={{
                      display: 'flex',
                      gap: '20px',
                      flexWrap: 'wrap',
                      marginBottom: '24px',
                      padding: '16px 20px',
                      background: '#0a0a0a',
                      borderRadius: '6px',
                      border: '1px solid #1a1a1a',
                    }}
                  >
                    {project.achievements.map((a) => (
                      <div key={a.label}>
                        <div
                          style={{
                            fontFamily: "'Syne', sans-serif",
                            fontSize: '16px',
                            fontWeight: 700,
                            color: '#3b82f6',
                            lineHeight: 1,
                            marginBottom: '3px',
                          }}
                        >
                          {a.value}
                        </div>
                        <div
                          style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: '11px',
                            color: '#444',
                            letterSpacing: '0.04em',
                          }}
                        >
                          {a.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Stack */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                    {project.stack.map((s) => (
                      <span
                        key={s}
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: '11px',
                          padding: '4px 10px',
                          borderRadius: '3px',
                          background: 'rgba(59,130,246,0.06)',
                          border: '1px solid rgba(59,130,246,0.1)',
                          color: '#93c5fd',
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '13px',
                      color: '#a0a0a0',
                      textDecoration: 'none',
                      padding: '8px 16px',
                      borderRadius: '4px',
                      border: '1px solid #1e1e1e',
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(59,130,246,0.3)'
                      e.currentTarget.style.color = '#f0f0f0'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#1e1e1e'
                      e.currentTarget.style.color = '#a0a0a0'
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
