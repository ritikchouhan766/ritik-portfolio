'use client'

export default function Footer() {
    const year = new Date().getFullYear()

  return (
    <footer
      style={{
        borderTop: '1px solid #111',
        padding: '28px 24px',
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
        }}
      >
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '12px',
            color: '#333',
          }}
        >
          © {year} Ritik Chouhan
        </span>

        <div style={{ display: 'flex', gap: '24px' }}>
          {[
            { label: 'GitHub', href: 'https://github.com/ritikchouhan766' },
            { label: 'LinkedIn', href: 'https://linkedin.com/in/ritik-chouhan-4a297b192' },
            { label: 'Email', href: 'mailto:ritikchouhan373@gmail.com' },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '12px',
                color: '#333',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#555')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#333')}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
