'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { MapPin, Navigation } from 'lucide-react'
import { LOCATIONS, embedUrl } from '@/lib/locations'
import { useSectionNav } from '@/lib/useSectionNav'

export default function LocationSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const goToSection = useSectionNav()

  return (
    <section id="location" ref={ref} className="py-12 md:py-20 lg:py-24 bg-[#F8F7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-14"
        >
          <span className="inline-block px-4 py-1.5 bg-[#E8F4FF] text-[#0865A5] text-sm font-semibold rounded-full tracking-wider uppercase mb-4 font-sans border border-[#C3DFF5]">
            Location
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#1F2937] text-balance">
            Our Venture
            <br />
            <span className="text-[#0865A5]">Locations</span>
          </h2>
          <p className="mt-4 text-[#4B6043] max-w-xl mx-auto text-base sm:text-lg font-sans">
            Two ventures across Andhra Pradesh — find either one on the map below.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {LOCATIONS.map((loc, i) => (
            <motion.div
              key={loc.key}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.12 }}
              className="flex flex-col rounded-3xl overflow-hidden border border-[#D9E8D0] bg-white shadow-lg"
            >
              {/* Map */}
              <div className="w-full aspect-[4/3] sm:aspect-video bg-[#E8F4FF]">
                <iframe
                  src={embedUrl(loc)}
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${loc.name} location map`}
                />
              </div>

              {/* Address */}
              <div className="flex flex-col flex-1 p-5 sm:p-6">
                <div className="flex items-start gap-3">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: loc.color + '1F' }}
                  >
                    <MapPin size={17} style={{ color: loc.color }} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display text-lg sm:text-xl font-bold text-[#1F2937] leading-snug">
                      {loc.name}
                    </h3>
                    <p className="mt-1.5 text-[#4B5563] text-sm leading-relaxed font-sans">
                      {loc.addressLines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>

                <div className="mt-auto pt-4 border-t border-[#D9E8D0] flex flex-wrap gap-3">
                  <a
                    href={loc.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-white text-sm font-semibold rounded-xl transition-opacity hover:opacity-90 font-sans"
                    style={{ backgroundColor: loc.color }}
                  >
                    <Navigation size={14} />
                    Get Directions
                  </a>
                  <Link
                    href={loc.href}
                    className="inline-flex items-center px-4 py-2.5 bg-[#F1F7ED] hover:bg-[#E3EFDA] text-[#1F2937] text-sm font-semibold rounded-xl transition-colors font-sans"
                  >
                    View Venture
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => goToSection('#enquiry')}
            className="w-full sm:w-auto px-10 py-4 bg-[#DF2638] hover:bg-[#C01E2E] text-white font-bold rounded-2xl transition-colors font-sans shadow-lg"
          >
            Book a Free Site Visit
          </button>
        </div>
      </div>
    </section>
  )
}
