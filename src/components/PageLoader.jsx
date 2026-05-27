import { useState, useEffect } from 'react'

export default function PageLoader({ onComplete }) {
  const [exiting, setExiting] = useState(false)
  const [done, setDone] = useState(false)
  const [visible] = useState(() => !sessionStorage.getItem('kc-loaded'))

  useEffect(() => {
    if (!visible) {
      onComplete()
      return
    }

    const exitTimer = setTimeout(() => setExiting(true), 950)
    const doneTimer = setTimeout(() => {
      sessionStorage.setItem('kc-loaded', '1')
      onComplete()
      setDone(true)
    }, 1450)

    return () => {
      clearTimeout(exitTimer)
      clearTimeout(doneTimer)
    }
  }, [])

  if (!visible || done) return null

  return (
    <div className={`page-loader${exiting ? ' page-loader--exit' : ''}`}>
      <span className="page-loader__initials">KC</span>
    </div>
  )
}
