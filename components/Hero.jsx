
import Image from "next/image";
import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";


export default function Hero() {
    return (
        <div className="relative isolate h-[100vh] max-h-screen px-6 flex justify-center items-center  lg:px-8">
            <div
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                />
            </div>
            <div className="mx-auto max-w-4xl    text-gray-100">
                <div className=" mb-8 flex justify-center">
                    <div className=" rounded-full px-5 py-2 text-lg leading-6 ring-1 ring-gray-100/10 hover:ring-gray-100/20">
                        नमस्ते <Image src="/assets/icons/namaste.png" alt="namaste" width={20} height={20} className="inline" />
                    </div>
                </div>
                <div className="text-center">
                    <h1 className="text-4xl font-bold sm:text-7xl mb-4">
                        Aditya Pratap Singh
                    </h1>
                    <h1 className="hidden md:block text-4xl  font-bold sm:text-7xl">
                        Web Developer
                    </h1>
                    <p className="mt-6  text-gray-300  leading-6 text-center">
                        {/* Welcome to my portfolio! As an enthusiastic engineering student with a passion for web development, I&apos;ve curated a collection of my projects to showcase my skills in the field. Explore my portfolio to discover the projects I&apos;ve worked on. */}
                        Hello and welcome! I&apos;m an engineering student deeply passionate about web development, with strong expertise in C++ and data structures and algorithms. Explore my curated projects that reflect my dedication to crafting innovative web solutions and optimizing performance through efficient algorithms. Let&apos;s embark on this journey together into the exciting world of technology!

                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a href="https://github.com/Adityapratap2004" target="_blank">
                            <BsGithub className="text-2xl" />
                        </a>

                        <a href="https://www.linkedin.com/in/adityapratapsingh004/" target="_blank">
                            <BsLinkedin className="text-2xl" />
                        </a>

                        <a href="https://leetcode.com/adityaprataps2004/" target="_blank">
                            <SiLeetcode className="text-2xl" />
                        </a>

                        <a href="https://twitter.com/adityap93397538" target="_blank">
                            <BsTwitterX className="text-2xl" />
                        </a>

                    </div>
                </div>
            </div>

            <div
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                />
            </div>

        </div>
    );
}
