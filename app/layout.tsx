import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { AnimatedBackground } from '@/components/animated-background'
import { WhatsAppButton } from '@/components/whatsapp-button'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: 'AppManiazar | ICT Systems & Development Company in Cape Town',
  description:
    'AppManiazar is an ICT company specialising in mobile app development, website development, dashboards, CRMs, and digital skills training in Cape Town, South Africa.',
  keywords: [
    'mobile app development',
    'website development',
    'ICT company Cape Town',
    'dashboards and CRMs',
    'digital skills training',
  ],
  icons: {
    icon: '/images/Appmania_Favicon.png',
    shortcut: '/images/Appmania_Favicon.png',
    apple: '/images/Appmania_Favicon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0d1117',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">
        <AnimatedBackground />
        {children}
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  )
}
