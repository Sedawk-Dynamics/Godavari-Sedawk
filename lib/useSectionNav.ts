'use client'

import { usePathname, useRouter } from 'next/navigation'

/**
 * Scrolls to a `#section` on the home page from anywhere in the app.
 * On the home page it smooth-scrolls in place; on a subpage it navigates
 * to `/#section` and lets the browser land on the anchor.
 */
export function useSectionNav() {
  const pathname = usePathname()
  const router = useRouter()
  const isHome = pathname === '/'

  return (href: string) => {
    const id = href.startsWith('#') ? href : `#${href}`
    if (!isHome) {
      router.push(`/${id}`)
      return
    }
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }
}
