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
          Aqui, você é cuidado por fisioterapeutas que utilizam o Pilates como ferramenta para fortalecer o corpo, aliviar dores e promover bem-estar no dia a dia.
        </p>
      </div>
      <div className="grid gap-10 mx-auto lg:max-w-screen-lg grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {/* Amanda */}
        <div className="flex flex-col items-center">
          <img
            className="object-cover object-top w-40 h-40 mb-2 rounded-full shadow"
            src="/images/fisios/amanda2.jpeg"
            alt="Amanda de Sousa Grah"
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
        {/* Denise Coelho */}
        <div className="flex flex-col items-center">
          <img
            className="object-cover object-top w-40 h-40 mb-2 rounded-full shadow"
            src="/images/fisios/denise.jpeg"
            alt="Denise Coelho"
          />
          <div className="flex flex-col items-center">
            <p className="text-lg font-bold">Denise Coelho</p>
            <p className="text-sm text-gray-800 my-3">
              Fisioterapeuta (CREFITO -10 302537-F)
            </p>
            <p className="text-base text-justify">
              Graduada pela Universidade do Sul de Santa Catarina (UNISUL). Além disso, têm cursos em:
            </p>
            <ul className="list-disc text-sm px-4 mt-3 flex flex-col w-full">
              <li>Pilates completo</li>
              <li>Bandagem Neuromuscular – FisioTaping</li>
              <li>Curso de Ventosaterapia</li> 
              <li>Master Class Tornozelo, Pé e Palmilhas</li>
              <li>Estabilização Segmentar Lombar</li>
              <li>Instabilidade do Joelho</li>
              <li>Impacto Femuroacetabular do Quadril</li>
            </ul>
          </div>
        </div>
        {/* Jhulian Covre Rodrigues */}
        <div className="flex flex-col items-center">
          <img
            className="object-cover object-top w-40 h-40 mb-2 rounded-full shadow"
            src="/images/fisios/jhulian.jpeg"
            alt="Jhulian Covre Rodrigues"
          />
          <div className="flex flex-col items-center">
            <p className="text-lg font-bold">Jhulian Covre Rodrigues</p>
            <p className="text-sm text-gray-800 my-3">
              Fisioterapeuta (CREFITO-10 370180-F)
            </p>
            <p className="text-base text-justify">
              Graduada pela Universidade do Sul de Santa Catarina (UNISUL), pós-graduada em Fisioterapia Dermatofuncional e Cosmetologia Avançada e pós- graduanda em Fisioterapia Gerontológica e Geriátrica e em Fisiologia do exercício e treinamento desportivo. Além disso, têm cursos em:
            </p>
            <ul className="list-disc text-sm px-4 mt-3 flex flex-col w-full">
              <li>Pilates completo</li>
              <li>Socorrista APH</li>
              <li>Fisioterapia no Pós-Parto</li>
              <li>Exercícios rotacionais</li>
              <li>Bases do treinamento físico, periodização e prescrição</li>
            </ul>
          </div>
        </div>
        {/* Thaís */}
        <div className="flex flex-col items-center">
          <img
            className="object-cover object-top w-40 h-40 mb-2 rounded-full shadow"
            src="/images/fisios/tamiris.jpeg"
            alt="Tamiris Patrícia dos Santos "
          />
          <div className="flex flex-col items-center">
            <p className="text-lg font-bold">Tamiris Patrícia dos Santos</p>
            <p className="text-sm text-gray-800 my-3">
              Fisioterapeuta (CREFITO-10 448295-F)
            </p>
            <p className="text-base text-justify">
              Graduada pela Universidade do Sul de Santa Catarina (UNISUL).
            </p>
            <ul className="list-disc text-sm px-4 mt-3 flex flex-col w-full">
              <li>Curso de Pilates Completo – Edcel Rosa</li>
              <li>Extensão em Comunicação em Saúde – Universidade do Sul de Santa Catarina</li>
              <li>Projeto de Extensão Motiva Down – Universidade do Sul de Santa Catarina</li>
              <li>Extensão em Ventosaterapia – Universidade do Sul de Santa Catarina</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
