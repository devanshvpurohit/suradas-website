import { motion } from 'framer-motion'
import { Cpu, Eye, Wifi, MapPin, Layers, Zap } from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import { useInView } from '../hooks/useInView'

const techStack = [
  { icon: Cpu, name: 'AI Models', detail: 'Custom-trained CNN & transformer architectures' },
  { icon: Eye, name: 'Computer Vision', detail: 'Real-time object segmentation & depth estimation' },
  { icon: Wifi, name: 'IoT Integration', detail: 'Cloud sync with smart home ecosystems' },
  { icon: MapPin, name: 'GPS + BLE', detail: 'Precision positioning with low-energy pairing' },
  { icon: Layers, name: 'TensorFlow / PyTorch', detail: 'Industry-standard ML frameworks' },
  { icon: Zap, name: 'Edge AI Processing', detail: 'On-device inference under 50ms latency' },
]

function TerminalCard() {
  const { ref, inView } = useInView()
  const lines = [
    { prompt: '$', text: 'suradas init --edge-mode' },
    { prompt: '>', text: 'Loading vision models... OK' },
    { prompt: '>', text: 'BLE stack initialized' },
    { prompt: '>', text: 'GPS lock acquired (±1.2m)' },
    { prompt: '>', text: 'Edge AI ready — 47ms avg latency' },
    { prompt: '$', text: 'suradas scan --live' },
    { prompt: '✓', text: 'Scanning environment...', highlight: true },
  ]

  return (
    <motion.div
      ref={ref}
      className="glass overflow-hidden rounded-2xl border border-white/10 font-mono text-sm"
      initial={{ opacity: 0, x: 30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
        <div className="h-3 w-3 rounded-full bg-white/20" />
        <div className="h-3 w-3 rounded-full bg-white/15" />
        <div className="h-3 w-3 rounded-full bg-white/10" />
        <span className="ml-2 text-xs text-white/40">suradas-terminal</span>
      </div>
      <div className="space-y-2 p-5">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            className="flex gap-2"
            initial={{ opacity: 0, x: -10 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 + i * 0.1 }}
          >
            <span className="text-white/30">{line.prompt}</span>
            <span className={line.highlight ? 'text-white' : 'text-white/60'}>{line.text}</span>
          </motion.div>
        ))}
        <motion.span
          className="inline-block h-4 w-2 bg-white"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        />
      </div>
    </motion.div>
  )
}

function DataGrid() {
  const { ref, inView } = useInView()
  const metrics = [
    { label: 'Inference', value: '47ms' },
    { label: 'Models', value: '12' },
    { label: 'Accuracy', value: '99.2%' },
    { label: 'Uptime', value: '99.9%' },
  ]

  return (
    <motion.div
      ref={ref}
      className="grid grid-cols-2 gap-3"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
    >
      {metrics.map((m, i) => (
        <motion.div
          key={m.label}
          className="neu-inset rounded-xl p-4 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: i * 0.1 }}
        >
          <p className="font-display text-2xl font-bold text-white">{m.value}</p>
          <p className="mt-1 text-xs text-white/40">{m.label}</p>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default function Technology() {
  return (
    <AnimatedSection id="technology" className="relative py-24 md:py-32">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold tracking-[0.2em] text-white/40 uppercase">
            Technology
          </span>
          <h2 className="font-display mt-4 text-3xl font-bold text-white md:text-5xl">
            Built on Cutting-Edge AI
          </h2>
          <p className="mt-6 text-lg text-white/60">
            Enterprise-grade machine learning, optimized for wearable edge computing.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="grid gap-4 sm:grid-cols-2">
            {techStack.map((tech, i) => {
              const Icon = tech.icon
              return (
                <motion.div
                  key={tech.name}
                  className="glass group rounded-2xl p-5 transition-all hover:border-white/20"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Icon className="mb-3 h-6 w-6 text-white/80" strokeWidth={1.5} />
                  <h3 className="font-display font-semibold text-white">{tech.name}</h3>
                  <p className="mt-1 text-xs text-white/50">{tech.detail}</p>
                </motion.div>
              )
            })}
          </div>

          <div className="flex flex-col gap-6">
            <TerminalCard />
            <DataGrid />
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
