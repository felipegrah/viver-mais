import React from 'react'

export default function Rodape() {
  return (
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
        <div className="md:max-w-md lg:col-span-2">
          <a
            href="/"
            aria-label="Voltar para home"
            title="Espaço Viver Mais Pilates"
            className="inline-flex items-center"
          >

            <img
              className="h-20 w-auto sm:h-28"
              src="/images/Logo_viver_mais.png"
            />

          </a>
          <div className="mt-4 lg:max-w-sm">
            <p className="text-sm text-gray-800">
            <span className="font-bold">Endereço: </span>R. Ialene Schutz Horstmann, 233 - Aririu, Palhoça - SC, 88135-221
            </p>
            <p className="mt-4 text-sm text-gray-800">
              <span className="font-bold">Telefone:</span> <a href="tel:98826-8600">(48) 98826-8600</a>
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">

        </div>
      </div>
      <div className="flex flex-col justify-between pt-5 pb-10 border-t sm:flex-row">
        <div className="flex items-center mt-4 space-x-3 sm:mt-0">
          <a
            href="https://www.instagram.com/espacovivermaispilates"
            className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
          >
            <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
              <circle cx="15" cy="15" r="4" />
              <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
            </svg>
          </a>
          <a
            href="https://www.facebook.com/espacovivermaispilates"
            className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
              <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}
