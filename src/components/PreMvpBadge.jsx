import { motion } from 'framer-motion'

export default function PreMvpBadge({ className = '', pulse = true }) {
  return (
    <motion.span
      className={`inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[10px] font-semibold tracking-[0.15em] text-white/80 uppercase ${className}`}
      animate={pulse ? { opacity: [0.7, 1, 0.7] } : {}}
      transition={{ duration: 2.5, repeat: Infinity }}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-white" />
      Pre-MVP
    </motion.span>
  )
}
