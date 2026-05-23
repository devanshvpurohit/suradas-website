import { useState, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import LoadingScreen from '../components/LoadingScreen'
import CursorGlow from '../components/CursorGlow'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Layout() {
  const [isLoading, setIsLoading] = useState(true)
  const location = useLocation()

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1800)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
    
    // Update document title based on route
    const path = location.pathname.split('/')[1]
    const title = path 
      ? `${path.charAt(0).toUpperCase() + path.slice(1)} | Suradas`
      : 'Suradas | AI-Powered Freedom for the Visually Impaired'
    document.title = title
  }, [location.pathname])

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      <CursorGlow />

      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </>
  )
}
