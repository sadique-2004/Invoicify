import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import template1 from "../assets/invoice1.jpg";
import template2 from "../assets/invoice2.jpg";
import template3 from "../assets/invoice3.jpg";

const TemplateCard = ({ templateImage, templateTitle, onChoose }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const Navigate = useNavigate();
  const template1 = ()=>{
    Navigate('/invoice1')
  }

  return (
    <motion.div
      className="template-card"
      initial={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)" }}
      animate={{
        height: isExpanded ? "500px" : "250px",
        width: isExpanded ? "400px" : "300px",
      }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      onClick={toggleExpand}
      style={{
        overflow: "hidden",
        background: "#ffffff",
        borderRadius: "15px",
        cursor: "pointer",
        margin: "1rem",
        boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.2)",
      }}
    >
      {/* Template Preview */}
      <motion.img
        src={templateImage}
        alt={templateTitle}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        animate={{ height: isExpanded ? "60%" : "100%" }}
        transition={{ duration: 0.3 }}
      />

      {/* Template Details */}
      {isExpanded && (
        <motion.div
          className="template-details"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{ padding: "1rem", textAlign: "center" }}
        >
          <h3 style={{ fontSize: "1.5rem", margin: "0.5rem 0" }}>
            {templateTitle}
          </h3>
          <p style={{ color: "#555" }}>
            Preview and customize this template to create your invoice easily.
          </p>

          {/* Choose Template Button */}
          
          <motion.button
            // onClick={(e) => {
            //   e.stopPropagation(); // Prevent the card collapse
            //   onChoose(templateTitle);
            // }}
            onClick={template1}
            style={{
              marginTop: "1rem",
              padding: "0.5rem 1rem",
              borderRadius: "5px",
              border: "none",
              backgroundColor: "#45ccb8",
              color: "#fff",
              fontSize: "1rem",
              cursor: "pointer",
            }}
            whileHover={{ scale: 1.1 }}
          >
            Choose Template
          </motion.button>
        </motion.div>
      )}
    </motion.div>
  );
};

// Example Usage
const TemplateSelection = () => {
  const templates = [
    { id: 1, image: template1 , title: "Professional" },
    // { id: 2, image: template2 , title: "Minimalist" },
    // { id: 3, image: template3 , title: "Creative" },
  ];

  const handleTemplateSelect = (template) => {
    alert(`Template "${template}" selected! Start creating your invoice.`);
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "1rem",
        height: "100vh"
      }}
    >
      {templates.map((template) => (
        <TemplateCard
          key={template.id}
          templateImage={template.image}
          templateTitle={template.title}
          onChoose={handleTemplateSelect}
        />
      ))}
    </div>
  );
};

export default TemplateSelection;
