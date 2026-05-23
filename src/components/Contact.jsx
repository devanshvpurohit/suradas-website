import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <AnimatedSection id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] text-white/40 uppercase">
              Get in Touch
            </span>
            <h2 className="font-display mt-4 text-3xl font-bold text-white md:text-5xl">
              Join the Waitlist
            </h2>
            <p className="mt-6 text-lg text-white/60">
              We&apos;re in pre-MVP — sign up for early access, beta testing, NGO partnerships, or
              press inquiries.
            </p>

            <div className="mt-10 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                <Mail className="h-5 w-5 text-white" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm text-white/50">Email us at</p>
                <a
                  href="mailto:hello@suradas.ai"
                  className="font-medium text-white hover:underline"
                >
                  hello@suradas.ai
                </a>
              </div>
            </div>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            className="glass rounded-3xl p-8 md:p-10"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            noValidate
          >
            {submitted ? (
              <div className="py-12 text-center" role="status">
                <p className="font-display text-xl font-semibold text-white">Thank you!</p>
                <p className="mt-2 text-white/60">We&apos;ll be in touch shortly.</p>
              </div>
            ) : (
              <>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm text-white/60">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 transition-colors focus:border-white/30 focus:bg-white/10"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm text-white/60">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 transition-colors focus:border-white/30 focus:bg-white/10"
                      placeholder="you@email.com"
                    />
                  </div>
                </div>
                <div className="mt-5">
                  <label htmlFor="subject" className="mb-2 block text-sm text-white/60">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white transition-colors focus:border-white/30"
                    defaultValue="waitlist"
                  >
                    <option value="waitlist" className="bg-black">
                      Join Waitlist
                    </option>
                    <option value="beta" className="bg-black">
                      Beta Testing Interest
                    </option>
                    <option value="partnership" className="bg-black">
                      Partnership Inquiry
                    </option>
                    <option value="press" className="bg-black">
                      Press & Media
                    </option>
                    <option value="other" className="bg-black">
                      Other
                    </option>
                  </select>
                </div>
                <div className="mt-5">
                  <label htmlFor="message" className="mb-2 block text-sm text-white/60">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 transition-colors focus:border-white/30 focus:bg-white/10"
                    placeholder="Tell us about your needs..."
                  />
                </div>
                <button
                  type="submit"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-white py-4 font-semibold text-black transition-transform hover:scale-[1.02]"
                >
                  Join Waitlist
                  <Send className="h-4 w-4" aria-hidden="true" />
                </button>
              </>
            )}
          </motion.form>
        </div>
      </div>
    </AnimatedSection>
  )
}
