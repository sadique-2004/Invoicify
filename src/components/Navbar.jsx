

import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa"; // Import Home icon from react-icons
import { motion, useSpring, useScroll } from "motion/react";
import logo from '../assets/logo.jpg';



const Navbar = () => {

    const { scrollYProgress } = useScroll();

    const Indevelopment = () => {
        alert(`
          Welcome to Invoicify!
          
          This is a trial version of our platform. To log in, please use the following credentials:

           Username: FREE 
           Password: 0000
          
          Note: Features are limited in this trial version, and data won't be permanently stored. A full version with backend support is coming soon!
          
          Thank you for exploring Invoicify!
          `);

    }

    return (
        < nav className="bg-white shadow sticky top-0" >
            <motion.div
                className="h-[6.5px] bg-[#45ccb8] origin-[0%] fixed top-0 left-0 right-0 z-50"
                style={{ scaleX: scrollYProgress }}
            />


            <div className="max-w-7xl mx-auto  flex justify-between items-center py-4 px-4">

                <span className='flex items-center'>
                    <img src={logo} alt='Logo' className='w-15 h-8 rounded-full' />
                    <h1 className="text-2xl font-bold text-[#45ccb8] ">
                        Invoicify
                    </h1>
                </span>

                <div className="space-x-4 flex">
                    <Link
                        to="/"
                        className="text-[#45ccb8]  hover:text-[#45ccb4]  flex items-center "
                    >
                        <FaHome className="text-3xl" /> {/* Home icon */}
                    </Link>
                    <Link
                        to="/login"
                        className="text-[#45ccb8] hover:text-white hover:bg-[#45ccb8] border border-[#45ccb8] rounded px-3 py-2 transition-all duration-200 
        active:text-white active:bg-[#45ccb8] flex items-center space-x-2"
                    >
                        <i className="text-xl" onClick={Indevelopment}>Login</i> {/* You can replace Login text with another icon or keep it */}
                    </Link>

                    {/* <Link
                        to="/try"
                        className="text-[#45ccb8] hover:text-white hover:bg-[#45ccb8] border border-[#45ccb8] rounded px-3 py-2 transition-all duration-200 
        active:text-white active:bg-[#45ccb8] flex items-center space-x-2"
                    >
                        <i className="text-xl" onClick={Indevelopment}>Try</i> {/* You can replace Login text with another icon or keep it 
                    </Link> */}

                    
                </div>

            </div>
        </nav >

        // </div>
    );
};

export default Navbar;
