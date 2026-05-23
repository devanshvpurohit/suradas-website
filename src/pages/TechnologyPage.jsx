import Technology from '../components/Technology'
import AnimatedSection from '../components/AnimatedSection'
import PreMvpBadge from '../components/PreMvpBadge'
import { Link } from 'react-router-dom'

export default function TechnologyPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-16">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
          <PreMvpBadge className="mb-6" />
          <h1 className="font-display text-4xl font-bold text-white md:text-6xl">Technology</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
            The AI stack we&apos;re building for on-device perception, navigation, and accessible
            interaction — optimized for wearable edge computing.
          </p>
        </div>
      </section>
      <Technology />
      <AnimatedSection className="py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-white/50 text-sm">
            Models and benchmarks shown represent our development targets. Performance will be
            validated during pre-MVP testing.
          </p>
          <Link
            to="/features"
            className="mt-6 inline-block text-sm font-semibold text-white hover:underline"
          >
            View planned features →
          </Link>
        </div>
      </AnimatedSection>
    </>
  )
}
