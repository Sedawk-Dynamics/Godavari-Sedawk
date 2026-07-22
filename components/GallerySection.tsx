'use client'

import { useRef, useState, useCallback } from 'react'
import Image from 'next/image'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react'

const galleryImages = [
  {
    src: '/images/hero-farmland.png',
    caption: 'Aerial View — Sri Vighnesh Gardens',
    tag: 'Aerial',
  },
  {
    src: '/images/gallery-1.png',
    caption: 'Lush Managed Fruit Tree Orchards',
    tag: 'Orchards',
  },
  {
    src: '/images/gallery-2.png',
    caption: 'Modern Resort & Club House',
    tag: 'Resort',
  },
  {
    src: '/images/gallery-3.png',
    caption: 'Security Wall & BT Roads',
    tag: 'Infrastructure',
  },
  {
    src: '/images/gallery-4.png',
    caption: 'Managed Farmland — Drip Irrigation',
    tag: 'Farming',
  },
  {
    src: '/images/gallery-5.png',
    caption: 'Sunset Panorama — Sri Vighnesh Gardens',
    tag: 'Landscape',
  },
  {
    src: '/images/resort.png',
    caption: 'Premium Resort Interior — AC Rooms',
    tag: 'Resort',
  },
]

export default function GallerySection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [current, setCurrent] = useState(0)
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null)
  const [lightbox, setLightbox] = useState<number | null>(null)

  const next = () => setCurrent((prev) => (prev + 1) % galleryImages.length)
  const prev = () => setCurrent((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)

  return (
    <section id="gallery" ref={ref} className="py-12 md:py-20 lg:py-24 bg-[#082F49]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 bg-[#0865A5]/40 text-[#90CAF9] text-sm font-semibold rounded-full tracking-wider uppercase mb-4 font-sans border border-[#0865A5]/50">
            Photo Gallery
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white text-balance">
            Experience Sri Vighnesh
            <span className="text-[#69AE38]"> Gardens</span>
          </h2>
          <p className="mt-4 text-[#90CAF9]/80 max-w-xl mx-auto font-sans">
            A visual journey through our premium farmland venture and world-class amenities.
          </p>
        </motion.div>

        {/* Main Carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl mb-6"
          style={{ height: '480px' }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.45 }}
              className="absolute inset-0"
            >
              <Image
                src={galleryImages[current].src}
                alt={galleryImages[current].caption}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#082F49]/75 via-transparent to-transparent" />
              {/* Caption */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <span className="inline-block px-3 py-1 bg-[#0865A5]/80 text-white text-xs rounded-full mb-2 font-sans">
                    {galleryImages[current].tag}
                  </span>
                  <p className="text-white font-display text-xl font-semibold">
                    {galleryImages[current].caption}
                  </p>
                </div>
                <button
                  onClick={() => setLightbox(current)}
                  className="p-2 bg-white/10 backdrop-blur-sm rounded-xl text-white hover:bg-white/20 transition-colors"
                  aria-label="View fullscreen"
                >
                  <ZoomIn size={20} />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav arrows */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 backdrop-blur-sm rounded-xl text-white hover:bg-white/25 transition-colors z-10"
            aria-label="Previous"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 backdrop-blur-sm rounded-xl text-white hover:bg-white/25 transition-colors z-10"
            aria-label="Next"
          >
            <ChevronRight size={22} />
          </button>

          {/* Counter */}
          <div className="absolute top-4 right-4 px-3 py-1.5 bg-black/40 backdrop-blur-sm rounded-full text-white text-sm font-sans z-10">
            {current + 1} / {galleryImages.length}
          </div>
        </motion.div>

        {/* Thumbnails */}
        <div className="flex gap-3 overflow-x-auto pb-2 justify-center flex-wrap">
          {galleryImages.map((img, i) => (
            <motion.button
              key={img.src}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.07 }}
              onClick={() => setCurrent(i)}
              className={`relative rounded-xl overflow-hidden flex-shrink-0 transition-all duration-200 ${
                i === current
                  ? 'ring-2 ring-[#69AE38] ring-offset-2 ring-offset-[#082F49] scale-105'
                  : 'opacity-60 hover:opacity-90'
              }`}
              style={{ width: '100px', height: '68px' }}
              aria-label={`View ${img.caption}`}
            >
              <Image
                src={img.src}
                alt={img.caption}
                fill
                className="object-cover"
              />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              className="relative max-w-5xl w-full max-h-[85vh] rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages[lightbox].src}
                alt={galleryImages[lightbox].caption}
                width={1200}
                height={800}
                className="w-full h-auto object-contain max-h-[80vh]"
              />
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-3 right-3 p-2 bg-black/50 rounded-full text-white hover:bg-black/80 transition"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
