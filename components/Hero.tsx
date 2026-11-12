'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, ChevronDown, Star, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'

const slides = [
  {
    id: 'sri-vighnesh',
    bg: '/images/hero-farmland.png',
    alt: 'Sri Vighnesh Gardens Premium Farmland Venture',
    badge: 'GGDPL New Farmland Venture',
    badgeColor: '#90CAF9',
    location: 'Raghavapuram Village, Korukonda Mandal, Rajahmundry',
    titleLine1: 'Sri Vighnesh',
    titleAccent: 'Gardens',
    accentColor: '#69AE38',
    subtitle: 'A premier 8.5-acre managed farmland where your weekend retreat becomes a growing legacy. Farm plots with resort membership, fruit trees & drip irrigation.',
    ctaPrimary: { label: 'Book a Site Visit', href: '#enquiry', type: 'scroll' },
    ctaSecondary: { label: 'View Plot Pricing', href: '#pricing', type: 'scroll' },
    stats: [
      { value: '8.5', unit: 'Acres', label: 'Prime Farmland' },
      { value: '250+', unit: 'Plots', label: 'Available' },
      { value: '₹6,666', unit: '/sq yd', label: 'Starting Price' },
      { value: '100%', unit: 'Legal', label: 'Clear Title' },
    ],
  },
  {
    id: 'achampalem',
    bg: '/images/ozes-banner.png',
    alt: 'The Ozes Premium Farm Plots & Weekend Homes Venture, Achampalem',
    badge: 'Premium Farm Plots & Weekend Homes',
    badgeColor: '#A5D6A7',
    location: 'Achampalem Village, Behind JNTUK University, Narasaraopet',
    titleLine1: 'The Ozes',
    titleAccent: 'Your Paradise',
    accentColor: '#69AE38',
    subtitle: 'Farm plots and weekend homes at Achampalem — 1 km from JNTUK University and Kotappakonda, 8 km from Narasaraopet, with a club house, gardens and a children\'s play area.',
    ctaPrimary: { label: 'Explore This Venture', href: '/venture/achampalem', type: 'link' },
    ctaSecondary: { label: 'Enquire Now', href: '#enquiry', type: 'scroll' },
    stats: [
      { value: '1 km', unit: 'JNTUK University', label: 'Walking-distance access' },
      { value: '8 km', unit: 'Narasaraopet', label: 'Town centre' },
      { value: '33 ft', unit: 'Main Road', label: 'Blacktop internal roads' },
      { value: '₹50,000', unit: 'Token', label: 'Booking token' },
    ],
  },
]

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const goTo = useCallback((idx: number, dir: number) => {
    setDirection(dir)
    setCurrent(idx)
  }, [])

  const next = useCallback(() => {
    goTo((current + 1) % slides.length, 1)
  }, [current, goTo])

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length, -1)
  }, [current, goTo])

  // Auto-advance every 6 seconds
  useEffect(() => {
    timerRef.current = setTimeout(next, 6000)
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  }, [current, next])

  const handleScroll = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const slide = slides[current]

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0 }),
  }

  return (
    <div id="home" ref={heroRef} className="relative w-full min-h-screen overflow-hidden flex items-center bg-[#082F49]">

      {/* ── Slide images ── */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={slide.id + '-bg'}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={slide.bg}
            alt={slide.alt}
            fill
            className="object-cover opacity-45"
            priority
            crossOrigin="anonymous"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#082F49]/30 via-[#082F49]/55 to-[#082F49]" />
        </motion.div>
      </AnimatePresence>

      {/* ── Slide content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24 md:py-36 lg:py-44">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={slide.id + '-content'}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.7, ease: 'easeInOut' }}
            className="max-w-3xl"
          >
            {/* Location badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-5">
              <MapPin size={13} style={{ color: slide.badgeColor }} />
              <span className="text-white/90 text-sm font-medium">{slide.location}</span>
            </div>

            {/* Eyebrow */}
            <p className="text-sm font-semibold tracking-widest uppercase mb-2 font-sans" style={{ color: slide.badgeColor }}>
              {slide.badge}
            </p>

            {/* Heading */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight text-balance mb-5">
              {slide.titleLine1}
              <br />
              <span style={{ color: slide.accentColor }}>{slide.titleAccent}</span>
            </h1>

            {/* Subtitle */}
            <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-xl font-sans mb-4">
              {slide.subtitle}
            </p>

            {/* Stars */}
            <div className="flex items-center gap-2 mb-8">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={13} className="fill-[#FDD835] text-[#FDD835]" />
                ))}
              </div>
              <span className="text-white/70 text-sm">Trusted by 500+ investors across Andhra Pradesh</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              {slide.ctaPrimary.type === 'scroll' ? (
                <button
                  onClick={() => handleScroll(slide.ctaPrimary.href)}
                  className="px-7 py-3.5 bg-[#DF2638] hover:bg-[#C01E2E] text-white font-bold text-sm rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5"
                >
                  {slide.ctaPrimary.label}
                </button>
              ) : (
                <Link
                  href={slide.ctaPrimary.href}
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#DF2638] hover:bg-[#C01E2E] text-white font-bold text-sm rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5"
                >
                  {slide.ctaPrimary.label}
                  <ArrowRight size={15} />
                </Link>
              )}
              {slide.ctaSecondary.type === 'scroll' ? (
                <button
                  onClick={() => handleScroll(slide.ctaSecondary.href)}
                  className="px-7 py-3.5 bg-[#0865A5] hover:bg-[#065289] text-white font-bold text-sm rounded-full transition-all duration-300 shadow-lg"
                >
                  {slide.ctaSecondary.label}
                </button>
              ) : (
                <Link
                  href={slide.ctaSecondary.href}
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#0865A5] hover:bg-[#065289] text-white font-bold text-sm rounded-full transition-all duration-300 shadow-lg"
                >
                  {slide.ctaSecondary.label}
                </Link>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ── Stats bar ── */}
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={slide.id + '-stats'}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-3"
          >
            {slide.stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-center"
              >
                <div className="flex items-baseline justify-center gap-1">
                  <span className="font-display text-2xl md:text-3xl font-bold text-white">{stat.value}</span>
                  <span className="text-[#90CAF9] text-xs font-medium">{stat.unit}</span>
                </div>
                <p className="text-white/60 text-xs mt-1 font-sans">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Prev / Next arrows ── */}
      <button
        onClick={prev}
        aria-label="Previous venture"
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-colors"
      >
        <ChevronLeft size={20} className="text-white" />
      </button>
      <button
        onClick={next}
        aria-label="Next venture"
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-colors"
      >
        <ChevronRight size={20} className="text-white" />
      </button>

      {/* ── Dot indicators ── */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => goTo(i, i > current ? 1 : -1)}
            aria-label={`Go to slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${i === current ? 'w-8 h-2.5 bg-white' : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70'}`}
          />
        ))}
      </div>

      {/* ── Scroll indicator ── */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 cursor-pointer"
        onClick={() => handleScroll('#about')}
      >
        <span className="text-white/40 text-xs tracking-widest uppercase font-sans">Discover</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown size={22} className="text-white/40" />
        </motion.div>
      </div>
    </div>
  )
}
