import { useEffect, useRef } from 'react'

export function useIntersectionObserver(selector = null, options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (selector) {
              el.querySelectorAll(selector).forEach((child) => {
                child.classList.add('visible')
              })
            } else {
              el.classList.add('visible')
            }
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.15, ...options }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [selector])

  return ref
}
