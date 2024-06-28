

const Footer = () => {
    return (
        <>
            <footer className="bg-white py-8">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <h3 className="text-lg font-bold mb-2">About</h3>
                            <p >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua.
                            </p>
                            <p className="mt-4">Email: info@example.net</p>
                            <p>Phone: 880 123 456 789</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-2">Quick Link</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className="hover:text-blue-500">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-blue-500">
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-blue-500">
                                        Blog
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-blue-500">
                                        Archived
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-blue-500">
                                        Author
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-blue-500">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-2">Category</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className="hover:text-blue-500">
                                        Lifestyle
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-blue-500">
                                        Technology
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-blue-500">
                                        Travel
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-blue-500">
                                        Business
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-blue-500">
                                        Economy
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-blue-500">
                                        Sports
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-2">Weekly Newsletter</h3>
                            <p>Get blog articles and offers via email</p>
                            <div className="mt-4">
                                <input type="email" placeholder="Your Email" className="border rounded px-2 py-1 w-full" />
                                <button className="mt-2 w-full bg-blue-600 text-white p-2 rounded-md">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 text-center border-t pt-4">
                        <p>&copy; MetaBlog 2023. All Rights Reserved.</p>
                        <div className="flex justify-center space-x-4 mt-2">
                            <a href="#" className="hover:text-blue-500">
                                Terms of Use
                            </a>
                            <a href="#" className="hover:text-blue-500">
                                Privacy Policy
                            </a>
                            <a href="#" className="hover:text-blue-500">
                                Cookie Policy
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer 