// Ícones em SVG inline (traço, 24x24, herdam currentColor).
// Nenhuma dependência externa — mantém o bundle enxuto.
import React from 'react'

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  viewBox: '0 0 24 24',
  'aria-hidden': true,
}

const traços = {
  certificado: (
    <>
      <circle cx="12" cy="9" r="5.2" />
      <path d="M8.4 13.4 7 21l5-2.4L17 21l-1.4-7.6" />
      <path d="m10 9 1.4 1.5L14.2 7.6" />
    </>
  ),
  pessoa: (
    <>
      <circle cx="12" cy="7.5" r="3.3" />
      <path d="M4.8 20.2a7.2 7.2 0 0 1 14.4 0" />
    </>
  ),
  casa: (
    <>
      <path d="M3.6 10.4 12 3.8l8.4 6.6" />
      <path d="M5.6 12v7.6a.8.8 0 0 0 .8.8h11.2a.8.8 0 0 0 .8-.8V12" />
      <path d="M9.8 20.4v-5.2h4.4v5.2" />
    </>
  ),
  carro: (
    <>
      <path d="M4.4 16.6h15.2v-3.4l-1.6-4a1.6 1.6 0 0 0-1.5-1H7.5a1.6 1.6 0 0 0-1.5 1l-1.6 4z" />
      <path d="M4.4 13.2h15.2" />
      <circle cx="8" cy="19" r="1.4" />
      <circle cx="16" cy="19" r="1.4" />
    </>
  ),
  movimento: (
    <>
      <circle cx="15.4" cy="4.6" r="1.8" />
      <path d="M6 20.5 9 15l-2.4-2.6 1.6-4.2 4-1.6 3 2.6 2.8.6" />
      <path d="m11.2 14.2 3.4 1.4 1.6 4.9" />
    </>
  ),
  aereo: (
    <>
      <path d="M8 2.6v7.9c0 2.2 1.8 4 4 4s4-1.8 4-4V2.6" />
      <path d="M12 14.5v6.9" />
      <path d="M8.6 21.4h6.8" />
      <path d="M5.4 2.6h13.2" />
    </>
  ),
  gestante: (
    <>
      <circle cx="12.6" cy="4.4" r="2.1" />
      <path d="M12.6 8v4.2" />
      <path d="M12.6 12.2c2.6 0 4 1.6 4 3.4s-1.5 3.3-4 3.3" />
      <path d="M12.6 18.9v2.6" />
      <path d="m12.6 9.4-2.9 2.1 1.3 3.6" />
    </>
  ),
  tatame: (
    <>
      <rect x="2.8" y="8.6" width="18.4" height="7" rx="3.5" />
      <path d="M6.6 8.6v7" />
      <path d="M17.4 8.6v7" />
    </>
  ),
  relogio: (
    <>
      <circle cx="12" cy="12" r="8.6" />
      <path d="M12 7.2V12l3.2 1.9" />
    </>
  ),
  mapa: (
    <>
      <path d="M12 21s6.6-5.4 6.6-10.2A6.6 6.6 0 0 0 5.4 10.8C5.4 15.6 12 21 12 21z" />
      <circle cx="12" cy="10.6" r="2.5" />
    </>
  ),
  telefone: (
    <path d="M6.3 3.6h3l1.5 3.8-1.9 1.4a11.4 11.4 0 0 0 5.3 5.3l1.4-1.9 3.8 1.5v3a1.7 1.7 0 0 1-1.9 1.7A15.6 15.6 0 0 1 4.6 5.5a1.7 1.7 0 0 1 1.7-1.9z" />
  ),
  seta: <path d="M5 12h13m-5.4-5.4L18 12l-5.4 5.4" />,
  chevron: <path d="m6.5 9.5 5.5 5.5 5.5-5.5" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  fechar: <path d="M6.4 6.4 17.6 17.6M17.6 6.4 6.4 17.6" />,
  check: <path d="m5 12.8 4.4 4.4L19 6.8" />,
}

const preenchidos = {
  estrela: (
    <path d="m12 2.6 2.9 5.9 6.5.9-4.7 4.6 1.1 6.4-5.8-3-5.8 3 1.1-6.4L2.6 9.4l6.5-.9z" />
  ),
  whatsapp: (
    <path d="M17.5 14.4c-.3-.2-1.8-.9-2-1-.3-.1-.5-.2-.7.1-.2.3-.7 1-.9 1.2-.2.2-.3.2-.6.1a8.1 8.1 0 0 1-4-3.5c-.3-.5.3-.5.8-1.5.1-.2 0-.4 0-.5L9.3 7c-.2-.5-.4-.5-.6-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.2 3.4 5.3 4.7 2 .8 2.7.9 3.7.8.6-.1 1.8-.7 2-1.5.3-.7.3-1.4.2-1.5-.1-.2-.3-.3-.6-.4zM12 2.2A9.7 9.7 0 0 0 3.6 16.8L2.3 21.7l5-1.3A9.7 9.7 0 1 0 12 2.2zm0 17.7a8 8 0 0 1-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1 1 12 19.9z" />
  ),
  instagram: (
    <>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M16 3H8a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5V8a5 5 0 0 0-5-5zm-4 14.4a5.4 5.4 0 1 1 0-10.8 5.4 5.4 0 0 1 0 10.8zM17.6 7.4a1.3 1.3 0 1 1 0-2.6 1.3 1.3 0 0 1 0 2.6z" />
    </>
  ),
  facebook: (
    <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.5-3.91 3.77-3.91 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.45 2.9h-2.33V22c4.78-.76 8.44-4.92 8.44-9.94z" />
  ),
}

export default function Icone({ nome, className = 'h-6 w-6' }) {
  if (preenchidos[nome]) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
        {preenchidos[nome]}
      </svg>
    )
  }
  return (
    <svg {...base} className={className}>
      {traços[nome] ?? traços.movimento}
    </svg>
  )
}
