/* eslint-disable @next/next/no-img-element */
export default function Services() {
  return (
    <section id="services" className="relative" >
      <div className="flex-1 max-w-6xl mx-auto">
        <div div className="px-32 mb-10 md:text-center">
          <h2 className="pb-2 px-4 text-2xl font-bold text-gray-900 md:text-4xl dark:text-gray-600">
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
        <div className="grid lg:grid-cols-4 text-center">
          <div className="mx-3 mt-6 flex flex-col rounded-lg bg-gradient-to-r from-blue-500 from-10% via-sky-500 via-30% to-blue-500 to-90%">
            <img className="rounded-t-lg"
              src="https://img.freepik.com/fotos-gratis/carro-lindo-no-servico-de-limpeza-de-interiores_23-2149212255.jpg?w=900&t=st=1693752762~exp=1693753362~hmac=e5576aebf35a0efc02e067df4a3a9e5c65e551bc5c1486fb157624d5b2969e23"
              alt="Carro limpo no interior"
            />
            <div className="p-2">
              <h5 className="mt-6 text-2xl font-medium text-gray-900 truncate">
                Limpeza Automotiva
              </h5>
              <p className="mb-4 text-base font-semibold text-gray-700 mt-5">
                A manutenção automotiva desempenha um papel vital na preservação da estética e higiene do seu veículo. Seja particular ou corporativo, a equipe da Estofados 10/10 oferece a solução ideal para essa necessidade.
              </p>
            </div>
          </div>
          <div className="mx-3 mt-6 flex flex-col rounded-lg bg-gradient-to-r from-blue-500 from-10% via-sky-500 via-30% to-blue-500 to-90%">
            <img className="rounded-t-lg"
              src="https://img.freepik.com/fotos-gratis/vista-frontal-mulher-limpando-casa_23-2150453344.jpg?w=900&t=st=1693755695~exp=1693756295~hmac=1acfc5098b34a4656bca20aa159d16598a438ff5829086bbac5fae280d20932f"
              alt="Palm Springs Road" />

            <div className="p-2">
              <h5 className="mt-6 text-2xl font-medium text-gray-900 truncate">
                Limpeza de Estofados
              </h5>
              <p className="mb-4 text-base font-semibold text-gray-700 mt-5">
                Preservar a higiene dos estofados, garantindo a ausência de poeira, bactérias, fungos e outras impurezas, pode proporcionar uma série de vantagens para você, sua saúde e seu conforto.
              </p>
            </div>
          </div>
          <div className="mx-3 mt-6 flex flex-col rounded-lg bg-gradient-to-r from-blue-500 from-10% via-sky-500 via-30% to-blue-500 to-90%">
            <img
              className="rounded-t-lg"
              src="https://img.freepik.com/fotos-gratis/fundo-de-gota-de-agua_23-2147787455.jpg?w=900&t=st=1693756889~exp=1693757489~hmac=2ef44c66ae7dcfa895144347f02f9d69207ba5f62458c84c7d3616ba8b37d8a2"
              alt="Skyscrapers" />

            <div className="p-2">
              <h5 className="mt-6 text-2xl font-medium text-gray-900 truncate">
                Impermeabilização
              </h5>
              <p className="mb-4 text-base font-semibold text-gray-700 mt-5">
                Garantir a durabilidade e o aspecto impecável de móveis estofados é um objetivo compartilhado por muitos. É aqui que a impermeabilização se destaca como um procedimento essencial.
              </p>
            </div>
          </div>
          <div className="mx-3 mt-6 flex flex-col rounded-lg bg-gradient-to-r from-blue-500 from-10% via-sky-500 via-30% to-blue-500 to-90%">
            <img
              className="rounded-t-lg"
              src="https://img.freepik.com/fotos-gratis/close-de-um-aspirador-de-po-em-uma-sala-de-estar_181624-51417.jpg?w=900&t=st=1693757658~exp=1693758258~hmac=73cc27307a401434f30fec2d26fadaa9e905983a3c7004aaa296583ae844872f"
              alt="Los Angeles Skyscrapers" />

            <div className="p-2">
              <h5 className="mt-6 text-2xl font-medium text-gray-900 truncate">
                Carpetes & Tapetes
              </h5>
              <p className="mb-4 text-base font-semibold text-gray-700 mt-5">
                Visto que tapetes são elementos decorativos amplamente empregados em residências, apartamentos e estabelecimentos comerciais, é essencial assegurar sua limpeza regular e a eliminação de agentes desencadeadores de alergias.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}