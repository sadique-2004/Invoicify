
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import createInvoice from '../assets/createInvoice.jpg';
import printDownload from '../assets/printDownload.jpg'
// import invoiceImage from '../assets/logo.png';
import Testimonials from './Testimonials';
import FAQ from './Faq';
import chatboat from '../assets/ai.jpg'
import heroSvg from '../assets/hero.svg';
import ScrollLogoText from './ScrollLogoText';
import './Global.css';
import ShiftingCountdown from './ShiftingCountdown';
import AlertCard from './AlertCard';


const HomePage = () => {
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = React.useState(false);

  const handleShowAlert = () => {
    setShowAlert(true);

    // Redirect to Login Page after 5 seconds
    setTimeout(()=> {
      navigate('/login');
    }, 2000);
  };

  const aboutUs = () => {
    navigate('/aboutus')
  }



  return (
    <div>

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

      {/* Hero Section */}
      <div className="sm:bg-gradient-to-l bg-gradient-to-t from-gray-200 to-[#44ccb8] text-white py-16 px-4 selection:text-[#45ccb8] selection:bg-gray-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
          {/* Text Content */}
          <div className="text-center md:text-left md:w-1/2">
            {/* Updated Heading */}
            <h1
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: "'Montserrat', serif" }}
            >
              Simplify Invoice Management with Invoicify
            </h1>

            {/* Added Subheader */}
            <p
              className="text-xl md:text-2xl mb-6"
              style={{ fontFamily: "'Oswald', serif" }}
            >
              Transform how you manage invoices – effortlessly and for free! Join <span className="font-bold">10+</span> businesses today to experience the future of invoicing.
            </p>

            {/* Updated Buttons */}
            <div className="flex justify-center md:justify-start gap-4">
              {/* Get Started Button */}
  
                <button
                  className="flex items-center gap-2 px-6 py-3 bg-white text-[#45ccb8] font-semibold rounded-lg shadow-md hover:bg-green-100 transition duration-200"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                  onClick={handleShowAlert}
                >
                  Get Started
                </button>

              {/* About Us Button */}
              <button
                className="flex items-center gap-2 px-6 py-3 border border-white hover:border-[#] text-white font-semibold rounded-lg hover:bg-green-100 hover:text-[#45ccb8] transition duration-200"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
                onClick={aboutUs}
              >
                About Us
              </button>
            </div>
          </div>

          {/* Added Illustration */}
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src={heroSvg}
              alt="Hero Illustration"
              className="w-full max-w-md mx-auto md:max-w-none"
            />
          </div>
        </div>

      </div>




      <ScrollLogoText />


      {/* Quote Section */}
      <div className="bg-gray-100 py-8 border border-b-[#45ccb8] selection:bg-[#45ccb8] selection:text-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="italic text-2xl font-bold text-gray-800 ">
            "Efficiency is doing things right; effectiveness is doing the right things."
          </h2>
          <p className="mt-4 text-gray-600">- Peter Drucker</p>
        </div>
      </div>


      {/* Content Section */}
      <div className="py-16 bg-gray-100 selection:bg-[#45ccb8] selection:text-gray-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
          {/* Card 1 */}
          <div className="bg-white shadow-lg hover:shadow-xl rounded-lg p-8 transition-shadow">
            <img
              src={createInvoice}
              alt="Easily create professional invoices"
              className="w-full h-44 object-cover rounded"
            />
            <h2 className="mt-6 text-xl font-bold text-gray-800">Create Invoices</h2>
            <p className="mt-4 text-gray-600">
              Designed to help you create professional invoices in seconds without extra hassle.
            </p>
            {/* <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
        Learn More
      </button> */}
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg hover:shadow-xl rounded-lg p-8 transition-shadow">
            <img
              src={chatboat}
              alt="Invoicify AI Chatbot Support"
              className="w-full h-44 object-cover rounded"
            />
            <h2 className="mt-6 text-xl font-bold text-gray-800">Meet Invoicify AI</h2>
            <p className="mt-4 text-gray-600">
              Invoicify is here to assist you. Chat with our AI to get real-time support with managing your invoices effortlessly.
            </p>
            {/* <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
        Get Support
      </button> */}
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg hover:shadow-xl rounded-lg p-8 transition-shadow">
            <img
              src={printDownload}
              alt="Print or download invoices quickly"
              className="w-full h-44 object-cover rounded"
            />
            <h2 className="mt-6 text-xl font-bold text-gray-800">Print and Download</h2>
            <p className="mt-4 text-gray-600">
              Print invoices directly or download them in PDF format for convenience.
            </p>
            {/* <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
        Learn More
      </button> */}
          </div>
        </div>
      </div>

      <ShiftingCountdown />


      <Testimonials />


      {/* <Card /> */}

      <FAQ />

    </div>
  );
};

export default HomePage;
