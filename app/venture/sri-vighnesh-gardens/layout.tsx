import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sri Vighnesh Gardens, Raghavapuram — Managed Farmland | GGDPL',
  description:
    'Sri Vighnesh Gardens — a premium 8.5-acre managed farmland venture at Raghavapuram, Korukonda Mandal, near Rajahmundry. Plots from ₹6,666/sq yard with free resort membership, fruit trees, drip irrigation & clear title.',
  alternates: { canonical: '/venture/sri-vighnesh-gardens' },
  openGraph: {
    title: 'Sri Vighnesh Gardens, Raghavapuram — Managed Farmland Venture',
    description:
      '8.5-acre managed farmland near Rajahmundry. Plots from ₹6,666/sq yard with free resort membership, fruit trees & clear title.',
    url: '/venture/sri-vighnesh-gardens',
    type: 'website',
    images: ['/images/vighnesh-hero.png'],
  },
}

export default function SriVighneshLayout({ children }: { children: React.ReactNode }) {
  return children
}
