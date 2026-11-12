/**
 * The two GGDPL venture locations — the single source of truth for every
 * address, map link and map embed on the site. Do not hardcode addresses
 * anywhere else.
 */

export type VentureLocation = {
  key: 'vighnesh' | 'achampalem'
  /** Venture name as shown on address cards */
  name: string
  /** Short label used in headings and link text */
  shortLabel: string
  /** Address lines, rendered one per line */
  addressLines: string[]
  lat: number
  lng: number
  /** Canonical "open in Google Maps" link */
  mapsUrl: string
  /** Accent colour for the card icon */
  color: string
  /** Page this venture's detail lives on */
  href: string
}

export const VIGHNESH: VentureLocation = {
  key: 'vighnesh',
  name: 'GGDPL New FarmLand Venture',
  shortLabel: 'Raghavapuram',
  addressLines: ['Raghavapuram,', 'Korukonda Mandal,', 'Andhra Pradesh'],
  lat: 17.215784,
  lng: 81.791322,
  mapsUrl: 'https://maps.app.goo.gl/TtLciQBucNMp8pBUA',
  color: '#69AE38',
  href: '/venture/sri-vighnesh-gardens',
}

export const ACHAMPALEM: VentureLocation = {
  key: 'achampalem',
  name: 'The Ozes — Achampalem Venture',
  shortLabel: 'The Ozes',
  addressLines: ['Achampalem Village, Behind JNTUK University,', 'Near Kotappakonda, Narasaraopet,', 'Andhra Pradesh'],
  lat: 16.1490399,
  lng: 80.013403,
  mapsUrl: 'https://www.google.com/maps?q=16.1490399,80.013403&z=17&hl=en',
  color: '#0865A5',
  href: '/venture/achampalem',
}

export const LOCATIONS: VentureLocation[] = [VIGHNESH, ACHAMPALEM]

/** Google Maps embed URL pinned to the venture's exact coordinates. */
export function embedUrl(loc: VentureLocation, zoom = 16) {
  return `https://www.google.com/maps?q=${loc.lat},${loc.lng}&z=${zoom}&hl=en&output=embed`
}
