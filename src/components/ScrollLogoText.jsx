// ScrollLogoText.js
import React from "react";
import Marquee from "react-fast-marquee";
import logo from "../assets/footerLogo.png"; // Replace with your logo path

const ScrollLogoText = () => {
  return (
    <div className="bg-[#2C2C41] py-2 border-t-4 border-b-4 border-white ">
      <Marquee speed={90} gradient={false}>
        <div className="flex items-center ml-5">
          <img src={logo} alt="Invoicify Logo" className="h-12 mr-3" />
          <p className="text-white text-xl font-sans">
            <span className="text-[#21E1CE] font-bold">Invoicify</span> - Simplify billing today! 🧾 | Developed By-Sadique
          </p>
        </div>
        <div className="flex items-center ml-5">
          <img src={logo} alt="Invoicify Logo" className="h-12 mr-3" />
          <p className="text-white text-xl font-sans">
            <span className="text-[#21E1CE] font-bold">Invoicify</span> - Simplify billing today! 🧾 | Developed By-Sadique
          </p>
        </div>
        <div className="flex items-center ml-5">
          <img src={logo} alt="Invoicify Logo" className="h-12 mr-3" />
          <p className="text-white text-xl font-sans">
            <span className="text-[#21E1CE] font-bold">Invoicify</span> - Simplify billing today! 🧾 | Developed By-Sadique
          </p>
        </div>
        <div className="flex items-center ml-5">
          <img src={logo} alt="Invoicify Logo" className="h-12 mr-3" />
          <p className="text-white text-xl font-sans">
            <span className="text-[#21E1CE] font-bold">Invoicify</span> - Simplify billing today! 🧾 | Developed By-Sadique
        
          </p>
        </div>
      </Marquee>
    </div>
  );
};

export default ScrollLogoText;
