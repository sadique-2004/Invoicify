import React from "react";
import { motion } from "framer-motion";
import sadiqueImg from "../assets/sad.jpg";


const testimonials = [

  {
    name: "Md Sadique",
    role: "Freelancer",
    feedback: "Invoicify saved me hours of manual work. The interface is clean, and I love the automation features.",
    rating: 5,
    image: sadiqueImg,
  },
  ,
  {
    name: "Priya K.",
    role: "Consultant",
    feedback: "As someone new to invoicing tools, Invoicify was incredibly easy to use. The templates are professional and customizable.",
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
];

const TestimonialCard = ({ name, role, feedback, rating, image }) => (

  <motion.div
    className="testimonial-card"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 200, damping: 10 }}
    style={{
      margin: "1rem",
      padding: "1.5rem",
      borderRadius: "10px",
      boxShadow: "0px 5px 15px rgba(0,0,0,0.2)",
      backgroundColor: "#ffffff",
      textAlign: "center",
      maxWidth: "300px",
    }}
  >
    {/* User Picture */}
    <div
      style={{
        marginBottom: "1rem",
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        overflow: "hidden",
        margin: "0 auto",
      }}
    >
      <img
        src={image}
        alt={`${name}'s picture`}
        style={{ width: "100%", height: "100%", objectFit: "cover", }}
      />
    </div>
    {/* User Details */}
      <h3 style={{ marginBottom: "0.5rem", fontFamily: "Montserrat" }}>{name}</h3>
      <p style={{ color: "#888", fontStyle: "italic", fontFamily: "Lato" }}>{role}</p>
      <p style={{ margin: "1rem 0", color: "#555", fontFamily: "Merriweather" }}>{feedback}</p>
      <div>
        {"⭐".repeat(Math.floor(rating))}{" "}
        {rating % 1 === 0.5 ? "⭐ (half)" : ""}
  
  </div>
  </motion.div >
);

const Testimonials = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      padding: "2rem",
      backgroundColor: "#f9f9f9",
    }}
  >
    {testimonials.map((t, index) => (
      <TestimonialCard key={index} {...t} />
    ))}
  </div>
);

export default Testimonials;



// <SwiperSlide>Slide 1</SwiperSlide>
// <SwiperSlide>Slide 2</SwiperSlide>
// <SwiperSlide>Slide 3</SwiperSlide>
// <SwiperSlide>Slide 4</SwiperSlide>
// <SwiperSlide>Slide 5</SwiperSlide>
