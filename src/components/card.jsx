// import React from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-cards';

// // Import required modules
// import { EffectCards } from 'swiper/modules';

// export default function App() {
//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-200">
//       <Swiper
//         effect={'cards'}
//         grabCursor={true}
//         modules={[EffectCards]}
//         className="relative w-80 h-96"
//       >
//         {Array.from({ length: 9 }, (_, i) => (
//           <SwiperSlide
//             key={i}
//             className={`flex justify-center items-center text-2xl font-bold bg-gradient-to-br from-blue-500 to-purple-500 
//             text-white rounded-lg shadow-lg z-[${i + 1}]`}
//           >
//             Slide {i + 1}
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }
  


import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// Import required modules
import { EffectCards } from 'swiper/modules';

const testimonials = [
  {
    name: "Priya K.",
    role: "Consultant",
    feedback: "As someone new to invoicing tools, Invoicify was incredibly easy to use. The templates are professional and customizable.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/60.jpg",
  },
  {
    name: "Arjun S.",
    role: "Software Engineer",
    feedback: "I appreciate how Invoicify simplifies invoicing for freelancers like me. It saves hours of manual work each month!",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Anika D.",
    role: "Business Owner",
    feedback: "The best invoicing solution I’ve come across. The user experience and support are excellent. Highly recommend!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    name: "Rahul T.",
    role: "Freelancer",
    feedback: "Creating invoices has never been easier. I love the customization options and professional look it gives to my clients.",
    rating: 4.5,
    image: "https://randomuser.me/api/portraits/men/64.jpg",
  },
];

export default function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="relative w-96 h-[480px]"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide
            key={index}
            className="flex flex-col justify-between items-center p-6 bg-white rounded-lg shadow-lg text-center"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-24 h-24 rounded-full border-2 border-blue-500 mb-4"
            />
            <h3 className="text-lg font-bold text-gray-700">{testimonial.name}</h3>
            <p className="text-sm font-medium text-blue-600">{testimonial.role}</p>
            <p className="text-gray-600 my-4">{`"${testimonial.feedback}"`}</p>
            <div className="flex items-center justify-center text-yellow-400">
              {'★'.repeat(Math.floor(testimonial.rating))}
              {testimonial.rating % 1 !== 0 && <span>☆</span>}
              {'☆'.repeat(5 - Math.ceil(testimonial.rating))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
