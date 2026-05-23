import AnimatedSection from '../components/AnimatedSection'

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-24">
      <AnimatedSection className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1 className="font-display text-4xl font-bold text-white md:text-5xl">Privacy Policy</h1>
        <p className="mt-4 text-white/50">Last updated: May 23, 2026</p>
        
        <div className="mt-12 space-y-8 text-white/70 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white">1. Information We Collect</h2>
            <p className="mt-4">
              At Suradas, we are committed to protecting your privacy. During our pre-MVP stage, we only collect 
              information that you voluntarily provide to us when you join our waitlist, such as your email address.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold text-white">2. How We Use Your Information</h2>
            <p className="mt-4">
              We use your email address to provide updates about our development progress, notify you when we launch 
              new features, and invite you to participate in beta testing.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold text-white">3. Data Security</h2>
            <p className="mt-4">
              We implement appropriate technical and organizational measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>
        </div>
      </AnimatedSection>
    </div>
  )
}
