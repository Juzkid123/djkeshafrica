import type { Metadata } from 'next'
import { Geist, Geist_Mono, Bebas_Neue } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { CustomCursor } from '@/components/custom-cursor'
import { dj } from '@/lib/constants'
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
  title: 'STUP!DMUZIK TO THE WIASE',
  description: 'Experience world-class DJ performances and exclusive music events',
  generator: 'v0.app',
  openGraph: {
    title: 'STUP!DMUZIK TO THE WIASE',
    siteName: 'STUP!DMUZIK TO THE WIASE',
  },
  twitter: {
    title: 'STUP!DMUZIK TO THE WIASE',
  },
  icons: {
    icon: dj.logo,
    shortcut: dj.logo,
    apple: dj.logo,
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
        <CustomCursor />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
