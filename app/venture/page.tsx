'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { SREEVARI, embedUrl } from '@/lib/locations'
import {
  MapPin,
  CheckCircle2,
  BadgeCheck,
  TrendingUp,
  Home,
  Layers,
  Building2,
  TreePine,
  Landmark,
  Plane,
  Route,
  Droplets,
  ChevronRight,
  Phone,
  Zap,
  ShieldCheck,
} from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' as const },
  }),
}

function SectionBadge({ label }: { label: string }) {
  return (
    <span className="inline-block px-4 py-1.5 bg-[#E8F4FF] text-[#0865A5] text-xs font-bold rounded-full tracking-widest uppercase mb-4 border border-[#C3DFF5]">
      {label}
    </span>
  )
}

function AnimatedSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const [ref, inView] = useInView({ triggerOnce: true, rootMargin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={fadeUp}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ─── Data ────────────────────────────────────────────────────────────────────

const highlights = [
  { icon: BadgeCheck, label: 'APCRDA Approved', sub: 'LP No: 120/2015', color: '#0865A5' },
  { icon: ShieldCheck, label: '100% Clear Title', sub: 'RS Nos: 124/1(P), 2', color: '#69AE38' },
  { icon: Route, label: '40ft Wide Roads', sub: 'Black-top tar roads', color: '#0865A5' },
  { icon: TrendingUp, label: '~39% Below Market', sub: '₹14,000 vs ₹23,000/sq yd', color: '#DF2638' },
]

const infrastructure = [
  { icon: Route, label: '40ft Wide Black-top Roads', desc: 'Wide internal roads throughout the layout for easy access to all plots.' },
  { icon: TreePine, label: 'Roadside Tree Plantation', desc: 'Rows of trees planted on both sides of all internal roads for shade and aesthetics.' },
  { icon: Home, label: "Children's Play Park", desc: 'A dedicated park with play equipment and green open spaces for families.' },
  { icon: Droplets, label: 'Water Tank Construction', desc: 'Overhead water tank for reliable water supply to every plot.' },
  { icon: Zap, label: 'Electricity Supply', desc: 'Underground electrical infrastructure connected to each plot.' },
  { icon: Layers, label: 'Drainage System', desc: 'Planned storm-water drainage to keep the layout clean and flood-free.' },
  { icon: Building2, label: 'Full House Construction', desc: 'Infrastructure fully set up for immediate house construction.' },
]

const nearbyInfra = [
  {
    heading: 'Sagguru Village',
    color: '#0865A5',
    points: [
      'AP CRDA region — NORTH-EAST CORNER',
      '50 metres from 150m Outer Ring Road (ORR)',
      'Brahmalingayya Cheruvu — 10 TMC water storage lake',
      'Natural micro-climate & pollution-free environment',
    ],
  },
  {
    heading: 'Mallavalli Industrial Hub',
    color: '#69AE38',
    points: [
      'Ashok Leyland — Bus Body Building Unit',
      'Mega Food Park — ₹125.25 Crore investment',
      'Rail Neer Project — major utility infrastructure',
      'Logistics Hub connected via Pattiseema Road',
      'Vintage India & Rail Neer projects',
    ],
  },
  {
    heading: 'Veeraapeni Gudem',
    color: '#0865A5',
    points: [
      'APIIC Industrial Zone',
      'Women Entrepreneurs Small Scale Industries (ALEAP)',
      'Proposed 4-Track Road on Pattiseema canal',
    ],
  },
  {
    heading: 'Gannavaram',
    color: '#69AE38',
    points: [
      'International Airport — global connectivity',
      'Infosys campus — major IT employer',
      'HCL Technologies',
      'Veterinary College',
      'Megha Towers IT Park',
    ],
  },
]

const distances = [
  { icon: Plane, label: 'Gannavaram International Airport', dist: 'Within reach', time: 'Minutes' },
  { icon: Route, label: 'Outer Ring Road (ORR)', dist: '50 metres', time: 'Walking distance' },
  { icon: Building2, label: 'Mallavalli Industrial Hub', dist: 'Very close', time: '~10 mins' },
  { icon: Landmark, label: 'Vijayawada City', dist: 'Near vicinity', time: '~25 mins' },
]

const financials = [
  { label: 'Current Offering Price', value: '₹14,000', unit: '/sq. yard', highlight: false },
  { label: 'Regional Market Average', value: '₹23,000', unit: '/sq. yard', highlight: false },
  { label: 'Your Savings', value: '~39%', unit: 'below market', highlight: true },
]

const legalDocs = [
  'APCRDA Approved Layout',
  'LP No: 120/2015 — Formally Permitted',
  'RS Nos: 124/1 (P), 2 — Clear Title',
  'Sagguru Village, Agiripalli Mandal, Krishna District',
  'Capital Region compliant standards',
  '100% Transparent Registration Process',
]

export default function VenturePage() {
  return (
    <div className="bg-[#F8F7F2] font-sans">
      {/* ── HERO ── */}
      <section className="relative w-full h-[65vh] min-h-[420px] flex items-end overflow-hidden">
        <Image
          src="/images/sreevari-hero.png"
          alt="Sreevari Nagar Sagguru — CRDA Approved Residential Layout"
          fill
          className="object-cover"
          priority
          crossOrigin="anonymous"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#082F49] via-[#082F49]/50 to-transparent" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#69AE38]/90 text-white text-xs font-bold rounded-full mb-4 tracking-wider uppercase">
              <BadgeCheck size={12} />
              APCRDA Approved — LP No: 120/2015
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-3 text-balance">
              Sreevari Nagar
              <br />
              <span className="text-[#69AE38]">Sagguru</span>
            </h1>
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <MapPin size={14} className="text-[#90CAF9]" />
              <span>Sagguru Village, Agiripalli Mandal, Krishna District, Andhra Pradesh</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── KEY HIGHLIGHTS STRIP ── */}
      <section className="bg-white border-b border-[#D9E8D0] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="flex items-center gap-3 p-3 rounded-xl bg-[#F8F7F2] border border-[#D9E8D0]"
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: h.color + '18' }}>
                  <h.icon size={20} style={{ color: h.color }} />
                </div>
                <div>
                  <p className="text-[#1F2937] font-semibold text-sm leading-tight">{h.label}</p>
                  <p className="text-[#4B6043] text-xs mt-0.5">{h.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT THE VENTURE ── */}
      <section className="py-14 md:py-20 bg-[#F8F7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <AnimatedSection>
              <SectionBadge label="About Sreevari Nagar" />
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1F2937] leading-tight mb-5 text-balance">
                A Premier Residential Layout in{' '}
                <span className="text-[#0865A5]">Andhra Pradesh&apos;s Capital Region</span>
              </h2>
              <p className="text-[#4B5563] leading-relaxed mb-5 text-base">
                Sreevari Nagar is a strategically located CRDA-approved residential layout in Sagguru Village, Agiripalli Mandal, Krishna District. Situated at the junction of Amaravati, Gannavaram, Veeraapeni Gudem, and Mallavalli — this is the most promising growth corridor of the new Andhra Pradesh capital region.
              </p>
              <p className="text-[#4B5563] leading-relaxed mb-6 text-base">
                With the site positioned just 50 metres from the 150-metre Outer Ring Road and within minutes of the Gannavaram International Airport, Sreevari Nagar offers unmatched infrastructure proximity at an entry price far below market rates.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:+919876543210"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#DF2638] hover:bg-[#C01E2E] text-white font-semibold rounded-full transition-colors shadow-md text-sm"
                >
                  <Phone size={15} />
                  Book a Plot Now
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                <Image
                  src="/images/sreevari-plots.png"
                  alt="Sreevari Nagar plot layout with wide roads"
                  fill
                  className="object-cover"
                  crossOrigin="anonymous"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#082F49]/80 to-transparent p-5">
                  <p className="text-white font-semibold text-sm">CRDA Approved Site Layout</p>
                  <p className="text-white/70 text-xs">RS Nos: 124/1(P), 2 — Sagguru Village</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── SITE LAYOUT IMAGES ── */}
      <section className="py-14 md:py-20 bg-[#F1F7ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <SectionBadge label="Site Layout" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1F2937] text-balance">
              Official Layout Plan &amp; Route Map
            </h2>
            <p className="mt-3 text-[#4B5563] max-w-2xl mx-auto text-sm md:text-base">
              CRDA approved site plan for Sagguru Village, Agiripalli Mandal, Krishna District — LP No: 120/2015, RS No: 124/1(P), 2
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            <AnimatedSection>
              <div className="rounded-2xl overflow-hidden shadow-xl border border-[#D9E8D0] bg-white">
                <div className="bg-[#082F49] px-5 py-3 flex items-center gap-2">
                  <MapPin size={16} className="text-[#90CAF9]" />
                  <span className="text-white font-semibold text-sm">Route Map — Sagguru, Near Gannavaram</span>
                </div>
                <div className="relative aspect-[4/3]">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-15%20at%2009.00.40-mAlMRXSol9m7vK7IQ0xOg22FXTWiuf.jpeg"
                    alt="Sreevari Nagar Route Map showing NH16, Gannavaram Airport, Vijayawada corridor"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="px-5 py-4 bg-[#F8F7F2]">
                  <p className="text-[#1F2937] text-xs font-medium">Shows NH-16 corridor, Gannavaram Airport access, Vijayawada–Vishakhapatnam route, and the site&apos;s strategic position.</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="rounded-2xl overflow-hidden shadow-xl border border-[#D9E8D0] bg-white">
                <div className="bg-[#082F49] px-5 py-3 flex items-center gap-2">
                  <Layers size={16} className="text-[#90CAF9]" />
                  <span className="text-white font-semibold text-sm">Site Layout Plan — CRDA LP No: 120/2015</span>
                </div>
                <div className="relative aspect-[4/3]">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-15%20at%2009.00.40%20%281%29-NwoohIbimttNg0xv8nqcDtvp8TYiNN.jpeg"
                    alt="Sreevari Nagar detailed site layout with numbered plots and 40ft wide roads"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="px-5 py-4 bg-[#F8F7F2]">
                  <p className="text-[#1F2937] text-xs font-medium">Detailed layout showing numbered plots, 40ft proposed wide roads, panchayath road, open spaces, and site dimensions.</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── INFRASTRUCTURE ── */}
      <section className="py-14 md:py-20 bg-[#F8F7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <SectionBadge label="Infrastructure Specifications" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1F2937] text-balance">
              World-Class Amenities &amp; Infrastructure
            </h2>
            <p className="mt-3 text-[#4B5563] max-w-xl mx-auto text-sm md:text-base">
              Every detail engineered for comfortable living and long-term investment value.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {infrastructure.map((item, i) => (
              <motion.div
                key={item.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={fadeUp}
                className="bg-white rounded-2xl p-5 border border-[#D9E8D0] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-10 h-10 bg-[#E8F4FF] rounded-xl flex items-center justify-center mb-4">
                  <item.icon size={20} className="text-[#0865A5]" />
                </div>
                <h3 className="font-semibold text-[#1F2937] text-sm mb-2 leading-tight">{item.label}</h3>
                <p className="text-[#4B5563] text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}

            {/* Highlight card */}
            <motion.div
              custom={infrastructure.length}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeUp}
              className="bg-[#082F49] rounded-2xl p-5 text-white flex flex-col justify-between"
            >
              <div>
                <CheckCircle2 size={28} className="text-[#69AE38] mb-3" />
                <h3 className="font-semibold text-base mb-2">100% Clear Title</h3>
                <p className="text-white/70 text-xs leading-relaxed">
                  All plots come with legally verified clear titles — no disputes, no risk.
                </p>
              </div>
              <span className="mt-4 inline-block px-3 py-1.5 bg-[#69AE38] text-white text-xs font-bold rounded-full">
                CRDA Certified
              </span>
            </motion.div>
          </div>

          {/* Infra image */}
          <AnimatedSection className="mt-10 rounded-3xl overflow-hidden shadow-xl relative aspect-video max-h-80">
            <Image
              src="/images/sreevari-infra.png"
              alt="Children play park and green infrastructure inside Sreevari Nagar layout"
              fill
              className="object-cover"
              crossOrigin="anonymous"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#082F49]/70 to-transparent flex items-center">
              <div className="p-8">
                <p className="text-white/80 text-xs uppercase tracking-widest mb-2">Lifestyle Amenity</p>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-white">Children&apos;s Play Park</h3>
                <p className="text-white/70 text-sm mt-1">Safe, green open spaces for families</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── ECONOMIC ENGINES / NEARBY ── */}
      <section className="py-14 md:py-20 bg-[#082F49]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-white/10 text-[#90CAF9] text-xs font-bold rounded-full tracking-widest uppercase mb-4 border border-white/20">
              Economic Engines
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white text-balance">
              Surrounded by Growth Corridors
            </h2>
            <p className="mt-3 text-white/70 max-w-xl mx-auto text-sm md:text-base">
              The infrastructure multiplier effect — industrial, IT, and logistics hubs driving permanent housing demand.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {nearbyInfra.map((cluster, ci) => (
              <motion.div
                key={cluster.heading}
                custom={ci}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={fadeUp}
                className="bg-white/8 rounded-2xl p-5 border border-white/10 hover:bg-white/12 transition-colors"
              >
                <div
                  className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 text-white"
                  style={{ backgroundColor: cluster.color }}
                >
                  {cluster.heading}
                </div>
                <ul className="space-y-2">
                  {cluster.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-white/80 text-xs leading-relaxed">
                      <ChevronRight size={12} className="text-[#69AE38] flex-shrink-0 mt-0.5" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Distances */}
          <AnimatedSection className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {distances.map((d) => (
              <div key={d.label} className="bg-white/10 rounded-2xl p-4 border border-white/10 flex items-center gap-3">
                <div className="w-9 h-9 bg-[#0865A5]/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <d.icon size={17} className="text-[#90CAF9]" />
                </div>
                <div>
                  <p className="text-white text-xs font-semibold leading-tight">{d.label}</p>
                  <p className="text-[#90CAF9] text-xs font-bold">{d.dist}</p>
                  <p className="text-white/50 text-xs">{d.time}</p>
                </div>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* ── ENVIRONMENTAL VALUE ── */}
      <section className="py-14 md:py-20 bg-[#F1F7ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <AnimatedSection className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image
                src="/images/sreevari-lake.png"
                alt="Brahmalingayya Cheruvu lake near Sreevari Nagar"
                fill
                className="object-cover"
                crossOrigin="anonymous"
              />
            </AnimatedSection>
            <AnimatedSection>
              <SectionBadge label="Environmental Value" />
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1F2937] mb-5 leading-tight text-balance">
                Hydrological Security &amp;{' '}
                <span className="text-[#69AE38]">Natural Wellness</span>
              </h2>
              <p className="text-[#4B5563] leading-relaxed mb-5 text-base">
                Sreevari Nagar is adjacent to the <strong className="text-[#1F2937]">Brahmalingayya Cheruvu</strong> — a scenic lake with approximately 10 TMC (Thousand Million Cubic Feet) water storage capacity. This natural reservoir ensures a stable micro-climate, pollution-free surroundings, and is a key driver of long-term property appreciation.
              </p>
              <div className="space-y-3">
                {[
                  { title: 'Brahmalingayya Cheruvu', sub: '~10 TMC water storage capacity' },
                  { title: 'Tempered Micro-Climate', sub: 'Natural atmosphere via water bodies' },
                  { title: 'Pollution-Free Surroundings', sub: 'Superior lifestyle integration' },
                  { title: 'Scenic Lake View', sub: 'Key appreciation driver for future value' },
                ].map((pt) => (
                  <div key={pt.title} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#69AE38] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[#1F2937] font-semibold text-sm">{pt.title}</p>
                      <p className="text-[#4B5563] text-xs">{pt.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── FINANCIAL ARBITRAGE ── */}
      <section className="py-14 md:py-20 bg-[#F8F7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <SectionBadge label="Financial Opportunity" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1F2937] text-balance">
              Entry Before the Price Surge
            </h2>
            <p className="mt-3 text-[#4B5563] max-w-xl mx-auto text-base">
              Capital appreciation occurs during the &ldquo;Window of Opportunity&rdquo; where infrastructure is confirmed but not fully priced in.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            {financials.map((f, i) => (
              <motion.div
                key={f.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={fadeUp}
                className={`rounded-2xl p-6 text-center border ${
                  f.highlight
                    ? 'bg-[#082F49] border-[#0865A5] shadow-xl'
                    : 'bg-white border-[#D9E8D0] shadow-sm'
                }`}
              >
                <p className={`text-xs font-semibold uppercase tracking-widest mb-2 ${f.highlight ? 'text-[#90CAF9]' : 'text-[#4B5563]'}`}>
                  {f.label}
                </p>
                <p className={`font-display text-4xl font-bold ${f.highlight ? 'text-[#69AE38]' : 'text-[#1F2937]'}`}>
                  {f.value}
                </p>
                <p className={`text-sm mt-1 ${f.highlight ? 'text-white/70' : 'text-[#4B5563]'}`}>{f.unit}</p>
              </motion.div>
            ))}
          </div>

          <AnimatedSection className="bg-[#E8F4FF] rounded-2xl border border-[#C3DFF5] p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
              <div className="w-12 h-12 bg-[#0865A5] rounded-xl flex items-center justify-center flex-shrink-0">
                <TrendingUp size={24} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-[#1F2937] text-lg mb-1">Investment Rationale — The Godavari Advantage</h3>
                <div className="grid sm:grid-cols-3 gap-4 mt-3">
                  {[
                    { label: 'Value Entry', desc: 'Acquisition at ₹14,000 vs ₹23,000 market rate — locked-in discount' },
                    { label: 'Infra Proximity', desc: '50m from ORR; minutes from International Airport' },
                    { label: 'Exit Liquidity', desc: 'Permanent high-velocity housing demand from IT & Industrial hubs' },
                  ].map((r) => (
                    <div key={r.label} className="flex items-start gap-2">
                      <CheckCircle2 size={15} className="text-[#0865A5] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[#1F2937] font-semibold text-sm">{r.label}</p>
                        <p className="text-[#4B5563] text-xs mt-0.5 leading-relaxed">{r.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── LEGAL & REGULATORY ── */}
      <section className="py-14 md:py-20 bg-[#082F49]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <AnimatedSection>
              <span className="inline-block px-4 py-1.5 bg-white/10 text-[#90CAF9] text-xs font-bold rounded-full tracking-widest uppercase mb-5 border border-white/20">
                Regulatory &amp; Legal Framework
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-5 leading-tight text-balance">
                Government-Approved Layout — Full Legal Clarity
              </h2>
              <p className="text-white/70 mb-6 text-base leading-relaxed">
                Government-approved layouts ensure asset liquidity and technical excellence. Every plot comes with complete documentation, verified titles, and transparent registration.
              </p>
              <div className="space-y-3">
                {legalDocs.map((doc) => (
                  <div key={doc} className="flex items-center gap-3">
                    <BadgeCheck size={17} className="text-[#69AE38] flex-shrink-0" />
                    <span className="text-white/85 text-sm">{doc}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image
                src="/images/sreevari-location.png"
                alt="Gannavaram Vijayawada growth corridor aerial view"
                fill
                className="object-cover"
                crossOrigin="anonymous"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#082F49]/70 to-transparent flex items-end p-6">
                <div>
                  <p className="text-white font-display font-bold text-xl">Gannavaram–Vijayawada Corridor</p>
                  <p className="text-white/70 text-sm mt-1">The fastest-appreciating real estate belt in Andhra Pradesh</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── CONTACT / CTA ── */}
      <section className="py-14 md:py-20 bg-[#F1F7ED]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <SectionBadge label="Limited Time Offer" />
            <h2 className="font-display text-3xl md:text-5xl font-bold text-[#1F2937] mb-4 text-balance">
              Hurry Up &amp; Secure Your Plot
            </h2>
            <p className="text-[#4B5563] text-base mb-3 max-w-2xl mx-auto leading-relaxed">
              Connect with our advisors to secure your future in the most active growth corridor of the Krishna District. Limited plots available at the current pre-surge entry price.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#DF2638]/10 border border-[#DF2638]/30 rounded-full mb-8">
              <TrendingUp size={14} className="text-[#DF2638]" />
              <span className="text-[#DF2638] font-semibold text-sm">~39% below regional market rate — limited window</span>
            </div>
          </AnimatedSection>

          <AnimatedSection className="bg-white rounded-3xl border border-[#D9E8D0] shadow-xl p-8 md:p-10">
            <div className="grid sm:grid-cols-3 gap-4 mb-8 text-left">
              {[
                { label: 'Offer Price', value: '₹14,000 / sq yd', icon: '₹' },
                { label: 'Layout Approval', value: 'APCRDA — LP 120/2015', icon: '✓' },
                { label: 'Location', value: 'Sagguru, Agiripalli Mandal', icon: '📍' },
              ].map((stat) => (
                <div key={stat.label} className="bg-[#F8F7F2] rounded-xl p-4 border border-[#D9E8D0]">
                  <p className="text-[#4B5563] text-xs uppercase tracking-wider mb-1">{stat.label}</p>
                  <p className="text-[#1F2937] font-semibold text-sm leading-tight">{stat.value}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919876543210"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-[#DF2638] hover:bg-[#C01E2E] text-white font-bold rounded-full transition-colors shadow-lg text-base"
              >
                <Phone size={18} />
                Call to Book Your Plot
              </a>
              <a
                href="mailto:sales@ggdpl.co.in"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-[#082F49] hover:bg-[#0A4A7F] text-white font-bold rounded-full transition-colors shadow-lg text-base"
              >
                sales@ggdpl.co.in
              </a>
            </div>

            <p className="text-[#4B5563] text-xs mt-6">
              Godavari Green Developers Pvt. Ltd. — {SREEVARI.addressLines.join(' ')}
            </p>
            <p className="text-[#4B5563] text-xs mt-1">www.ggdpl.co.in</p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── LOCATION MAP ── */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10">
            <SectionBadge label="Site Location" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1F2937] text-balance">
              Sreevari Nagar, Sagguru — Find Us on the Map
            </h2>
          </AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Venture address */}
            <AnimatedSection>
              <div className="bg-[#F8F7F2] border border-[#D9E8D0] rounded-2xl p-5">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-[#E8F4FF] rounded-xl flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-[#0865A5]" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-[#1F2937] text-sm mb-1">{SREEVARI.name}</p>
                    <p className="text-[#4B5563] text-sm leading-relaxed">
                      {SREEVARI.addressLines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </p>
                    <a
                      href={SREEVARI.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-3 text-sm text-[#0865A5] font-semibold hover:underline"
                    >
                      Open in Google Maps
                      <ChevronRight size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Embedded map */}
            <AnimatedSection className="rounded-2xl overflow-hidden border border-[#D9E8D0] shadow-lg aspect-[4/3] sm:aspect-video w-full">
              <iframe
                src={embedUrl(SREEVARI, 17)}
                width="100%"
                height="100%"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${SREEVARI.name} location map`}
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

    </div>
  )
}
