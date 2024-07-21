import Logo from '@/components/user/logo/page'
import React from 'react'

const AdminLogin = () => {
    return (
        <>
            <div class="flex min-h-screen items-center justify-center bg-gray-50 text-gray-600">
                <div class="relative">
                    <div class="relative sm:w-full md:w-[30rem] rounded-lg border-gray-400 bg-white shadow-lg px-4">
                        <div class="p-6">

                            <div class="py-6 flex items-center justify-center overflow-hidden">
                                <Logo />
                            </div>

                            <h4 class="mb-2 text-xl font-medium text-gray-700">Welcome to Blogee!</h4>
                            <p class="mb-6 text-gray-500">Only Admin can Login this Page!</p>

                            <form id="" action="#" method="POST">
                                <div class="mb-4">
                                    <label for="email" class="block mb-2 text-xs font-medium uppercase text-gray-700">Email</label>
                                    <input type="email" id="email" name="email-username" placeholder="Enter your email"
                                        class="block w-full px-3 py-2 text-sm border rounded-md border-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" />
                                </div>
                                <div class="mb-4">
                                    <div class="flex items-center justify-between">
                                        <label for="password" class="block mb-2 text-xs font-medium uppercase text-gray-700">Password</label>
                                        <a href="#" class="text-blue-500 hover:text-blue-600">Forgot Password?</a>
                                    </div>
                                    <input type="password" id="password" name="password" placeholder="********"
                                        class="block w-full px-3 py-2 text-sm border rounded-md border-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" />
                                </div>
                                <div class="mb-4">
                                    <button type="submit"
                                        class="w-full px-5 py-2 text-sm font-medium text-white uppercase bg-blue-500 border border-blue-500 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                                        Sign in
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AdminLogin