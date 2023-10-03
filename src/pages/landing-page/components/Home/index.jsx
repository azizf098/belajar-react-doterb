import React from "react";
const Home = (props) => {
  return (
    <div>
      <div className="w-full">
        <div className="relative mx-auto flex flex-col px-4 sm:max-w-xl md:max-w-screen-xl md:flex-row">
          <div className="my-auto mx-auto mt-8 w-full max-w-xl md:mt-56 lg:max-w-screen-xl ">
            <div className="mb-16 lg:mb-0 lg:max-w-lg">
              <div className="mb-6 max-w-xl">
                <div>
                  <p className="bg-teal-accent-400 mb-2 inline-block rounded-full px-3 py-px text-xs font-semibold uppercase tracking-wider text-red-900">
                    <u>Road To Shopping</u>
                  </p>
                </div>
                <h2 className="mb-6 max-w-lg text-3xl font-bold tracking-tight text-slate-700 sm:text-5xl sm:leading-snug">
                  Disc All Product
                  <br />
                  <span className="inline-block font-bold text-gray-800">
                    Only One Day
                  </span>
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                  Discounts only apply to One Day, add to cart immediately and
                  buy now !
                </p>
              </div>
              <div className="flex items-center">
                <a
                  href="/"
                  class="mr-6 inline-flex h-12 items-center justify-center rounded bg-green-600 px-6 font-bold tracking-wide text-black shadow-md outline-none transition duration-200 hover:bg-indigo-400 focus:ring"
                >
                  {" "}
                  SHOP NOW{" "}
                </a>
              </div>
            </div>
          </div>
          <div className="flex h-full w-full space-x-3 overflow-hidden md:justify-end lg:px-2">
            <div className="my-auto mb-20 hidden w-56 flex-col space-y-3 md:mt-36 lg:flex">
              <div className="rounded-xl bg-gray-400 pt-10">
                <img
                  className="h-full w-full object-contain"
                  src="https://img.freepik.com/free-vector/color-sport-sneaker_98292-3191.jpg?size=626&ext=jpg&ga=GA1.1.1547102529.1690510917&semt=ais"
                  alt=""
                />
              </div>
            </div>
            <div className="my-auto flex space-x-3 rounded-xl md:mt-36 md:w-60 md:flex-col md:space-y-3 md:space-x-0 md:px-4">
              <div className="h-40 overflow-hidden rounded-xl bg-gray-600/60">
                <img
                  className="mx-auto h-full w-full object-contain object-bottom"
                  src="https://img.freepik.com/free-photo/shoes_1203-8153.jpg?size=626&ext=jpg&ga=GA1.1.1547102529.1690510917&semt=ais"
                  alt=""
                />
              </div>
              <div className="h-40 overflow-hidden rounded-xl bg-gray-600/60">
                <img
                  className="mx-auto h-full w-full object-contain object-bottom"
                  src="https://img.freepik.com/free-photo/fashion-shoes_1203-7555.jpg?size=626&ext=jpg&ga=GA1.1.1547102529.1690510917&semt=ais"
                  alt=""
                />
              </div>
              <div className="h-40 overflow-hidden rounded-xl bg-gray-600/60">
                <img
                  className="mx-auto h-full w-full object-contain object-bottom"
                  src="https://img.freepik.com/free-photo/new-black-sneakers-isolated-white-background_93675-135051.jpg?size=626&ext=jpg&ga=GA1.1.1547102529.1690510917&semt=ais"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <center>
        <hr className="mb-4 h-1.5 w-1/4 bg-gray-600" />
        <h2 className="bg-teal-accent-400 mb-2 inline-block rounded-full px-3 py-px text-lg-20 font-semibold uppercase tracking-wider text-red-900">
          Promo Sale
        </h2>
      </center>
      <div className="grid grid-cols-3 gap-3 m-14">
        <div className="relative m-10 w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md">
          <img
            className="h- rounded-t-lg object-cover"
            src="https://img.freepik.com/free-photo/new-black-sneakers-isolated-white-background_93675-135051.jpg?size=626&ext=jpg&ga=GA1.1.1547102529.1690510917&semt=ais"
            alt="product image"
          />

          <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">
            Disc
          </span>
          <div className="mt-4 px-5 pb-5">
            <div className="flex items-center justify-between">
              <p>
                <span className="text-3xl font-bold text-slate-900">$12</span>
                <span className="text-sm text-slate-900 line-through">
                  {" "}
                  $20
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="relative m-10 w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md">
          <img
            className="h- rounded-t-lg object-cover"
            src="https://img.freepik.com/free-photo/fashion-shoes_1203-7555.jpg?size=626&ext=jpg&ga=GA1.1.1547102529.1690510917&semt=ais"
            alt="product image"
          />
          <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">
            Disc
          </span>
          <div className="mt-4 px-5 pb-5">
            <div className="flex items-center justify-between">
              <p>
                <span className="text-3xl font-bold text-slate-900">$12</span>
                <span className="text-sm text-slate-900 line-through">$20</span>
              </p>
            </div>
          </div>
        </div>
        <div className="relative m-10 w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md">
          <img
            className="h- rounded-t-lg object-cover"
            src="https://img.freepik.com/free-photo/shoes_1203-8153.jpg?size=626&ext=jpg&ga=GA1.1.1547102529.1690510917&semt=ais"
            alt="product image"
          />
          <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">
            Disc
          </span>
          <div className="mt-4 px-5 pb-5">
            <div className="flex items-center justify-between">
              <p>
                <span className="text-3xl font-bold text-slate-900">$12</span>
                <span className="text-sm text-slate-900 line-through">$20</span>
              </p>
            </div>
          </div>
        </div>
        <div className="relative m-10 w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md">
          <img
            className="h- rounded-t-lg object-cover"
            src="https://img.freepik.com/free-photo/background-red-retro-model-tennis_1203-3993.jpg?size=626&ext=jpg&ga=GA1.1.1547102529.1690510917&semt=ais"
            alt="product image"
          />
          <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">
            Disc
          </span>
          <div className="mt-4 px-5 pb-5">
            <div className="flex items-center justify-between">
              <p>
                <span className="text-3xl font-bold text-slate-900">$12</span>
                <span className="text-sm text-slate-900 line-through">$20</span>
              </p>
            </div>
          </div>
        </div>
        <div className="relative m-10 w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md">
          <img
            className="h- rounded-t-lg object-cover"
            src="https://img.freepik.com/free-photo/shoes-men-white-top-two_1203-6455.jpg?size=626&ext=jpg&ga=GA1.1.1547102529.1690510917&semt=ais"
            alt="product image"
          />
          <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">
            Disc
          </span>
          <div className="mt-4 px-5 pb-5">
            <div className="flex items-center justify-between">
              <p>
                <span className="text-3xl font-bold text-slate-900">$12</span>
                <span className="text-sm text-slate-900 line-through">$20</span>
              </p>
            </div>
          </div>
        </div>
        <div className="relative m-10 w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md">
          <img
            className="h- rounded-t-lg object-cover"
            src="https://img.freepik.com/free-photo/new-pair-white-sneakers-isolated-white_93675-135053.jpg?size=626&ext=jpg&ga=GA1.1.1547102529.1690510917&semt=ais"
            alt="product image"
          />
          <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">
            Disc
          </span>
          <div className="mt-4 px-5 pb-5">
            <div className="flex items-center justify-between">
              <p>
                <span className="text-3xl font-bold text-slate-900">$12</span>
                <span className="text-sm text-slate-900 line-through">$20</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
