import { motion } from 'framer-motion'
import {
  Scan,
  Users,
  Banknote,
  Navigation,
  Mic,
  AlertTriangle,
  Bluetooth,
  Vibrate,
} from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import { useInView } from '../hooks/useInView'

const features = [
  {
    icon: Scan,
    title: 'AI Object Detection',
    description:
      'Real-time identification of obstacles, furniture, and hazards using advanced computer vision models.',
  },
  {
    icon: Users,
    title: 'Human Recognition',
    description:
      'Recognize familiar faces and distinguish people in your environment with personalized alerts.',
  },
  {
    icon: Banknote,
    title: 'Currency Identification',
    description:
      'Instantly identify banknotes and coins by denomination, empowering confident financial independence.',
  },
  {
    icon: Navigation,
    title: 'GPS Navigation',
    description:
      'Turn-by-turn voice-guided navigation with obstacle-aware routing for safe outdoor mobility.',
  },
  {
    icon: Mic,
    title: 'Voice Commands',
    description:
      'Natural language control — ask questions, set reminders, and navigate hands-free with AI voice.',
  },
  {
    icon: AlertTriangle,
    title: 'Emergency Alerts',
    description:
      'One-touch SOS with automatic location sharing to trusted contacts and emergency services.',
  },
  {
    icon: Bluetooth,
    title: 'BLE Smart Connectivity',
    description:
      'Seamless pairing with smartphones and IoT devices via low-energy Bluetooth for extended battery.',
  },
  {
    icon: Vibrate,
    title: 'Haptic + Audio Feedback',
    description:
      'Multi-sensory alerts through precise vibration patterns and spatial audio cues for intuitive guidance.',
  },
]

function FeatureCard({ feature, index }) {
  const { ref, inView } = useInView({ threshold: 0.2 })
  const Icon = feature.icon

  return (
    <motion.article
      ref={ref}
      className="group glass neu-dark relative overflow-hidden rounded-2xl p-6 transition-all duration-500 hover:border-white/20"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="relative">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-colors group-hover:bg-white/10">
          <Icon className="h-6 w-6 text-white" strokeWidth={1.5} aria-hidden="true" />
        </div>
        <h3 className="font-display text-lg font-semibold text-white">{feature.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-white/50">{feature.description}</p>
      </div>
      <div className="absolute right-4 bottom-4 h-8 w-8 rounded-full border border-white/5 opacity-0 transition-opacity group-hover:opacity-100">
        <div className="scan-line absolute inset-0 rounded-full border border-white/20" />
      </div>
    </motion.article>
  )
}

export default function Features() {
  return (
    <AnimatedSection id="features" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold tracking-[0.2em] text-white/40 uppercase">
            Features
          </span>
          <h2 className="font-display mt-4 text-3xl font-bold text-white md:text-5xl">
            Intelligence You Can Wear
          </h2>
          <p className="mt-6 text-lg text-white/60">
            Eight powerful capabilities working in harmony to create a complete sensory extension.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
