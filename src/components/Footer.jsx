

import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { RiLinkedinFill } from "react-icons/ri";
import logo from '../assets/footerLogo.png'

const Footer = () => {
  return (
    <div className=" selection:bg-[#45ccb8] selection:text-gray-100">
      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          {/* Flex container for two parts */}
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Left Section: Branding and Navigation */}
            <div className="flex items-center">
              {/* Branding */}
              <img src={logo} alt='Logo' className='w-10 mr-2 h-14 rounded-md hidden sm:block' />
              <div className='text-center md:text-left'>
                <h1 className="text-2xl font-bold mb-1 font-montserrat text-[#45ccb8]">Invoicify</h1>
                <p className="text-white text-sm font-merriweather">Simplify your invoicing</p>
              </div>

            </div>

            <div className="mt-6 text-gray-300 text-center text-sm">
              <p>&copy; {new Date().getFullYear()} Invoicify | All rights reserved.</p>
              <p className="text-xs">Designed & Develop with ❤️ by <a className='underline hover:bg-[#45ccb8]' href="https://linktr.ee/Md_Sadique2004">SADIQUE</a></p>
            </div>


            {/* Right Section: Social Media Icons */}
            
            <div className="mt-6 md:mt-0 flex justify-center space-x-6">
              
              <a
                href="https://www.linkedin.com/in/mdsadique5"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#45ccb8] transition duration-300 text-xl border border-1px solid rounded-full p-1"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.linkedin.com/in/mdsadique5"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#45CCb8] transition duration-300 text-xl border border-1px solid rounded-full p-1"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.linkedin.com/in/mdsadique5"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#45CCB8] transition duration-300 text-xl border border-1px solid rounded-full p-1"
              >
                {/* <FaLinkedin /> */}
                <RiLinkedinFill />

              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
