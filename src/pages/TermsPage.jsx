import AnimatedSection from '../components/AnimatedSection'

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24">
      <AnimatedSection className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1 className="font-display text-4xl font-bold text-white md:text-5xl">Terms of Service</h1>
        <p className="mt-4 text-white/50">Last updated: May 23, 2026</p>
        
        <div className="mt-12 space-y-8 text-white/70 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white">1. Acceptance of Terms</h2>
            <p className="mt-4">
              By accessing and using the Suradas website, you agree to comply with and be bound by these Terms of Service.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold text-white">2. Pre-MVP Status</h2>
            <p className="mt-4">
              Suradas is currently in a pre-MVP (Minimum Viable Product) development stage. All features, 
              specifications, and timelines mentioned on this website are subject to change without notice.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold text-white">3. Intellectual Property</h2>
            <p className="mt-4">
              The content, design, and technology described on this website are the intellectual property of Suradas. 
              Unauthorized use or reproduction is strictly prohibited.
            </p>
          </section>
        </div>
      </AnimatedSection>
    </div>
  )
}
