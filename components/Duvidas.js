import { useState } from 'react'
import { duvidas, linkWhatsapp } from '../data/site'
import Icone from './ui/Icones'
import Reveal from './ui/Reveal'
import TituloSecao from './ui/TituloSecao'

export default function Duvidas() {
  const [abertaId, setAbertaId] = useState(0)

  return (
    <section id="duvidas" className="scroll-mt-24 bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <TituloSecao
          etiqueta="Dúvidas frequentes"
          titulo="Antes da sua primeira aula"
          texto="Se a sua pergunta não estiver aqui, é só chamar no WhatsApp — respondemos rápido."
        />

        <div className="mx-auto mt-14 max-w-3xl divide-y divide-areia-200 border-y border-areia-200">
          {duvidas.map((d, i) => {
            const aberta = abertaId === i
            return (
              <div key={d.p}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setAbertaId(aberta ? -1 : i)}
                    aria-expanded={aberta}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:text-brand-700"
                  >
                    <span className="font-display text-lg font-semibold leading-snug text-tinta sm:text-xl">
                      {d.p}
                    </span>
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        aberta ? 'rotate-180 bg-brand-600 text-white' : 'bg-brand-50 text-brand-700'
                      }`}
                    >
                      <Icone nome="chevron" className="h-4 w-4" />
                    </span>
                  </button>
                </h3>
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-500 ${
                    aberta ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl pb-7 pr-12 text-[16px] leading-relaxed text-tinta-suave">
                      {d.r}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <Reveal className="mx-auto mt-10 max-w-3xl text-center">
          <a
            href={linkWhatsapp('Olá! Vim pelo site e fiquei com uma dúvida sobre as aulas.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[15px] font-semibold text-brand-700 transition-colors hover:text-brand-900"
          >
            <Icone nome="whatsapp" className="h-[18px] w-[18px]" />
            Tenho outra dúvida
          </a>
        </Reveal>
      </div>
    </section>
  )
}
