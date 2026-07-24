import type { Metadata } from 'next'
import { Geist, Geist_Mono, Bebas_Neue } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ 
  subsets: ["latin"],
  variable: '--font-geist',
});
const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-geist-mono',
});
const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: '400',
  variable: '--font-bebas',
});

export const metadata: Metadata = {
  title: 'DJ Keshafrica | STUP!D MUZIK',
  description: 'Book DJ Keshafrica for premium Afrobeats, Amapiano, Hip-Hop, and club experiences across Ghana and beyond.',
  generator: 'v0.app',
  openGraph: {
    title: 'DJ Keshafrica | STUP!D MUZIK',
    siteName: 'DJ Keshafrica',
    description: 'Book DJ Keshafrica for premium Afrobeats, Amapiano, Hip-Hop, and club experiences across Ghana and beyond.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DJ Keshafrica | STUP!D MUZIK',
  },
  icons: {
    icon: [{ url: '/favicon-keshafrica.svg?v=4', type: 'image/svg+xml' }],
    shortcut: [{ url: '/favicon-keshafrica.svg?v=4', type: 'image/svg+xml' }],
    apple: [{ url: '/favicon-keshafrica.svg?v=4', type: 'image/svg+xml' }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable} ${bebasNeue.variable} bg-dj-black-primary overflow-x-hidden`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-dj-black-primary text-dj-cyan overflow-x-hidden w-full max-w-full" suppressHydrationWarning>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
