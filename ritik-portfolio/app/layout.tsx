import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ritik Chouhan — Python Backend Engineer',
  description:
    'Python Backend Engineer with 2+ years of experience building scalable backend systems, REST APIs, Selenium automation, ETL pipelines, and cloud deployments on AWS & Azure.',
  keywords: [
    'Python Backend Engineer',
    'Ritik Chouhan',
    'Selenium Automation',
    'REST API',
    'FastAPI',
    'ETL Pipelines',
    'AWS Lambda',
    'Azure',
    'Microservices',
    'Capgemini',
  ],
  authors: [{ name: 'Ritik Chouhan' }],
  creator: 'Ritik Chouhan',
  metadataBase: new URL('https://ritikchouhan.dev'),
  openGraph: {
    title: 'Ritik Chouhan — Python Backend Engineer',
    description:
      'Building scalable backend systems with automation and data pipelines.',
    url: 'https://ritikchouhan.dev',
    siteName: 'Ritik Chouhan Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Ritik Chouhan — Python Backend Engineer',
    description: 'Building scalable backend systems with automation and data pipelines.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  )
}
