import React from "react";
import Footer from "../landing-page/components/footer";

export default function Login() {
  return (
    <div class="min-h-screen  py-6 flex flex-col justify-center sm:py-12">
      <div class="relative py-3 sm:max-w-xl sm:mx-auto">
        <div class="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div class="max-w-md mx-auto">
            <form>
              <div>
                <a
                  href="#"
                  class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-black"
                >
                  <img
                    class="w-11 h-10 mr-3"
                    src="https://th.bing.com/th/id/OIP.x80UhvL6HqBiVLNgLqDC5AAAAA?pid=ImgDet&w=360&h=360&rs=1"
                    alt="logo"
                  />
                  Cloverisk.
                </a>
              </div>
              <div class="divide-y divide-gray-200">
                <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div class="relative">
                    <label for="usrername" class="block font-medium mr-32">
                      Email
                    </label>
                    <input
                      type="text"
                      v-model="email"
                      class="mt-1 p-2 rounded border w-60"
                      required
                    />
                  </div>
                  <div class="relative">
                    <label for="password" class="block font-medium mr-32">
                      Password
                    </label>
                    <input
                      classtype="password"
                      v-model="password"
                      class="mt-1 p-2 rounded border w-60"
                      required
                    />
                  </div>
                  <div class="relative">
                    <button
                      type="submit"
                      class="bg-green-500 text-white rounded-md px-2 py-1"
                    >
                      Login
                    </button>
                  </div>
                </div>
              </div>
              <p class="text-center text-sm text-gray-500">
                No Have Account?
                <a class="underline" href="/signup">
                  Sign Up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
