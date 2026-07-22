'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check, Zap, Star } from 'lucide-react'

const plots = [
  {
    size: '250',
    unit: 'Sq Yards',
    price: '16.66',
    priceUnit: 'Lakhs',
    ratePerSqYd: '6,666',
    upfront: '5 Lakhs',
    emi: '6 Monthly Installments',
    features: [
      'Mango, Sapota, Guava, Pomegranate & Papaya trees',
      'Drip irrigation system',
      'Solar lighting',
      'Free resort membership',
      '2-year AMC waiver',
      'Resale support',
    ],
    highlight: false,
    badge: '',
  },
  {
    size: '500',
    unit: 'Sq Yards',
    price: '33.33',
    priceUnit: 'Lakhs',
    ratePerSqYd: '6,666',
    upfront: '10 Lakhs',
    emi: '6 Monthly Installments',
    features: [
      'All 250 Sq Yd benefits',
      'Pattadhar PassBook issued',
      'Double fruit tree count',
      'Priority registration',
      'Dedicated site visits',
      'Bi-annual farm reports',
    ],
    highlight: true,
    badge: 'Most Popular',
  },
  {
    size: '1000',
    unit: 'Sq Yards',
    price: '66.66',
    priceUnit: 'Lakhs',
    ratePerSqYd: '6,666',
    upfront: '20 Lakhs',
    emi: '6 Monthly Installments',
    features: [
      'All 500 Sq Yd benefits',
      'Premium corner plot options',
      'Full orchard management',
      'Personal farm manager',
      'Custom plantation choice',
      'VIP resort membership',
    ],
    highlight: false,
    badge: 'Best Value',
  },
]

export default function PricingSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="pricing" ref={ref} className="py-12 md:py-20 lg:py-24 bg-[#F1F7ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-[#EEF8E3] text-[#3A6B1A] text-sm font-semibold rounded-full tracking-wider uppercase mb-4 font-sans border border-[#C5E3A0]">
            Plot Pricing
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#1F2937] text-balance">
            Invest in Your Paradise —
            <br />
            <span className="text-[#0865A5]">From ₹6,666 / Sq Yd</span>
          </h2>
          <p className="mt-4 text-[#4B6043] max-w-2xl mx-auto text-lg font-sans">
            Flexible plot sizes with easy EMI options. Secure your farm plot with just ₹5 Lakhs upfront.
          </p>

          {/* Rate highlight */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="mt-6 inline-flex items-center gap-3 bg-[#FEF3C7] border border-[#FDE68A] rounded-2xl px-6 py-3"
          >
            <Zap size={18} className="text-[#D97706]" />
            <span className="font-sans text-sm font-semibold text-[#78350F]">
              Registration done after full payment — Clear Title Guaranteed
            </span>
          </motion.div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plots.map((plot, i) => (
            <motion.div
              key={plot.size}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`relative rounded-3xl border overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                plot.highlight
                  ? 'border-[#0865A5] shadow-xl shadow-[#0865A5]/20 bg-[#082F49]'
                  : 'border-[#D9E8D0] bg-white shadow-md'
              }`}
            >
              {/* Badge */}
              {plot.badge && (
                <div className={`px-4 py-1.5 text-center text-xs font-bold uppercase tracking-widest font-sans ${
                  plot.highlight
                    ? 'bg-[#0865A5] text-white'
                    : 'bg-[#FEF3C7] text-[#D97706]'
                }`}>
                  {plot.badge}
                  {plot.highlight && <Star size={10} className="inline ml-1 fill-white text-white" />}
                </div>
              )}

              <div className="p-7">
                {/* Size */}
                <div className="mb-5">
                  <p className={`text-sm font-semibold uppercase tracking-wider mb-1 font-sans ${
                    plot.highlight ? 'text-[#90CAF9]' : 'text-[#4B6043]'
                  }`}>Plot Size</p>
                  <div className="flex items-baseline gap-2">
                    <span className={`font-display text-4xl sm:text-5xl font-bold ${
                      plot.highlight ? 'text-white' : 'text-[#1F2937]'
                    }`}>{plot.size}</span>
                    <span className={`text-lg font-medium font-sans ${
                      plot.highlight ? 'text-[#90CAF9]' : 'text-[#4B6043]'
                    }`}>{plot.unit}</span>
                  </div>
                </div>

                {/* Price */}
                <div className={`rounded-2xl p-4 mb-5 ${
                  plot.highlight ? 'bg-[#0865A5]/30' : 'bg-[#F1F7ED]'
                }`}>
                  <p className={`text-xs font-semibold uppercase tracking-wider mb-1 font-sans ${
                    plot.highlight ? 'text-[#90CAF9]' : 'text-[#4B6043]'
                  }`}>Total Investment</p>
                  <div className="flex items-baseline gap-1">
                    <span className={`font-display text-3xl font-bold ${
                      plot.highlight ? 'text-white' : 'text-[#1F2937]'
                    }`}>₹{plot.price}</span>
                    <span className={`font-medium font-sans ${
                      plot.highlight ? 'text-[#90CAF9]' : 'text-[#4B6043]'
                    }`}>{plot.priceUnit}</span>
                  </div>
                  <p className={`text-xs mt-1 font-sans ${
                    plot.highlight ? 'text-[#90CAF9]/70' : 'text-[#4B6043]'
                  }`}>@ ₹{plot.ratePerSqYd}/sq yd</p>
                </div>

                {/* Payment Plan */}
                <div className={`rounded-xl p-3 mb-5 border ${
                  plot.highlight
                    ? 'border-[#0865A5]/50 bg-[#0865A5]/10'
                    : 'border-[#D9E8D0] bg-[#EEF8E3]/50'
                }`}>
                  <p className={`text-xs font-semibold mb-1 font-sans ${
                    plot.highlight ? 'text-[#90CAF9]' : 'text-[#3A6B1A]'
                  }`}>Payment Plan</p>
                  <p className={`text-sm font-sans ${
                    plot.highlight ? 'text-white/80' : 'text-[#1F2937]'
                  }`}>
                    <strong>Upfront:</strong> ₹{plot.upfront}
                  </p>
                  <p className={`text-sm font-sans ${
                    plot.highlight ? 'text-white/80' : 'text-[#1F2937]'
                  }`}>
                    <strong>Balance:</strong> {plot.emi}
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {plot.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check size={15} className={`mt-0.5 flex-shrink-0 ${
                        plot.highlight ? 'text-[#90CAF9]' : 'text-[#69AE38]'
                      }`} />
                      <span className={`text-sm font-sans ${
                        plot.highlight ? 'text-white/80' : 'text-[#4B6043]'
                      }`}>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  onClick={() => document.querySelector('#enquiry')?.scrollIntoView({ behavior: 'smooth' })}
                  className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all duration-200 font-sans ${
                    plot.highlight
                      ? 'bg-[#0865A5] hover:bg-[#065289] text-white shadow-lg'
                      : 'bg-[#1F2937] hover:bg-[#111827] text-white'
                  }`}
                >
                  Book {plot.size} Sq Yd Plot
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center text-[#4B6043] text-xs mt-8 font-sans"
        >
          Prices are subject to change. Contact us for the latest rates and availability.
          Registration will be done after full payment. For details: godavarigreendevelopers@gmail.com
        </motion.p>
      </div>
    </section>
  )
}
