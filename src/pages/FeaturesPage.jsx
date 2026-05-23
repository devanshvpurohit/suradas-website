import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'
import PreMvpBadge from '../components/PreMvpBadge'

export default function FeaturesPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-8">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
          <PreMvpBadge className="mb-6" />
          <h1 className="font-display text-4xl font-bold text-white md:text-6xl">Features</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
            The capabilities we&apos;re building into Suradas — designed for independence, safety,
            and accessible navigation.
          </p>
        </div>
      </section>
      <Features />
      <HowItWorks />
    </>
  )
}
