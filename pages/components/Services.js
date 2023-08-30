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
          <h2 className="pb-2 text-2xl font-bold md:text-4xl text-gray-600">
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
        <div className="grid gap-5 lg:gap-8 lg:grid-cols-2">
          <div className="flex flex-wrap mb-0 overflow-hidden justify-center rounded shadow bg-blue-700">
            <div className="relative w-full overflow-hidden lg:w-2/5 h-72 max-w-xs transition duration-300 hover:scale-110">
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
              <h2 className="mb-3 text-3xl font-bold text-gray-300 tracking-tighter">Limpeza de Estofados</h2>
              <p className="mb-4 text-sm leading-7 text-gray-100">
                Preservar a higiene dos estofados, garantindo a ausência de poeira, bactérias, fungos e outras impurezas, pode proporcionar uma série de vantagens para você, sua saúde e seu conforto.
              </p>

            </div>
          </div>
          <div className="flex flex-wrap mb-0 overflow-hidden justify-center rounded shadow bg-blue-700">
            <div className="relative w-full overflow-hidden lg:w-2/5 h-72 max-w-xs transition duration-300 hover:scale-110">
              <Image
                width={500}
                height={660}
                src={Impermeabilização}
                alt="Logo Estofados 10/10"
              />
            </div>
            <div className="items-center self-center flex-1 p-6">
              <h2 className="mb-3 text-3xl font-bold text-gray-300">Impermeabilização</h2>

              <p className="mb-4 text-sm leading-7 text-gray-100">
                Garantir a durabilidade e o aspecto impecável de móveis estofados é um objetivo compartilhado por muitos. É aqui que a impermeabilização se destaca como um procedimento essencial.
              </p>

            </div>
          </div>
          <div className="flex flex-wrap mb-0 overflow-hidden justify-center rounded shadow bg-blue-700">
            <div className="relative w-full overflow-hidden lg:w-2/5 h-72 max-w-xs transition duration-300 hover:scale-110">
              <Image
                width={500}
                height={660}
                src={automotiva}
                alt="Logo Estofados 10/10"
              />
            </div>
            <div className="items-center self-center flex-1 p-6">
              <h2 className="mb-3 text-3xl font-bold text-gray-300 tracking-tighter">Limpeza Automotiva</h2>

              <p className="mb-4 text-sm leading-7 text-gray-100">
                A manutenção automotiva desempenha um papel vital na preservação da estética e higiene do seu veículo. Seja particular ou corporativo, a equipe da Estofados 10/10 oferece a solução ideal para essa necessidade.
              </p>

            </div>
          </div>
          <div className="flex flex-wrap mb-0 overflow-hidden justify-center rounded shadow bg-blue-700">
            <div className="relative w-full overflow-hidden lg:w-2/5 h-72 max-w-xs transition duration-300 hover:scale-110">
              <Image
                width={500}
                height={660}
                src={tapetes}
                alt="Logo Estofados 10/10"
              />
            </div>
            <div className="items-center self-center flex-1 p-6">
              <h2 className="mb-3 text-3xl font-bold text-gray-300">Carpetes & Tapetes</h2>
              <p className="mb-4 text-sm leading-7 text-gray-100">
                Visto que tapetes são elementos decorativos amplamente empregados em residências, apartamentos e estabelecimentos comerciais, é essencial assegurar sua limpeza regular e a eliminação de agentes desencadeadores de alergias, como os ácaros, por exemplo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
