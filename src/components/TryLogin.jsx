import React, { useState, useEffect, useRef } from "react";
import HeroImg from '../assets/invoice.png';
import { useNavigate } from 'react-router-dom';
import Confetti from 'react-confetti';
import Typed from 'typed.js';
import AlertCardAutoClose from "./AlertCardAutoClose";
import { SignIn, SignUp, } from "@clerk/clerk-react";


export default function TryLogin({ mode }) {
    const [showConfetti, setShowConfetti] = useState(true);
    const [alertMessage, setAlertMessage] = useState("");
    const [showAlert, setShowAlert] = useState(false);
    const navigate = useNavigate();

    // Typed.js logic
    const typedElement = useRef(null);
    useEffect(() => {
        const options = {
            strings: [
                "Welcome to Invoicify! 🎉",
                "Simplify billing today! 🧾",
                "Effortless billing awaits! 🚀",
                "Invoicing made simple!✨",
            ],
            typeSpeed: 90,
            backSpeed: 50,
            loop: true,
        };

        const typed = new Typed(typedElement.current, options);
        return () => typed.destroy();
    }, []);

    return (
        <div className="bg-[#EEEFEE] min-h-screen flex flex-col items-center justify-center pb-4">
            {/* {showConfetti && <Confetti />} */}
            {showAlert && <AlertCardAutoClose message={alertMessage} />}

            <h1 className="sm:text-2xl text-xl px-4 font-bold text-[#45ccb8] font-montserrat text-center mt-4">
                <span
                    ref={typedElement}
                    className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-[#44ccb8]"
                ></span>
            </h1>

            <h1 className="sm:text-3xl text-xl px-4 font-bold text-[#45ccb8] text-center mb-2 font-montserrat">
                Please Login/SignUp to explore cool features.
            </h1>

            <div className="flex flex-col md:flex-row items-center justify-center min-h-screen w-full px-4 md:px-16 lg:px-40 py-2">
                {/* Image Section */}
                <div
                    className="flex-1 h-[700px]   bg-cover bg-center"
                    style={{ backgroundImage: `url(${HeroImg})` }}
                ></div>

                {/* Form Section */}
                <div className="... flex items-center justify-center  p-6 md:p-8 rounded w-full md:w-[30%] max-w-sm min-h-full ">
                    {mode === "sign-in" ? (
                        <SignIn routing="virtual" signUpUrl="/sign-up"
                            afterSignInUrl="/" />
                    ) : mode === "sign-up" ? (
                        <SignUp routing="virtual" signInUrl="/sign-in"
                            afterSignUpUrl="/" />
                    ) : (
                        <div className="text-center">
                            <h2 className="text-2xl font-bold mb-4 text-[#45ccb8]">Invalid Mode</h2>
                            <p className="text-gray-600">Please select a valid mode.</p>
                        </div>
                    )
                    }
                </div>
            </div>
        </div>
    );
}
