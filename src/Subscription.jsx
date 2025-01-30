import { motion } from "framer-motion";

const SquishyCard = () => {
  return (
    <section className="bg-white px-4 py-12 flex justify-center">
      {/* Free Trial Card */}
      <div className="mx-4 w-fit">
        <Card type="free" />
      </div>
      {/* Premium Version Card */}
      <div className="mx-4 w-fit">
        <Card type="premium" />
      </div>
    </section>
  );
};

const Card = ({ type }) => {
  return (
    <motion.div
      whileHover="hover"
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
      variants={{
        hover: {
          scale: 1.05,
        },
      }}
      className="relative h-96 w-80 shrink-0 overflow-hidden rounded-xl bg-[#45ccb8] p-8"
    >
      <div className="relative z-10 text-white">
        {/* Plan Type Badge */}
        <span className="mb-3 block w-fit rounded-full bg-white/30 px-3 py-0.5 text-sm font-light text-white">
          {type === "free" ? "Free Trial" : "Premium Plan"}
        </span>
        
        {/* Plan Title and Price */}
        <motion.span
          initial={{ scale: 0.85 }}
          variants={{
            hover: {
              scale: 1,
            },
          }}
          transition={{
            duration: 1,
            ease: "backInOut",
          }}
          className="my-2 block origin-top-left font-mono text-6xl font-black leading-[1.2]"
        >
          {type === "free" ? "Free" : "₹99/"}
          <br />
          
          {type === "free" ? "90 Days" : "Year"}
        </motion.span>

        {/* Description Text */}
        <p className="text-white text-sm">
          {type === "free" 
            ? "Experience Invoicify free for 90 days and streamline your invoicing process."
            : "Get all the premium features of Invoicify for just ₹99 and manage your invoices effortlessly."}
        </p>
      </div>

      {/* CTA Button */}
      <button className="absolute bottom-4 left-4 right-4 z-20 rounded border-2 border-white bg-white py-2 text-center font-mono font-black uppercase text-neutral-800 backdrop-blur transition-colors hover:bg-white/30 hover:text-white">
        {type === "free" ? "Start Free Trial" : "Get Premium Plan"}
      </button>

      {/* Background Shapes */}
      <Background />
    </motion.div>
  );
};

const Background = () => {
  return (
    <motion.svg
      width="320"
      height="384"
      viewBox="0 0 320 384"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 z-0"
      variants={{
        hover: {
          scale: 1.5,
        },
      }}
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
    >
      <motion.circle
        variants={{
          hover: {
            scaleY: 0.5,
            y: -25,
          },
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
          delay: 0.2,
        }}
        cx="160.5"
        cy="114.5"
        r="101.5"
        fill="#262626"
      />
      <motion.ellipse
        variants={{
          hover: {
            scaleY: 2.25,
            y: -25,
          },
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
          delay: 0.2,
        }}
        cx="160.5"
        cy="265.5"
        rx="101.5"
        ry="43.5"
        fill="#262626"
      />
    </motion.svg>
  );
};

export default SquishyCard;
