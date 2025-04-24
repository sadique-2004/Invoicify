import React, { useState } from "react";
import faqImage from "../assets/faq.svg";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is Invoicify?",
      answer:
        "Invoicify simplifies the creation and management of professional invoices, helping you save time and stay organized.",
    },
    {
      question: "Do I need to create an account?",
      answer:
        "Yes, it's mandatory if you want to create invoices. You can sign in or sign up using your Google account, or manually enter your details to create an account.",
    },
    {
      question: "How do I create a new invoice?",
      answer:
        "Head to the 'Create Invoice' section, fill in customer details, and add items. The invoice can be saved or printed instantly.",
    },
    {
      question: "Can I customize invoice templates?",
      answer:
        "Not yet, but we're working on customization options that will align with your business needs!",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-12 bg-gradient-to-r from-gray-100 to-gray-200 selection:text-[#45ccb8]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="sm:text-4xl text-3xl font-bold text-[#45ccb8] text-center mb-10 selection:text-white selection:bg-[#45ccb8]">
          Need Help? Frequently Asked Questions
        </h2>

        {/* Content */}
        <div className="flex flex-col lg:flex-row lg:space-x-8">
          {/* FAQ List */}
          <div className="flex-1">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-lg shadow-md transition-all hover:shadow-lg overflow-hidden"
                >
                  <button
                    className="flex justify-between items-center w-full px-6 py-4 text-lg font-semibold text-gray-700 hover:text-[#45ccb8]"
                    onClick={() => toggleFAQ(index)}
                  >
                    {faq.question}
                    <span>
                      {activeIndex === index ? (
                        <i className="fa-solid fa-chevron-up text-[#45ccb8]"></i>
                      ) : (
                        <i className="fa-solid fa-chevron-down text-gray-400"></i>
                      )}
                    </span>
                  </button>
                  {activeIndex === index && (
                    <div className="px-6 pb-4 text-gray-600 text-base transition-all duration-300 ease-in-out">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* SVG Image (only for desktop view) */}
          <div className="flex-1 hidden lg:block">
            <img
              src={faqImage}
              alt="FAQs Illustration"
              className="w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
