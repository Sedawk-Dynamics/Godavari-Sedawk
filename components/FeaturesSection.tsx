'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import {
  Road,
  Shield,
  Hotel,
  Trees,
  Droplets,
  Sun,
  Baby,
  Waves,
  FileCheck,
  BookOpen,
} from 'lucide-react'

const features = [
  {
    icon: Road,
    title: '24ft Wide BT Roads',
    desc: 'Broad black-top roads with 20ft side roads for easy access throughout the venture.',
    color: '#0865A5',
    bg: '#E8F4FF',
  },
  {
    icon: Shield,
    title: 'Security Wall',
    desc: 'Compound security wall surrounding the entire complex for 24/7 protection.',
    color: '#DF2638',
    bg: '#FDEAEC',
  },
  {
    icon: Hotel,
    title: 'Modern Resort',
    desc: 'Premium resort with AC rooms, meeting hall, and a coffee shop — free membership for owners.',
    color: '#69AE38',
    bg: '#EEF8E3',
  },
  {
    icon: Trees,
    title: 'Fruit Trees Included',
    desc: 'Each plot comes with mango, sapota, guava, pomegranate, and papaya trees pre-planted.',
    color: '#69AE38',
    bg: '#EEF8E3',
  },
  {
    icon: Droplets,
    title: 'Drip Irrigation',
    desc: 'State-of-the-art drip irrigation system ensuring optimal water delivery to every plant.',
    color: '#0865A5',
    bg: '#E8F4FF',
  },
  {
    icon: Sun,
    title: 'Solar Lighting',
    desc: 'Eco-friendly solar-powered lighting throughout roads and common areas.',
    color: '#D97706',
    bg: '#FEF3C7',
  },
  {
    icon: Baby,
    title: "Children's Play Area",
    desc: 'Dedicated play zone with water fountains for family-friendly weekend retreats.',
    color: '#69AE38',
    bg: '#EEF8E3',
  },
  {
    icon: Waves,
    title: 'Water Fountains',
    desc: 'Decorative water fountains and landscaped common areas throughout the venture.',
    color: '#0865A5',
    bg: '#E8F4FF',
  },
  {
    icon: FileCheck,
    title: 'Pattadhar PassBook',
    desc: 'Pattadhar PassBook issued to all plot owners of 500 sq yards and above.',
    color: '#DF2638',
    bg: '#FDEAEC',
  },
  {
    icon: BookOpen,
    title: 'Bi-Annual Reports',
    desc: 'Regular venture reports and resale support provided to all plot owners.',
    color: '#69AE38',
    bg: '#EEF8E3',
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function FeaturesSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="features" ref={ref} className="py-12 md:py-20 lg:py-24 bg-[#F1F7ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-[#EEF8E3] text-[#3A6B1A] text-sm font-semibold rounded-full tracking-wider uppercase mb-4 font-sans border border-[#C5E3A0]">
            Venture Features
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#1F2937] text-balance">
            Sri Vighnesh Gardens —
            <br />
            <span className="text-[#0865A5]">World-Class Amenities</span>
          </h2>
          <p className="mt-4 text-[#4B6043] max-w-2xl mx-auto text-lg font-sans leading-relaxed">
            Every feature is designed to transform your farm plot into a weekend paradise and a growing investment.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 md:gap-5"
        >
          {features.map((feat) => (
            <motion.div
              key={feat.title}
              variants={item}
              className="group bg-white border border-[#D9E8D0] rounded-2xl p-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform"
                style={{ backgroundColor: feat.bg }}
              >
                <feat.icon size={20} style={{ color: feat.color }} />
              </div>
              <h4 className="font-display text-sm font-bold text-[#1F2937] mb-1.5">{feat.title}</h4>
              <p className="text-[#4B6043] text-xs leading-relaxed font-sans">{feat.desc}</p>
            </motion.div>
          ))}

          {/* CTA Card */}
          <motion.div
            variants={item}
            className="bg-[#0865A5] rounded-2xl p-5 flex flex-col justify-between"
          >
            <div>
              <h4 className="font-display text-lg font-bold text-white mb-2">
                First 2 Years FREE
              </h4>
              <p className="text-[#C3DFF5] text-xs leading-relaxed font-sans">
                No Annual Maintenance Charges for the first 2 years. Nominal AMC thereafter.
              </p>
            </div>
            <button
              onClick={() => document.querySelector('#enquiry')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-4 w-full py-2.5 bg-white text-[#0865A5] text-sm font-bold rounded-xl hover:bg-[#E8F4FF] transition-colors"
            >
              Enquire Now
            </button>
          </motion.div>
        </motion.div>

        {/* Vision & Mission banners */}
        <div className="mt-12 md:mt-16 grid md:grid-cols-2 gap-4 md:gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="relative rounded-3xl overflow-hidden group"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-08%20at%2010.58.43%20%284%29-uney2JJ5d3NAJt1rLw1WHchHgCGjRI.jpeg"
              alt="GGDPL Our Vision"
              width={600}
              height={340}
              className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-[#082F49]/55 flex items-end p-6">
              <div>
                <span className="text-[#90CAF9] text-xs uppercase tracking-widest font-sans">Our Vision</span>
                <p className="text-white font-display text-xl font-bold mt-1 leading-tight">
                  Sustainable ecosystems where modern living and nature coexist.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="relative rounded-3xl overflow-hidden group"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-08%20at%2010.58.44%20%281%29-RBvx9klHIS0SB69zQYm9E3FmLsoY00.jpeg"
              alt="GGDPL What We Offer"
              width={600}
              height={340}
              className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-[#082F49]/55 flex items-end p-6">
              <div>
                <span className="text-[#A5D6A7] text-xs uppercase tracking-widest font-sans">What We Offer</span>
                <p className="text-white font-display text-xl font-bold mt-1 leading-tight">
                  Premium real estate solutions across Andhra Pradesh.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
