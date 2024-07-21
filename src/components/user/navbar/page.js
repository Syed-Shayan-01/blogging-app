'use client'
import { useState } from "react";
import { GrMenu } from "react-icons/gr";
import { IoCloseSharp } from "react-icons/io5";
export default function Navbar() {
    const [MenuOpen, isMenuOpen] = useState(false);

    const toggleIcon = () => {
        isMenuOpen(!MenuOpen)
    }
    return (
        <header className="shadow">
            <div
                className="relative flex justify-between max-w-screen-xl flex-col overflow-hidden px-4 py-4 md:mx-auto md:flex-row md:items-center">
                <a href="/" className="flex items-center whitespace-nowrap text-2xl font-black">
                    <span className="mr-2 text-4xl text-blue-600">
                        <span className="text-[1.7rem] text-blue-600"><i className="fa-solid fa-dumbbell"></i></span>
                    </span>
                    <span className="text-black text-[2rem]">My Blogee</span>
                </a>
                <input type="checkbox" className="peer hidden" id="navbar-open" />
                <label onClick={toggleIcon} className="absolute top-6 right-7 cursor-pointer md:hidden" htmlFor="navbar-open">
                    <span className="sr-only">Toggle Navigation</span>
                    {!MenuOpen && <span className="text-[1.2rem] hover:bg-blue-600 "><GrMenu /></span>}
                    {MenuOpen && <span span className="text-[1.2rem] hover:bg-blue-600 "><IoCloseSharp /></span>}
                </label>
                <nav aria-label="Header Navigation"
                    className="peer-checked:mt-8 peer-checked:max-h-56 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all md:ml-24 md:max-h-full md:flex-row md:items-start">
                    <ul className="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">
                        <li className="text-gray-600 md:mr-12 text-[1.2rem] py-1 hover:text-blue-600"><a href="/">Home</a>
                        </li>
                        <li className="text-gray-600 md:mr-12 text-[1.2rem] py-1 hover:text-blue-600"><a href="/user/blogs/">Blogs</a>
                        </li>
                        <li className="text-gray-600 md:mr-12 text-[1.2rem] py-1 hover:text-blue-600">
                            <a href="/contact.html">Contact us</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header >
    );
}
