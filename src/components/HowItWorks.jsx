import { motion } from 'framer-motion'
import { Watch, Brain, MapPin } from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import { useInView } from '../hooks/useInView'

const steps = [
  {
    number: '01',
    icon: Watch,
    title: 'Wear the Device',
    description:
      'Comfortably strap on the Suradas smart band. It calibrates to your environment in seconds with a gentle haptic confirmation.',
  },
  {
    number: '02',
    icon: Brain,
    title: 'AI Detects & Assists',
    description:
      'On-device AI continuously scans surroundings, identifying objects, people, and hazards — delivering instant audio and haptic feedback.',
  },
  {
    number: '03',
    icon: MapPin,
    title: 'Navigate Safely',
    description:
      'Follow voice-guided directions with real-time obstacle avoidance. Stay connected and protected wherever you go.',
  },
]

function FlowDiagram() {
  const { ref, inView } = useInView()

  return (
    <motion.div
      ref={ref}
      className="glass relative mt-16 overflow-hidden rounded-3xl p-8 md:p-12"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
      aria-hidden="true"
    >
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="relative flex flex-col items-center justify-between gap-8 md:flex-row">
        {['Camera', 'Edge AI', 'Feedback', 'User'].map((node, i) => (
          <motion.div
            key={node}
            className="flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 + i * 0.15 }}
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/5 neu-inset">
              <span className="font-mono text-xs text-white/70">{node}</span>
            </div>
            {i < 3 && (
              <motion.div
                className="hidden h-px w-16 bg-gradient-to-r from-white/40 to-white/10 md:block"
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.2 }}
              />
            )}
          </motion.div>
        ))}
      </div>
      <motion.div
        className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent md:hidden"
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
      />
    </motion.div>
  )
}

function StepCard({ step, index }) {
  const { ref, inView } = useInView()
  const Icon = step.icon

  return (
    <motion.div
      ref={ref}
      className="relative flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.2, duration: 0.6 }}
    >
      <div className="relative mb-6">
        <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/15 bg-white/5 neu-dark">
          <Icon className="h-9 w-9 text-white" strokeWidth={1.5} />
        </div>
        <span className="absolute -top-3 -right-3 font-display text-4xl font-bold text-white/10">
          {step.number}
        </span>
      </div>
      <h3 className="font-display text-xl font-semibold text-white">{step.title}</h3>
      <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/50">{step.description}</p>
    </motion.div>
  )
}

export default function HowItWorks() {
  return (
    <AnimatedSection id="how-it-works" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold tracking-[0.2em] text-white/40 uppercase">
            How It Works
          </span>
          <h2 className="font-display mt-4 text-3xl font-bold text-white md:text-5xl">
            Three Steps to Freedom
          </h2>
        </div>

        <div className="relative mt-16">
          <div className="absolute top-24 right-0 left-0 hidden h-px bg-gradient-to-r from-transparent via-white/20 to-transparent md:block" />
          <div className="grid gap-16 md:grid-cols-3 md:gap-8">
            {steps.map((step, i) => (
              <StepCard key={step.number} step={step} index={i} />
            ))}
          </div>
        </div>

        <FlowDiagram />
      </div>
    </AnimatedSection>
  )
}
