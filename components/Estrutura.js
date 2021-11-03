import React from 'react'

export default function Estrutura() {
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
          <div className="mx-auto mb-20 lg:max-w-xl sm:text-center">
          <h4 className="tracking-tight font-extrabold text-green-600 sm:text-5xl md:text-6xl px-3 py-px mb-4 text-xs uppercase">
            Estrutura
          </h4>
        </div>
            <div className="max-w-xl mb-6">
              <h3 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Temos estacionamento, recepção aconchegante e um amplo espaço para realização do método Pilates e Neopilates.
              </h3>
            </div>
          </div>
          <div className="flex items-center justify-center -mx-4 lg:pl-8">
            <div className="flex flex-col items-end px-3">
              <img
                className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                src="/images/interior/interior_2.jpg"
                alt=""
              />
              <img
                className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                src="/images/interior/interior_3.jpg"
                alt=""
              />
            </div>
            <div className="px-3">
              <img
                className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                src="/images/interior/interior_4.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
