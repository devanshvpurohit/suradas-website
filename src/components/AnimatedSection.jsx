import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  id,
  as: Component = 'section',
}) {
  const { ref, inView } = useInView({ threshold: 0.1 })

  return (
    <Component id={id} ref={ref} className={className}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </Component>
  )
}
