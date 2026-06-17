import { motion, useReducedMotion } from 'framer-motion'

/**
 * Reveal — fade/slide content in as it enters the viewport.
 * Respects the user's reduced-motion preference.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 28,
  className = '',
  as = 'div',
  once = true,
}) {
  const reduce = useReducedMotion()
  const MotionTag = motion[as] ?? motion.div

  return (
    <MotionTag
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={reduce ? {} : { opacity: 1, y: 0 }}
      viewport={{ once, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  )
}

/**
 * Stagger — container that staggers the reveal of its <Reveal> children.
 */
export function Stagger({ children, className = '', step = 0.12 }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: reduce ? 0 : step } },
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className = '', y = 24 }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      variants={{
        hidden: reduce ? {} : { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
      }}
    >
      {children}
    </motion.div>
  )
}
