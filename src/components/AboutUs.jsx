// import React from "react";
// import { Link } from "react-router-dom";
// import logo from '../assets/logo.png'; // Correct path to your logo

// const AboutUs = () => {
//   return (
//     <div className="bg-gray-100 min-h-screen py-8">

//       {/* About Us Section */}
//       <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl mx-auto my-10">
        
//         {/* About Us Header */}
//         <div className="flex items-center mb-6">
//           <img src={logo} alt="Invoice App Logo" className="w-24 h-24 mr-4" />
//           <h2 className="text-4xl font-semibold text-blue-500">About Us</h2>
//         </div>

//         {/* Main Content */}
//         <p className="text-gray-700 text-lg mb-6">
//           Welcome to <strong>Invoice App</strong>, the leading solution for businesses,
//           freelancers, and entrepreneurs to easily generate and manage invoices in a few clicks.
//         </p>
//         <p className="text-gray-700 text-lg mb-6">
//           Our mission is to streamline invoicing and make the process as simple and stress-free
//           as possible. Our tool helps manage clients, track payments, generate professional-looking
//           invoices, and monitor your business progress in real-time.
//         </p>

//         {/* Features Section */}
//         <div className="bg-gray-50 p-6 rounded-lg shadow-lg mb-6">
//           <h3 className="text-2xl font-semibold text-blue-500 mb-4">Our Features</h3>
//           <ul className="list-disc pl-6 space-y-3 text-gray-700 text-lg">
//             <li>Customizable invoice templates to suit your business needs</li>
//             <li>Real-time invoice status tracking and notifications</li>
//             <li>Simple client management to maintain relationships</li>
//             <li>Secure payment integration and automated payment reminders</li>
//           </ul>
//         </div>

//         {/* Why Choose Us Section */}
//         <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
//           <h3 className="text-2xl font-semibold text-blue-500 mb-4">Why Choose Us?</h3>
//           <p className="text-gray-700 text-lg">
//             We prioritize user-friendliness, security, and innovation to ensure that your business
//             is always ahead of the curve. Thousands of happy customers trust us to handle their invoicing
//             needs, and we are committed to offering continued support and improvements to our platform.
//           </p>
//         </div>

//         {/* Team Section */}
//         <div className="mt-10">
//           <h3 className="text-2xl font-semibold text-blue-500 mb-4">Meet the Team</h3>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             <div className="text-center p-4 bg-white rounded-lg shadow-lg">
//               <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="Team Member" className="w-32 h-32 rounded-full mx-auto mb-4"/>
//               <h4 className="text-xl font-semibold">John Doe</h4>
//               <p className="text-gray-600">Co-Founder</p>
//             </div>
//             <div className="text-center p-4 bg-white rounded-lg shadow-lg">
//               <img src="https://randomuser.me/api/portraits/women/1.jpg" alt="Team Member" className="w-32 h-32 rounded-full mx-auto mb-4"/>
//               <h4 className="text-xl font-semibold">Jane Smith</h4>
//               <p className="text-gray-600">Product Manager</p>
//             </div>
//             <div className="text-center p-4 bg-white rounded-lg shadow-lg">
//               <img src="https://randomuser.me/api/portraits/men/2.jpg" alt="Team Member" className="w-32 h-32 rounded-full mx-auto mb-4"/>
//               <h4 className="text-xl font-semibold">Alex Johnson</h4>
//               <p className="text-gray-600">Lead Developer</p>
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default AboutUs;








import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // Correct path to your logo

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen py-12">

      {/* Header with Logo */}
      <div className="flex justify-center mb-12">
        <img src={logo} alt="Invoice App Logo" className="w-100 h-40" />
      </div>

      {/* About Us Section */}
      <div className="bg-white shadow-2xl rounded-lg px-6 py-8 md:py-12 max-w-4xl mx-auto space-y-8">
        
        <h2 className="text-4xl font-bold text-blue-500 text-center mb-6">About Us</h2>

        {/* Intro Paragraph */}
        <p className="text-gray-700 text-xl text-center mb-6">
          At <strong>Invoice App</strong>, we aim to revolutionize how businesses and freelancers manage invoices.
          By simplifying the process, we help you save time and reduce financial stress, allowing you to focus on growing your business.
        </p>

        {/* Features & Benefits Section */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-blue-100 p-6 rounded-lg shadow-lg text-center">
            <h4 className="text-xl font-semibold text-blue-500 mb-2">Customization</h4>
            <p className="text-gray-600 text-lg">Create personalized invoices with custom templates that reflect your brand's identity.</p>
          </div>
          <div className="bg-blue-100 p-6 rounded-lg shadow-lg text-center">
            <h4 className="text-xl font-semibold text-blue-500 mb-2">Tracking</h4>
            <p className="text-gray-600 text-lg">Track real-time payment statuses and get automated reminders to stay on top of your finances.</p>
          </div>
          <div className="bg-blue-100 p-6 rounded-lg shadow-lg text-center">
            <h4 className="text-xl font-semibold text-blue-500 mb-2">Security</h4>
            <p className="text-gray-600 text-lg">Your financial data is secured with top-tier encryption to ensure privacy and protection.</p>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-8 rounded-lg shadow-lg">
          <h3 className="text-3xl font-semibold mb-4">Why Choose Invoice App?</h3>
          <p className="text-lg font-light">
            Our focus is on creating an intuitive, easy-to-use platform that reduces financial burden and ensures your invoicing experience is smooth.
            Join thousands of businesses and freelancers who trust us to manage their invoicing needs.
          </p>
        </div>

        {/* Team Section */}
        <div className="space-y-8">
          <h3 className="text-3xl font-semibold text-blue-500 text-center">Meet Our Team</h3>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-center">
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg">
              <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="Team Member" className="w-32 h-32 rounded-full mb-4"/>
              <h4 className="text-xl font-semibold text-blue-500">John Doe</h4>
              <p className="text-gray-600">Co-Founder & CEO</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg">
              <img src="https://randomuser.me/api/portraits/women/1.jpg" alt="Team Member" className="w-32 h-32 rounded-full mb-4"/>
              <h4 className="text-xl font-semibold text-blue-500">Jane Smith</h4>
              <p className="text-gray-600">Lead Developer</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg">
              <img src="https://randomuser.me/api/portraits/men/2.jpg" alt="Team Member" className="w-32 h-32 rounded-full mb-4"/>
              <h4 className="text-xl font-semibold text-blue-500">Alex Johnson</h4>
              <p className="text-gray-600">Chief Marketing Officer</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AboutUs;
