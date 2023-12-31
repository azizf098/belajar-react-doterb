import React, { useContext } from "react";
import Footer from "../footer/index";
import { ProductContext } from "../../../../api/ProductContext";
import { useDeleteProduct } from "../../../../api/product";
import { Link } from "react-router-dom";
import { BsFillTrash3Fill } from "react-icons/bs";
import { CartContext } from "../../../../api/CartContext";

function Shop(hasMargin) {
  const { products, isLoading } = useContext(ProductContext);
  const deleteProduct = useDeleteProduct();
  console.log(products)
  const { addToCart } = useContext(CartContext);

  const filteredProducts = products.filter((item) => {
    return item;
  });
  if (isLoading) {
    return (
      <div>
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

  const handleDeleteProduct = (productId) => {
    deleteProduct.mutate(productId);
  };
  return (
    <div className="">
      <center>
      <div className="py-5 sm:max-w-xl m-auto items-center">
        <h2 className="bg-teal-accent-400 mb-w inline-block rounded-full px-3 py-px-8 text-lg-20 font-semibold uppercase tracking-wider text-black-900">
        List Product
        </h2>
        <hr className="mb-4 h-1.5 w-1/4 bg-green-300" />
        </div>
        </center>
      <div className="grid md:grid-cols-3 gap-8 mt-10 pl-5 max-w-fit mx-auto">
        {filteredProducts.map((produk) => {
          return (
            <div
              className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              key={produk.id}
            >
              <div
                className="flex justify-center items-right text-black h-15 w-15 cursor-pointer pt-2 pr-3 duration-150 hover:text-red-500"
                style={hasMargin ? { marginLeft: "22rem" } : {}}
              >
                <button onClick={() => handleDeleteProduct(produk.id)}>
                  <BsFillTrash3Fill className="text-3x1 right-item" />
                </button>
              </div>
              <Link to={`/singleproduk/${produk.id}`}>
              <img
                className="rounded-t-lg object-contain h-48 w-96 pt-6"
                src={produk.image}
              />
              </Link>
              <div className="mt-5 px-6 pb-6">
              <h5 className="text-sm capitalize text-gray-700 mb-1">
                  {produk.category}
                </h5>
                <h5 className="text-xl font-semibold tracking-tight text-slate-900">
                  {produk.title.substring(0, 21) + "..."}
                </h5>
                <div className="mt-2.5 mb-5 flex items-center">
                  <svg
                    className="w-4 h-4 text-yellow-300 mr-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-yellow-300 mr-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-yellow-300 mr-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-yellow-300 mr-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-gray-200 dark:text-gray-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                    5.0
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">
                    ${produk.price}
                  </span>
                    <button onClick={() => addToCart(filteredProducts)}
                      className="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                      Add To Cart
                    </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
export default Shop;
