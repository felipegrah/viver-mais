import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

import Seo from '../components/Seo'
import Cabecalho from '../components/Cabecalho'
import Heroi from '../components/Heroi'
import Diferenciais from '../components/Diferenciais'
import Servicos from '../components/Servicos'
import Estrutura from '../components/Estrutura'
import Time from '../components/Time'
import Duvidas from '../components/Duvidas'
import Contato, { ChamadaFinal } from '../components/Contato'
import Rodape from '../components/Rodape'
import WhatsappFlutuante from '../components/WhatsappFlutuante'

export default function Home() {
  return (
    <>
      <Seo />
      <Cabecalho />
      <main>
        <Heroi />
        <Diferenciais />
        <Servicos />
        <Estrutura />
        <Time />
        <Duvidas />
        <Contato />
        <ChamadaFinal />
      </main>
      <Rodape />
      <WhatsappFlutuante />
      <SpeedInsights />
      <Analytics />
    </>
  )
}
