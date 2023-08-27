import Image from "next/image";
import automotiva from '../../public/assets/services/service4.png'

export default function Reviews() {
  return (
    <section className="flex items-center justify-center bg-gray-100">
      <div className="px-5 py-20 mx-auto max-w-7xl">
        <div className="px-4 mb-10 md:text-center md:mb-20">
          <h2 className="pb-2 text-2xl font-bold text-gray-900 md:text-4xl dark:text-gray-600">
            Avaliações
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
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div
            className="w-full p-4 text-center transition-all bg-white rounded shadow dark:bg-gray-700 hover:shadow-lg">
            <div className="inline-block mb-4 rounded-full">
              <Image class="rounded-full"
                width={100}
                height={100}
                src={automotiva}
                alt="Logo Estofados 10/10"
              />
            </div>
            <ul className="flex items-center justify-center mb-4">
              <li>
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    className="w-4 mr-1 text-yellow-300 bi bi-star-fill"
                    viewBox="0 0 16 16">
                    <path
                      d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                    </path>
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    className="w-4 mr-1 text-yellow-300 bi bi-star-fill"
                    viewBox="0 0 16 16">
                    <path
                      d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                    </path>
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    className="w-4 mr-1 text-yellow-300 bi bi-star-fill"
                    viewBox="0 0 16 16">
                    <path
                      d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                    </path>
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    className="w-4 mr-1 text-yellow-300 bi bi-star-fill"
                    viewBox="0 0 16 16">
                    <path
                      d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                    </path>
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    className="w-4 mr-1 text-yellow-300 bi bi-star-fill"
                    viewBox="0 0 16 16">
                    <path
                      d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                    </path>
                  </svg>
                </a>
              </li>
            </ul>
            <p className="mb-4 text-base text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem cupiditate similique,
              iure minus sed fugit obcaecati minima quam reiciendis dicta!
            </p>
            <div className="inline-block ">
              <h2 className="mb-1 text-lg font-semibold text-gray-900 dark:text-gray-400">
                Sikha Singh </h2>

            </div>
          </div>
          <div
            className="w-full p-4 text-center transition-all bg-white rounded shadow dark:bg-gray-700 hover:shadow-lg">
            <div className="inline-block mb-4 rounded-full">
              <Image class="rounded-full"
                width={100}
                height={100}
                src={automotiva}
                alt="Logo Estofados 10/10"
              />
            </div>
            <ul className="flex items-center justify-center mb-4">
              <li>
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    className="w-4 mr-1 text-yellow-300 bi bi-star-fill"
                    viewBox="0 0 16 16">
                    <path
                      d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                    </path>
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    className="w-4 mr-1 text-yellow-300 bi bi-star-fill"
                    viewBox="0 0 16 16">
                    <path
                      d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                    </path>
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    className="w-4 mr-1 text-yellow-300 bi bi-star-fill"
                    viewBox="0 0 16 16">
                    <path
                      d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                    </path>
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    className="w-4 mr-1 text-yellow-300 bi bi-star-fill"
                    viewBox="0 0 16 16">
                    <path
                      d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                    </path>
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    className="w-4 mr-1 text-yellow-300 bi bi-star-fill"
                    viewBox="0 0 16 16">
                    <path
                      d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                    </path>
                  </svg>
                </a>
              </li>
            </ul>
            <p className="mb-4 text-base text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem cupiditate similique,
              iure minus sed fugit obcaecati minima quam reiciendis dicta!
            </p>
            <div className="inline-block ">
              <h2 className="mb-1 text-lg font-semibold text-gray-900 dark:text-gray-400">
                Sikha Singh </h2>

            </div>
          </div>
          <div
            className="w-full p-4 text-center transition-all bg-white rounded shadow dark:bg-gray-700 hover:shadow-lg">
            <div className="inline-block mb-4 rounded-full">
              <Image class="rounded-full"
                width={100}
                height={100}
                src={automotiva}
                alt="Logo Estofados 10/10"
              />
            </div>
            <ul className="flex items-center justify-center mb-4">
              <li>
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    className="w-4 mr-1 text-yellow-300 bi bi-star-fill"
                    viewBox="0 0 16 16">
                    <path
                      d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                    </path>
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    className="w-4 mr-1 text-yellow-300 bi bi-star-fill"
                    viewBox="0 0 16 16">
                    <path
                      d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                    </path>
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    className="w-4 mr-1 text-yellow-300 bi bi-star-fill"
                    viewBox="0 0 16 16">
                    <path
                      d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                    </path>
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    className="w-4 mr-1 text-yellow-300 bi bi-star-fill"
                    viewBox="0 0 16 16">
                    <path
                      d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                    </path>
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    className="w-4 mr-1 text-yellow-300 bi bi-star-fill"
                    viewBox="0 0 16 16">
                    <path
                      d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                    </path>
                  </svg>
                </a>
              </li>
            </ul>
            <p className="mb-4 text-base text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem cupiditate similique,
              iure minus sed fugit obcaecati minima quam reiciendis dicta!
            </p>
            <div className="inline-block ">
              <h2 className="mb-1 text-lg font-semibold text-gray-900 dark:text-gray-400">
                James Hawkin </h2>

            </div>
          </div>
          <div
            className="w-full p-4 text-center transition-all bg-white rounded shadow dark:bg-gray-700 hover:shadow-lg">
            <div className="inline-block mb-4 rounded-full">
              <Image class="rounded-full"
                width={100}
                height={100}
                src={automotiva}
                alt="Logo Estofados 10/10"
              />
            </div>
            <ul className="flex items-center justify-center mb-4">

              <li>
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    className="w-4 mr-1 text-yellow-300 bi bi-star-fill"
                    viewBox="0 0 16 16">
                    <path
                      d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                    </path>
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    className="w-4 mr-1 text-yellow-300 bi bi-star-fill"
                    viewBox="0 0 16 16">
                    <path
                      d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                    </path>
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    className="w-4 mr-1 text-yellow-300 bi bi-star-fill"
                    viewBox="0 0 16 16">
                    <path
                      d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                    </path>
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    className="w-4 mr-1 text-yellow-300 bi bi-star-fill"
                    viewBox="0 0 16 16">
                    <path
                      d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                    </path>
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    className="w-4 mr-1 text-yellow-300 bi bi-star-fill"
                    viewBox="0 0 16 16">
                    <path
                      d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                    </path>
                  </svg>
                </a>
              </li>
            </ul>
            <p className="mb-4 text-base text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem cupiditate similique,
              iure minus sed fugit obcaecati minima quam reiciendis dicta!
            </p>
            <div className="inline-block ">
              <h2 className="mb-1 text-lg font-semibold text-gray-900 dark:text-gray-400">
                Harish K.C </h2>

            </div>
          </div>
          <div
            className="w-full p-4 text-center transition-all bg-white rounded shadow dark:bg-gray-700 hover:shadow-lg">
            <div className="inline-block mb-4 rounded-full">
              <Image class="rounded-full"
                width={100}
                height={100}
                src={automotiva}
                alt="Logo Estofados 10/10"
              />
            </div>
            <ul className="flex items-center justify-center mb-4">
              <li>
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    className="w-4 mr-1 text-yellow-300 bi bi-star-fill"
                    viewBox="0 0 16 16">
                    <path
                      d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                    </path>
                  </svg>
                </a>
              </li>

              <li>
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    className="w-4 mr-1 text-yellow-300 bi bi-star-fill"
                    viewBox="0 0 16 16">
                    <path
                      d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                    </path>
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    className="w-4 mr-1 text-yellow-300 bi bi-star-fill"
                    viewBox="0 0 16 16">
                    <path
                      d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                    </path>
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    className="w-4 mr-1 text-yellow-300 bi bi-star-fill"
                    viewBox="0 0 16 16">
                    <path
                      d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                    </path>
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    className="w-4 mr-1 text-yellow-300 bi bi-star-fill"
                    viewBox="0 0 16 16">
                    <path
                      d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                    </path>
                  </svg>
                </a>
              </li>
            </ul>
            <p className="mb-4 text-base text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem cupiditate similique,
              iure minus sed fugit obcaecati minima quam reiciendis dicta!
            </p>
            <div className="inline-block ">
              <h2 className="mb-1 text-lg font-semibold text-gray-900 dark:text-gray-400">
                Smith Thapa </h2>

            </div>
          </div>
          <div
            className="w-full p-4 text-center transition-all bg-white rounded shadow dark:bg-gray-700 hover:shadow-lg">
            <div className="inline-block mb-4 rounded-full">
              <Image class="rounded-full"
                width={100}
                height={100}
                src={automotiva}
                alt="Logo Estofados 10/10"
              />
            </div>
            <ul className="flex items-center justify-center mb-4">
              <li>
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    className="w-4 mr-1 text-yellow-300 bi bi-star-fill"
                    viewBox="0 0 16 16">
                    <path
                      d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                    </path>
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    className="w-4 mr-1 text-yellow-300 bi bi-star-fill"
                    viewBox="0 0 16 16">
                    <path
                      d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                    </path>
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    className="w-4 mr-1 text-yellow-300 bi bi-star-fill"
                    viewBox="0 0 16 16">
                    <path
                      d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                    </path>
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    className="w-4 mr-1 text-yellow-300 bi bi-star-fill"
                    viewBox="0 0 16 16">
                    <path
                      d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                    </path>
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    className="w-4 mr-1 text-yellow-300 bi bi-star-fill"
                    viewBox="0 0 16 16">
                    <path
                      d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                    </path>
                  </svg>
                </a>
              </li>
            </ul>
            <p className="mb-4 text-base text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem cupiditate similique,
              iure minus sed fugit obcaecati minima quam reiciendis dicta!
            </p>
            <div className="inline-block ">
              <h2 className="mb-1 text-lg font-semibold text-gray-900 dark:text-gray-400">
                Raj Tuladhar </h2>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
