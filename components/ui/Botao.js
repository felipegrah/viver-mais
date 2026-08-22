import Icone from './Icones'

const variantes = {
  primario:
    'bg-brand-600 text-white hover:bg-brand-700 shadow-suave hover:shadow-alta focus-visible:outline-brand-600',
  contorno:
    'border border-brand-200 bg-white/70 text-brand-800 hover:border-brand-400 hover:bg-white focus-visible:outline-brand-600',
}

export default function Botao({
  children,
  href,
  variante = 'primario',
  icone,
  className = '',
  ...props
}) {
  const Tag = href ? 'a' : 'button'
  return (
    <Tag
      href={href}
      className={`group inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-3.5 text-[15px] font-semibold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${variantes[variante]} ${className}`}
      {...props}
    >
      {icone && <Icone nome={icone} className="h-[18px] w-[18px]" />}
      {children}
    </Tag>
  )
}
