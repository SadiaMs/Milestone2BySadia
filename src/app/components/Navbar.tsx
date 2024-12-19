import React from "react";
import Image from "next/image"; // Ensure you import the Image component from Next.js
import Link from "next/link";





const Navbar = () => {
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image 
              src="/logos.png"  
              alt="logo" 
              width={100} 
              height={100} 
              
             
            />
            <span className="ml-3 text-xl text-green-700  hover:bg-green-100 hover:text-red-900 animate-bounce">Sadia Siddique</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href={"/"} className="mr-5 hover:text-green-500">Home 🏡</Link>
            <Link href={"#"} className="mr-5 hover:text-green-500">About 🧰 </Link>
            <Link href={"#"} className="mr-5 hover:text-green-500">Projects👩‍💻</Link>
            <Link href={"3"} className="mr-5 hover:text-green-500">Skills 🏆</Link>
            <Link  href={"#"} className="mr-5 hover:text-green-500">Contact 📲</Link>
          </nav>
          <button className="inline-flex items-center bg-green-200  border-0 py-1 px-4 focus:outline-none hover:bg-green-600 hover:text-white  rounded text-base mt-4 md:mt-0">
           <a href="/cccccvvvvvvvvvvvvv/"></a>
            Cv Download 📃
     
            
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>

            
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
