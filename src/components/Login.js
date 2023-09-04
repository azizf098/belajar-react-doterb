import React from 'react';

export default function Login() {
    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring ring-2 ring-purple-600 lg:max-w-xl">
            <div className="flex justify-center">
                <img 
                    alt=""
                    className="h-16,5 w-16,5"
                    src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"/>
            </div>
                <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Sign in
                </h1>
                <form className="mt-6">
                    <div className="mb-2">
                        <label
                            for="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label for="password" className="block text-sm font-semibold text-gray-800"
                        >Password
                        </label>
                        <input type="password" className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
                    </div>
                    <a href="#" className="text-xs text-purple-600 hover:underline">
                        Forget Password?
                    </a>
                    <div className="mt-6"> 
                        <a href='/home' className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                            Login
                        </a>
                    </div>
                </form>

                <p className="mt-8 text-xs font-bold text-center text-gray-700">
                    {" "}
                    Don't have an account? {""}
                    <a href="#" className="font-medium text-purple-600 hover:underline">
                        Sign up
                    </a>
                </p>
            </div>
        </div>
    );
}