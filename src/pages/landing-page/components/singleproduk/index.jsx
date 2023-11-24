import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../../../api/ProductContext";
import { CartContext } from "../../../../api/CartContext";

function SingleProduk() {
  const { id } = useParams();
  const { products,isLoading } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const product = products.find((item) => {
    return item.id === parseInt(id);
  })
  const {title, image, price, description, category} = product;
  if (isLoading) {
    return (
      <div>
        <br></br>
        <br></br>
        <br></br>
        <div class="flex justify-center items-center h-full">
          <img
            class="h-16 w-16"
            src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif"
            alt=""
          />
        </div>
      </div>
    );
  }
  return (
    <div>
          <section class="py-12 sm:py-16">
            <div>
              <div class="container mx-auto px-4">
                <nav class="flex">
                  <ol role="list" class="flex items-center">
                    <li class="text-left">
                      <div class="-m-1">
                        <a
                          href="/"
                          class="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                        >
                          Home{" "}
                        </a>
                      </div>
                    </li>

                    <li class="text-left">
                      <div class="flex items-center">
                        <span class="mx-2 text-gray-400">/</span>
                        <div class="-m-1">
                          <a
                            href="/shop"
                            class="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                          >
                            Products{" "}
                          </a>
                        </div>
                      </div>
                    </li>

                    <li class="text-left">
                      <div class="flex items-center">
                        <span class="mx-2 text-gray-400">/</span>
                      </div>
                    </li>
                  </ol>
                </nav>

                <div class="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
                  <div class="lg:col-span-3 lg:row-end-1">
                    <div class="lg:flex lg:items-start">
                      <div class="lg:order-2 lg:ml-5">
                        <div class="max-w-xl overflow-hidden rounded-lg">
                          <img
                            class="max-w-full object-contain h-48 w-96 pt-6"
                            src={image}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="lg:col-span-2 lg:row-span-2 lg:row-end-2">
                    <h1 class="sm: text-2xl font-bold text-gray-900 sm:text-3xl">
                      {title}
                    </h1>
                    <hr/>
                    <br></br>
                    <div class="lg:col-span-2 lg:row-span-2 lg:row-end-2">
                    <h5 className="text-sm capitalize text-gray-700 mb-1">
                  {category}
                </h5>
                    </div>

                    <div class="mt-5 flex items-center">
                      <div class="flex items-center">
                        <svg
                          class="block h-4 w-4 align-middle text-yellow-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            class=""
                          ></path>
                        </svg>
                        <svg
                          class="block h-4 w-4 align-middle text-yellow-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            class=""
                          ></path>
                        </svg>
                        <svg
                          class="block h-4 w-4 align-middle text-yellow-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            class=""
                          ></path>
                        </svg>
                        <svg
                          class="block h-4 w-4 align-middle text-yellow-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            class=""
                          ></path>
                        </svg>
                        <svg
                          class="block h-4 w-4 align-middle text-yellow-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            class=""
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div class="flex items-center mt-5">
                      <button class="border rounded-md py-2 px-4 mr-2">
                        -
                      </button>
                      <span class="text-center w-20 border rounded-md py-2 px-2">
                        1
                      </span>
                      <button class="border rounded-md py-2 px-4 ml-2">
                        +
                      </button>
                    </div>

                    <div class="absolute top-0 right-1 flex sm:bottom-0 sm:top-auto">
                      <button
                        type="button"
                        class="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900"
                      >
                        <svg
                          class="block h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                            class=""
                          ></path>
                        </svg>
                      </button>
                    </div>

                    <div class="mt-10 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
                      <div class="flex items-end">
                        <h1 class="text-3xl font-bold">Rp.{price}</h1>
                      </div>
                      <br></br>
                      <br></br>
                      <br></br>
                      <div>
                        <button
                          onClick={() => addToCart(product)}
                          class="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-gray-900 bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="shrink-0 mr-3 h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                            />
                          </svg>
                          + Keranjang
                        </button>
                      </div>
                    </div>
                  </div>

                  <div class="lg:col-span-3">
                    <div class="border-b border-gray-300">
                      <nav class="flex gap-4">
                        <a
                          href="#"
                          title=""
                          class="border-b-2 border-gray-900 py-4 text-sm font-medium text-gray-900 hover:border-gray-400 hover:text-gray-800"
                        >
                          Deskripsi{" "}
                        </a>
                      </nav>
                    </div>

                    <div class="mt-8 flow-root sm:mt-12">
                      <p class="mt-4">{description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
    </div>
  );
}
export default SingleProduk;
