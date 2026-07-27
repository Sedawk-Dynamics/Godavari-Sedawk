import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sreevari Nagar, Sagguru — APCRDA Approved Plots | GGDPL',
  description:
    'Sreevari Nagar at Sagguru, Krishna District — an APCRDA-approved residential layout (LP No: 120/2015) with 40ft black-top roads, clear title and ~39% below-market pricing in the Amaravati capital region.',
  alternates: { canonical: '/venture' },
  openGraph: {
    title: 'Sreevari Nagar, Sagguru — APCRDA Approved Plots',
    description:
      'APCRDA-approved residential layout in Sagguru, Krishna District — clear title, 40ft roads, near Gannavaram Airport & ORR.',
    url: '/venture',
    type: 'website',
    images: ['/images/sreevari-hero.png'],
  },
}

export default function VentureLayout({ children }: { children: React.ReactNode }) {
  return children
}
