import React from 'react'

export default function Servicos() {
  return (
    <section className="bg-green-100" id="servicos">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="mx-auto mb-20 lg:max-w-xl sm:text-center">
          <h4 className="tracking-tight font-extrabold text-green-600 sm:text-5xl md:text-6xl px-3 py-px mb-4 text-xs uppercase">
            Serviços
          </h4>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="max-w-xl pr-16 mx-auto mb-10">
            <h5 className="mb-6 text-3xl font-extrabold leading-none uppercas text-gray-900">
              Pilates
            </h5>
            <p className="mb-6 text-gray-900">
              O Pilates é um método de exercício físico e alongamento que utiliza o peso do próprio corpo na sua execução. É uma técnica de reeducação do movimento que visa trabalhar o corpo todo, trazendo equilíbrio muscular e mental.
              Ele trabalha vários grupos musculares ao mesmo tempo, através de movimentos suaves e contínuos, com ênfase na concentração, no fortalecimento e na estabilização dos músculos centrais do corpo
            </p>
          </div>
          <div className="grid gap-5 row-gap-5 sm:grid-cols-2">
            <div className="max-w-md">
              <h6 className="mb-6 text-3xl font-extrabold leading-none uppercas text-gray-900">Neopilates</h6>
              <p className="text-sm text-gray-700">
                As diferenças entre Pilates e Neopilates são as variações de movimentos e aparelhos.
                Neopilates utilizamos tecidos, lyra, slackline etc. que nos tiram a base estável, fazendo com que o grau de dificuldade e desafio aumentem.
              </p>
            </div>
            <div className="max-w-md">
              <h6 className="mb-6 text-3xl font-extrabold leading-none uppercas text-gray-900">Pilates para gestante</h6>
              <p className="text-sm text-gray-700">
                Quando a mulher engravida seu corpo sofre diferentes mudanças. Com a prática do Pilates essas alterações podem ficar mais suaves e saudáveis, pois o método ajuda no fortalecimento de toda a musculatura.
              </p>
            </div>
            <div className="max-w-md">
              <h6 className="mb-6 text-3xl font-extrabold leading-none uppercas text-gray-900">Pilates kids</h6>
              <p className="text-sm text-gray-700">
                Além de ser uma atividade leve e divertida para as crianças ele trabalha a concentração, postura, coordenação motora, entre outros.
              </p>
            </div>
            <div className="max-w-md">
              <h6 className="mb-6 text-3xl font-extrabold leading-none uppercas text-gray-900">Pilates Solo</h6>
              <p className="text-sm text-gray-700">
                O Pilates solo, como o próprio nome já diz é praticado no chão sobre um tatame ou colchonete utilizando o peso do próprio corpo. Esse método pode ter o auxilio de alguns acessórios como bolas, faixas elásticas, halteres, rolos de espuma.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
