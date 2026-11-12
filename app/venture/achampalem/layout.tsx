import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Ozes, Achampalem — Premium Farm Plots & Weekend Homes | GGDPL',
  description:
    'The Ozes at Achampalem Village, behind JNTUK University, near Kotappakonda and Narasaraopet — premium farm plots and weekend homes by Godavari Green Developers, with blacktop roads, club house, gardens and solar lighting.',
  alternates: { canonical: '/venture/achampalem' },
  openGraph: {
    title: 'The Ozes, Achampalem — Premium Farm Plots & Weekend Homes',
    description:
      'Farm plots and weekend homes 1 km from JNTUK University and Kotappakonda, 8 km from Narasaraopet. Your Plot – Your Paradise.',
    url: '/venture/achampalem',
    type: 'website',
    images: ['/images/ozes-banner.png'],
  },
}

export default function AchampalemLayout({ children }: { children: React.ReactNode }) {
  return children
}
