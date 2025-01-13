import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        {/* Icon Section */}
        <div className="flex flex-col items-center mb-10">
          <div className="w-40% h-40% flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
            <Image
              alt="dp"
              className="object-cover object-center h-[100%] w-full"
              src="/dp.png"
            />
          </div>
        </div>

        {/* About Me Section */}
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-green-900">
            About Me
          </h1>
          <p className="mb-8 leading-relaxed">
            Hi I am <strong>Sadia Siddique</strong> a passionate Full Stack Developer creating innovative web solutions. Currently a student at <strong>GIAIC, Governor House</strong>.
          </p>
          <div className="flex justify-center">
            {/* "Get in Touch" Button with Link to Contact Page */}
            <Link href="/contact">
              <button className="inline-flex text-white bg-green-500 border-0 py-3 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                Get in Touch
              </button>
            </Link>
            <button className="ml-4 inline-flex text-gray-700 bg-green-200 py-3 px-6 focus:outline-none hover:bg-green-600 hover:text-white rounded text-lg">
              About Me
            </button>
          </div>
        </div>

        {/* Additional Section */}
        <div className="mt-10 bg-green-200 text-green-800 text-center py-6 px-9 animate-bounce rounded-lg hover:bg-green-400">
          <h2 className="text-xl font-semibold">
            Unlocking your potential with my expert services
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;

