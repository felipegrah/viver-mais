import { useEffect, useState } from 'react'
import { linkWhatsapp } from '../data/site'
import Icone from './ui/Icones'

export default function WhatsappFlutuante() {
  const [visivel, setVisivel] = useState(false)

  useEffect(() => {
    const aoRolar = () => setVisivel(window.scrollY > 400)
    aoRolar()
    window.addEventListener('scroll', aoRolar, { passive: true })
    return () => window.removeEventListener('scroll', aoRolar)
  }, [])

  return (
    <a
      href={linkWhatsapp()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com o Espaço Viver Mais Pilates pelo WhatsApp"
      className={`group fixed bottom-5 right-5 z-40 flex items-center gap-3 rounded-full bg-[#25D366] py-3.5 pl-3.5 pr-4 text-white shadow-alta transition-all duration-500 hover:bg-[#1FB855] sm:bottom-7 sm:right-7 ${
        visivel ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0'
      }`}
    >
      <span aria-hidden className="absolute left-3.5 h-7 w-7 rounded-full bg-[#25D366] animate-pulse-ring" />
      <Icone nome="whatsapp" className="relative h-7 w-7" />
      <span className="relative hidden text-[15px] font-semibold sm:inline">Agendar aula</span>
    </a>
  )
}
