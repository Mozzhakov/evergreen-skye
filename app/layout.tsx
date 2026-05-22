import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: 'Evergreen Skye | Wholesale Distribution & Partnerships',
  description: 'Professional wholesale distribution and supplier partnerships built on responsibility, trust, and long-term thinking. We believe strong business relationships are built through accountability, clear communication, and long-term thinking.',
  keywords: ['wholesale', 'distribution', 'supplier partnerships', 'B2B', 'reseller', 'evergreen skye'],
  authors: [{ name: 'Evergreen Skye' }],
  openGraph: {
    title: 'Evergreen Skye | Wholesale Distribution & Partnerships',
    description: 'Professional wholesale distribution and supplier partnerships built on responsibility, trust, and long-term thinking.',
    type: 'website',
    siteName: 'Evergreen Skye',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1c694b',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
