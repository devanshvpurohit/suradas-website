import Contact from '../components/Contact'
import PreMvpBadge from '../components/PreMvpBadge'

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-8">
        <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
          <PreMvpBadge className="mb-6" />
          <h1 className="font-display text-4xl font-bold text-white md:text-6xl">Join the Waitlist</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
            We&apos;re in pre-MVP and looking for early adopters, NGO partners, and beta testers.
            Get in touch to be part of the journey.
          </p>
        </div>
      </section>
      <Contact />
    </>
  )
}
