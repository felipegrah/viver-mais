import React from "react";

export default function Time() {
  return (
    <div
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 mb-10"
      id="equipe"
    >
      <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
        <h4 className="tracking-tight font-extrabold text-green-600 sm:text-5xl md:text-6xl px-3 py-px mb-4 text-xs uppercase">
          Nosso Time
        </h4>
        <p className="text-base text-gray-700 md:text-lg">
          Nosso time é formado por fisioterapeutas, para alinhar o pilates com a
          prevenção e tratamento de patologias.
        </p>
      </div>
      <div className="grid gap-10 mx-auto lg:max-w-screen-lg grid-cols-1">
        <div className="flex flex-col items-center">
          <img
            className="object-cover object-top w-40 h-40 mb-2 rounded-full shadow"
            src="/images/fisios/amanda2.jpeg"
            alt="Person"
          />
          <div className="flex flex-col items-center">
            <p className="text-lg font-bold">Amanda de Sousa Grah</p>
            <p className="text-sm text-gray-800 my-3">
              Fisioterapeuta (CREFITO -10 240620-F)
            </p>
            <p className="text-base text-justify">
              Responsável técnico do Espaço Viver Mais Pilates, é graduada pela
              Universidade do Sul de Santa Catarina e pós graduanda em Gestão da
              Saúde com ênfase em Administração Estratégica. Além disso, têm
              cursos em:
            </p>
            <ul className="list-disc text-sm px-4 mt-3 flex flex-col w-full">
              <li>Pilates completo (Edcel Rosa)</li>
              <li>Neopilates (Amanda Braz)</li>
              <li>Aprimoramento em Pilates (Grupo Voll Pilates)</li>
              <li>Pilates Para Gestantes e Baby Pilates (Grupo Voll Pilates)</li>
              <li>Pilates kids (Grupo Voll Pilates)</li>
              <li>Treinamento Funcional (Equipe Ivana Henn)</li>
              <li>Workshop de Flexibilidade e Força (Marcella Contursi)</li>
              <li>
                Avaliação e tratamento das lesões do joelho e quadril (GMK
                cursos)
              </li>
              <li>Ventosaterapia (Instituto Cefisa de Ensino em Saúde)</li>
              <li>Kinesio Tape (K-Taping International Academy)</li>
            </ul>
          </div>
        </div>
        {/** DIVISAO FISIOS 
        <div className="flex flex-col items-center">
          <img
            className="object-cover object-top w-40 h-40 mb-2 rounded-full shadow"
            src="/images/fisios/sabrina1.jpeg"
            alt="Person"
          />
          <div className="flex flex-col items-center">
            <p className="text-lg font-bold">Sabrina Pickler</p>
            <p className="text-sm text-gray-800 my-3">
              Fisioterapeuta (CREFITO -10 309203-F)
            </p>
            <p className="text-base text-justify">
              Graduada pelo Instituto de Ensino Superior da Grande Florianópolis
              (IESGF) e pós graduada em Fisioterapia Ortopédica e Traumatológica
              pela faculdade Estácio. Além disso, têm cursos em:
            </p>
            <ul className="list-disc text-sm px-4 mt-3 flex flex-col w-full">
              <li>Pilates completo - Edcel Rosa</li>
              <li>Pilates para gestante - Instituto Cefisa de Ensino em Saúde</li>
              <li>Pilates para coluna lombar - Edcel Rosa </li>
              <li>Pilates terapêutico - Edcel Rosa</li>
              <li>Ventosaterapia - Instituto RS educação e saúde. </li>
              <li>Bandagem Elástica Funcional - Instituto RS educação e saúde.</li>
              <li>Liberação Miofacial - Instituto RS educação e saúde.</li>
            </ul>
          </div>
        </div>
        */}
        {/** DIVISAO FISIOS 
        <div className="flex flex-col items-center">
          <img
            className="object-cover object-top w-40 h-40 mb-2 rounded-full shadow"
            src="/images/fisios/DudaFisio.jpeg"
            alt="Person"
          />
          <div className="flex flex-col items-center">
            <p className="text-lg font-bold">Eduarda de Souza</p>
            <p className="text-sm text-gray-800 my-3">
            Fisioterapeuta (CREFITO -10 370659-F)
            </p>
            <p className="text-base text-justify">
            Graduada pela Universidade do Sul de Santa Catarina (UNISUL). Além disso, têm cursos em:
            </p>
            <ul className="list-disc text-sm px-4 mt-3 flex flex-col w-full">
              <li>Pilates completo - Edcel Rosa</li>
              <li>Avançado em patologias - Keyner Luiz</li>
              <li>Pilates para idosos - Grupo Voll Pilates</li>
              <li>Pilates para gestantes - Grupo Voll Pilates</li>
            </ul>
          </div>
        </div>
        */}
        {/** DIVISAO FISIOS 
        <div className="flex flex-col items-center">
          <img
            className="object-cover object-top w-40 h-40 mb-2 rounded-full shadow"
            src="/images/fisios/thaisfisio.jpeg"
            alt="Person"
          />
          <div className="flex flex-col items-center">
            <p className="text-lg font-bold">Thaís Silveira de Oliveira</p>
            <p className="text-sm text-gray-800 my-3">
              Fisioterapeuta (CREFITO -10 320899-F)
            </p>
            <p className="text-base text-justify">
            Graduada pelo Instituto de Ensino Superior da Grande Florianópolis (IESGF) e pós graduada em Fisioterapia Cardiorrespiratória pela faculdade Anhanguera. Além disso, têm cursos em:
            </p>
            <ul className="list-disc text-sm px-4 mt-3 flex flex-col w-full">
              <li>Pilates completo - Edcel Rosa</li>
              <li>Workshop diástase - Érika Batista </li>
              <li>Flexibilidade no pilates - Marcela contursi Five</li>
              <li>Ventosaterapia - Sete de Setembro </li>
              <li>Massagem modeladora - Vitta Derm </li>
              <li>Massagem relaxante - Sete de Setembro </li>
              <li>Bambuterapia - Sete de Setembro </li>
              <li>Drenagem linfática - Sete de Setembro </li>
            </ul>
          </div>
        </div>
        */}
      </div>
    </div>
  );
}
