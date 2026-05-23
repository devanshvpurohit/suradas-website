import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import PreMvpBadge from '../components/PreMvpBadge'
import { useInView } from '../hooks/useInView'

const phases = [
  {
    phase: 'Phase 1',
    title: 'Pre-MVP',
    status: 'current',
    period: 'Now — Q2 2026',
    items: [
      'Hardware prototype v1',
      'Core vision AI models',
      'Accessibility community outreach',
      'Waitlist & early partner program',
    ],
  },
  {
    phase: 'Phase 2',
    title: 'MVP Beta',
    status: 'upcoming',
    period: 'Q3 — Q4 2026',
    items: [
      'Closed beta with 50+ testers',
      'Mobile companion app alpha',
      'Navigation & object detection polish',
      'NGO pilot programs',
    ],
  },
  {
    phase: 'Phase 3',
    title: 'Public Launch',
    status: 'upcoming',
    period: '2027',
    items: [
      'Production hardware',
      'Full feature set rollout',
      'Global accessibility partnerships',
      'Affordable pricing model',
    ],
  },
]

function RoadmapItem({ phase, index }) {
  const { ref, inView } = useInView()
  const isCurrent = phase.status === 'current'

  return (
    <motion.div
      ref={ref}
      className={`relative rounded-3xl border p-8 md:p-10 ${
        isCurrent
          ? 'glass-strong border-white/20 neu-dark'
          : 'glass border-white/10'
      }`}
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.6 }}
    >
      {isCurrent && (
        <PreMvpBadge className="absolute -top-3 right-6" pulse={false} />
      )}
      <span className="text-xs font-semibold tracking-widest text-white/40 uppercase">
        {phase.phase}
      </span>
      <h3 className="font-display mt-2 text-2xl font-bold text-white md:text-3xl">
        {phase.title}
      </h3>
      <p className="mt-1 text-sm text-white/40">{phase.period}</p>
      <ul className="mt-6 space-y-3">
        {phase.items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-white/70">
            <span
              className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${
                isCurrent ? 'bg-white' : 'bg-white/30'
              }`}
            />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default function RoadmapPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-16">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
          <PreMvpBadge className="mb-6" />
          <h1 className="font-display text-4xl font-bold text-white md:text-6xl">Roadmap</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
            Our path from pre-MVP prototype to a product that empowers millions. Timelines are
            estimates and may evolve with community feedback.
          </p>
        </div>
      </section>

      <AnimatedSection className="pb-24">
        <div className="mx-auto max-w-4xl space-y-8 px-6 lg:px-8">
          {phases.map((phase, i) => (
            <RoadmapItem key={phase.phase} phase={phase} index={i} />
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-2xl px-6 text-center">
          <p className="text-white/60">
            Want to help shape the product? Join our waitlist for beta testing opportunities.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-black hover:scale-105"
          >
            Join Waitlist
          </Link>
        </div>
      </AnimatedSection>
    </>
  )
}
