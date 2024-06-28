import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
    return (
        <>
            <header className="bg-white shadow">
                <div className="container mx-auto px-4 py-6 flex justify-between items-center">
                    <div className="text-2xl font-bold">MetaBlog</div>
                    <nav className="flex space-x-4">
                        <a href="#" className="hover:text-blue-500">
                            Home
                        </a>
                        <a href="#" className="hover:text-blue-500">
                            Blog
                        </a>
                        <a href="#" className="hover:text-blue-500">
                            Single Post
                        </a>
                        <a href="#" className="hover:text-blue-500">
                            Pages
                        </a>
                        <a href="#" className="hover:text-blue-500">
                            Contact
                        </a>
                    </nav>
                    <div className="flex space-x-4">
                        <input type="text" placeholder="Search" className="border rounded px-2 py-1" />
                        <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
                             <IoIosSearch className="h-6 w-6 text-gray-700" />
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar