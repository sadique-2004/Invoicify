import React from "react";
import { Link,useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";
import sadique from "../assets/sadique.jpg";
const AboutUs = () => {

  const naviagate = useNavigate();
  const getStarted = () => {
    naviagate('/login');
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
    <div className="bg-white text-gray-800 min-h-screen selection:bg-[#45ccb8]">
      {/* <NewAboutPage/> */}

      {/* Header with Logo */}
      <div className="flex justify-center mt-12 rounded-full">
        <Link to="/">
          <img src={logo} alt="Invoice App Logo" className="w-48 h-48 object-contain rounded-full border-[1rem]  border-[#bcc4c7]" />
        </Link>
      </div>

      {/* About Us Section */}
      <div className="max-w-5xl mx-auto px-6 py-12 space-y-12">

        <h2 className="text-3xl font-bold text-[#45ccb8] text-center font-montserrat selection:text-white">About US</h2>

        <p className="text-xl text-center font-merriweather">
          At <strong className="text-[#45ccb8] font-montserrat selection:text-white">Invoicify</strong>, we aim to revolutionize how businesses and freelancers manage invoices.
          Simplifying the process helps you save time, reduce financial stress, and focus on growing your business.
        </p>


        {/* Features Section
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-8">
          <div className="bg-[#DD8788] p-6 rounded-lg shadow-lg text-center text-white">
            <h4 className="text-xl font-semibold mb-2">Customization</h4>
            <p>Create personalized invoices with custom templates to reflect your brand's identity.</p>
          </div>
          <div className="bg-[#45ccb8] p-6 rounded-lg shadow-lg text-center text-white">
            <h4 className="text-xl font-semibold mb-2">Tracking</h4>
            <p>Track real-time payment statuses and receive automated reminders to stay on top of your finances.</p>
          </div>
          <div className="bg-[#DD8788] p-6 rounded-lg shadow-lg text-center text-white">
            <h4 className="text-xl font-semibold mb-2">Security</h4>
            <p>Your financial data is secured with top-tier encryption to ensure privacy and protection.</p>
          </div>
        </div> */}

        {/* Why Choose Us Section */}
        <div className="bg-[#45ccb8] text-white text-center py-10 px-5 rounded-lg shadow-xl">
          <h3 className="text-2xl font-semibold mb-4 font-montserrat ">Why Choose Invoicify ?</h3>
          <p className="text-lg font-merriweather">
            Our platform is intuitive, easy to use, and designed to reduce financial burden, ensuring that invoicing is effortless.
            Join thousands of businesses and freelancers who trust us for their invoicing needs.
          </p>
        </div>

        <div className="text-center py-8 bg-green-50">
          <h2 className="text-2xl font-bold text-[#DD8788] font-montserrat">And the Best Part ?</h2>
          <p className="mt-4 text-gray-700 font-merriweather">
            Invoicify is completely <span className="font-bold text-green-600">FREE !🎁 </span>
            Create, manage, and save invoices without spending a dime.
          </p>
        </div>

        <div className="py-8 text-center">
          <h2 className="text-2xl font-bold text-[#DD8788] font-montserrat">Try Invoicify Today 🚀!</h2>
          <p className="mt-2 text-gray-600 font-merriweather">Start creating invoices effortlessly.</p>
          {/* <Link to="/login"> */}

          <button
            className="mt-4 px-6 py-3 bg-[#45ccb8] text-white rounded-md border-2 border-transparent hover:bg-white hover:text-[#45ccb8] hover:border-[#45ccb8] transform hover:scale-105 transition-all duration-300 ease-in-out font-oswald"
            onClick={getStarted}
          >
            Get Started Now
          </button>

          {/* </Link> */}
        </div>

        {/* Team Section */}
        <div className="space-y-12 mt-8">
          <h3 className="text-3xl font-semibold text-[#45ccb8] text-center font-playfair-display selection:text-white">Meet the Creator</h3>


          <div className="flex flex-col sm:flex-row justify-center items-center text-center gap-8">
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg">
              <img
                src={sadique}
                alt="Md Sadique"
                className="w-32 h-32 rounded-md mb-4"
              />
              <h4 className="text-xl font-semibold text-[#45ccb8] selection:text-white">Mohammad Sadique</h4>
              <p className="text-gray-600">Founder, Developer, and Creator of Invoicify</p>
              <p className="mt-4 text-gray-600 font-merriweather selection:bg-[#45ccb8]">Empowering small businesses and streamlining processes is my passion. I'm Md Sadique, the creator of Invoicify—a tool designed to make invoicing effortless, efficient, and completely <span className="bg-yellow-500 px-2">FREE</span> 🎁 for everyone!</p>
              <div className="mt-4">
                <p className="font-semibold">Connect with Me  🤝</p>
                <div className="flex space-x-4 mt-2 justify-center selection:text-white">
                  <a href="https://www.linkedin.com/in/mdsadique5" target="_blank" rel="noopener noreferrer" className="text-[#45ccb8] hover:text-blue-500">
                    LinkedIn
                  </a>
                  <a href="https://linktr.ee/Md_Sadique2004" target="_blank" rel="noopener noreferrer" className="text-[#45ccb8] hover:text-blue-500">
                    Linktree
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;
