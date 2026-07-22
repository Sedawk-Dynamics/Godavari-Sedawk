'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Phone, ChevronDown, MapPin, Leaf } from 'lucide-react'
import { useSectionNav } from '@/lib/useSectionNav'

const ventures = [
  {
    href: '/venture',
    name: 'Sreevari Nagar',
    sub: 'Sagguru, Krishna District',
    tag: 'APCRDA Approved',
    icon: MapPin,
    color: '#0865A5',
  },
  {
    href: '/venture/sri-vighnesh-gardens',
    name: 'Sri Vighnesh Gardens',
    sub: 'Raghavapuram, Rajahmundry',
    tag: 'Farmland Venture',
    icon: Leaf,
    color: '#69AE38',
  },
]

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Features', href: '#features' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Location', href: '#location' },
  { label: 'Contact', href: '#enquiry' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [venturesOpen, setVenturesOpen] = useState(false)
  const venturesRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const goToSection = useSectionNav()
  const isVenturePage = pathname.startsWith('/venture')

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (venturesRef.current && !venturesRef.current.contains(e.target as Node)) {
        setVenturesOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setMenuOpen(false)
    setVenturesOpen(false)
  }, [pathname])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    goToSection(href)
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-[#D9E8D0]">
      <div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-08_113337-removebg-preview-gTDhVzLCt59YtJwCUVCf8oGgfHKIzq.png"
                alt="GGDPL Godavari Green Developers Logo"
                width={130}
                height={52}
                className="h-12 md:h-14 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 cursor-pointer text-[#1F2937] hover:text-[#0865A5]"
                >
                  {link.label}
                </button>
              ))}
              {/* Ventures dropdown */}
              <div ref={venturesRef} className="relative">
                <button
                  onClick={() => setVenturesOpen((v) => !v)}
                  className={`inline-flex items-center gap-1 px-3 py-2 text-sm font-semibold rounded-md transition-colors duration-200 ${
                    isVenturePage || venturesOpen
                      ? 'text-[#0865A5] bg-[#E8F4FF]'
                      : 'text-[#0865A5] hover:bg-[#E8F4FF]'
                  }`}
                >
                  Ventures
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${venturesOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                <AnimatePresence>
                  {venturesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.18 }}
                      className="absolute top-full right-0 mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-[#D9E8D0] overflow-hidden z-50"
                    >
                      <div className="p-2">
                        <p className="text-[10px] font-bold text-[#9CA3AF] uppercase tracking-widest px-3 pt-2 pb-1">
                          Our Ventures
                        </p>
                        {ventures.map((v) => (
                          <Link
                            key={v.href}
                            href={v.href}
                            onClick={() => setVenturesOpen(false)}
                            className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-colors group ${
                              pathname === v.href ? 'bg-[#E8F4FF]' : 'hover:bg-[#F8F7F2]'
                            }`}
                          >
                            <div
                              className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                              style={{ backgroundColor: v.color + '18' }}
                            >
                              <v.icon size={17} style={{ color: v.color }} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-semibold text-[#1F2937] group-hover:text-[#0865A5] transition-colors">
                                {v.name}
                              </p>
                              <p className="text-xs text-[#6B7280] truncate">{v.sub}</p>
                            </div>
                            <span
                              className="text-[10px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0"
                              style={{ backgroundColor: v.color + '18', color: v.color }}
                            >
                              {v.tag}
                            </span>
                          </Link>
                        ))}
                      </div>
                      <div className="border-t border-[#D9E8D0] px-3 py-3 bg-[#F8F7F2]">
                        <p className="text-xs text-[#6B7280]">
                          More ventures coming soon across Andhra Pradesh
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 text-sm font-medium transition-colors text-[#0865A5] hover:text-[#065289]"
              >
                <Phone size={15} />
                <span>Enquire Now</span>
              </a>
              <button
                onClick={() => handleNavClick('#enquiry')}
                className="px-5 py-2.5 bg-[#0865A5] hover:bg-[#065289] text-white text-sm font-semibold rounded-full transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Book a Site Visit
              </button>
            </div>

            {/* Mobile actions */}
            <div className="flex items-center gap-1 lg:hidden">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-1.5 px-3 py-2 bg-[#0865A5] text-white text-xs font-semibold rounded-full"
              >
                <Phone size={13} />
                <span className="hidden sm:inline">Enquire Now</span>
                <span className="sm:hidden">Call</span>
              </a>
              <button
                className="p-2 rounded-md text-[#1F2937]"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu — flows directly under the bar, scrolls if it overflows */}
      <AnimatePresence initial={false}>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white shadow-xl border-t border-[#D9E8D0] lg:hidden overflow-hidden"
          >
            <nav className="flex flex-col px-4 py-4 gap-1 max-h-[calc(100vh-5rem)] overflow-y-auto">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left px-4 py-3 text-[#1F2937] font-medium rounded-lg hover:bg-[#F1F7ED] hover:text-[#0865A5] transition-colors cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
              <div className="mt-1">
                <p className="text-[10px] font-bold text-[#9CA3AF] uppercase tracking-widest px-4 pb-1 pt-1">
                  Ventures
                </p>
                {ventures.map((v) => (
                  <Link
                    key={v.href}
                    href={v.href}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                      pathname === v.href ? 'bg-[#E8F4FF] text-[#0865A5]' : 'hover:bg-[#F1F7ED] text-[#1F2937]'
                    }`}
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: v.color + '18' }}
                    >
                      <v.icon size={15} style={{ color: v.color }} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{v.name}</p>
                      <p className="text-xs text-[#6B7280]">{v.sub}</p>
                    </div>
                  </Link>
                ))}
              </div>
              <button
                onClick={() => handleNavClick('#enquiry')}
                className="mt-2 w-full px-5 py-3 bg-[#0865A5] text-white font-semibold rounded-full"
              >
                Book a Site Visit
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
