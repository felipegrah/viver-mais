import Image from 'next/image'
import { site, linkWhatsapp, heroImagem } from '../data/site'
import Botao from './ui/Botao'
import Icone from './ui/Icones'

const provas = [
  { icone: 'estrela', texto: `${site.avaliacao.nota} no Google` },
  { icone: 'certificado', texto: 'Fisioterapeutas CREFITO' },
  { icone: 'carro', texto: 'Estacionamento no local' },
]

export default function Heroi() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-areia-50 pt-28 lg:pt-32">
      {/* Manchas decorativas de fundo */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-20 h-[28rem] w-[28rem] rounded-full bg-brand-100/50 blur-3xl" />
        <div className="absolute -right-24 top-1/3 h-[22rem] w-[22rem] rounded-full bg-lima-100/60 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:px-8 lg:pb-24">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/70 px-4 py-2 text-[13px] font-medium text-brand-800 backdrop-blur">
            <Icone nome="mapa" className="h-4 w-4 text-lima-600" />
            Aririu, Palhoça · Santa Catarina
          </span>

          <h1 className="mt-6 font-display text-[2.6rem] font-semibold leading-[1.05] tracking-tight text-tinta sm:text-[3.5rem] lg:text-[4rem]">
            Pilates conduzido por quem entende de{' '}
            <span className="relative whitespace-nowrap text-brand-600">
              fisioterapia
              <svg
                aria-hidden
                viewBox="0 0 300 14"
                preserveAspectRatio="none"
                className="absolute -bottom-1 left-0 h-3 w-full text-lima-400"
              >
                <path
                  d="M2 9.5C55 4 120 2.5 180 4.5c40 1.3 80 3.5 118 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-[17px] leading-relaxed text-tinta-suave sm:text-lg">
            No Espaço Viver Mais, cada sessão é planejada para o seu corpo e o seu objetivo:
            aliviar dores, melhorar a postura, prevenir lesões ou ganhar força com segurança —
            em turmas reduzidas e com acompanhamento de perto.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Botao
              href={linkWhatsapp('Olá! Vim pelo site e gostaria de agendar uma aula experimental de Pilates.')}
              target="_blank"
              rel="noopener noreferrer"
              variante="primario"
              icone="whatsapp"
            >
              Agendar aula experimental
            </Botao>
            <Botao href="#servicos" variante="contorno">
              Conhecer as modalidades
              <Icone nome="seta" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Botao>
          </div>

          <ul className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-areia-200 pt-7">
            {provas.map((p) => (
              <li key={p.texto} className="flex items-center gap-2 text-sm font-medium text-tinta-suave">
                <Icone
                  nome={p.icone}
                  className={`h-[18px] w-[18px] ${p.icone === 'estrela' ? 'text-lima-500' : 'text-brand-500'}`}
                />
                {p.texto}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative animate-fade-up [animation-delay:150ms]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-alta sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src={heroImagem.src}
              alt={heroImagem.alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 46vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-950/65 via-brand-950/5 to-transparent" />
            <figure className="absolute inset-x-5 bottom-5 sm:inset-x-7 sm:bottom-7">
              <blockquote className="font-display text-lg leading-snug text-white sm:text-xl">
                “Não interessa o que você faz e, sim, como você faz.”
              </blockquote>
              <figcaption className="mt-2 text-[13px] font-medium uppercase tracking-[0.16em] text-lima-300">
                Joseph Pilates
              </figcaption>
            </figure>
          </div>

          <div className="absolute -left-5 top-12 hidden rounded-2xl bg-white p-4 shadow-alta lg:block animate-flutuar">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-lima-100 text-lima-700">
                <Icone nome="estrela" className="h-5 w-5" />
              </span>
              <div>
                <p className="text-lg font-bold leading-none text-tinta">{site.avaliacao.nota}</p>
                <p className="mt-1 text-xs text-tinta-suave">Avaliação no Google</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
