import { site, linkWhatsapp } from '../data/site'
import Icone from './ui/Icones'
import Reveal from './ui/Reveal'
import TituloSecao from './ui/TituloSecao'

const cartoes = [
  {
    icone: 'mapa',
    titulo: 'Endereço',
    linhas: [site.endereco.rua, `${site.endereco.bairro} · ${site.endereco.cidade}/${site.endereco.estado}`, `CEP ${site.endereco.cep}`],
    acao: { texto: 'Como chegar', href: site.endereco.linkMaps, externo: true },
  },
  {
    icone: 'telefone',
    titulo: 'Telefone e WhatsApp',
    linhas: [site.telefone],
    acao: { texto: 'Ligar agora', href: site.telefoneLink },
  },
  {
    icone: 'relogio',
    titulo: 'Horário de atendimento',
    linhas: [site.horarios.resumo, site.horarios.detalhe],
  },
  {
    icone: 'instagram',
    titulo: 'Redes sociais',
    linhas: ['@espacovivermaispilates'],
    acao: { texto: 'Ver no Instagram', href: site.redes.instagram, externo: true },
  },
]

export default function Contato() {
  return (
    <section id="contato" className="scroll-mt-24 bg-areia-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <TituloSecao
          etiqueta="Contato"
          titulo="Venha nos visitar em Aririu"
          texto="Estamos a poucos minutos do centro de Palhoça, com estacionamento na porta."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.15fr]">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {cartoes.map((c, i) => (
              <Reveal
                key={c.titulo}
                delay={i * 80}
                className="flex flex-col rounded-3xl border border-areia-200 bg-white p-6 shadow-suave"
              >
                <span className="inline-flex w-fit items-center justify-center rounded-2xl bg-brand-50 p-3 text-brand-600">
                  <Icone nome={c.icone} className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-tinta">{c.titulo}</h3>
                <div className="mt-2 flex-1 space-y-0.5">
                  {c.linhas.map((l) => (
                    <p key={l} className="text-[15px] leading-relaxed text-tinta-suave">
                      {l}
                    </p>
                  ))}
                </div>
                {c.acao && (
                  <a
                    href={c.acao.href}
                    {...(c.acao.externo ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="group mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-900"
                  >
                    {c.acao.texto}
                    <Icone
                      nome="seta"
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>
                )}
              </Reveal>
            ))}
          </div>

          <Reveal
            delay={120}
            className="overflow-hidden rounded-3xl border border-areia-200 bg-white shadow-suave"
          >
            <iframe
              title={`Mapa com a localização do ${site.nome}`}
              src={site.endereco.embedMaps}
              className="h-[380px] w-full border-0 lg:h-full lg:min-h-[520px]"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export function ChamadaFinal() {
  return (
    <section className="relative overflow-hidden bg-brand-900 py-20 lg:py-24">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 -top-24 h-[26rem] w-[26rem] rounded-full bg-brand-700/50 blur-3xl" />
        <div className="absolute -bottom-32 right-0 h-[24rem] w-[24rem] rounded-full bg-lima-600/20 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
        <Reveal>
          <h2 className="font-display text-[2rem] font-semibold leading-[1.1] tracking-tight text-white sm:text-[2.75rem]">
            Sua primeira aula começa com uma conversa
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[17px] leading-relaxed text-brand-100">
            Conte o que está incomodando ou o que você quer conquistar. A gente responde no
            WhatsApp e monta um plano de aulas para o seu objetivo.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={linkWhatsapp('Olá! Vim pelo site e gostaria de agendar uma aula experimental de Pilates.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-lima-500 px-7 py-4 text-[15px] font-semibold text-brand-950 shadow-alta transition-all duration-300 hover:bg-lima-400"
            >
              <Icone nome="whatsapp" className="h-[18px] w-[18px]" />
              Agendar pelo WhatsApp
            </a>
            <a
              href={site.telefoneLink}
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-white/10 px-7 py-4 text-[15px] font-semibold text-white ring-1 ring-inset ring-white/25 backdrop-blur transition-colors duration-300 hover:bg-white/20"
            >
              <Icone nome="telefone" className="h-[18px] w-[18px]" />
              {site.telefone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
