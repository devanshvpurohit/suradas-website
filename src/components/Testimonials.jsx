import { motion } from 'framer-motion'
import { Quote, Sparkles } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

const testimonials = [
  {
    quote:
      'Suradas gave me confidence to walk to work alone for the first time in years. The object detection is remarkably accurate.',
    author: 'Priya Sharma',
    role: 'Visually Impaired Professional',
    org: 'Bangalore, India',
  },
  {
    quote:
      'We tested Suradas with 40 participants. The haptic feedback and voice guidance received overwhelmingly positive feedback.',
    author: 'Dr. James Okonkwo',
    role: 'Director of Accessibility Programs',
    org: 'Vision Forward NGO',
  },
  {
    quote:
      'Finally, assistive technology that feels premium and modern — not clinical. Our community deserves products like this.',
    author: 'Maria Santos',
    role: 'Advocate & User Tester',
    org: 'Accessible Futures Coalition',
  },
]

export default function Testimonials() {
  return (
    <AnimatedSection id="testimonials" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold tracking-[0.2em] text-white/40 uppercase">
            Voices & Vision
          </span>
          <h2 className="font-display mt-4 text-3xl font-bold text-white md:text-5xl">
            Trusted by Communities
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.author}
              className="glass neu-dark relative rounded-2xl p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
            >
              <Quote className="mb-4 h-8 w-8 text-white/20" aria-hidden="true" />
              <p className="leading-relaxed text-white/70">&ldquo;{t.quote}&rdquo;</p>
              <footer className="mt-6 border-t border-white/10 pt-6">
                <cite className="not-italic">
                  <p className="font-semibold text-white">{t.author}</p>
                  <p className="text-sm text-white/50">{t.role}</p>
                  <p className="text-xs text-white/30">{t.org}</p>
                </cite>
              </footer>
            </motion.blockquote>
          ))}
        </div>

        <motion.div
          className="glass mt-16 rounded-3xl p-10 md:p-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/10">
              <Sparkles className="h-8 w-8 text-white" aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold text-white md:text-3xl">
                The Future of Inclusive AI
              </h3>
              <p className="mt-4 max-w-3xl leading-relaxed text-white/60">
                We believe the next decade belongs to AI that serves humanity — not replaces it.
                Suradas is building toward ambient intelligence: wearables that understand context,
                predict needs, and integrate with smart cities to create truly accessible
                environments for all.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}
