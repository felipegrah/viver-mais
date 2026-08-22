import Image from 'next/image'
import { galeria } from '../data/site'
import Icone from './ui/Icones'
import Reveal from './ui/Reveal'

const itens = [
  'Amplo salão para Pilates e Neopilates',
  'Recepção aconchegante para a sua espera',
  'Aparelhos completos e higienizados a cada aula',
  'Estacionamento gratuito no local',
]

export default function Estrutura() {
  return (
    <section id="estrutura" className="scroll-mt-24 bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-end gap-10 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-700">
              <span className="h-1.5 w-1.5 rounded-full bg-lima-500" />
              Estrutura
            </span>
            <h2 className="mt-5 font-display text-[2rem] font-semibold leading-[1.1] tracking-tight text-tinta sm:text-[2.75rem]">
              Um espaço pensado para você treinar tranquilo
            </h2>
            <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-tinta-suave">
              Do estacionamento à sala de aula, cada detalhe foi pensado para que a sua hora de
              cuidar do corpo seja também a parte mais leve do dia.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <ul className="grid gap-4 sm:grid-cols-2 lg:gap-x-8">
              {itens.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-lima-100 text-lima-700">
                    <Icone nome="check" className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-[16px] leading-snug text-tinta">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-3 sm:gap-6">
          {galeria.map((f, i) => (
            <Reveal
              key={f.src}
              delay={i * 110}
              className="group relative aspect-[3/4] overflow-hidden rounded-[1.5rem] bg-areia-100 shadow-suave"
            >
              <Image
                src={f.src}
                alt={f.alt}
                fill
                sizes="(max-width: 640px) 100vw, 31vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
