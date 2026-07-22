'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { MapPin, Mail, Globe, ArrowUp } from 'lucide-react'
import { useSectionNav } from '@/lib/useSectionNav'
import { LOCATIONS } from '@/lib/locations'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Features', href: '#features' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Location', href: '#location' },
  { label: 'Enquire Now', href: '#enquiry' },
]

const markets = ['Amaravati', 'Vijayawada', 'Visakhapatnam', 'Rajahmundry', 'Tirupathi']

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  const handleNav = useSectionNav()

  return (
    <footer className="bg-[#082F49] text-white">
      {/* CTA Banner */}
      <div className="bg-[#0865A5] py-8 md:py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#90CAF9] text-sm uppercase tracking-widest font-sans mb-2">Limited Plots Available</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
              Secure Your Farm Plot Today —
              <br />
              <span className="text-[#C3DFF5]">Your Paradise Awaits</span>
            </h2>
            <p className="text-white/80 mb-7 font-sans">
              Starting at just ₹5 Lakhs upfront. Flexible EMI options available.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => handleNav('#enquiry')}
                className="w-full sm:w-auto px-8 py-3.5 bg-white text-[#0865A5] font-bold rounded-full hover:bg-[#E8F4FF] transition-colors text-sm font-sans"
              >
                Book a Site Visit
              </button>
              <button
                onClick={() => handleNav('#pricing')}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#DF2638] hover:bg-[#C01E2E] text-white font-bold rounded-full transition-colors text-sm font-sans border border-transparent"
              >
                View Plot Pricing
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-08_113337-removebg-preview-gTDhVzLCt59YtJwCUVCf8oGgfHKIzq.png"
                alt="GGDPL Godavari Green Developers Logo"
                width={140}
                height={56}
                className="mb-4 brightness-0 invert"
              />
              <p className="text-white/60 text-sm leading-relaxed font-sans mb-5">
                Godavari Green Developers Private Limited — Bridging visionary land development with secure investment across Andhra Pradesh.
              </p>
              <div className="flex items-center gap-2 text-[#90CAF9] text-sm font-semibold font-sans">
                <span className="w-2 h-2 rounded-full bg-[#69AE38]" />
                &quot;Your Plot – Your Paradise&quot;
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display text-base font-bold text-white mb-5">Quick Links</h4>
              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleNav(link.href)}
                      className="text-white/60 hover:text-[#90CAF9] text-sm transition-colors font-sans cursor-pointer"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Markets */}
            <div>
              <h4 className="font-display text-base font-bold text-white mb-5">Our Markets</h4>
              <ul className="space-y-2.5">
                {markets.map((m) => (
                  <li key={m} className="flex items-center gap-2">
                    <MapPin size={12} className="text-[#69AE38] flex-shrink-0" />
                    <span className="text-white/60 text-sm font-sans">{m}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-display text-base font-bold text-white mb-5">Contact Us</h4>
              <div className="space-y-4">
                {LOCATIONS.map((loc) => (
                  <a
                    key={loc.key}
                    href={loc.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 group"
                  >
                    <MapPin size={14} className="text-[#69AE38] mt-1 shrink-0" />
                    <div>
                      <p className="text-white text-sm font-semibold font-sans group-hover:text-[#90CAF9] transition-colors">
                        {loc.name}
                      </p>
                      {loc.addressLines.map((line) => (
                        <p key={line} className="text-white/60 text-sm font-sans">
                          {line}
                        </p>
                      ))}
                    </div>
                  </a>
                ))}
                <a href="mailto:godavarigreendevelopers@gmail.com" className="flex items-center gap-3 group">
                  <Mail size={14} className="text-[#69AE38] flex-shrink-0" />
                  <span className="text-white/60 group-hover:text-[#90CAF9] text-sm transition-colors font-sans break-all">
                    godavarigreendevelopers@gmail.com
                  </span>
                </a>
                <a href="mailto:sales@ggdpl.co.in" className="flex items-center gap-3 group">
                  <Mail size={14} className="text-[#69AE38] flex-shrink-0" />
                  <span className="text-white/60 group-hover:text-[#90CAF9] text-sm transition-colors font-sans">
                    sales@ggdpl.co.in
                  </span>
                </a>
                <a href="https://www.ggdpl.co.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                  <Globe size={14} className="text-[#69AE38] flex-shrink-0" />
                  <span className="text-white/60 group-hover:text-[#90CAF9] text-sm transition-colors font-sans">
                    www.ggdpl.co.in
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs font-sans text-center sm:text-left">
            © {new Date().getFullYear()} Godavari Green Developers Private Limited. All rights reserved. | VMRDA | DTCP | APCRDA Approved
          </p>
          <button
            onClick={scrollTop}
            className="w-9 h-9 rounded-full bg-[#0865A5] flex items-center justify-center hover:bg-[#065289] transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp size={16} className="text-white" />
          </button>
        </div>
      </div>
    </footer>
  )
}
