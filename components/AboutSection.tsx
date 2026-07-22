'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { Shield, TrendingUp, Award, Leaf } from 'lucide-react'

const reasons = [
  {
    icon: Shield,
    title: 'Integrity',
    desc: 'Honest pricing, clear titles, and transparent documentation for risk-free ownership.',
    color: '#0865A5',
    bg: '#E8F4FF',
  },
  {
    icon: TrendingUp,
    title: 'Growth',
    desc: 'Strategic location with high appreciation potential along Andhra Pradesh growth corridors.',
    color: '#69AE38',
    bg: '#EEF8E3',
  },
  {
    icon: Award,
    title: 'Expertise',
    desc: 'Decades of collective real estate experience across VMRDA, DTCP & APCRDA-approved projects.',
    color: '#DF2638',
    bg: '#FDEAEC',
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    desc: 'End-to-end managed plantations with drip irrigation, solar lighting & eco-living infrastructure.',
    color: '#69AE38',
    bg: '#EEF8E3',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: 'easeOut' as const },
  }),
}

export default function AboutSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" ref={ref} className="py-12 md:py-20 lg:py-24 bg-[#F8F7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-[#E8F4FF] text-[#0865A5] text-sm font-semibold rounded-full tracking-wider uppercase mb-4 font-sans border border-[#C3DFF5]">
            About GGDPL
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#1F2937] text-balance">
            Land is More Than Just a Plot —<br />
            <span className="text-[#0865A5]">It&apos;s Your Legacy</span>
          </h2>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about-farmland.png"
                alt="GGDPL team helping investors with farmland investment"
                width={600}
                height={450}
                className="w-full h-[420px] object-cover"
              />
              {/* Overlay badge */}
              <div className="absolute bottom-6 left-6 bg-white rounded-2xl px-5 py-4 shadow-xl">
                <p className="text-[#0865A5] font-display font-bold text-2xl">8.5 Acres</p>
                <p className="text-[#4B6043] text-sm font-sans">Premium Managed Farmland</p>
              </div>
            </div>

            {/* Floating brand badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
              className="absolute -top-5 -right-5 bg-[#0865A5] rounded-2xl p-4 shadow-xl hidden sm:block"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-08_113337-removebg-preview-gTDhVzLCt59YtJwCUVCf8oGgfHKIzq.png"
                alt="GGDPL Logo"
                width={80}
                height={32}
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="font-display text-3xl font-bold text-[#1F2937] mb-4">
              Godavari Green Developers Private Limited
            </h3>
            <p className="text-[#4B6043] leading-relaxed mb-4 font-sans">
              At <strong className="text-[#1F2937]">GGDPL</strong>, we believe land is more than just a plot — it&apos;s the foundation of your legacy. With a passion for sustainable development and a commitment to transparency, we specialize in curating premium <strong className="text-[#0865A5]">residential spaces</strong> and <strong className="text-[#69AE38]">serene farm plots</strong> tailored to your lifestyle.
            </p>
            <p className="text-[#4B6043] leading-relaxed mb-6 font-sans">
              Our portfolio features <strong className="text-[#1F2937]">VMRDA, DTCP, and APCRDA-approved</strong> residential plots and managed farm lands strategically located across Andhra Pradesh&apos;s high-growth corridors.
            </p>

            {/* Tagline badge */}
            <div className="inline-flex items-center gap-3 bg-[#EEF8E3] border border-[#C5E3A0] rounded-2xl px-5 py-3">
              <div className="w-2 h-2 rounded-full bg-[#69AE38]" />
              <span className="text-[#3A6B1A] font-semibold font-sans text-sm">
                &quot;Your Plot – Your Paradise&quot;
              </span>
            </div>

            {/* About images from brochure */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-xl overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-08%20at%2010.58.43%20%282%29-cb7y0Dlkblz6BTvyCTnKiDeByh2zAJ.jpeg"
                  alt="GGDPL About Us"
                  width={280}
                  height={160}
                  className="w-full h-32 object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-08%20at%2010.58.43%20%283%29-lcpjNEcdZRt7RjiQJ51f7ym7Pb3ebw.jpeg"
                  alt="GGDPL Mission"
                  width={280}
                  height={160}
                  className="w-full h-32 object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Reason Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="group bg-white border border-[#D9E8D0] rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-default"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                style={{ backgroundColor: item.bg }}
              >
                <item.icon size={22} style={{ color: item.color }} />
              </div>
              <h4 className="font-display text-lg font-bold text-[#1F2937] mb-2">{item.title}</h4>
              <p className="text-[#4B6043] text-sm leading-relaxed font-sans">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
