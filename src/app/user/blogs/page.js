import Footer from '@/components/user/footer/page'
import Navbar from '@/components/user/navbar/page'
import React from 'react'

const AllBlogs = () => {
    return (
        <>
            <div class="bg-white text-foreground">
                <Navbar />
                <main class="container mx-auto py-12 px-4 md:px-6">
                    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <div class="rounded-lg bg-card shadow-sm">
                            <a href="#">
                                <img
                                    src="/placeholder.svg"
                                    alt="Blog post image"
                                    width="400"
                                    height="225"
                                    class="h-48 w-full rounded-t-lg object-cover aspect-400-225"
                                />
                            </a>
                            <div class="p-4">
                                <a href="#">
                                    <h2 class="text-lg font-semibold hover:text-primary">Mastering React: A Comprehensive Guide</h2>
                                </a>
                                <div class="mt-2 flex items-center text-sm text-muted-foreground">
                                    <div class="flex items-center">
                                        <img
                                            src="/placeholder.svg"
                                            alt="Author avatar"
                                            width="32"
                                            height="32"
                                            class="h-8 w-8 rounded-full aspect-32-32"
                                        />
                                        <span class="ml-2">John Doe</span>
                                    </div>
                                    <span class="mx-2">·</span>
                                    <time datetime="2023-06-01">June 1, 2023</time>
                                </div>
                                <p class="mt-4 line-clamp-3 text-muted-foreground">
                                    React is a powerful JavaScript library for building user interfaces. In this comprehensive guide, we'll
                                    explore the fundamentals of React, from setting up a development environment to building complex,
                                    interactive applications.
                                </p>
                            </div>
                        </div>
                        <div class="rounded-lg bg-card shadow-sm">
                            <a href="#">
                                <img
                                    src="/placeholder.svg"
                                    alt="Blog post image"
                                    width="400"
                                    height="225"
                                    class="h-48 w-full rounded-t-lg object-cover aspect-400-225"
                                />
                            </a>
                            <div class="p-4">
                                <a href="#">
                                    <h2 class="text-lg font-semibold hover:text-primary">Unleashing the Power of Tailwind CSS</h2>
                                </a>
                                <div class="mt-2 flex items-center text-sm text-muted-foreground">
                                    <div class="flex items-center">
                                        <img
                                            src="/placeholder.svg"
                                            alt="Author avatar"
                                            width="32"
                                            height="32"
                                            class="h-8 w-8 rounded-full aspect-32-32"
                                        />
                                        <span class="ml-2">Jane Smith</span>
                                    </div>
                                    <span class="mx-2">·</span>
                                    <time datetime="2023-05-15">May 15, 2023</time>
                                </div>
                                <p class="mt-4 line-clamp-3 text-muted-foreground">
                                    Tailwind CSS is a utility-first CSS framework that has revolutionized the way we build modern web
                                    applications. In this article, we'll explore the key features of Tailwind CSS and how to leverage its
                                    power to create stunning, responsive designs.
                                </p>
                            </div>
                        </div>
                        <div class="rounded-lg bg-card shadow-sm">
                            <a href="#">
                                <img
                                    src="/placeholder.svg"
                                    alt="Blog post image"
                                    width="400"
                                    height="225"
                                    class="h-48 w-full rounded-t-lg object-cover aspect-400-225"
                                />
                            </a>
                            <div class="p-4">
                                <a href="#">
                                    <h2 class="text-lg font-semibold hover:text-primary">Exploring the Future of Web Development</h2>
                                </a>
                                <div class="mt-2 flex items-center text-sm text-muted-foreground">
                                    <div class="flex items-center">
                                        <img
                                            src="/placeholder.svg"
                                            alt="Author avatar"
                                            width="32"
                                            height="32"
                                            class="h-8 w-8 rounded-full aspect-32-32"
                                        />
                                        <span class="ml-2">Sarah Lee</span>
                                    </div>
                                    <span class="mx-2">·</span>
                                    <time datetime="2023-04-30">April 30, 2023</time>
                                </div>
                                <p class="mt-4 line-clamp-3 text-muted-foreground">
                                    The web development landscape is constantly evolving, with new technologies and frameworks emerging all
                                    the time. In this article, we'll take a deep dive into the latest trends and innovations that are
                                    shaping the future of web development.
                                </p>
                            </div>
                        </div>
                        <div class="rounded-lg bg-card shadow-sm">
                            <a href="#">
                                <img
                                    src="/placeholder.svg"
                                    alt="Blog post image"
                                    width="400"
                                    height="225"
                                    class="h-48 w-full rounded-t-lg object-cover aspect-400-225"
                                />
                            </a>
                            <div class="p-4">
                                <a href="#">
                                    <h2 class="text-lg font-semibold hover:text-primary">Optimizing Website Performance with Next.js</h2>
                                </a>
                                <div class="mt-2 flex items-center text-sm text-muted-foreground">
                                    <div class="flex items-center">
                                        <img
                                            src="/placeholder.svg"
                                            alt="Author avatar"
                                            width="32"
                                            height="32"
                                            class="h-8 w-8 rounded-full aspect-32-32"
                                        />
                                        <span class="ml-2">Michael Johnson</span>
                                    </div>
                                    <span class="mx-2">·</span>
                                    <time datetime="2023-03-20">March 20, 2023</time>
                                </div>
                                <p class="mt-4 line-clamp-3 text-muted-foreground">
                                    Next.js is a powerful React framework that offers a range of features to help you build
                                    high-performance, SEO-friendly web applications. In this article, we'll explore how to leverage Next.js
                                    to optimize your website's performance and deliver a seamless user experience.
                                </p>
                            </div>
                        </div>
                        <div class="rounded-lg bg-card shadow-sm">
                            <a href="#">
                                <img
                                    src="/placeholder.svg"
                                    alt="Blog post image"
                                    width="400"
                                    height="225"
                                    class="h-48 w-full rounded-t-lg object-cover aspect-400-225"
                                />
                            </a>
                            <div class="p-4">
                                <a href="#">
                                    <h2 class="text-lg font-semibold hover:text-primary">
                                        Mastering TypeScript for Scalable Web Applications
                                    </h2>
                                </a>
                                <div class="mt-2 flex items-center text-sm text-muted-foreground">
                                    <div class="flex items-center">
                                        <img
                                            src="/placeholder.svg"
                                            alt="Author avatar"
                                            width="32"
                                            height="32"
                                            class="h-8 w-8 rounded-full aspect-32-32"
                                        />
                                        <span class="ml-2">Emily Chen</span>
                                    </div>
                                    <span class="mx-2">·</span>
                                    <time datetime="2023-02-10">February 10, 2023</time>
                                </div>
                                <p class="mt-4 line-clamp-3 text-muted-foreground">
                                    TypeScript is a powerful superset of JavaScript that adds static typing and other features to help you
                                    build more scalable and maintainable web applications. In this article, we'll explore the key benefits
                                    of TypeScript and how to effectively incorporate it into your development workflow.
                                </p>
                            </div>
                        </div>
                        <div class="rounded-lg bg-card shadow-sm">
                            <a href="#">
                                <img
                                    src="/placeholder.svg"
                                    alt="Blog post image"
                                    width="400"
                                    height="225"
                                    class="h-48 w-full rounded-t-lg object-cover aspect-400-225"
                                />
                            </a>
                            <div class="p-4">
                                <a href="#">
                                    <h2 class="text-lg font-semibold hover:text-primary">Building Accessible Web Applications</h2>
                                </a>
                                <div class="mt-2 flex items-center text-sm text-muted-foreground">
                                    <div class="flex items-center">
                                        <img
                                            src="/placeholder.svg"
                                            alt="Author avatar"
                                            width="32"
                                            height="32"
                                            class="h-8 w-8 rounded-full aspect-32-32"
                                        />
                                        <span class="ml-2">David Brown</span>
                                    </div>
                                    <span class="mx-2">·</span>
                                    <time datetime="2023-01-05">January 5, 2023</time>
                                </div>
                                <p class="mt-4 line-clamp-3 text-muted-foreground">
                                    Accessibility is a crucial aspect of web development that ensures all users, including those with
                                    disabilities, can access and interact with your website. In this article, we'll explore the principles
                                    of accessible web design and how to implement them in your projects.
                                </p>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>

        </>
    )
}

export default AllBlogs