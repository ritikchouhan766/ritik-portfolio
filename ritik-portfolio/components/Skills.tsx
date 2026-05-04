'use client'

import { useEffect, useRef } from 'react'

const skillGroups = [
  {
    category: 'Backend',
    items: ['Python', 'FastAPI', 'Flask', 'Django', 'REST APIs', 'Microservices', 'CQRS'],
  },
  {
    category: 'Automation & Data',
    items: ['Selenium WebDriver', 'ETL Pipelines', 'Multi-source Scraping', 'Real-time Processing', 'Data Validation'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['AWS Lambda', 'AWS EC2', 'AWS S3', 'AWS SNS', 'Azure Functions', 'Azure Blob Storage', 'Docker', 'Azure DevOps CI/CD'],
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'SQL Server', 'MySQL', 'SQLAlchemy', 'SQL Optimization', 'Indexing'],
  },
  {
    category: 'Quality & Testing',
    items: ['Pytest', 'Jest', 'SonarQube', 'Unit Testing', 'Integration Testing', '80%+ Coverage'],
  },
  {
    category: 'Languages',
    items: ['Python', 'SQL', 'JavaScript', 'TypeScript'],
  },
]

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add('in-view')
      }),
      { threshold: 0.08 }
    )
    ref.current?.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="skills"
      ref={ref}
      style={{
        padding: 'clamp(80px, 12vw, 140px) 24px',
        borderTop: '1px solid #111',
        background: '#0d0d0d',
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
            Technical Skills
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
            Tools & Technologies
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1px',
            background: '#1a1a1a',
            border: '1px solid #1a1a1a',
            borderRadius: '8px',
            overflow: 'hidden',
          }}
          className="animate-on-scroll"
        >
          {skillGroups.map((group, i) => (
            <div
              key={group.category}
              style={{
                background: '#111111',
                padding: '28px',
                transition: 'background 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#141414')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#111111')}
            >
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '11px',
                  color: '#3b82f6',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  marginBottom: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: '#3b82f6',
                  }}
                />
                {group.category}
              </div>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '7px',
                }}
              >
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '12px',
                      padding: '5px 11px',
                      borderRadius: '3px',
                      background: 'rgba(59,130,246,0.06)',
                      border: '1px solid rgba(59,130,246,0.1)',
                      color: '#93c5fd',
                      transition: 'all 0.15s',
                      cursor: 'default',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(59,130,246,0.12)'
                      e.currentTarget.style.borderColor = 'rgba(59,130,246,0.25)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(59,130,246,0.06)'
                      e.currentTarget.style.borderColor = 'rgba(59,130,246,0.1)'
                    }}
                  >
                    {skill}
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
