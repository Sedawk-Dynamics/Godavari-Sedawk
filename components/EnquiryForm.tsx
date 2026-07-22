'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { Send, Phone, Mail, CheckCircle2, Loader2 } from 'lucide-react'

type FormState = {
  name: string
  phone: string
  email: string
  plotSize: string
  message: string
}

const initialForm: FormState = {
  name: '',
  phone: '',
  email: '',
  plotSize: '',
  message: '',
}

export default function EnquiryForm() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState<FormState>(initialForm)
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<FormState>>({})

  const validate = () => {
    const e: Partial<FormState> = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.phone.trim() || !/^\d{10}$/.test(form.phone.trim())) e.phone = 'Valid 10-digit phone required'
    if (form.email && !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required'
    if (!form.plotSize) e.plotSize = 'Please select a plot size'
    return e
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setErrors({})
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1500))
    setLoading(false)
    setSubmitted(true)
    setForm(initialForm)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    setErrors((prev) => ({ ...prev, [e.target.name]: '' }))
  }

  const inputCls = (field: keyof FormState) =>
    `w-full px-4 py-3 rounded-xl border font-sans text-sm bg-white text-[#1F2937] placeholder:text-[#9BB89A] focus:outline-none focus:ring-2 transition-all duration-200 ${
      errors[field]
        ? 'border-[#DF2638] focus:ring-[#DF2638]/30'
        : 'border-[#D9E8D0] focus:ring-[#0865A5]/30 focus:border-[#0865A5]'
    }`

  return (
    <section id="enquiry" ref={ref} className="py-12 md:py-20 lg:py-24 bg-[#F1F7ED] relative overflow-hidden">
      {/* Parallax bg */}
      <div
        className="absolute inset-0 parallax-section opacity-5 z-0"
        style={{ backgroundImage: "url('/images/gallery-5.png')" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 bg-[#EEF8E3] text-[#3A6B1A] text-sm font-semibold rounded-full tracking-wider uppercase mb-4 font-sans border border-[#C5E3A0]">
            Get in Touch
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#1F2937] text-balance">
            Start Your Investment Journey
          </h2>
          <p className="mt-4 text-[#4B6043] max-w-xl mx-auto font-sans text-lg">
            Connect with our advisors to secure your paradise plot at Sri Vighnesh Gardens.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Left — Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2"
          >
            {/* Brand card */}
            <div className="bg-[#082F49] rounded-3xl p-8 mb-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-08_113337-removebg-preview-gTDhVzLCt59YtJwCUVCf8oGgfHKIzq.png"
                alt="GGDPL Logo"
                width={160}
                height={64}
                className="mb-5 brightness-0 invert"
              />
              <h3 className="font-display text-xl font-bold text-white mb-2">
                Godavari Green Developers
              </h3>
              <p className="text-[#90CAF9]/80 text-sm font-sans leading-relaxed mb-6">
                Bridging the gap between visionary land development and secure investment across Andhra Pradesh.
              </p>
              <div className="space-y-3">
                <a href="mailto:godavarigreendevelopers@gmail.com" className="flex items-center gap-3 group">
                  <div className="w-9 h-9 rounded-xl bg-[#0865A5]/30 flex items-center justify-center">
                    <Mail size={15} className="text-[#90CAF9]" />
                  </div>
                  <span className="text-white/70 text-sm font-sans group-hover:text-white transition-colors">
                    godavarigreendevelopers@gmail.com
                  </span>
                </a>
                <a href="mailto:sales@ggdpl.co.in" className="flex items-center gap-3 group">
                  <div className="w-9 h-9 rounded-xl bg-[#0865A5]/30 flex items-center justify-center">
                    <Mail size={15} className="text-[#90CAF9]" />
                  </div>
                  <span className="text-white/70 text-sm font-sans group-hover:text-white transition-colors">
                    sales@ggdpl.co.in
                  </span>
                </a>
                <a href="https://www.ggdpl.co.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                  <div className="w-9 h-9 rounded-xl bg-[#0865A5]/30 flex items-center justify-center">
                    <Phone size={15} className="text-[#90CAF9]" />
                  </div>
                  <span className="text-white/70 text-sm font-sans group-hover:text-white transition-colors">
                    www.ggdpl.co.in
                  </span>
                </a>
              </div>
            </div>

            {/* Quick facts */}
            <div className="bg-white rounded-3xl p-6 border border-[#D9E8D0] shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#4B6043] mb-4 font-sans">Quick Facts</p>
              {[
                ['Plot Sizes', '250 / 500 / 1000 Sq Yards'],
                ['Rate', '₹6,666 per Sq Yard'],
                ['Min. Upfront', '₹5 Lakhs'],
                ['Balance', '6 Monthly EMIs'],
                ['AMC Free', 'First 2 Years'],
                ['Resort Membership', 'Free for All Owners'],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between py-2 border-b border-[#D9E8D0] last:border-0">
                  <span className="text-[#4B6043] text-sm font-sans">{k}</span>
                  <span className="text-[#1F2937] text-sm font-semibold font-sans">{v}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-3xl p-8 border border-[#D9E8D0] shadow-xl">
              {submitted ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <CheckCircle2 size={64} className="text-[#69AE38] mb-4" />
                  <h3 className="font-display text-2xl font-bold text-[#1F2937] mb-2">
                    Thank You!
                  </h3>
                  <p className="text-[#4B6043] font-sans">
                    Your enquiry has been submitted. Our team will contact you within 24 hours to schedule your free site visit.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-6 py-2.5 bg-[#0865A5] text-white rounded-xl font-semibold text-sm font-sans"
                  >
                    Submit Another Enquiry
                  </button>
                </motion.div>
              ) : (
                <>
                  <h3 className="font-display text-2xl font-bold text-[#1F2937] mb-6">
                    Book a Free Site Visit
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-[#1F2937] mb-1.5 font-sans">
                          Full Name <span className="text-[#DF2638]">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Your full name"
                          value={form.name}
                          onChange={handleChange}
                          className={inputCls('name')}
                        />
                        {errors.name && <p className="mt-1 text-xs text-[#DF2638] font-sans">{errors.name}</p>}
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-[#1F2937] mb-1.5 font-sans">
                          Phone Number <span className="text-[#DF2638]">*</span>
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="10-digit mobile number"
                          value={form.phone}
                          onChange={handleChange}
                          className={inputCls('phone')}
                          maxLength={10}
                        />
                        {errors.phone && <p className="mt-1 text-xs text-[#DF2638] font-sans">{errors.phone}</p>}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-[#1F2937] mb-1.5 font-sans">
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com (optional)"
                        value={form.email}
                        onChange={handleChange}
                        className={inputCls('email')}
                      />
                      {errors.email && <p className="mt-1 text-xs text-[#DF2638] font-sans">{errors.email}</p>}
                    </div>

                    <div>
                      <label htmlFor="plotSize" className="block text-sm font-semibold text-[#1F2937] mb-1.5 font-sans">
                        Interested Plot Size <span className="text-[#DF2638]">*</span>
                      </label>
                      <select
                        id="plotSize"
                        name="plotSize"
                        value={form.plotSize}
                        onChange={handleChange}
                        className={inputCls('plotSize')}
                      >
                        <option value="">Select plot size</option>
                        <option value="250">250 Sq Yards — ₹16.66 Lakhs</option>
                        <option value="500">500 Sq Yards — ₹33.33 Lakhs</option>
                        <option value="1000">1000 Sq Yards — ₹66.66 Lakhs</option>
                        <option value="custom">Custom / Multiple Plots</option>
                      </select>
                      {errors.plotSize && <p className="mt-1 text-xs text-[#DF2638] font-sans">{errors.plotSize}</p>}
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-[#1F2937] mb-1.5 font-sans">
                        Message / Questions
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="Tell us about your investment goals or any questions..."
                        value={form.message}
                        onChange={handleChange}
                        className={`${inputCls('message')} resize-none`}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 bg-[#DF2638] hover:bg-[#C01E2E] text-white font-bold text-base rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-70 flex items-center justify-center gap-2 font-sans"
                    >
                      {loading ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          Submit Enquiry
                        </>
                      )}
                    </button>
                    <p className="text-center text-xs text-[#4B6043] font-sans">
                      By submitting, you agree to be contacted by GGDPL advisors. Your data is safe with us.
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
