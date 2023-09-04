/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function AboutUs() {
  return (
    <section id="about" className="relative isolate overflow-hidden py-20 sm:py-32">
      <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
        <div className="flex flex-col items-center justify-center mb-10 md:text-center md:mb-20">
          <h2 className="text-2xl font-bold text-gray-900 md:text-4xl dark:text-gray-600 mb-2">
            Sobre
          </h2>
          <div className="flex w-32 mt-1 mb-6 overflow-hidden rounded">
            <div className="flex-1 h-2 bg-blue-200"></div>
            <div className="flex-1 h-2 bg-blue-400"></div>
            <div className="flex-1 h-2 bg-blue-300"></div>
          </div>
        </div>
        <div className="flex flex-wrap items-center">
          <div className="w-full px-4 mb-10 md:w-1/2 lg:mb-0 ">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 ">
              Bem-vindo à <span className="caret-blue-500 md:caret-indigo-500">Estofados 10/10</span>, onde a excelência encontra a inovação na arte de limpar e higienizar estofados.
            </h2>
            <p className="mb-5 text-lg leading-7 text-gray-700 ">
              Nossa paixão por elevar o conforto e a beleza dos espaços nos impulsiona a oferecer serviços de limpeza e cuidados excepcionais para estofados de todos os tipos. Somos mais do que apenas uma empresa de limpeza - somos criadores de ambientes que transformam suas peças de estofado em obras-primas impecáveis.
            </p>
            <ul className="columns-2 flex gap-2 justify-center">
              <li className="flex items-center mb-4 text-base text-blue-800 px-4">
                <span className="text-5xl text-blue-800 mr-2">2</span>
                <span className="font-bold text-xl">Anos de experiência</span>
              </li>
              <li className="flex items-center mb-4 text-base text-blue-800 px-4">

                <span className="text-4xl text-blue-800 mr-2">+50</span>
                <span className="font-bold text-xl">Clientes Satisfeitos</span>
              </li>
            </ul>
          </div>
          <div className="relative w-full px-4 mb-10 md:w-1/2 m-auto ">
            <img
              className="object-cover"
              src="https://img.freepik.com/fotos-gratis/familia-em-casa_23-2148166828.jpg?w=900&t=st=1693790792~exp=1693791392~hmac=3f7ee98f9d455bc031cf1285878fd1132d1b77769b1eab5dc70db0dbb6046d56"
              alt="Imagem de uma familia atras do sofa" />
          </div>
        </div>
      </div>
    </section>
  );
}
