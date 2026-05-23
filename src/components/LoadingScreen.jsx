import { motion, AnimatePresence } from 'framer-motion'
import PreMvpBadge from './PreMvpBadge'

export default function LoadingScreen({ isLoading }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          role="status"
          aria-label="Loading Suradas"
        >
        <motion.div
          className="relative flex flex-col items-center justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-white/5 p-4 shadow-2xl md:h-36 md:w-36">
            <img
              src="/logo.png"
              alt="Suradas"
              className="h-full w-full object-contain"
            />
          </div>
          <PreMvpBadge className="mt-8" pulse={false} />
        </motion.div>
          <motion.div
            className="mt-6 h-px w-32 overflow-hidden bg-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.div
              className="h-full bg-white"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
