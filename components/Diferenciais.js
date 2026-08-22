import { diferenciais } from '../data/site'
import Icone from './ui/Icones'
import Reveal from './ui/Reveal'

export default function Diferenciais() {
  return (
    <section className="relative bg-white py-20 lg:py-28" id="diferenciais">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-700">
            <span className="h-1.5 w-1.5 rounded-full bg-lima-500" />
            Por que aqui
          </span>
          <h2 className="mt-5 font-display text-[2rem] font-semibold leading-[1.1] tracking-tight text-tinta sm:text-[2.75rem]">
            A qualidade do movimento transforma a sua saúde
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-tinta-suave">
            Pilates não é só exercício: é reeducação do movimento. Por isso as aulas aqui são
            conduzidas por fisioterapeutas, que enxergam o seu histórico antes de montar o treino.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {diferenciais.map((d, i) => (
            <Reveal
              key={d.titulo}
              delay={i * 90}
              className="group relative overflow-hidden rounded-3xl border border-areia-200 bg-areia-50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:bg-white hover:shadow-alta"
            >
              <span className="inline-flex items-center justify-center rounded-2xl bg-white p-3.5 text-brand-600 shadow-suave transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                <Icone nome={d.icone} className="h-6 w-6" />
              </span>
              <h3 className="mt-6 font-display text-xl font-semibold leading-snug text-tinta">
                {d.titulo}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-tinta-suave">{d.texto}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
