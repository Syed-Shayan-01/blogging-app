/* eslint-disable @next/next/no-img-element */
// import { div } from "@/components/ui/div"
import Footer from "@/components/user/footer/page";
import Navbar from "@/components/user/navbar/page";
import Image from "next/image";
import { FaRegUser } from "react-icons/fa6";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <section className="mb-8">
          <div className="relative">
            <Image src="/images/image.jpg" width={1800} height={900} alt="Main post" className="w-[100%] h-[70vh] object-cover rounded-lg" />
            <div className="hidden lg:block absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg">
              <span className=" p-1.5 bg-blue-600 text-white rounded-full text-[0.8rem]">Technology</span>
              <h2 className=" text-xl font-bold mt-2 lg:w-[30rem]">
                Technology is the door through which you step into a new world.
              </h2>
              <div className="flex items-center mt-2">
                <FaRegUser />
                <div className="ml-2">
                  <p className="text-sm">Syed Shayan</p>
                  <p className="text-xs text-gray-500">June 28, 2024</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mb-8 text-center">
          <div className="border p-4 rounded-lg bg-gray-200">Advertisement: You can place ads 750x100</div>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Latest Post</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="bg-white p-4 rounded-lg shadow">
                <Image src="/images/image.jpg" width={1600} height={800} alt="Post thumbnail" className="w-full h-60 object-cover rounded-lg mb-4" />
                <span className=" p-1.5 bg-blue-600 text-white rounded-full text-[0.8rem]">Technology</span>
                <h3 className="text-lg font-bold mt-2">
                  The Impact of Technology on the Workplace: How Technology is Changing
                </h3>
                <div className="flex items-center mt-2">
                 <FaRegUser />
                  <div className="ml-2">
                    <p className="text-sm">Jason Francisco</p>
                    <p className="text-xs text-gray-500">August 20, 2022</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="mb-8 text-center">
          <button variant="outline">View All Post</button>
        </section>
        <section className="mb-8 text-center">
          <div className="border p-4 rounded-lg bg-gray-200">Advertisement: You can place ads 750x100</div>
        </section>
      </main>
      <Footer />
    </div>
  )
}