
import React from 'react';
import { Link } from 'react-router-dom';
import createInvoice from '../assets/createInvoice.jpg';
import manageRecords from '../assets/manageRecords.jpg';
import printDownload from '../assets/printDownload.jpg'
// import invoiceImage from '../assets/logo.png';

// import MakeItRain from './components/MakeItRain';
import Confetti from 'react-confetti'
import FAQ from './Faq';

const HomePage = () => {

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
          <h1 className="text-4xl font-bold">Simplify Your Invoice Management</h1>
          <p className="mt-4 text-lg">
            Effortlessly create, manage, and save invoices with our user-friendly app. <br />
            Join 10+ businesses using our invoicing tool!
          </p>
          
          {/* <Confetti/> */}

          <Link to="/login">
            <button className="mt-6 px-6 py-2 bg-white text-[#45ccb8] font-semibold rounded-lg shadow-md hover:bg-blue-100"
            onClick={Indevelopment}>
              Get Started
            </button>
          </Link>

          <button className="ml-4 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
  Make It Rain 🎉
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
            <h2 className="mt-4 text-xl font-bold text-gray-800">Create Invoices</h2>
            <p className="mt-2 text-gray-600">
              Generate professional invoices quickly and easily.
            </p>
          </div>

          
          <div className="bg-white shadow rounded-lg p-6">
            <img
              src={manageRecords}
              alt="Manage Data"
              className="w-full h-40 object-cover rounded"
            />
            <h2 className="mt-4 text-xl font-bold text-gray-800">Manage Records</h2>
            <p className="mt-2 text-gray-600">
              Save and access invoices whenever you need them.
            </p>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <img
              src={printDownload}
              alt="Print or Download"
              className="w-full h-40 object-cover rounded"
            />
            <h2 className="mt-4 text-xl font-bold text-gray-800">Print and Download</h2>
            <p className="mt-2 text-gray-600">
              Print invoices directly or download them in PDF format.
            </p>
          </div>
        </div>
      </div>

     

      <FAQ/>

    </div>
  );
};

export default HomePage;
