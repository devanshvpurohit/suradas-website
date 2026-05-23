import AnimatedSection from '../components/AnimatedSection'

export default function AccessibilityPage() {
  return (
    <div className="pt-32 pb-24">
      <AnimatedSection className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1 className="font-display text-4xl font-bold text-white md:text-5xl">Accessibility Statement</h1>
        <p className="mt-4 text-white/50">Last updated: May 23, 2026</p>
        
        <div className="mt-12 space-y-8 text-white/70 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white">Our Commitment</h2>
            <p className="mt-4">
              As a company dedicated to building AI tools for the visually impaired, accessibility is at the core 
              of everything we do. We strive to ensure our website is accessible to everyone, regardless of their 
              abilities or the assistive technologies they use.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold text-white">Conformance Status</h2>
            <p className="mt-4">
              We are working towards full conformance with Web Content Accessibility Guidelines (WCAG) 2.1 Level AA 
              standards.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold text-white">Feedback</h2>
            <p className="mt-4">
              We welcome your feedback on the accessibility of our website. If you encounter any barriers or have 
              suggestions for improvement, please contact us through our contact page.
            </p>
          </section>
        </div>
      </AnimatedSection>
    </div>
  )
}
