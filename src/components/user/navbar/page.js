'use client'
import Link from "next/link";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <header className="bg-white shadow">
                <div className="container mx-auto px-4 py-6 flex justify-between items-center">
                    <div className="text-2xl font-bold">MetaBlog</div>
                    <div className="block lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
                        >
                            <svg
                                className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                            </svg>
                            <svg
                                className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                            </svg>
                        </button>
                    </div>
                    <nav className={`flex space-x-4 ${isOpen ? "block" : "hidden"}`}>

                        <Link href="/" className="hover:text-blue-500">
                            Home
                        </Link>
                        <Link href="#" className="hover:text-blue-500">
                            Blog
                        </Link>
                        <Link href="/user/singleblog/" className="hover:text-blue-500">
                            Single Post
                        </Link>
                        <Link href="#" className="hover:text-blue-500">
                            Pages
                        </Link>
                        <Link href="#" className="hover:text-blue-500">
                            Contact
                        </Link>

                        <div className="flex space-x-4">
                            <input type="text" placeholder="Search" className="border rounded px-2 py-1" />
                            <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
                                <IoIosSearch className="h-6 w-6 text-gray-700" />
                            </button>
                        </div> </nav>
                </div>
            </header >
        </>
    )
}

export default Navbar


