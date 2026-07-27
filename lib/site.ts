/**
 * Site-wide constants used for SEO (metadata, sitemap, robots, structured data).
 * Override the base URL per-environment with NEXT_PUBLIC_SITE_URL.
 */

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.ggdpl.co.in'
).replace(/\/$/, '')

export const SITE_NAME = 'Godavari Green Developers (GGDPL)'

export const COMPANY = {
  legalName: 'Godavari Green Developers Private Limited',
  shortName: 'GGDPL',
  email: 'godavarigreendevelopers@gmail.com',
  salesEmail: 'sales@ggdpl.co.in',
  website: 'https://www.ggdpl.co.in',
  tagline: 'Your Plot — Your Paradise',
} as const
