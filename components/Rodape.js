import { site, navegacao, servicos } from '../data/site'
import Icone from './ui/Icones'

export default function Rodape() {
  const ano = new Date().getFullYear()

  return (
    <footer className="bg-brand-950 text-brand-100">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-2xl font-semibold leading-tight text-white">
              Espaço Viver Mais
              <span className="mt-1 block text-sm font-normal uppercase tracking-[0.35em] text-lima-400">
                Pilates
              </span>
            </p>
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-brand-200">
              Estúdio de Pilates em Aririu, Palhoça/SC. Aulas personalizadas conduzidas por
              fisioterapeutas, para você se mover melhor todos os dias.
            </p>
            <div className="mt-7 flex items-center gap-3">
              <a
                href={site.redes.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram do Espaço Viver Mais Pilates"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-lima-500 hover:text-brand-950"
              >
                <Icone nome="instagram" className="h-5 w-5" />
              </a>
              <a
                href={site.redes.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook do Espaço Viver Mais Pilates"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-lima-500 hover:text-brand-950"
              >
                <Icone nome="facebook" className="h-5 w-5" />
              </a>
            </div>
          </div>

          <nav aria-label="Rodapé — navegação">
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-lima-400">
              Navegação
            </h2>
            <ul className="mt-5 space-y-3">
              {navegacao.map((item) => (
                <li key={item.nome}>
                  <a
                    href={item.href}
                    className="text-[15px] text-brand-200 transition-colors hover:text-white"
                  >
                    {item.nome}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-lima-400">
              Onde nos encontrar
            </h2>
            <ul className="mt-5 space-y-4 text-[15px] text-brand-200">
              <li className="flex gap-3">
                <Icone nome="mapa" className="mt-0.5 h-[18px] w-[18px] shrink-0 text-brand-400" />
                <a
                  href={site.endereco.linkMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  {site.endereco.completo}
                </a>
              </li>
              <li className="flex gap-3">
                <Icone nome="telefone" className="mt-0.5 h-[18px] w-[18px] shrink-0 text-brand-400" />
                <a href={site.telefoneLink} className="transition-colors hover:text-white">
                  {site.telefone}
                </a>
              </li>
              <li className="flex gap-3">
                <Icone nome="relogio" className="mt-0.5 h-[18px] w-[18px] shrink-0 text-brand-400" />
                <span>{site.horarios.resumo}</span>
              </li>
            </ul>
            <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-lima-400">
              Modalidades
            </p>
            <p className="mt-3 text-[14px] leading-relaxed text-brand-300">
              {servicos.map((s) => s.nome).join(' · ')}
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-8 text-[13px] text-brand-300 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {ano} {site.nome}. Todos os direitos reservados.
          </p>
          <p>
            Responsável técnica: Amanda de Sousa Grah · CREFITO-10 240620-F
          </p>
        </div>
      </div>
    </footer>
  )
}
