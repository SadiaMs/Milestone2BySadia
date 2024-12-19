import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-200">
      <div className="container mx-auto py-8 px-5">
        {/* Top Section */}
        <div className="flex flex-wrap justify-between items-start">
          {/* About Section */}
          <div className="mb-6 w-full md:w-1/3">
            <h2 className="text-xl font-bold text-green-800">Student at GIAC 👩‍🎓</h2>
            <p className="text-green-700 mt-2">
              I am a Frontend Developer, passionate about creating user-friendly web applications.
            </p>
          </div>

          {/* Quick Links Section */}
          <nav className="w-full md:w-1/3">
            <h3 className="text-lg font-medium mb-4 text-green-800">Quick Links 😇</h3>
            <ul className="list-none space-y-2">
              <li>
                <a
                  href="/home"
                  className="text-green-800 hover:text-green-600 transition duration-300"
                  aria-label="Navigate to Home"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-green-800 hover:text-green-600 transition duration-300"
                  aria-label="Navigate to About"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-green-800 hover:text-green-600 transition duration-300"
                  aria-label="Navigate to Contact"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  className="text-green-800 hover:text-green-600 transition duration-300"
                  aria-label="Navigate to Privacy Policy"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-6">
          <p className="text-green-800 font-bold">
            &copy; {new Date().getFullYear()} Sadia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
