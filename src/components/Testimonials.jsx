import React from "react";
import { motion } from "framer-motion";
import sadiqueImg from "../assets/sad.jpg";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Global.css';

const testimonials = [
  {
    name: "Md Sadique",
    role: "Freelancer",
    feedback: "Invoicify saved me hours of manual work. The interface is clean, and I love the automation features.",
    rating: 5,
    image: sadiqueImg,
  },
  {
    name: "Priya K.",
    role: "Consultant",
    feedback: "As someone new to invoicing tools, Invoicify was incredibly easy to use. ",
    //  professional and customizable.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/60.jpg",
  },
  {
    name: "Mark T.",
    role: "Small Business Owner",
    feedback: "I manage a small retail business, and Invoicify made invoice generation and tracking a breeze.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  // Add more testimonials here as needed
];

const TestimonialCard = ({ name, role, feedback, rating, image }) => (
  <motion.div
    className="bg-white text-center p-6 rounded-lg shadow-lg mx-2 my-4 selection:bg-[#45ccb8] selection:text-gray-100"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 200, damping: 10 }}
  >
    {/* User Picture */}
    <div className="mb-4 w-24 h-24 rounded-full overflow-hidden mx-auto">
      <img
        src={image}
        alt={`${name}'s picture`}
        className="w-full h-full object-cover"
      />
    </div>
    {/* User Details */}
    <h3 className="text-xl font-semibold">{name}</h3>
    <p className="text-gray-500 italic">{role}</p>
    <p className="my-4 text-gray-700">{feedback}</p>
    <div>
      {"⭐".repeat(Math.floor(rating))}{" "}
      {rating % 1 === 0.5 ? "⭐ (half)" : ""}
    </div>
  </motion.div>
);

const Testimonials = () => {
  const settings = {
    infinite: true,
    speed: 2000, // Adjust speed as needed
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Duration between auto-scroll
    pauseOnHover: true,
    arrows: false, // Optional: hide arrows for a cleaner view
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="py-8 bg-gray-100 ">
      <h2 className="text-3xl sm:text-4xl font-bold text-[#45ccb8] text-center py-4  selection:bg-[#45ccb8] selection:text-gray-100">
        See How Invoicify Has Helped Others
      </h2>
      <Slider {...settings}>
        {testimonials.map((t, index) => (
          <TestimonialCard key={index} {...t} />
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
