'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { VIGHNESH, embedUrl } from '@/lib/locations'
import {
  MapPin,
  CheckCircle2,
  BadgeCheck,
  TrendingUp,
  Phone,
  Leaf,
  Shield,
  Home,
  Trees,
  Droplets,
  Sun,
  Users,
  BookOpen,
  CreditCard,
  Mail,
  ChevronRight,
} from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' as const },
  }),
}

function SectionBadge({ label }: { label: string }) {
  return (
    <span className="inline-block px-4 py-1.5 bg-[#F0F9E8] text-[#4B7A1E] text-xs font-bold rounded-full tracking-widest uppercase mb-4 border border-[#B8E090]">
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

const highlights = [
  { icon: Leaf, label: '8.5 Acres', sub: 'Prime Managed Farmland', color: '#69AE38' },
  { icon: BadgeCheck, label: 'Clear Title', sub: 'Pattadhar Passbook Issued', color: '#0865A5' },
  { icon: Home, label: 'Free Resort Membership', sub: 'For all plot owners', color: '#69AE38' },
  { icon: TrendingUp, label: '₹6,666 / sq yd', sub: '250 / 500 / 1000 sq yd plots', color: '#DF2638' },
]

const keyFeatures = [
  { icon: Shield, label: '24ft Wide BT Roads', desc: '24-foot wide black-top main roads and 20-foot wide side roads throughout the complex.' },
  { icon: Home, label: 'Security Wall', desc: 'A perimeter security wall surrounds the entire 8.5-acre complex for safety and privacy.' },
  { icon: Users, label: 'Modern Resort', desc: 'Full resort with AC rooms, meeting hall, and a coffee shop — free membership for all plot owners.' },
  { icon: Sun, label: "Children's Play Area", desc: 'Dedicated children\'s play area with water fountains and landscaped green spaces.' },
  { icon: Droplets, label: 'Drip Irrigation', desc: 'Drip irrigation system installed across all plots, plus solar lighting throughout the venture.' },
  { icon: Trees, label: 'Fruit Tree Plantation', desc: 'Each plot comes with fruit trees — mango, sapota, jaama, danimma (pomegranate), and papaya.' },
]

const plotSizes = [
  { size: '250 sq yard', price: '₹16.66 Lakhs', perSqYd: '₹6,666', upfront: '₹5 Lakhs', emi: '6 monthly installments', notes: 'Fruit trees included' },
  { size: '500 sq yard', price: '₹33.33 Lakhs', perSqYd: '₹6,666', upfront: 'On enquiry', emi: 'Flexible plan', notes: 'Pattadhar Passbook issued' },
  { size: '1000 sq yard', price: '₹66.66 Lakhs', perSqYd: '₹6,666', upfront: 'On enquiry', emi: 'Flexible plan', notes: 'Pattadhar Passbook issued' },
]

const terms = [
  'First 2 years: No annual maintenance charges (AMC)',
  'Nominal AMC applicable thereafter',
  'ReSale support provided to all plot owners',
  'Bi-annual venture progress reports issued',
  'Registration after full payment is made',
  'Pattadhar Passbook issued for 500 sq yards and above',
]

const facilities = [
  { icon: Home, label: 'Free Resort Membership', desc: 'AC rooms, meeting hall & coffee shop access' },
  { icon: BookOpen, label: 'Pattadhar Passbook', desc: 'Issued to owners with 500 sq yards and above' },
  { icon: TrendingUp, label: 'ReSale Support', desc: 'Dedicated team to assist with future resale' },
  { icon: Users, label: 'Bi-Annual Reports', desc: 'Progress reports sent every 6 months' },
]

export default function SriVighneshPage() {
  return (
    <div className="bg-[#F8F7F2] font-sans">
      {/* ── HERO ── */}
      <section className="relative w-full h-[65vh] min-h-[420px] flex items-end overflow-hidden">
        <Image
          src="/images/vighnesh-hero.png"
          alt="Sri Vighnesh Gardens Farmland Venture Rajahmundry"
          fill
          className="object-cover"
          priority
          crossOrigin="anonymous"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D3B1A] via-[#0D3B1A]/55 to-transparent" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#69AE38]/90 text-white text-xs font-bold rounded-full mb-4 tracking-wider uppercase">
              <Leaf size={12} />
              Managed Farmland Venture — Rajahmundry
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-3 text-balance">
              Sri Vighnesh
              <br />
              <span className="text-[#A5D56A]">Gardens</span>
            </h1>
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <MapPin size={14} className="text-[#A5D56A]" />
              <span>Raghavapuram Village, Korukonda Mandal, Rajahmundry, Andhra Pradesh</span>
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

      {/* ── ABOUT ── */}
      <section className="py-14 md:py-20 bg-[#F8F7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <AnimatedSection>
              <SectionBadge label="About the Venture" />
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1F2937] leading-tight mb-5 text-balance">
                Your Weekend Retreat,{' '}
                <span className="text-[#69AE38]">A Growing Legacy</span>
              </h2>
              <p className="text-[#4B5563] leading-relaxed mb-4 text-base">
                Sri Vighnesh Gardens is a premier 8.5-acre managed farmland venture by Godavari Green Developers Private Limited, located at Raghavapuram Village, Korukonda Mandal, Rajahmundry, Andhra Pradesh.
              </p>
              <p className="text-[#4B5563] leading-relaxed mb-6 text-base">
                Every plot owner enjoys free resort membership with AC rooms, a meeting hall, and a coffee shop. The venture combines the joy of farmland ownership with the convenience of fully managed infrastructure — fruit trees, drip irrigation, solar lighting, and a security wall are all included.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:+919876543210"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#69AE38] hover:bg-[#568D2C] text-white font-semibold rounded-full transition-colors shadow-md text-sm"
                >
                  <Phone size={15} />
                  Book a Plot Now
                </a>
                <a
                  href="mailto:godavarigreendevelopers@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#F0F9E8] hover:bg-[#D8F0BE] text-[#4B7A1E] font-semibold rounded-full transition-colors text-sm border border-[#B8E090]"
                >
                  <Mail size={15} />
                  Send Email
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                <Image
                  src="/images/vighnesh-plots.png"
                  alt="Sri Vighnesh Gardens Farm Plots with fruit trees"
                  fill
                  className="object-cover"
                  crossOrigin="anonymous"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex flex-wrap gap-2">
                    {['250 sq yd', '500 sq yd', '1000 sq yd'].map((s) => (
                      <span key={s} className="px-3 py-1 bg-white/90 text-[#1F2937] text-xs font-semibold rounded-full">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── KEY FEATURES ── */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <SectionBadge label="Key Features" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1F2937] text-balance">
              Everything Included in Your Plot
            </h2>
            <p className="text-[#4B5563] mt-3 max-w-2xl mx-auto text-base">
              Sri Vighnesh Gardens is a fully managed farmland — not just land. Every feature below is delivered as part of your investment.
            </p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {keyFeatures.map((f, i) => (
              <AnimatedSection key={f.label}>
                <motion.div
                  custom={i}
                  variants={fadeUp}
                  className="p-6 rounded-2xl bg-[#F8F7F2] border border-[#D9E8D0] h-full"
                >
                  <div className="w-11 h-11 bg-[#F0F9E8] rounded-xl flex items-center justify-center mb-4">
                    <f.icon size={22} className="text-[#69AE38]" />
                  </div>
                  <h3 className="font-semibold text-[#1F2937] text-base mb-2">{f.label}</h3>
                  <p className="text-[#6B7280] text-sm leading-relaxed">{f.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESORT AMENITIES IMAGE ── */}
      <section className="py-14 md:py-20 bg-[#F8F7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <AnimatedSection>
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                <Image
                  src="/images/vighnesh-resort.png"
                  alt="Sri Vighnesh Gardens Resort and Amenities"
                  fill
                  className="object-cover"
                  crossOrigin="anonymous"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <SectionBadge label="Exclusive Facilities" />
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1F2937] leading-tight mb-5 text-balance">
                Perks That Come With{' '}
                <span className="text-[#69AE38]">Every Plot</span>
              </h2>
              <div className="space-y-4">
                {facilities.map((f) => (
                  <div key={f.label} className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-[#F0F9E8] rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <f.icon size={17} className="text-[#69AE38]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#1F2937] text-sm">{f.label}</p>
                      <p className="text-[#6B7280] text-xs mt-0.5">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── PRICING TABLE ── */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <SectionBadge label="Rate Card" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1F2937] text-balance">
              Plot Sizes &amp; Pricing
            </h2>
            <p className="text-[#4B5563] mt-3 text-base">
              Invest in a farm plot starting from ₹16.66 Lakhs with a convenient installment plan.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            {plotSizes.map((p, i) => (
              <AnimatedSection key={p.size}>
                <div className={`rounded-2xl border p-6 h-full flex flex-col ${i === 0 ? 'border-[#69AE38] bg-[#F0F9E8] shadow-lg' : 'border-[#D9E8D0] bg-[#F8F7F2]'}`}>
                  {i === 0 && (
                    <span className="inline-block px-3 py-1 bg-[#69AE38] text-white text-xs font-bold rounded-full mb-4 self-start">
                      Most Popular
                    </span>
                  )}
                  <h3 className="font-display text-2xl font-bold text-[#1F2937] mb-1">{p.size}</h3>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-3xl font-bold text-[#69AE38]">{p.price}</span>
                  </div>
                  <p className="text-[#6B7280] text-sm mb-4">{p.perSqYd} per sq yard</p>
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-2 text-sm text-[#4B5563]">
                      <CreditCard size={14} className="text-[#69AE38] flex-shrink-0" />
                      <span>Upfront: <strong>{p.upfront}</strong></span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#4B5563]">
                      <ChevronRight size={14} className="text-[#69AE38] flex-shrink-0" />
                      <span>Balance: {p.emi}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#4B5563]">
                      <CheckCircle2 size={14} className="text-[#69AE38] flex-shrink-0" />
                      <span>{p.notes}</span>
                    </div>
                  </div>
                  <a
                    href="tel:+919876543210"
                    className={`mt-5 w-full text-center py-3 rounded-full font-semibold text-sm transition-colors ${
                      i === 0
                        ? 'bg-[#69AE38] hover:bg-[#568D2C] text-white'
                        : 'bg-white hover:bg-[#F0F9E8] text-[#69AE38] border border-[#B8E090]'
                    }`}
                  >
                    Enquire for This Plot
                  </a>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="mt-8 p-5 bg-[#FFF8E1] border border-[#FFE082] rounded-2xl">
            <p className="text-sm text-[#6B5E00] font-medium">
              <strong>Note:</strong> Registration is done after full payment. All prices are subject to availability. Contact us for latest availability and special early-bird offers.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── TERMS ── */}
      <section className="py-14 md:py-20 bg-[#F8F7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <AnimatedSection>
              <SectionBadge label="Terms &amp; Conditions" />
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1F2937] mb-6 text-balance">
                Transparent &amp; Investor-Friendly Terms
              </h2>
              <ul className="space-y-3">
                {terms.map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#69AE38] flex-shrink-0 mt-0.5" />
                    <span className="text-[#4B5563] text-sm leading-relaxed">{t}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            {/* ── LOCATION ── */}
            <AnimatedSection>
              <SectionBadge label="Location" />
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1F2937] mb-4 text-balance">
                Find Us at Raghavapuram
              </h2>
              <div className="bg-white rounded-2xl border border-[#D9E8D0] p-5 mb-5 shadow-sm">
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="text-[#69AE38] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#1F2937] text-sm">{VIGHNESH.name}</p>
                    <p className="text-[#4B5563] text-sm mt-1 leading-relaxed">
                      {VIGHNESH.addressLines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </p>
                    <a
                      href={VIGHNESH.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-3 text-sm text-[#69AE38] font-semibold hover:underline"
                    >
                      Open in Google Maps
                      <ChevronRight size={14} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden border border-[#D9E8D0] shadow-sm aspect-[4/3] sm:aspect-video">
                <iframe
                  src={embedUrl(VIGHNESH, 17)}
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${VIGHNESH.name} location map`}
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#1B4D0E] to-[#2E7D32]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 bg-white/20 text-white text-xs font-bold rounded-full tracking-widest uppercase mb-6 border border-white/30">
              Ready to Invest?
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 text-balance">
              Book Your Farm Plot at<br />Sri Vighnesh Gardens
            </h2>
            <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Starting at just ₹16.66 Lakhs for a 250 sq yard plot with fruit trees, drip irrigation, and free resort membership. Limited plots available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919876543210"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-[#F0F9E8] text-[#2E7D32] font-bold text-base rounded-full shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                <Phone size={18} />
                Call to Book Now
              </a>
              <a
                href="mailto:godavarigreendevelopers@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#69AE38] hover:bg-[#568D2C] text-white font-bold text-base rounded-full transition-all duration-300 border border-white/30"
              >
                <Mail size={18} />
                godavarigreendevelopers@gmail.com
              </a>
            </div>
            <p className="text-white/50 text-xs mt-6">
              GGDPL — Godavari Green Developers Private Limited &bull; Your Plot, Your Paradise
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── RELATED VENTURE ── */}
      <section className="py-8 bg-white border-t border-[#D9E8D0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center sm:justify-end">
          <Link
            href="/venture"
            className="inline-flex items-center gap-2 text-sm text-[#0865A5] font-semibold hover:underline"
          >
            Also see: Sreevari Nagar, Sagguru
            <ChevronRight size={14} />
          </Link>
        </div>
      </section>

    </div>
  )
}
