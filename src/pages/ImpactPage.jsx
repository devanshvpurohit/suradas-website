import Impact from '../components/Impact'
import PreMvpBadge from '../components/PreMvpBadge'

export default function ImpactPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-8">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
          <PreMvpBadge className="mb-6" />
          <h1 className="font-display text-4xl font-bold text-white md:text-6xl">Our Impact</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
            Why accessible AI matters — and how Suradas aims to make a difference at global scale.
          </p>
        </div>
      </section>
      <Impact />
    </>
  )
}
