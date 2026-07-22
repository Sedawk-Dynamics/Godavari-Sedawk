import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Sri Vighnesh Gardens | GGDPL New Farmland Venture – Raghavapuram',
  description:
    'Invest in Sri Vighnesh Gardens – a premium 8.5-acre managed farmland venture by Godavari Green Developers Pvt. Ltd. in Raghavapuram, Korukonda Mandal. Farm plots with resort membership, fruit trees, drip irrigation & 24/7 security.',
  keywords:
    'farmland investment Andhra Pradesh, managed farm plots Rajahmundry, GGDPL, Sri Vighnesh Gardens, Raghavapuram farm land, Korukonda Mandal plots, Godavari Green Developers',
  authors: [{ name: 'Godavari Green Developers Private Limited' }],
  openGraph: {
    title: 'Sri Vighnesh Gardens | GGDPL New Farmland Venture',
    description:
      'Premium 8.5-acre managed farmland with resort membership near Rajahmundry, Andhra Pradesh. Plots from ₹6,666/sq yard.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#0865A5',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased min-h-screen flex flex-col overflow-x-hidden">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
