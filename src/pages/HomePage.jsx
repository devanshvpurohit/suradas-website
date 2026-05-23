import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import ParticleBackground from '../components/ParticleBackground'
import PreMvpBadge from '../components/PreMvpBadge'
import SceneCanvas from '../components/3d/SceneCanvas'
import HeroScene3D from '../components/3d/HeroScene3D'
import AnimatedSection from '../components/AnimatedSection'

export default function HomePage() {
  return (
    <>
      <section className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-28 pb-20">
        <ParticleBackground />
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />

        <div className="relative mx-auto grid max-w-7xl flex-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-8 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <PreMvpBadge className="mb-6" />

            <h1 className="font-display text-4xl leading-[1.1] font-bold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              AI-Powered Freedom for the{' '}
              <span className="text-gradient">Visually Impaired</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/60">
              Suradas is building an intelligent wearable assistant — currently in pre-MVP
              development — designed to empower independence through real-time AI perception.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition-all hover:scale-105"
              >
                Join Waitlist
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/features"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white transition-all hover:border-white/40 hover:bg-white/5"
              >
                Explore Features
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="relative h-[400px] lg:h-[500px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <SceneCanvas className="h-full w-full" camera={{ position: [0, 0, 6], fov: 50 }}>
              <HeroScene3D />
            </SceneCanvas>
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="flex h-32 w-32 items-center justify-center rounded-full border border-white/5 bg-white/5 p-6 opacity-20 md:h-40 md:w-40">
                <img
                  src="/logo.png"
                  alt=""
                  className="h-full w-full object-contain"
                  aria-hidden="true"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <AnimatedSection className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="glass flex flex-col items-center gap-8 rounded-3xl p-10 text-center md:flex-row md:p-14 md:text-left">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-white/10">
              <Sparkles className="h-10 w-10 text-white" />
            </div>
            <div className="flex-1">
              <PreMvpBadge className="mb-4" />
              <h2 className="font-display text-2xl font-bold text-white md:text-3xl">
                We&apos;re Building the Future — Join Us Early
              </h2>
              <p className="mt-4 text-white/60">
                Suradas is in active pre-MVP development. We&apos;re prototyping hardware,
                training vision models, and partnering with accessibility communities.
              </p>
            </div>
            <Link
              to="/roadmap"
              className="shrink-0 rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white hover:bg-white/5"
            >
              View Roadmap
            </Link>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              { stat: 'Pre-MVP', label: 'Development Stage' },
              { stat: '8+', label: 'Planned AI Features' },
              { stat: '2025', label: 'Prototype Target' },
            ].map((item) => (
              <div key={item.label} className="glass neu-dark rounded-2xl p-6 text-center">
                <p className="font-display text-3xl font-bold text-white">{item.stat}</p>
                <p className="mt-2 text-sm text-white/50">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="pb-24">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
            See what we&apos;re building
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/60">
            Discover our planned AI capabilities and how Suradas will work.
          </p>
          <Link
            to="/features"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-black hover:scale-105"
          >
            View Features
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </AnimatedSection>
    </>
  )
}
