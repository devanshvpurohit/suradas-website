import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'
import { useInView } from '../hooks/useInView'

function AnimatedCounter({ end, suffix = '', duration = 2 }) {
  const { ref, inView } = useInView()
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return

    let start = 0
    const increment = end / (duration * 60)
    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 1000 / 60)

    return () => clearInterval(timer)
  }, [inView, end, duration])

  return (
    <span ref={ref} className="font-display text-4xl font-bold text-white md:text-5xl">
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

function MiniChart({ bars, inView }) {
  return (
    <div className="flex h-32 items-end justify-center gap-2" aria-hidden="true">
      {bars.map((height, i) => (
        <motion.div
          key={i}
          className="w-6 rounded-t-md bg-gradient-to-t from-white/20 to-white/60 md:w-8"
          initial={{ height: 0 }}
          animate={inView ? { height: `${height}%` } : { height: 0 }}
          transition={{ delay: 0.3 + i * 0.1, duration: 0.6, ease: 'easeOut' }}
        />
      ))}
    </div>
  )
}

export default function Impact() {
  const { ref: chartRef, inView: chartInView } = useInView()

  const impacts = [
    {
      counter: <AnimatedCounter end={285} suffix="M+" />,
      label: 'Visually impaired globally',
      description: 'World Health Organization estimate — a community deserving transformative technology.',
    },
    {
      counter: <span className="font-display text-4xl font-bold text-white md:text-5xl">$26B+</span>,
      label: 'Assistive tech market by 2027',
      description: 'Rapidly growing demand for intelligent, affordable accessibility solutions.',
    },
    {
      counter: <span className="font-display text-4xl font-bold text-white md:text-5xl">10×</span>,
      label: 'More affordable than alternatives',
      description: 'Suradas delivers premium AI capabilities at a fraction of traditional assistive device costs.',
    },
  ]

  return (
    <AnimatedSection id="impact" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] via-transparent to-white/[0.02]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold tracking-[0.2em] text-white/40 uppercase">
            Global Impact
          </span>
          <h2 className="font-display mt-4 text-3xl font-bold text-white md:text-5xl">
            Changing Lives at Scale
          </h2>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {impacts.map((item, i) => (
            <motion.div
              key={item.label}
              className="glass neu-dark rounded-3xl p-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              {item.counter}
              <h3 className="mt-4 font-display text-lg font-semibold text-white">{item.label}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/50">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          ref={chartRef}
          className="glass mt-12 rounded-3xl p-8 md:p-12"
          initial={{ opacity: 0 }}
          animate={chartInView ? { opacity: 1 } : {}}
        >
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="text-center md:text-left">
              <h3 className="font-display text-xl font-semibold text-white">
                Accessibility Adoption Growth
              </h3>
              <p className="mt-2 max-w-md text-sm text-white/50">
                AI-powered assistive devices are projected to see 34% year-over-year adoption growth
                through 2030.
              </p>
            </div>
            <MiniChart bars={[40, 55, 48, 70, 65, 85, 78, 95]} inView={chartInView} />
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}
