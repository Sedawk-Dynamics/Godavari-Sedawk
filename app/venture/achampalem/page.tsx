'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ACHAMPALEM, embedUrl } from '@/lib/locations'
import {
  MapPin,
  Route,
  Landmark,
  ShieldCheck,
  Building2,
  Coffee,
  Users,
  Waves,
  TreePine,
  Droplets,
  Zap,
  Apple,
  Trophy,
  Tent,
  Flower2,
  Home,
  Phone,
  ChevronRight,
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

// ─── Data (sources: The Ozes brochure, Allotment Guidelines, Achampalem site layout) ───

const distances = [
  { icon: Route, label: 'Narasaraopet', dist: '8 km' },
  { icon: Landmark, label: 'JNTUK University', dist: '1 km' },
  { icon: Building2, label: 'Kotappakonda', dist: '1 km' },
  { icon: Route, label: 'Chilakaluripet', dist: '18 km' },
]

const areaBreakdown = [
  { label: 'Residential plots (112 nos.)', value: '465.35' },
  { label: 'Internal roads', value: '203.25' },
  { label: 'Donka Road', value: '22.94' },
  { label: 'Amenities area (club house)', value: '29.20' },
  { label: 'Greenery area', value: '18.21' },
]

const highlights = [
  { icon: Route, label: 'Blacktop Internal Roads', desc: 'Main road 33 ft, side roads 30 ft.' },
  { icon: Landmark, label: 'Grand Entrance Arch', desc: 'A welcoming gateway to the venture.' },
  { icon: ShieldCheck, label: 'Strong Compound Wall', desc: 'Boundary wall around the venture.' },
  { icon: Building2, label: 'Modern Club House', desc: 'AC rooms and a meeting hall.' },
  { icon: Coffee, label: 'Coffee Shop', desc: 'On-site coffee shop for residents and visitors.' },
  { icon: Users, label: "Children's Play Area", desc: 'Play area for families.' },
  { icon: Waves, label: 'Water Fountains', desc: 'Decorative water fountains in common areas.' },
  { icon: TreePine, label: 'Landscaped Greenery', desc: 'Landscaped green spaces across the venture.' },
  { icon: Droplets, label: 'Drip Irrigation', desc: 'Drip irrigation facility for plots.' },
  { icon: Zap, label: 'Solar Lighting', desc: 'Solar-powered lighting.' },
  { icon: Apple, label: 'Fruit Trees in Each Plot', desc: 'Fruit trees planted in every plot.' },
  { icon: Trophy, label: 'Net Cricket & Pickle Ball Courts', desc: 'Sports courts for recreation.' },
  { icon: Tent, label: 'Huts & Gazebos', desc: 'Spaces for weekend leisure.' },
  { icon: Flower2, label: 'Gardens & Walking Paths', desc: 'Beautiful gardens and walking paths.' },
  { icon: Home, label: 'Ideal for Weekend Homes', desc: 'Designed for weekend home construction.' },
]

const bookingSteps = [
  { n: '1', title: 'Select Your Plot', desc: 'Choose your plot from the available layout.' },
  { n: '2', title: 'Pay Booking Amount', desc: 'Booking token and advance as per the allotment guidelines below.' },
  { n: '3', title: 'Agreement Payment', desc: '50% of the plot cost.' },
  { n: '4', title: 'Balance Payment', desc: 'Remaining plot cost as per the agreement.' },
  { n: '5', title: 'Registration', desc: 'After full payment. Spot registration available.' },
]

const guidelines = [
  {
    title: 'Plots 1 to 11 — Reserved',
    points: ['Reserved for future amenities and not available for sale.'],
  },
  {
    title: 'Corner Plots',
    points: [
      'Minimum 2 plots must be purchased together.',
      'Individual corner plots will not be allotted.',
    ],
  },
  {
    title: 'North East Corner Plot',
    points: [
      'Allotted only when a total of 4 plots are booked.',
      '50% advance payment is mandatory.',
      'Registration must be completed within 30 days of booking.',
    ],
  },
  {
    title: 'East Facing Plots',
    points: [
      'Booked with 25% advance payment only.',
      'Registration must be completed within 60 days of booking.',
    ],
  },
  {
    title: 'All Other Facing Plots',
    points: [
      'Booking token: ₹50,000.',
      'Advance payment of ₹2,00,000 within 7 days of token payment, in addition to the token.',
      'Total initial payment: ₹2,50,000.',
    ],
  },
]

// `reserved` marks plots the brochure reserves for amenities (plots 1–11).
const plotSchedule = [
  { plots: '1', size: `46'7" x 45'0"`, cents: '4.81', reserved: true },
  { plots: '2, 3, 4', size: `33'6" x 45'0"`, cents: '3.46', reserved: true },
  { plots: '5', size: `49'6" x 45'0"`, cents: '5.11', reserved: true },
  { plots: '6', size: `54'5" x 52'0"`, cents: '6.49', reserved: true },
  { plots: '7–10', size: `33'6" x 52'0"`, cents: '4.00', reserved: true },
  { plots: '11', size: `43'5" x 52'0"`, cents: '5.18', reserved: true },
  { plots: '12', size: `29'7" x 52'0"`, cents: '3.53', reserved: false },
  { plots: '19', size: `42'0" x 52'0"`, cents: '5.01', reserved: false },
  { plots: '20', size: `35'0" x 52'0"`, cents: '4.18', reserved: false },
  { plots: '28', size: `29'0" x 52'0"`, cents: '3.46', reserved: false },
  { plots: '29', size: `37'8" x 52'0"`, cents: '4.49', reserved: false },
  { plots: '38', size: `33'0" x 52'0"`, cents: '3.94', reserved: false },
  { plots: '39', size: `39'10" x 52'0"`, cents: '4.75', reserved: false },
  { plots: '48', size: `52'3" x 52'0"`, cents: '6.23', reserved: false },
  { plots: '49', size: `43'2" x 52'0"`, cents: '5.15', reserved: false },
  { plots: '59', size: `47'5" x 52'0"`, cents: '5.66', reserved: false },
  { plots: '60', size: `46'6" x 52'0"`, cents: '5.55', reserved: false },
  { plots: '71', size: `32'0" x 52'0"`, cents: '3.82', reserved: false },
  { plots: '72', size: `53'0" x 52'0"`, cents: '6.32', reserved: false },
  { plots: '84', size: `26'0" x 52'0"`, cents: '3.16', reserved: false },
  { plots: '85', size: `57'0" x 52'0"`, cents: '6.80', reserved: false },
  { plots: '97', size: `44'9" x 52'0"`, cents: '5.34', reserved: false },
  { plots: '98', size: `31'3" x 52'0"`, cents: '3.73', reserved: false },
  { plots: '112', size: `39'6" x 52'0"`, cents: '4.71', reserved: false },
  {
    plots: '13–18, 21–27, 30–37, 40–47, 50–58, 61–70, 73–83, 86–96, 99–111',
    size: `33'6" x 52'0"`,
    cents: '4.00',
    reserved: false,
  },
]

export default function AchampalemPage() {
  return (
    <div className="bg-[#F8F7F2] font-sans">
      {/* ── HERO ── */}
      <section className="relative w-full h-[65vh] min-h-[420px] flex items-end overflow-hidden">
        <Image
          src="/images/ozes-banner.png"
          alt="The Ozes Premium Farm Plots & Weekend Homes Venture, Achampalem"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#082F49] via-[#082F49]/60 to-transparent" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#69AE38]/90 text-white text-xs font-bold rounded-full mb-4 tracking-wider uppercase">
              <Home size={12} />
              Premium Farm Plots &amp; Weekend Homes
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-3 text-balance">
              The Ozes
              <br />
              <span className="text-[#69AE38]">Achampalem Venture</span>
            </h1>
            <p className="text-white/90 italic mb-3">Your Plot – Your Paradise.</p>
            <div className="flex items-start gap-2 text-white/80 text-sm">
              <MapPin size={14} className="text-[#90CAF9] mt-0.5 flex-shrink-0" />
              <span>Achampalem Village, Behind JNTUK University, Near Kotappakonda, Narasaraopet, Andhra Pradesh</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── DISTANCES STRIP ── */}
      <section className="bg-white border-b border-[#D9E8D0] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {distances.map((d, i) => (
              <motion.div
                key={d.label}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="flex items-center gap-3 p-3 rounded-xl bg-[#F8F7F2] border border-[#D9E8D0]"
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-[#0865A5]/10">
                  <d.icon size={20} className="text-[#0865A5]" />
                </div>
                <div>
                  <p className="text-[#0865A5] font-bold text-lg leading-tight">{d.dist}</p>
                  <p className="text-[#4B6043] text-xs mt-0.5">{d.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT + AREA BREAKDOWN ── */}
      <section className="py-14 md:py-20 bg-[#F8F7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <AnimatedSection>
              <SectionBadge label="About The Ozes" />
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1F2937] leading-tight mb-5 text-balance">
                Premium Farm Plots &amp;{' '}
                <span className="text-[#0865A5]">Weekend Homes</span>
              </h2>
              <p className="text-[#4B5563] leading-relaxed mb-5 text-base">
                The Ozes is a premium farm plots and weekend homes venture by Godavari Green Developers Private Limited at Achampalem Village, behind JNTUK University, near Kotappakonda and Narasaraopet.
              </p>
              <p className="text-[#4B5563] leading-relaxed mb-6 text-base">
                The 112-plot layout spans 736.95 cents, fronted by the existing 40ft Donka Road, with blacktop internal roads, a club house, gardens, sports courts and fruit trees in every plot.
              </p>
              <a
                href="tel:+919876543210"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#DF2638] hover:bg-[#C01E2E] text-white font-semibold rounded-full transition-colors shadow-md text-sm"
              >
                <Phone size={15} />
                Enquire About Plots
              </a>
            </AnimatedSection>

            <AnimatedSection>
              <div className="bg-white rounded-3xl border border-[#D9E8D0] shadow-xl p-6 md:p-8">
                <p className="text-xs font-bold uppercase tracking-widest text-[#4B5563] mb-4">Layout Area Breakdown (cents)</p>
                <div className="divide-y divide-[#D9E8D0]">
                  {areaBreakdown.map((row) => (
                    <div key={row.label} className="flex items-center justify-between py-3 text-sm">
                      <span className="text-[#1F2937]">{row.label}</span>
                      <span className="font-semibold text-[#1F2937]">{row.value}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-2 flex items-center justify-between rounded-xl bg-[#082F49] px-4 py-3 text-sm">
                  <span className="font-semibold text-white">Total layout area</span>
                  <span className="font-bold text-[#69AE38]">736.95</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── VENTURE HIGHLIGHTS ── */}
      <section className="py-14 md:py-20 bg-[#F1F7ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <SectionBadge label="Venture Highlights" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1F2937] text-balance">
              Everything Your Weekend Home Needs
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                custom={i % 4}
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
          </div>

          <AnimatedSection className="mt-10 grid md:grid-cols-2 gap-6">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#D9E8D0] bg-white">
              <Image
                src="/images/ozes-highlights.png"
                alt="The Ozes venture highlights brochure"
                width={1410}
                height={700}
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-3xl bg-[#082F49] p-6 md:p-8 text-white flex flex-col justify-center">
              <p className="text-[#90CAF9] text-xs font-bold uppercase tracking-widest mb-3">Weekend Home Model</p>
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">Build Your Dream Weekend Home</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Plots at The Ozes are designed for weekend homes, with club house amenities, huts and gazebos, gardens and walking paths around you.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── BOOKING PROCESS ── */}
      <section className="py-14 md:py-20 bg-[#F8F7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <SectionBadge label="Booking & Registration" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1F2937] text-balance">
              Five Simple Steps to Your Plot
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {bookingSteps.map((s, i) => (
              <motion.div
                key={s.n}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={fadeUp}
                className="bg-white rounded-2xl p-5 border border-[#D9E8D0]"
              >
                <div className="w-9 h-9 rounded-full bg-[#0865A5] text-white font-bold flex items-center justify-center mb-4">
                  {s.n}
                </div>
                <h3 className="font-semibold text-[#1F2937] text-sm mb-2">{s.title}</h3>
                <p className="text-[#4B5563] text-xs leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ALLOTMENT GUIDELINES ── */}
      <section className="py-14 md:py-20 bg-[#082F49]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-white/10 text-[#90CAF9] text-xs font-bold rounded-full tracking-widest uppercase mb-4 border border-white/20">
              Plot Booking &amp; Allotment Guidelines
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white text-balance">
              Know Before You Book
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {guidelines.map((g, i) => (
              <motion.div
                key={g.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={fadeUp}
                className="bg-white/8 rounded-2xl p-5 border border-white/10"
              >
                <h3 className="text-white font-semibold mb-3">{g.title}</h3>
                <ul className="space-y-2">
                  {g.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-white/80 text-xs leading-relaxed">
                      <ChevronRight size={12} className="text-[#69AE38] flex-shrink-0 mt-0.5" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <AnimatedSection className="mt-8 text-center">
            <p className="text-white/60 text-xs max-w-2xl mx-auto leading-relaxed">
              All bookings and allotments are subject to plot availability, applicable payment conditions, title verification, execution of required documentation and other terms and conditions of the company.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── PLOT SCHEDULE ── */}
      <section className="py-14 md:py-20 bg-[#F1F7ED]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10">
            <SectionBadge label="Plot Schedule" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1F2937] text-balance">
              Plot Sizes &amp; Areas
            </h2>
            <p className="mt-3 text-[#4B5563] max-w-2xl mx-auto text-sm md:text-base">
              All 112 plots as per the final site layout. Sizes are width x depth in feet and inches. Plots 1 to 11 are reserved for amenities and not for sale.
            </p>
          </AnimatedSection>

          <AnimatedSection className="overflow-x-auto rounded-2xl border border-[#D9E8D0] bg-white shadow-lg">
            <table className="w-full text-sm">
              <thead className="bg-[#082F49] text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Plot No.</th>
                  <th className="px-4 py-3 text-left font-semibold">Plot Size</th>
                  <th className="px-4 py-3 text-right font-semibold">Area (cents)</th>
                </tr>
              </thead>
              <tbody>
                {plotSchedule.map((row, i) => (
                  <tr key={row.plots} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F8F7F2]'}>
                    <td className="px-4 py-3 align-top text-[#1F2937]">
                      {row.plots}
                      {row.reserved && (
                        <span className="ml-2 inline-block px-2 py-0.5 rounded-full bg-[#DF2638]/10 text-[#DF2638] text-[10px] font-bold uppercase tracking-wide">
                          Amenities — not for sale
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-[#4B5563] whitespace-nowrap">{row.size}</td>
                    <td className="px-4 py-3 text-right font-semibold text-[#1F2937]">{row.cents}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CONTACT / CTA ── */}
      <section className="py-14 md:py-20 bg-[#082F49]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 bg-white/10 text-[#90CAF9] text-xs font-bold rounded-full tracking-widest uppercase mb-5 border border-white/20">
              Enquire Now
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
              Book Your Plot at The Ozes
            </h2>
            <p className="text-white/70 text-base mb-8 max-w-2xl mx-auto leading-relaxed">
              Talk to our team about plot availability, booking and the next steps at Achampalem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919876543210"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-[#DF2638] hover:bg-[#C01E2E] text-white font-bold rounded-full transition-colors shadow-lg text-base"
              >
                <Phone size={18} />
                Call to Enquire
              </a>
              <a
                href="mailto:cmd@ggdpl.co.in"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-full transition-colors shadow-lg text-base"
              >
                cmd@ggdpl.co.in
              </a>
            </div>
            <p className="text-white/50 text-xs mt-6">
              Godavari Green Developers Pvt. Ltd. — {ACHAMPALEM.addressLines.join(' ')}
            </p>
            <p className="text-white/50 text-xs mt-1">www.ggdpl.co.in</p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── LOCATION MAP ── */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10">
            <SectionBadge label="Site Location" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1F2937] text-balance">
              The Ozes, Achampalem — Find Us on the Map
            </h2>
          </AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <AnimatedSection>
              <div className="bg-[#F8F7F2] border border-[#D9E8D0] rounded-2xl p-5">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-[#E8F4FF] rounded-xl flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-[#0865A5]" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-[#1F2937] text-sm mb-1">{ACHAMPALEM.name}</p>
                    <p className="text-[#4B5563] text-sm leading-relaxed">
                      {ACHAMPALEM.addressLines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </p>
                    <a
                      href={ACHAMPALEM.mapsUrl}
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

            <AnimatedSection className="rounded-2xl overflow-hidden border border-[#D9E8D0] shadow-lg aspect-[4/3] sm:aspect-video w-full">
              <iframe
                src={embedUrl(ACHAMPALEM, 17)}
                width="100%"
                height="100%"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${ACHAMPALEM.name} location map`}
              />
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  )
}
