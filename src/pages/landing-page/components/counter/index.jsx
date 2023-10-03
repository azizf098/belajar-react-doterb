import React, { useState } from "react";
import Footer from "../footer";

const Counter = () => {
  // Counter is a state initialized to 0
  const [counter, setCounter] = useState(0);

  const tambah = () => {
    setCounter(counter + 1);
  };
  const kurang = () => {
    setCounter(counter - 1);
  };
  const reset = () => {
    setCounter(0);
  };

  return (
    <div>
      <br></br><br></br><br></br>
      <div className="w-full p-5 m-auto bg-white rounded-md shadow-xl shadow-red-600/40 ring ring-2 ring-blue-600 lg:max-w-xl">
        <div className="mb-3 pt-0">
          <h3 className="text-center text-gray-800 font-bold text-s">
            Counter App
          </h3>
        </div>
        <br></br>
        <div className="mb-3 pt-0 text-center font-bold">{counter}</div>
        <br></br><br></br>
        <div className="mb-3 pt-0 text-center">
          <button
            onClick={kurang}
            class="inline-block rounded-full bg-red-500 px-6 pb-2 pt-2.5 text-xs font-bold leading-center text-black-900 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
          >
            Kurang
          </button>
          <button
            onClick={tambah}
            class="inline-block rounded-full bg-green-500 px-6 pb-2 pt-2.5 text-xs font-bold  leading-center text-black-900 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
          >
            Tambah
          </button>
        </div>
        <div className="mb-3 pt-0 text-center">
          <button
            onClick={reset}
            class="inline-block rounded-full bg-blue-400 px-6 pb-2 pt-2.5 text-xs font-bold  leading-center text-black-900 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
          >
            Reset
          </button>
        </div>
      </div>
      <br></br>
      <Footer />
    </div>
  );
};

export default Counter;
