

import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa"; // Import Home icon from react-icons
import { motion, useSpring, useScroll } from "motion/react";
import logo from '../assets/logo.jpg';
import AlertCard from './AlertCard';



const Navbar = () => {

    const { scrollYProgress } = useScroll();
    const [showAlert, setShowAlert] = React.useState(false);

    const handleShowAlert = () => {
        setShowAlert(true);
    };

    return (
        < nav className="bg-white shadow sticky top-0 z-50  selection:text-white selection:bg-[#45ccb8]" >
            <motion.div
                className="h-[6.5px] bg-[#45ccb8] origin-[0%] fixed top-0 left-0 right-0 z-50"
                style={{ scaleX: scrollYProgress }}
            />


            <div className="max-w-7xl mx-auto  flex justify-between items-center py-4 px-4">

                <Link to="/">
                    <span className='flex items-center space-x-2'>
                        <img src={logo} alt='Logo' className='w-15 h-8 rounded-md' />
                        <h1 className="text-3xl font-bold text-[#45ccb8] font-montserrat">
                            Invoicify
                        </h1>
                    </span>
                </Link>

                <div className="space-x-4 flex">
                    <Link
                        to="/"
                        className="text-[#45ccb8] hover:bg-[#f0fdfa] hover:rounded p-2 transition flex items-center"
                    >
                        <FaHome className="text-2xl" />
                    </Link>
                    <NavLink
                        to="/login"
                        className={({ isActive }) =>
                            ` ${isActive ? 'bg-[#45ccb8] text-white' : ''}
                        text-[#45ccb8] hover:text-white hover:bg-[#45ccb8] border border-[#45ccb8] rounded px-3 py-2 transition-all duration-200 
        active:text-white active:bg-[#45ccb8] flex items-center space-x-2`
                        }
                    >
                        <i className="text-xl" onClick={handleShowAlert}>Login</i> {/* You can replace Login text with another icon or keep it */}
                    </NavLink>


                </div>

                {/* Show AlertCard */}
                {showAlert && (
                    <AlertCard
                        onClose={() => setShowAlert(false)}
                    >
                        <h2 className="text-2xl font-bold mb-2 text-[#45ccb8]">Welcome back to Invoicify!</h2>
                        <p className="mb-2">
                            This is a <strong>trial version</strong> of our platform. To log in, use the credentials below:
                        </p>
                        <ul className="list-disc list-inside mb-2">
                            <li><strong>Username:</strong> FREE</li>
                            <li><strong>Password:</strong> 0000</li>
                        </ul>
                        <p className="mb-2 text-sm text-gray-600">
                            ⚠️ Note: Features are limited and data won't be stored permanently. Full version with backend coming soon!
                        </p>
                        <p className="font-semibold">Thank you for exploring Invoicify! 🚀</p>
                    </AlertCard>
                )}

            </div>
        </nav >
    );
};

export default Navbar;
