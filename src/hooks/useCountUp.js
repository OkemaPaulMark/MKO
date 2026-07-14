import { useEffect, useRef, useState } from 'react'

/**
 * Animates a number from 0 to `end` over `duration` ms once `start` is true.
 * Used to drive the animated statistics counters when they scroll into view.
 */
export function useCountUp(end, { start = false, duration = 1600 } = {}) {
  const [value, setValue] = useState(0)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!start || hasAnimated.current) return
    hasAnimated.current = true

    const startTime = performance.now()

    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - (1 - progress) ** 3 // ease-out cubic
      setValue(Math.round(eased * end))
      if (progress < 1) requestAnimationFrame(step)
    }

    const frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [start, end, duration])

  return value
}
