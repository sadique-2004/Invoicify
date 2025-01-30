// /src/components/TextParallaxContentExample.jsx
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
// import logo from '../assets/logo-Copy.jpg';
import logo from "../assets/banner.jpg";

// Default export the component
const TextParallaxContentExample = () => {
    return (
        <div className="bg-white mt-4">
            {/* About Us Section */}
            <TextParallaxContent
                imgUrl={logo}
                subheading="About Us"
                heading="Revolutionizing Invoice Management"
            >
                {/* <AboutUsContent /> */}
            </TextParallaxContent>

            {/* Why Choose Invoicify Section */}
            {/* <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Why Choose Invoicify?"
        heading="Simplifying Your Invoicing"
      >
        <WhyChooseContent />
      </TextParallaxContent> */}

            {/* Creator Section */}
            {/* <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?crop=entropy&cs=tinysrgb&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=400"
        subheading="Meet the Creator"
        heading="Md Sadique"
      >
        <CreatorContent />
      </TextParallaxContent> */}
        </div>
    );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
    return (
        <div
            style={{
                paddingLeft: IMG_PADDING,
                paddingRight: IMG_PADDING,
            }}
        >
            <div className="relative h-[150vh]">
                <StickyImage imgUrl={imgUrl} />
                <OverlayCopy heading={heading} subheading={subheading} />
            </div>
            {children}
        </div>
    );
};

const StickyImage = ({ imgUrl }) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["end end", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <motion.div
            style={{
                backgroundImage: `url(${imgUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: `calc(100vh - ${IMG_PADDING * 2}px)`,
                top: IMG_PADDING,
                scale,
            }}
            ref={targetRef}
            className="sticky z-0 overflow-hidden rounded-3xl"
        >
            <motion.div
                className="absolute inset-0 "
                style={{
                    opacity,
                }}
            />
        </motion.div>
    );
};

const OverlayCopy = ({ subheading, heading }) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
    const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

    return (
        <motion.div
            style={{
                y,
                opacity,
            }}
            ref={targetRef}
            className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
        >
            <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">{subheading}</p>
            <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
        </motion.div>
    );
};

// Content for About Us section
// const AboutUsContent = () => (
//     <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
//         <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
//             At Invoicify, we aim to revolutionize how businesses and freelancers manage invoices. Simplifying the process helps you save time, reduce financial stress, and focus on growing your business.
//         </h2>
//         <div className="col-span-1 md:col-span-8">
//             <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
//                 Our platform is intuitive, easy to use, and designed to reduce financial burden, ensuring that invoicing is effortless. Join thousands of businesses and freelancers who trust us for their invoicing needs.
//             </p>
//         </div>
//     </div>
// );

// //   // Content for Why Choose Invoicify section
// //   const WhyChooseContent = () => (
// //     <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
// //       <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
// //         Invoicify is completely FREE! 🎁 Create, manage, and save invoices without spending a dime.
// //       </h2>
// //       <div className="col-span-1 md:col-span-8">
// //         <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
// //           Start creating invoices effortlessly today. It's simple, quick, and designed to save you time!
// //         </p>
// //       </div>
// //     </div>
// //   );

// // Content for Creator section
// const CreatorContent = () => (
//     <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
//         <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
//             Md Sadique, the creator of Invoicify—a tool designed to make invoicing effortless, efficient, and completely FREE for everyone!
//         </h2>
//         <div className="col-span-1 md:col-span-8">
//             <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
//                 Empowering small businesses and streamlining processes is my passion. I'm Md Sadique, the founder and creator of Invoicify. My mission is to make invoicing easy and accessible for everyone.
//             </p>
//             <div>
//                 <a
//                     href="https://www.linkedin.com/in/md-sadique"
//                     className="text-blue-500"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                 >
//                     Connect with Me on LinkedIn
//                 </a>
//             </div>
//         </div>
//     </div>
// );


// Export the component as default
export default TextParallaxContentExample;
