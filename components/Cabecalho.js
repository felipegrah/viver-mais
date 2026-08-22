import { useEffect, useState } from 'react'
import Image from 'next/image'
import { navegacao, site, linkWhatsapp } from '../data/site'
import Icone from './ui/Icones'

export default function Cabecalho() {
  const [rolou, setRolou] = useState(false)
  const [aberto, setAberto] = useState(false)

  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 24)
    aoRolar()
    window.addEventListener('scroll', aoRolar, { passive: true })
    return () => window.removeEventListener('scroll', aoRolar)
  }, [])

  useEffect(() => {
    document.body.style.overflow = aberto ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [aberto])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        rolou
          ? 'border-b border-areia-200/80 bg-areia-50/85 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-3 lg:px-8">
        <a href="#inicio" className="flex shrink-0 items-center" aria-label={`${site.nome} — ir para o início`}>
          <Image
            src="/images/logo-viver-mais.png"
            alt={site.nome}
            width={489}
            height={330}
            priority
            className={`w-auto transition-all duration-300 ${rolou ? 'h-11' : 'h-14'}`}
          />
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegação principal">
          {navegacao.map((item) => (
            <a
              key={item.nome}
              href={item.href}
              className="rounded-full px-3.5 py-2 text-[15px] font-medium text-tinta-suave transition-colors hover:bg-brand-50 hover:text-brand-800"
            >
              {item.nome}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={linkWhatsapp()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-suave transition-all duration-300 hover:bg-brand-700 hover:shadow-alta sm:inline-flex"
          >
            <Icone nome="whatsapp" className="h-4 w-4" />
            Agendar aula
          </a>
          <button
            type="button"
            onClick={() => setAberto((v) => !v)}
            aria-expanded={aberto}
            aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-brand-800 transition-colors hover:bg-brand-50 lg:hidden"
          >
            <Icone nome={aberto ? 'fechar' : 'menu'} className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        className={`overflow-hidden border-t border-areia-200 bg-areia-50/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 lg:hidden ${
          aberto ? 'max-h-[26rem] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="space-y-1 px-5 py-4" aria-label="Navegação mobile">
          {navegacao.map((item) => (
            <a
              key={item.nome}
              href={item.href}
              onClick={() => setAberto(false)}
              className="block rounded-2xl px-4 py-3 text-base font-medium text-tinta transition-colors hover:bg-brand-50 hover:text-brand-800"
            >
              {item.nome}
            </a>
          ))}
          <a
            href={linkWhatsapp()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setAberto(false)}
            className="mt-2 flex items-center justify-center gap-2 rounded-full bg-brand-600 px-5 py-3.5 text-base font-semibold text-white"
          >
            <Icone nome="whatsapp" className="h-5 w-5" />
            Agendar aula experimental
          </a>
        </nav>
      </div>
    </header>
  )
}
