import Image from "next/image";
import estofado from '../../public/assets/services/service1.jpg'
import Impermeabilização from '../../public/assets/services/service2.jpeg'
import tapetes from '../../public/assets/services/service3.jpg'
import automotiva from '../../public/assets/services/service4.png'

/* eslint-disable @next/next/no-img-element */
export default function Services() {
  return (
    <section className="flex items-center bg-white">
      <div className="p-2 mx-auto max-w-6xl">
        <div className="px-4 mb-10 md:text-center md:mb-20">
          <h2 className="pb-2 text-2xl font-bold text-gray-900 md:text-4xl dark:text-gray-600">
            Serviços
          </h2>
          <div className="flex w-32 mt-1 mb-6 overflow-hidden rounded md:mx-auto md:mb-14">
            <div className="flex-1 h-2 bg-blue-200">
            </div>
            <div className="flex-1 h-2 bg-blue-400">
            </div>
            <div className="flex-1 h-2 bg-blue-300">
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:gap-8 sm:gap-4 sm:grid-cols-2 lg:grid-cols-2">
          <div className="flex flex-wrap mb-0 overflow-hidden bg-white rounded shadow dark:bg-gray-700">
            <div className="relative w-full overflow-hidden lg:w-2/5 h-72">
              <Image
                style={{
                  width: '100%',
                  height: 'auto',
                }}
                sizes="100vw"
                src={estofado}
                alt="Logo Estofados 10/10"
              />
            </div>
            <div className="items-center self-center flex-1 p-6">
              <h2 className="mb-1 text-3xl font-semibold text-gray-800 dark:text-gray-300">Limpeza de Estofados</h2>
              <p className="mb-4 text-sm leading-7 text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam
              </p>

            </div>
          </div>
          <div className="flex flex-wrap mb-0 overflow-hidden bg-white rounded shadow dark:bg-gray-700">
            <div className="relative w-full overflow-hidden lg:w-2/5 h-72">
              <Image
                width={500}
                height={660}
                src={Impermeabilização}
                alt="Logo Estofados 10/10"
              />
            </div>
            <div className="items-center self-center flex-1 p-6">
              <h2 className="mb-1 text-3xl font-semibold text-gray-800 dark:text-gray-300">Impermeabilização</h2>

              <p className="mb-4 text-sm leading-7 text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam
              </p>

            </div>
          </div>
          <div className="flex flex-wrap mb-0 overflow-hidden bg-white rounded shadow dark:bg-gray-700">
            <div className="relative w-full overflow-hidden lg:w-2/5 h-72">
              <Image
                width={500}
                height={660}
                src={tapetes}
                alt="Logo Estofados 10/10"
              />
            </div>
            <div className="items-center self-center flex-1 p-6">
              <h2 className="mb-1 text-3xl font-semibold text-gray-800 dark:text-gray-300">Limpeza Automotiva</h2>

              <p className="mb-4 text-sm leading-7 text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam
              </p>

            </div>
          </div>
          <div className="flex flex-wrap mb-0 overflow-hidden bg-white rounded shadow dark:bg-gray-700">
            <div className="relative w-full overflow-hidden lg:w-2/5 h-72">
              <Image
                width={500}
                height={660}
                src={automotiva}
                alt="Logo Estofados 10/10"
              />
            </div>
            <div className="items-center self-center flex-1 p-6">
              <h2 className="mb-1 text-3xl font-semibold text-gray-800 dark:text-gray-300">Carpetes & Tapetes</h2>
              <p className="mb-4 text-sm leading-7 text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
