import { servicos, linkWhatsapp } from '../data/site'
import Icone from './ui/Icones'
import Reveal from './ui/Reveal'
import TituloSecao from './ui/TituloSecao'

export default function Servicos() {
  const destaque = servicos.find((s) => s.destaque)
  const demais = servicos.filter((s) => !s.destaque)

  return (
    <section id="servicos" className="scroll-mt-24 bg-areia-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <TituloSecao
          etiqueta="Serviços"
          titulo="Uma modalidade para cada fase da sua vida"
          texto="Do método clássico ao Neopilates aéreo, todas as aulas partem de uma avaliação individual e são adaptadas ao seu ritmo."
        />

        <Reveal className="relative mt-14 overflow-hidden rounded-[1.75rem] bg-brand-800 p-8 text-white shadow-alta lg:p-12">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-brand-700/60 blur-2xl"
          />
          <div className="relative lg:flex lg:items-end lg:justify-between lg:gap-12">
            <div className="max-w-3xl">
              <span className="inline-flex items-center justify-center rounded-2xl bg-lima-400 p-3.5 text-brand-900">
                <Icone nome={destaque.icone} className="h-6 w-6" />
              </span>
              <h3 className="mt-6 font-display text-3xl font-semibold leading-tight sm:text-4xl">
                {destaque.nome}
              </h3>
              <p className="mt-2 text-[15px] font-medium text-lima-300">{destaque.resumo}</p>
              <p className="mt-4 text-[16px] leading-relaxed text-brand-100">{destaque.texto}</p>
            </div>
            <a
              href={linkWhatsapp(`Olá! Vim pelo site e gostaria de saber mais sobre ${destaque.nome}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-7 inline-flex shrink-0 items-center gap-2.5 rounded-full bg-lima-500 px-6 py-3.5 text-[15px] font-semibold text-brand-950 transition-colors duration-300 hover:bg-lima-400 lg:mt-0"
            >
              <Icone nome="whatsapp" className="h-[18px] w-[18px]" />
              Quero experimentar
            </a>
          </div>
        </Reveal>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {demais.map((s, i) => (
            <Reveal
              key={s.nome}
              delay={i * 90}
              className="group relative flex flex-col overflow-hidden rounded-[1.75rem] border border-areia-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-alta"
            >
              <span className="inline-flex w-fit items-center justify-center rounded-2xl bg-brand-50 p-3.5 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                <Icone nome={s.icone} className="h-6 w-6" />
              </span>

              <h3 className="mt-6 font-display text-2xl font-semibold leading-tight text-tinta">
                {s.nome}
              </h3>
              <p className="mt-2 text-[15px] font-medium text-brand-600">{s.resumo}</p>
              <p className="mt-4 flex-1 text-[15px] leading-relaxed text-tinta-suave">{s.texto}</p>

              <a
                href={linkWhatsapp(`Olá! Vim pelo site e gostaria de saber mais sobre ${s.nome}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 text-[15px] font-semibold text-brand-700 transition-colors hover:text-brand-900"
              >
                Falar sobre esta aula
                <Icone
                  nome="seta"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
