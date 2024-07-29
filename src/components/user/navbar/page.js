"use client";
import Logo from "@/components/user/logo/page";
import Link from "next/link";
import { useState } from "react";
import { GrMenu } from "react-icons/gr";
import { IoCloseSharp } from "react-icons/io5";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/user/blogs/", label: "All Blogs" },
    { href: "/user/yourblogs", label: "Your Blogs" },
    { href: "/user/contact", label: "Contact us" },
  ];

  return (
    <header className="shadow">
      <div className="relative flex justify-between items-center max-w-screen-xl px-4 py-4 mx-auto">
        <Link
          href="/"
          className="flex items-center whitespace-nowrap text-2xl font-black"
        >
          <span className="mr-2 text-4xl text-blue-600">
            <span className="text-[1.7rem] text-blue-600">
              <i className="fa-solid fa-dumbbell"></i>
            </span>
          </span>
          <Logo />
        </Link>
        <button
          onClick={toggleMenu}
          className="z-50 p-2 text-gray-600 hover:text-blue-600 focus:outline-none"
          aria-label="Toggle Navigation"
        >
          {menuOpen ? (
            <IoCloseSharp className="text-2xl" />
          ) : (
            <GrMenu className="text-2xl" />
          )}
        </button>

        {/* Drawer */}
        <nav
          className={`fixed top-0 right-0 bottom-0 z-40 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex flex-col items-start space-y-4 p-4 mt-16">
            {menuItems.map((item, index) => (
              <li key={index} className="w-full">
                <Link
                  href={item.href}
                  className="block text-gray-600 text-[1.2rem] py-2 px-4 hover:text-blue-600 transition-all duration-300 ease-in-out relative group"
                  onClick={toggleMenu}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Overlay */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30"
            onClick={toggleMenu}
          ></div>
        )}
      </div>
    </header>
  );
}