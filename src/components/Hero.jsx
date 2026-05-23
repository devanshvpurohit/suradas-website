import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import ParticleBackground from './ParticleBackground'

function WearableMockup() {
  return (
    <div className="relative mx-auto w-full max-w-md" aria-hidden="true">
      <motion.div
        className="absolute -inset-8 rounded-full bg-gradient-to-b from-white/10 to-transparent blur-3xl"
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <motion.div
        className="relative"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="glass neu-dark relative overflow-hidden rounded-[2.5rem] p-8">
          <div className="absolute inset-0 grid-bg opacity-50" />
          <div className="scan-line absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />

          <div className="relative flex flex-col items-center">
            <div className="mb-6 flex h-48 w-full items-center justify-center rounded-2xl neu-inset bg-black/40">
              <div className="relative">
                <div className="h-28 w-44 rounded-3xl border-2 border-white/20 bg-gradient-to-br from-sur-gray-900 to-black p-4 shadow-2xl">
                  <div className="flex h-full flex-col items-center justify-between">
                    <div className="flex w-full items-center justify-between">
                      <div className="h-2 w-2 rounded-full bg-white/80 pulse-ring" />
                      <span className="font-mono text-[10px] text-white/50">SURADAS AI</span>
                    </div>
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-white/5">
                      <div className="absolute inset-0 rounded-full border border-dashed border-white/20 animate-[spin_12s_linear_infinite]" />
                      <div className="h-8 w-8 rounded-full bg-white/90" />
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="h-1 w-4 rounded-full bg-white/30"
                          style={{ opacity: 0.3 + i * 0.15 }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute -right-4 top-1/2 h-16 w-8 -translate-y-1/2 rounded-r-xl border border-l-0 border-white/20 bg-sur-gray-900" />
              </div>
            </div>

            <div className="w-full space-y-2 rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center justify-between text-xs text-white/50">
                <span>Object detected</span>
                <span className="text-white">Chair · 2.3m</span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full bg-white"
                  initial={{ width: '0%' }}
                  animate={{ width: '78%' }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
                />
              </div>
            </div>
          </div>
        </div>

        <motion.div
          className="absolute -right-4 -bottom-4 glass rounded-2xl px-4 py-3 text-xs"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
        >
          <span className="text-white/50">Status</span>
          <p className="font-semibold text-white">Active · Scanning</p>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default function Hero() {
  return (
    <section
      className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-28 pb-20"
      aria-labelledby="hero-heading"
    >
      <ParticleBackground />
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />

      <div className="relative mx-auto grid max-w-7xl flex-1 items-center gap-16 px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.span
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wider text-white/70 uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
            Next-Gen Accessibility AI
          </motion.span>

          <h1
            id="hero-heading"
            className="font-display text-4xl leading-[1.1] font-bold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            AI-Powered Freedom for the{' '}
            <span className="text-gradient">Visually Impaired</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/60 sm:text-xl">
            Suradas is an intelligent wearable assistant that sees the world for you — delivering
            real-time object detection, navigation, and safety alerts through elegant AI
            technology.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition-all hover:scale-105 hover:shadow-lg hover:shadow-white/20"
            >
              Request Demo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white transition-all hover:border-white/40 hover:bg-white/5"
            >
              Explore Features
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <WearableMockup />
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 transition-colors hover:text-white"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-label="Scroll to about section"
      >
        <ChevronDown size={28} />
      </motion.a>
    </section>
  )
}
