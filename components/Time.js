import React from 'react'

export default function Time() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 mb-10" id="equipe">
      <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
        <h4 className="tracking-tight font-extrabold text-green-600 sm:text-5xl md:text-6xl px-3 py-px mb-4 text-xs uppercase">
          Nosso Time
        </h4>
        <p className="text-base text-gray-700 md:text-lg">
          Nosso time é formado por fisioterapeutas, para alinhar o pilates com a prevenção e tratamento de patologias.
        </p>
      </div>
      <div className="grid gap-10 mx-auto lg:max-w-screen-lg sm:grid-cols-1 lg:grid-cols-3">
      <div className="flex flex-col items-center"></div>
        <div className="flex flex-col items-center">
          <img
            className="object-cover w-40 h-40 mb-2 rounded-full shadow"
            src="/images/fisio_amanda.JPEG"
            alt="Person"
          />
          <div className="flex flex-col items-center">
            <p className="text-lg font-bold">Dra. Amanda de Sousa Grah</p>
            <p className="text-sm text-gray-800 my-3">Fisioterapeura (CREFITO -10 240620-F)</p>
            <p className="text-base text-justify">

              Responsável técnico do Espaço Viver Mais Pilates, é graduada pela Universidade do Sul de Santa Catarina e pós graduanda em Gestão da Saúde com ênfase em Administração Estratégica. Além disso, têm cursos em:
            </p>
            <ul className="list-disc text-sm px-4 mt-3">
              <li>Pilates completo (Edcel Rosa)</li>
              <li>Neopilates (Amanda Braz)</li>
              <li>Aprimoramento em Pilates (Grupo Voll Pilates)</li>
              <li>Pilates kids (Grupo Voll Pilates)</li>
              <li>Treinamento Funcional (Equipe Ivana Henn)</li>
              <li>Avaliação e tratamento das lesões do joelho e quadril (GMK cursos)</li>
              <li>Ventosaterapia (Instituto Cefisa de Ensino em Saúde)</li>
              <li>Kinesio Tape (K-Taping International Academy).</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
