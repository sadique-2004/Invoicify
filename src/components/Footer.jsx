


import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-gray-100">
      <footer className="bg-[#445C64] text-white py-6">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          {/* Flex container for two parts */}
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Left Section: Branding and Navigation */}
            <div className="text-center md:text-left">
              {/* Branding */}
              <h1 className="text-2xl font-bold mb-2">Invoicify</h1>
              <p className="text-gray-300 text-sm">Simplify your invoicing</p>

            </div>

            <div className="mt-6 text-gray-300 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Invoicify | All rights reserved.</p>
            <p className="text-xs">Designed & Develop with ❤️ by SADIQUE</p>
          </div>


            {/* Right Section: Social Media Icons */}
            <div className="mt-6 md:mt-0 flex justify-center space-x-6">
              <a
                href="https://www.linkedin.com/in/mdsadique5"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-500 transition duration-300 text-xl"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.linkedin.com/in/mdsadique5"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-500 transition duration-300 text-xl"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.linkedin.com/in/mdsadique5"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-500 transition duration-300 text-xl"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Bottom Section: Credits */}
          {/* <div className="mt-6 text-gray-300 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Invoicify. All rights reserved.</p>
            <p className="text-xs">Designed with ❤️ by [Your Name/Company]</p>
          </div> */}
        </div>
      </footer>
    </div>
  );
};

export default Footer;
