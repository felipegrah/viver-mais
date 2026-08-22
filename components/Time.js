import Image from 'next/image'
import { useState } from 'react'
import { equipe, equipeIntro } from '../data/site'
import Icone from './ui/Icones'
import Reveal from './ui/Reveal'
import TituloSecao from './ui/TituloSecao'

export default function Time() {
  return (
    <section id="equipe" className="scroll-mt-24 bg-areia-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <TituloSecao
          etiqueta="Nosso time"
          titulo="Fisioterapeutas ao seu lado em cada exercício"
          texto={equipeIntro}
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {equipe.map((p, i) => (
            <CartaoProfissional key={p.nome} pessoa={p} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}

function CartaoProfissional({ pessoa, delay }) {
  const [aberto, setAberto] = useState(false)

  return (
    <Reveal
      delay={delay}
      className="overflow-hidden rounded-[1.75rem] border border-areia-200 bg-white shadow-suave"
    >
      <div className="flex flex-col gap-6 p-7 sm:flex-row sm:items-start sm:p-9">
        <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl bg-areia-100 ring-4 ring-brand-50 sm:h-32 sm:w-32">
          <Image
            src={pessoa.foto}
            alt={`Foto de ${pessoa.nome}`}
            fill
            sizes="128px"
            className="object-cover object-top"
          />
        </div>

        <div className="min-w-0 flex-1">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-lima-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-lima-800">
            {pessoa.cargo}
          </span>
          <h3 className="mt-3 font-display text-2xl font-semibold leading-tight text-tinta">
            {pessoa.nome}
          </h3>
          <p className="mt-1.5 flex items-center gap-1.5 text-sm text-tinta-suave">
            <Icone nome="certificado" className="h-4 w-4 text-brand-500" />
            {pessoa.crefito}
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-tinta-suave">{pessoa.bio}</p>

          <button
            type="button"
            onClick={() => setAberto((v) => !v)}
            aria-expanded={aberto}
            className="mt-5 inline-flex items-center gap-2 text-[15px] font-semibold text-brand-700 transition-colors hover:text-brand-900"
          >
            {aberto ? 'Ocultar formação' : `Ver formação completa (${pessoa.cursos.length} cursos)`}
            <Icone
              nome="chevron"
              className={`h-4 w-4 transition-transform duration-300 ${aberto ? 'rotate-180' : ''}`}
            />
          </button>

          <div
            className={`grid transition-[grid-template-rows,opacity] duration-500 ${
              aberto ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
            }`}
          >
            <div className="overflow-hidden">
              <ul className="mt-5 space-y-2.5 border-t border-areia-200 pt-5">
                {pessoa.cursos.map((c) => (
                  <li key={c} className="flex items-start gap-2.5 text-[14px] text-tinta-suave">
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-lima-500" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  )
}
