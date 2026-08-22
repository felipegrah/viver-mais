import { useEffect, useRef, useState } from 'react'

// Revela o conteúdo quando ele entra na viewport.
// Respeita prefers-reduced-motion: quem pediu menos movimento já recebe visível.
export default function Reveal({ children, delay = 0, className = '', as: Tag = 'div' }) {
  const ref = useRef(null)
  const [visivel, setVisivel] = useState(false)

  useEffect(() => {
    const semMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (semMovimento || !('IntersectionObserver' in window)) {
      setVisivel(true)
      return
    }
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setVisivel(true)
          obs.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      style={visivel ? { animationDelay: `${delay}ms` } : undefined}
      className={`${visivel ? 'animate-fade-up' : 'opacity-0'} ${className}`}
    >
      {children}
    </Tag>
  )
}
