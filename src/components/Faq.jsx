import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is Invoicify?",
      answer:
        "Invoicify is a platform designed to simplify the creation, management, and storage of professional invoices. It's ideal for both individuals and businesses to streamline their invoicing processes.",
    },
    {
      question: "Do I need to create an account to use Invoicify?",
      answer:
        "Currently, you only need to log in with the provided credentials to access the platform. A sign-up feature is planned for future updates.",
    },
    {
      question: "How do I create a new invoice?",
      answer:
        "Navigate to the 'Create Invoice' section after logging in. Fill in customer details, add items dynamically, and save or print the generated invoice effortlessly.",
    },
    
    {
      question: "Can I customize my invoice templates?",
      answer:
        "At the moment, Invoicify offers a standard invoice template. However, future versions will include customization options to match your business needs.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-r from-gray-100 to-gray-200 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-10">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all"
            >
              <button
                className="flex justify-between items-center w-full text-left px-6 py-4 text-lg font-semibold text-gray-800 hover:bg-gray-100"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className="text-gray-600 text-xl">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </button>
              {activeIndex === index && (
                <div className="px-6 pb-4 text-gray-600 text-base">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
