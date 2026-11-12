import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: '/', priority: 1, changeFrequency: 'weekly' as const },
    { path: '/venture/achampalem', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/venture/sri-vighnesh-gardens', priority: 0.8, changeFrequency: 'monthly' as const },
  ]

  return routes.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }))
}
