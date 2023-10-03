import React from "react";    
import Home from "./components/home"
import Contact from "./components/contact/index";

export function Header() {
    return (
      <div>
      <Home/>
<center> <hr className="mb-4 h-1.5 w-1/4 bg-gray-600" /></center>
<section className="bg-white border-b py-8">
      <div className="container mx-auto flex flex-wrap pt-4 pb-12">
        <h2 className="w-full my-2 text-3xl font-semibold uppercase  leading-tight text-center text-red-900">
          About Us
        </h2>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div className="w-full md:w-1/3 p-6 flex flex-col bg-gray-200 flex-grow flex-shrink">
          <div className="flex-1 bg-gray-300 rounded-t rounded-b-none overflow-hidden shadow">
            <br></br>
              <div className="w-full font-bold text-xl text-gray-800 px-6">
                Website Shopping.
              </div>
              <p className="text-gray-800 text-base px-6 mb-5">
                Menjadi website belanja online khususnya pada produk sepatu yang tersedia untuk seluruh wilayah.
              </p>
          </div>
          <div className="flex-none mt-auto bg-gray-300 rounded-b rounded-t-none overflow-hidden shadow p-6">
            <div className="flex items-center justify-start">
              <button className="inline-block rounded-full bg-blue-400 px-6 pb-2 pt-2.5 text-xs font-bold  leading-center text-black-900 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200">
                Action
              </button>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 p-6 flex flex-col bg-gray-200 flex-grow flex-shrink">
          <div className="flex-1 bg-gray-300 rounded-t rounded-b-none overflow-hidden shadow">
            <br></br>
              <div className="w-full font-bold text-xl text-gray-800 px-6">
                Website Dibekali Penawaran
              </div>
              <p className="text-gray-800 text-base px-6 mb-5">
                Menawarkan produk sepatu yang menarik untuk konsumen, dengan berbagai varian menarik.
              </p>
          </div>
          <div className="flex-none mt-auto bg-gray-300 rounded-b rounded-t-none overflow-hidden shadow p-6">
            <div className="flex items-center justify-center">
              <button className="inline-block rounded-full bg-blue-400 px-6 pb-2 pt-2.5 text-xs font-bold  leading-center text-black-900 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200">
                Action
              </button>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 p-6 flex flex-col bg-gray-200 flex-grow flex-shrink">
          <div className="flex-1 bg-gray-300 rounded-t rounded-b-none overflow-hidden shadow">
            <br></br>
              <div className="w-full font-bold text-xl text-gray-800 px-6">
                Menyediakan Banyak Diskon
              </div>
              <p className="text-gray-800 text-base px-6 mb-5">
                Tersedia banyak diskon yang tersedia bagi para konsumen pada setiap minggunya namun bersifat terbatas.
              </p>
          </div>
          <div className="flex-none mt-auto bg-gray-300 rounded-b rounded-t-none overflow-hidden shadow p-6">
            <div className="flex items-center justify-end">
              <button className="inline-block rounded-full bg-blue-400 px-6 pb-2 pt-2.5 text-xs font-bold  leading-center text-black-900 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200">
                Action
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Contact/>
</div>
)
}
export default Header;