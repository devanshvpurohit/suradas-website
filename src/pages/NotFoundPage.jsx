import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import ParticleBackground from '../components/ParticleBackground'

export default function NotFoundPage() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20 text-center">
      <ParticleBackground />
      <div className="absolute inset-0 grid-bg opacity-20" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <h1 className="font-display text-8xl font-bold text-white md:text-9xl">404</h1>
        <h2 className="mt-4 text-2xl font-semibold text-white/80">Page Not Found</h2>
        <p className="mt-4 max-w-md text-white/50">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition-transform hover:scale-105"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>
      </motion.div>
    </div>
  )
}
