import { useEffect, useState } from 'react'

const SECTIONS = ['research', 'awards']

export function useActiveSection() {
  const [active, setActive] = useState('about')

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.innerHeight * 0.35

      for (const id of [...SECTIONS].reverse()) {
        const el = document.getElementById(id)
        if (!el) continue
        const rect = el.getBoundingClientRect()
        if (rect.top <= offset) {
          setActive(id)
          return
        }
      }
      setActive('about')
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return active
}
