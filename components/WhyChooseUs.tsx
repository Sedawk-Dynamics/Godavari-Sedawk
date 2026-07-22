'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { MapPin } from 'lucide-react'

const markets = [
  { city: 'Amaravati', focus: 'Capital region investments & premium residential layouts.' },
  { city: 'Vijayawada', focus: 'High-demand urban plots near major commercial hubs.' },
  { city: 'Visakhapatnam', focus: 'Coastal living and executive residential developments.' },
  { city: 'Rajahmundry', focus: 'Serene farm plots & fertile land near the Godavari belt.' },
  { city: 'Tirupathi', focus: 'Spiritual retreats and gated communities in a thriving pilgrimage center.' },
]

const coreDeliverables = [
  {
    number: '01',
    title: 'Residential Excellence',
    desc: 'Ready-to-build plots in Amaravati, Vijayawada, Tirupathi, Rajahmundry and Visakhapatnam with black-top roads, underground utilities, and 24/7 gated security.',
    color: '#0865A5',
    bg: '#E8F4FF',
    numColor: '#C3DFF5',
  },
  {
    number: '02',
    title: 'Productive Farm Plots',
    desc: 'Managed plantations with end-to-end maintenance for sandalwood, fruit, and timber crops. Your weekend retreat doubles as a growing asset.',
    color: '#69AE38',
    bg: '#EEF8E3',
    numColor: '#C5E3A0',
  },
  {
    number: '03',
    title: 'Legal Integrity',
    desc: 'We eliminate land ownership risks through rigorous title verification, clear documentation, and transparent registration processes.',
    color: '#DF2638',
    bg: '#FDEAEC',
    numColor: '#F9BCC2',
  },
]

export default function WhyChooseUs() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-12 md:py-20 lg:py-24 bg-[#F8F7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Core Deliverables Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-14"
        >
          <span className="inline-block px-4 py-1.5 bg-[#E8F4FF] text-[#0865A5] text-sm font-semibold rounded-full tracking-wider uppercase mb-4 font-sans border border-[#C3DFF5]">
            Why GGDPL?
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#1F2937] text-balance">
            Our Core Deliverables
          </h2>
          <p className="mt-4 text-[#4B6043] max-w-2xl mx-auto font-sans leading-relaxed">
            We specialize in bridging the gap between visionary land development and secure investment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-20">
          {coreDeliverables.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="bg-white rounded-3xl p-7 border border-[#D9E8D0] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <span
                className="inline-block font-display text-4xl sm:text-5xl font-bold mb-4"
                style={{ color: item.numColor }}
              >
                {item.number}
              </span>
              <h3 className="font-display text-xl font-bold mb-3" style={{ color: item.color }}>
                {item.title}
              </h3>
              <p className="text-[#4B6043] text-sm leading-relaxed font-sans">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Regional Presence */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-08%20at%2010.58.44-5pjC28tghyqY2CJP4aGBbq1GvKetl9.jpeg"
              alt="GGDPL Regional Presence in Andhra Pradesh"
              width={640}
              height={480}
              className="w-full h-[420px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#082F49]/65 to-transparent flex items-end p-8">
              <div>
                <p className="text-[#90CAF9] text-xs uppercase tracking-widest mb-2 font-sans">Regional Presence</p>
                <h3 className="font-display text-2xl font-bold text-white">
                  Andhra Pradesh&apos;s Growth Corridors
                </h3>
              </div>
            </div>
          </motion.div>

          {/* Market Table */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <h3 className="font-display text-3xl font-bold text-[#1F2937] mb-2">
              Our Key Markets
            </h3>
            <p className="text-[#4B6043] mb-6 font-sans leading-relaxed">
              Strategically focused on the most promising growth corridors of Andhra Pradesh, blending historical significance with rapid economic expansion.
            </p>
            <div className="space-y-3">
              {markets.map((m, i) => (
                <motion.div
                  key={m.city}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-start gap-4 bg-white rounded-2xl p-4 border border-[#D9E8D0] hover:border-[#0865A5]/40 hover:shadow-md transition-all duration-200"
                >
                  <div className="w-8 h-8 rounded-full bg-[#E8F4FF] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin size={14} className="text-[#0865A5]" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-[#1F2937] text-sm">{m.city}</p>
                    <p className="text-[#4B6043] text-xs mt-0.5 font-sans">{m.focus}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
