import Reveal from './Reveal'

export default function TituloSecao({ etiqueta, titulo, texto, alinhamento = 'centro', claro = false }) {
  const centro = alinhamento === 'centro'
  return (
    <Reveal className={`max-w-2xl ${centro ? 'mx-auto text-center' : ''}`}>
      {etiqueta && (
        <span
          className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] ${
            claro ? 'bg-white/15 text-lima-200' : 'bg-brand-50 text-brand-700'
          }`}
        >
          <span className={`h-1.5 w-1.5 rounded-full ${claro ? 'bg-lima-400' : 'bg-lima-500'}`} />
          {etiqueta}
        </span>
      )}
      <h2
        className={`mt-5 font-display text-[2rem] font-semibold leading-[1.1] tracking-tight sm:text-[2.75rem] ${
          claro ? 'text-white' : 'text-tinta'
        }`}
      >
        {titulo}
      </h2>
      {texto && (
        <p className={`mt-5 text-[17px] leading-relaxed ${claro ? 'text-brand-100' : 'text-tinta-suave'}`}>
          {texto}
        </p>
      )}
    </Reveal>
  )
}
