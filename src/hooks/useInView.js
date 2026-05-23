import { useInView as useInViewObserver } from 'react-intersection-observer'

export function useInView(options = {}) {
  const { ref, inView } = useInViewObserver({
    threshold: 0.15,
    triggerOnce: true,
    ...options,
  })
  return { ref, inView }
}
