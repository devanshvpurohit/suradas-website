import { motion } from 'framer-motion'
import { Eye, Shield, Heart, Target } from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import { useInView } from '../hooks/useInView'

const stats = [
  { value: '8', label: 'Planned AI Features', suffix: '+' },
  { value: '24', label: 'Target Battery Life', suffix: 'h' },
  { value: 'Pre', label: 'Development Stage', suffix: '-MVP' },
  { value: '50', label: 'Languages Planned', suffix: '+' },
]

function StatCard({ stat, index }) {
  const { ref, inView } = useInView()

  return (
    <motion.div
      ref={ref}
      className="glass neu-dark rounded-2xl p-6 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <p className="font-display text-3xl font-bold text-white md:text-4xl">
        {stat.value}
        <span className="text-white/50">{stat.suffix}</span>
      </p>
      <p className="mt-2 text-sm text-white/50">{stat.label}</p>
    </motion.div>
  )
}

export default function About() {
  return (
    <AnimatedSection id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold tracking-[0.2em] text-white/40 uppercase">
            About Suradas
          </span>
          <h2 className="font-display mt-4 text-3xl font-bold text-white md:text-5xl">
            Redefining Independence Through AI
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/60">
            Suradas is a next-generation AI wearable designed exclusively for visually impaired
            individuals. Combining computer vision, edge AI, and intuitive haptic feedback, our
            device transforms how users perceive and navigate the world — with dignity, safety,
            and autonomy.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          <div className="glass rounded-3xl p-8 md:p-10">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
              <Target className="h-6 w-6 text-white" aria-hidden="true" />
            </div>
            <h3 className="font-display text-xl font-semibold text-white">Our Mission</h3>
            <p className="mt-4 leading-relaxed text-white/60">
              To democratize AI-powered accessibility technology, making advanced assistive wearables
              affordable and available to every visually impaired person worldwide — breaking down
              barriers to independence one device at a time.
            </p>
          </div>

          <div className="glass rounded-3xl p-8 md:p-10">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
              <Eye className="h-6 w-6 text-white" aria-hidden="true" />
            </div>
            <h3 className="font-display text-xl font-semibold text-white">Our Vision</h3>
            <p className="mt-4 leading-relaxed text-white/60">
              A world where visual impairment never limits human potential. We envision inclusive
              cities, empowered communities, and AI companions that seamlessly integrate into daily
              life — trusted, invisible, and transformative.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-8">
          {[
            { icon: Shield, text: 'Safety First' },
            { icon: Heart, text: 'Human-Centered' },
            { icon: Eye, text: 'Accessibility Core' },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-3 text-white/70">
              <Icon className="h-5 w-5" aria-hidden="true" />
              <span className="text-sm font-medium">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
