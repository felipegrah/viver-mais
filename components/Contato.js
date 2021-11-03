import React from 'react'

export default function Contato() {


  function handleOnSubmit(e) {
    console.log(e.currentTarget.elements)
    e.preventDefault();
    let formData = {};
    Array.from(e.currentTarget.elements).forEach(field => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });

    fetch('/api/contato', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    }).then((res) => {
      console.log('Response received')
      if (res.status === 200) {
        console.log('Response succeeded!')
      }
    })

  }



  return (
    <section className="text-gray-600 body-font relative bg-green-100" id="contato">
      <div className="mx-auto lg:max-w-xl sm:text-center">
        <h4 className="tracking-tight font-extrabold text-green-600 sm:text-5xl md:text-6xl px-3 py-px m-4 text-xs uppercase pt-20">
          Contato
        </h4>

      </div>
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe width="100%" height="100%" className="absolute inset-0" frameBorder="0" marginHeight="0" marginWidth="0" title="map" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1196.2809880571015!2d-48.68439242137361!3d-27.674093245004574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95274b2db7d5c725%3A0xa99b0e1285e5f9a7!2sEspa%C3%A7o%20Viver%20Mais%20Pilates!5e0!3m2!1spt-BR!2sbr!4v1631139656056!5m2!1spt-BR!2sbr" width="100%" height="600" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
        </div>
        <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <form onSubmit={handleOnSubmit}>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-xl font-semibold text-gray-600">Nome</label>
              <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required/>
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-xl font-semibold text-gray-600">E-mail</label>
              <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required/>
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-xl font-semibold text-gray-600">Mensagem</label>
              <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" required></textarea>
            </div>
            <button className="text-white bg-green-700 border-0 py-2 px-6 focus:outline-none hover:bg-green-800 rounded text-lg">Enviar</button>
          </form>
        </div>
      </div>
    </section>
  )
}
