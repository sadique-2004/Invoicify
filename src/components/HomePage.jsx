
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import createInvoice from '../assets/createInvoice.jpg';
import printDownload from '../assets/printDownload.jpg'
// import invoiceImage from '../assets/logo.png';
import Testimonials from './Testimonials';
import FAQ from './Faq';
import chatboat from '../assets/ai.jpg'


const HomePage = () => {
  const navigate = useNavigate();
  const aboutUs = () => {
    navigate('/aboutus')
  }

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
    <div className="bg-[#EEEFEE]">

      {/* Hero Section */}
      <div className="bg-[#45ccb8] text-white py-16 px-2">
        <div className="max-w-5xl mx-auto text-center">
          {/* <h1 className="text-4xl font-bold">Simplify Your Invoice Management</h1>
          <p className="mt-4 text-lg">
            Effortlessly create, manage, and save invoices with our user-friendly app. <br />
            Join 10+ businesses using our invoicing tool!
          </p> */}

          {/* <h1 className="text-4xl font-bold " style={{ fontFamily: "'Merriweather', serif" }} >Simplify Invoice Management with Invoicify</h1> */}
          <h1 className="text-4xl font-bold " style={{ fontFamily: "'Montserrat', serif" }} >Simplify Invoice Management with Invoicify</h1>
          {/* <h1 className="text-4xl font-bold " style={{ fontFamily: "'Lato', serif" }} >Simplify Invoice Management with Invoicify</h1> */}
          {/* <h1 className="text-4xl font-bold " style={{ fontFamily: "'Oswald', serif" }} >Simplify Invoice Management with Invoicify</h1>   */}
          <p className="mt-4 text-xl" style={{ fontFamily: "'Oswald', serif" }} >
            A tool crafted by <span className="font-bold ">Md Sadique</span> to make invoicing simple, accessible, and <span className='font-bold bg-[#a4e47c] px-2'>FREE</span> for everyone. <br/>Join <span className=" font-bold">10+</span> businesses using Invoicify today!
          </p>

          


          {/* <Confetti/> */}

          <Link to="/login">
            <button className="mt-6 px-4 py-2 bg-white  text-[#45ccb8] font-semibold rounded-lg shadow-md hover:bg-green-100" style={{fontFamily: "'Montserrat', sans-serif"}}
              onClick={Indevelopment}>
              Get Started
            </button>
          </Link>

          <button className="ml-4 rounded-lg text- font-semibold border  px-4 py-2" style={{fontFamily: "'Montserrat', sans-serif"}} onClick={aboutUs}>
            About Us
          </button>

        </div>
      </div>




      {/* Quote Section
       <div className="bg-gray-200 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-800">
            "Efficiency is doing things right; effectiveness is doing the right things."
          </h2>
          <p className="mt-4 text-gray-600">- Peter Drucker</p>
        </div>
      </div> */}

      {/* Content Section */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-4">
          <div className="bg-white shadow rounded-lg p-6">
            <img
              src={createInvoice}
              alt="Create Invoice"
              className="w-full h-40 object-cover rounded"
            />
            <h2 className="mt-4 text-xl font-bold text-gray-800 font-montserrat">Create Invoices</h2>
            <p className="mt-2 text-gray-600 font-lato">
            Designed to help you create professional invoices in seconds without extra hassle.
            </p>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
  <img
    src={chatboat}  // Use the newly generated image URL
    alt="Invoicify Chatbot"
    className="w-full h-40 object-cover rounded"
  />
  <h2 className="mt-4 text-xl font-bold text-gray-800 font-montserrat">
    Need Help? Meet Invoicify AI
  </h2>
  <p className="mt-2 text-gray-600 font-lato">
    Invoicify is here to assist you. Chat with our friendly AI to get real-time support with managing your invoices effortlessly.
  </p>
</div>

          <div className="bg-white shadow rounded-lg p-6">
            <img
              src={printDownload}
              alt="Print or Download"
              className="w-full h-40 object-cover rounded"
            />
            <h2 className="mt-4 text-xl font-bold text-gray-800 font-montserrat">Print and Download</h2>
            <p className="mt-2 text-gray-600 font-lato">
              Print invoices directly or download them in PDF format.
            </p>
          </div>
        </div>
      </div>

      <Testimonials />


      <FAQ />

    </div>
  );
};

export default HomePage;
