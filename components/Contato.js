import React from "react";

export default function Contato() {
  return (
    <section className="body-font bg-green-100 h-300 pb-10" id="contato">
      <div>
        <div className="mx-auto lg:max-w-xl sm:text-center mb-10">
          <h4 className="tracking-tight font-extrabold text-green-600 sm:text-5xl md:text-6xl px-3 py-px m-4 text-xs uppercase pt-20">
            Endereço
          </h4>
        </div>
        <div className="relative w-400">
          <iframe
            width="100%"
            height="400"
            className=""
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1196.2809880571015!2d-48.68439242137361!3d-27.674093245004574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95274b2db7d5c725%3A0xa99b0e1285e5f9a7!2sEspa%C3%A7o%20Viver%20Mais%20Pilates!5e0!3m2!1spt-BR!2sbr!4v1631139656056!5m2!1spt-BR!2sbr"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
