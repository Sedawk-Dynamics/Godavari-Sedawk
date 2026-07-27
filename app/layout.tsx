import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { SITE_URL, SITE_NAME, COMPANY } from '@/lib/site'
import { LOCATIONS } from '@/lib/locations'

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

const description =
  'Invest in Sri Vighnesh Gardens – a premium 8.5-acre managed farmland venture by Godavari Green Developers Pvt. Ltd. in Raghavapuram, Korukonda Mandal. Farm plots with resort membership, fruit trees, drip irrigation & 24/7 security.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Sri Vighnesh Gardens | GGDPL New Farmland Venture – Raghavapuram',
    template: '%s | GGDPL Godavari Green Developers',
  },
  description,
  applicationName: SITE_NAME,
  keywords: [
    'farmland investment Andhra Pradesh',
    'managed farm plots Rajahmundry',
    'GGDPL',
    'Sri Vighnesh Gardens',
    'Raghavapuram farm land',
    'Korukonda Mandal plots',
    'Sreevari Nagar Sagguru',
    'Godavari Green Developers',
    'farm plots near Rajahmundry',
    'DTCP APCRDA approved plots',
  ],
  authors: [{ name: COMPANY.legalName, url: COMPANY.website }],
  creator: COMPANY.legalName,
  publisher: COMPANY.legalName,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Sri Vighnesh Gardens | GGDPL New Farmland Venture',
    description:
      'Premium 8.5-acre managed farmland with resort membership near Rajahmundry, Andhra Pradesh. Plots from ₹6,666/sq yard.',
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/vighnesh-hero.png',
        width: 1200,
        height: 630,
        alt: 'Sri Vighnesh Gardens managed farmland venture, Raghavapuram',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sri Vighnesh Gardens | GGDPL New Farmland Venture',
    description:
      'Premium 8.5-acre managed farmland with resort membership near Rajahmundry, Andhra Pradesh. Plots from ₹6,666/sq yard.',
    images: ['/images/vighnesh-hero.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  category: 'real estate',
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: COMPANY.legalName,
  alternateName: COMPANY.shortName,
  url: SITE_URL,
  email: COMPANY.email,
  slogan: COMPANY.tagline,
  areaServed: 'Andhra Pradesh, India',
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'Andhra Pradesh',
    addressCountry: 'IN',
  },
  location: LOCATIONS.map((loc) => ({
    '@type': 'Place',
    name: loc.name,
    address: loc.addressLines.join(' '),
    geo: {
      '@type': 'GeoCoordinates',
      latitude: loc.lat,
      longitude: loc.lng,
    },
    hasMap: loc.mapsUrl,
  })),
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
