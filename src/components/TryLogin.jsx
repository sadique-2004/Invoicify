import React, { useState, useEffect, useRef } from "react";
import google from '../assets/google.jpg';
import HeroImg from '../assets/invoice.png';
import { useNavigate } from 'react-router-dom';
import Confetti from 'react-confetti';
import Typed from 'typed.js';


export default function AuthForm() {

    const [isLogin, setIsLogin] = useState(true); // State to toggle login/signup
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [showConfetti, setShowConfetti] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
          setShowConfetti(false);
        }, 3000); // Run for 3 seconds
    
        return () => clearTimeout(timer); // Clean up the timer
      }, []);
    


    const navigate = useNavigate();

    const handleLogin = () => {
        if (username === 'FREE' && password === '0000') {
            navigate('/templates');
        } else {
            alert('Invalid credentials!');
        }
    };

    const handleGoogleSignIn = () => {
        alert("Google Sign-In functionality not implemented yet.");
    };

    const handleGoogleSignUp = () => {
        alert('Google Sign In functionality coming soon!');
    };

    const handleSignup = () => {
        alert("Sign Up functionality not implemented yet.");
    };

    // for typed welcome msg
    const typedElement = useRef(null); // Created a ref for the Typed.js target element
    useEffect(() => {
        // Initialized Typed.js
        const options = {
            strings: ["Welcome to Invoicify! 🎉",
                "Welcome to Invoicify! 🎉",
                "Simplify billing today! 🧾",
                "Effortless billing awaits! 🚀",
                "Your invoice journey starts now!",
                "Invoicing made simple! 🖊️✨",], // Texts to type
            typeSpeed: 90, // Typing speed
            backSpeed: 50, // Backspacing speed
            loop: true, // Loop the typing animation
            // cursorChar: '/>', // Custom cursor character
            // showCursor: true, 
            // fadeOut: true, // Enable fade out effect
            // fadeOutClass: "typed-fade-out", // Custom class for fade out

        };

        const typed = new Typed(typedElement.current, options); // Initialize Typed.js with the ref

        return () => {
            // Clean up the Typed.js instance when the component unmounts
            typed.destroy();
        };
    }, []);


    return (
        <div className="bg-[#EEEFEE] min-h-screen flex flex-col items-center justify-center pb-4">
            {/* <Confetti /> */}
            {showConfetti && <Confetti />}
            {/* #E13A90 text-[#3B81B8]*/}
            <h1 className="text-2xl font-bold text-[#45ccb8] font-montserrat  text-center mt-4">
                <span ref={typedElement} className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-[#DD8788] "></span>
            </h1>
            <h1 className="text-3xl font-bold text-[#45ccb8]   text-center mb-2 font-montserrat">
                Please👤Login/Sign-Up to explore cool features.</h1>

            <div className="flex flex-col md:flex-row items-center justify-center h-screen w-full px-4 md:px-16 lg:px-40 py-2">

                {/* Image Section */}
                <div
                    className="flex-1 h-64 md:h-full w-full md:w-[70%] bg-cover bg-center"
                    style={{ backgroundImage: `url(${HeroImg})` }}
                ></div>

                {/* Form Section */}
                <div className="flex-1 bg-white p-6 md:p-8 rounded md:shadow-lg w-full md:w-[30%] max-w-sm">
                    <h1 className="text-2xl font-bold mb-6 text-center text-[#DD8788]">
                        {isLogin ? "Login" : "Sign Up"}
                    </h1>

                    {/* Form Fields */}
                    {isLogin ? (
                        <>
                            {/* Login Form */}
                            <input
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full mb-4 px-4 py-2 border rounded focus:ring-2 focus:ring-[#45ccb8] focus:outline-none"
                            />

                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full mb-6 px-4 py-2 border rounded focus:ring-2 focus:ring-[#45ccb8] focus:outline-none"
                            />

                            <button
                                onClick={handleLogin}
                                className="w-full bg-[#45ccb8] text-white py-2 rounded hover:bg-[#2E7C75] mb-4"
                            >
                                Login
                            </button>

                            {/* Divider */}
                            <div className="flex items-center mb-4">
                                <div className="flex-grow h-px bg-gray-300"></div>
                                <span className="px-4 text-gray-500 text-sm">OR</span>
                                <div className="flex-grow h-px bg-gray-300"></div>
                            </div>


                            {/* Google Sign In Button */}
                            <button
                                onClick={handleGoogleSignIn}
                                className="w-full flex items-center justify-center border border-gray-300 py-2 rounded hover:bg-gray-100 mb-4"
                            >
                                <img
                                    src={google}
                                    alt="Google Logo"
                                    className="w-8 h-8 mr-2"
                                />
                                <span>Login In with Google</span>
                            </button>
                        </>
                    ) : (
                        <>
                            {/* Signup Form */}
                            <input
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full mb-4 px-4 py-2 border rounded focus:ring-2 focus:ring-[#45ccb8] focus:outline-none"
                            />

                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full mb-4 px-4 py-2 border rounded focus:ring-2 focus:ring-[#45ccb8] focus:outline-none"
                            />

                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full mb-6 px-4 py-2 border rounded focus:ring-2 focus:ring-[#45ccb8] focus:outline-none"
                            />

                            <button
                                onClick={handleSignup}
                                className="w-full bg-[#45ccb8] text-white py-2 rounded hover:bg-[#2E7C75] mb-4"
                            >
                                Sign Up
                            </button>

                            {/* Divider */}
                            <div className="flex items-center mb-4">
                                <div className="flex-grow h-px bg-gray-300"></div>
                                <span className="px-4 text-gray-500 text-sm">OR</span>
                                <div className="flex-grow h-px bg-gray-300"></div>
                            </div>


                            {/* Google Sign In Button */}
                            <button
                                onClick={handleGoogleSignIn}
                                className="w-full flex items-center justify-center border border-gray-300 py-2 rounded hover:bg-gray-100 mb-4"
                            >
                                <img
                                    src={google}
                                    alt="Google Logo"
                                    className="w-8 h-8 mr-2"
                                />
                                <span>Signup with Google</span>
                            </button>
                        </>
                    )}

                    {/* Toggle between Login and Signup */}
                    <div className="text-center">
                        {isLogin ? (
                            <p className="text-sm">
                                Don’t have an account?{" "}
                                <button
                                    onClick={() => setIsLogin(false)}
                                    className="text-[#45ccb8] underline"
                                >
                                    Sign Up
                                </button>
                            </p>
                        ) : (
                            <p className="text-sm">
                                Already have an account?{" "}
                                <button
                                    onClick={() => setIsLogin(true)}
                                    className="text-[#45ccb8] underline"
                                >
                                    Login
                                </button>


                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );

}
