/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Logo from '../../public/logo.png'


const navigation = [
  { name: "Sobre", href: "#about" },
  { name: "Serviços", href: "#services" },
  { name: "Avaliações", href: "#reviews" },
  { name: "Contato", href: "#footer" },
];

export default function Hero() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="2 10 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="60,0 100,0 50,100 50,0" />
          </svg>

          <Popover>
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
              <nav
                className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                aria-label="Global"
              >
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <a href="#">
                      <span className="sr-only">Workflow</span>
                      <Image
                        width={200}
                        height={200}
                        src={Logo}
                        alt="Logo Estofados 10/10"
                      />
                    </a>
                    <div className="-mr-2 flex items-center md:hidden">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-900 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-400">
                        <span className="sr-only">Open main menu</span>
                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8 ">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="font-medium text-gray-900 relative inline-block group"
                    >
                      {item.name}
                      <div className="h-0.5 w-0 bg-blue-400 absolute bottom-0 left-0 transition-all duration-300 group-hover:w-full"></div>
                    </a>
                  ))}

                </div>
              </nav>
            </div>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              >
                <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="px-5 pt-4 flex items-center justify-between">
                    <div>
                      <Image
                        className="h-8 w-auto"
                        width={200}
                        height={200}
                        src={Logo}
                        alt="Logo Estofados 10/10"
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-900 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-400">
                        <span className="sr-only">Close main menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="px-2 pt-2 pb-3 space-y-1">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 font-medium text-gray-900 relative group "
                      >
                        {item.name}
                        <div className="h-1 w-0 bg-blue-400 transition-all duration-300 group-hover:w-20"></div>
                      </a>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left ">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline font-bold">
                  Estofados impecáveis, conforto elevado: sua escolha em{" "}
                  <span className="text-blue-400">Limpeza</span>
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-700 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Na Estofados 10/10, oferecemos serviços de limpeza e higienização que vão além das expectativas. Solicite um orçamento agora e descubra como podemos elevar o conforto dos seus espaços.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-400 hover:bg-blue-800 md:py-4 md:text-lg md:px-10"
                  >
                    Fazer um Orçamento
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-5/6"
          src="https://img.freepik.com/fotos-gratis/um-zangado-homem-jovem-olhar-mulher-sorridente-videogame-jogando-cozinha_23-2148152792.jpg?w=900&t=st=1693788311~exp=1693788911~hmac=07aea54af8f379346ec01340b4bdb24868082e8089ab8d07db99cd38a8c20d8d"
          alt="Imagem de uma mulher jogando video-game no sofa, com um homem atras do sofa" />
      </div>
    </div>
  );
}
