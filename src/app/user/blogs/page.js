import Footer from "@/components/user/footer/page";
import Navbar from "@/components/user/navbar/page";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegUser } from "react-icons/fa6";

const AllBlogs = () => {
  const data = [
    {
      content:
        " React is a powerful JavaScript library for building user interfaces. In this comprehensive guide, we'll explore the fundamentals of React, from setting up a development environment to building complex, interactive applications.",
      title: "Mastering React: A Comprehensive Guide",
      writerName: "John Doe",
      datetime: "June 1, 2023",
      image: "/images/image.jpg",
    },
    {
      content:
        " React is a powerful JavaScript library for building user interfaces. In this comprehensive guide, we'll explore the fundamentals of React, from setting up a development environment to building complex, interactive applications.",
      title: "Mastering React: A Comprehensive Guide",
      writerName: "John Doe",
      datetime: "June 1, 2023",
      image: "/images/image.jpg",
    },
    {
      content:
        " React is a powerful JavaScript library for building user interfaces. In this comprehensive guide, we'll explore the fundamentals of React, from setting up a development environment to building complex, interactive applications.",
      title: "Mastering React: A Comprehensive Guide",
      writerName: "John Doe",
      datetime: "June 1, 2023",
      image: "/images/image.jpg",
    },
    {
      content:
        " React is a powerful JavaScript library for building user interfaces. In this comprehensive guide, we'll explore the fundamentals of React, from setting up a development environment to building complex, interactive applications.",
      title: "Mastering React: A Comprehensive Guide",
      writerName: "John Doe",
      datetime: "June 1, 2023",
      image: "/images/image.jpg",
    },
  ];
  return (
    <>
      <div class="bg-white text-foreground">
        <Navbar />
        <main class="container mx-auto py-12 px-4 md:px-6">
          <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {data.map((items) => {
              return (
                <div key={items} className="bg-white p-4 rounded-lg shadow">
                  <Image
                    src={items.image}
                    width={1600}
                    height={800}
                    alt="Post thumbnail"
                    className="w-full h-60 object-cover rounded-lg mb-4"
                  />
                  <span className=" p-1.5 bg-blue-600 text-white rounded-full text-[0.8rem]">
                    Technology
                  </span>
                  <h3 className="text-lg font-bold mt-2">
                    <Link href={""}>{items.title}</Link>
                  </h3>
                  <div className="flex items-center mt-2">
                    <FaRegUser />
                    <div className="ml-2">
                      <p className="text-sm">{items.writerName}</p>
                      <p className="text-xs text-gray-500">{items.datetime}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default AllBlogs;
