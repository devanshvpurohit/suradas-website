import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Share2, Globe, Code2, Play } from 'lucide-react'
import Logo from './Logo'
import PreMvpBadge from './PreMvpBadge'

const footerLinks = {
  Explore: [
    { to: '/features', label: 'Features' },
    { to: '/technology', label: 'Technology' },
    { to: '/roadmap', label: 'Roadmap' },
    { to: '/impact', label: 'Impact' },
  ],
  Company: [
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ],
  Legal: [
    { to: '/privacy', label: 'Privacy Policy' },
    { to: '/terms', label: 'Terms of Service' },
    { to: '/accessibility', label: 'Accessibility Statement' },
  ],
}

const socials = [
  { icon: Share2, href: '#', label: 'Social media' },
  { icon: Globe, href: '#', label: 'Website' },
  { icon: Code2, href: '#', label: 'GitHub' },
  { icon: Play, href: '#', label: 'YouTube' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) setSubscribed(true)
  }

  return (
    <footer className="border-t border-white/10 bg-black" role="contentinfo">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo className="h-14" />
            <PreMvpBadge className="mt-4" pulse={false} />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/50">
              Pre-MVP stage — building intelligent wearable AI for visually impaired individuals.
            </p>

            <form onSubmit={handleSubscribe} className="mt-6 flex gap-2">
              <label htmlFor="newsletter-email" className="sr-only">
                Email for waitlist updates
              </label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Waitlist updates"
                className="flex-1 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/30 focus:border-white/30"
                disabled={subscribed}
              />
              <button
                type="submit"
                className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition-transform hover:scale-105"
                disabled={subscribed}
              >
                {subscribed ? 'Done' : 'Join'}
              </button>
            </form>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-5">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="text-sm font-semibold text-white">{category}</h3>
                <ul className="mt-4 space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      {link.to.startsWith('/') && !link.to.includes('#') ? (
                        <Link
                          to={link.to}
                          className="text-sm text-white/50 transition-colors hover:text-white"
                        >
                          {link.label}
                        </Link>
                      ) : (
                        <a
                          href={link.to}
                          className="text-sm text-white/50 transition-colors hover:text-white"
                        >
                          {link.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold text-white">Follow Us</h3>
            <div className="mt-4 flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition-all hover:border-white/30 hover:bg-white/10 hover:text-white"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Suradas. Pre-MVP — All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Built with accessibility-first design principles.
          </p>
        </div>
      </div>
    </footer>
  )
}
