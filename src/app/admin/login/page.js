import Logo from "@/components/user/logo/page";
import React from "react";

const AdminLogin = () => {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-gray-50 text-gray-600">
        <div className="relative">
          <div className="relative sm:w-full md:w-[30rem] rounded-lg border-gray-400 bg-white shadow-lg px-4">
            <div className="p-6">
              <div className="py-6 flex items-center justify-center overflow-hidden">
                <Logo />
              </div>

              <h4 className="mb-2 text-xl font-medium text-gray-700">
                Welcome to Blogee!
              </h4>
              <p className="mb-6 text-gray-500">
                Only Admin can Login this Page!
              </p>

              <form id="" action="#" method="POST">
                <div className="mb-4">
                  <label
                    for="email"
                    className="block mb-2 text-xs font-medium uppercase text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email-username"
                    placeholder="Enter your email"
                    className="block w-full px-3 py-2 text-sm border rounded-md border-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <div className="flex items-center justify-between">
                    <label
                      for="password"
                      className="block mb-2 text-xs font-medium uppercase text-gray-700"
                    >
                      Password
                    </label>
                    <a href="#" className="text-blue-500 hover:text-blue-600">
                      Forgot Password?
                    </a>
                  </div>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="********"
                    className="block w-full px-3 py-2 text-sm border rounded-md border-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <button
                    type="submit"
                    className="w-full px-5 py-2 text-sm font-medium text-white uppercase bg-blue-500 border border-blue-500 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
