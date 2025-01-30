import { useAnimate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// NOTE: Change this date to whatever date you want to countdown to :)
const COUNTDOWN_FROM = "2025-8-01";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

const ShiftingCountdown = () => {
  return (
    <div className="p-4 bg-[#e0f7f3] selection:bg-[#45ccb8] selection:text-gray-100">
      {/* Heading for the countdown */}
      <h2 className="text-center text-2xl font-semibold md:text-4xl">
      🎉 <span className="text-gradient">Enjoy the offer now that the countdown is on!</span> ⏳
      </h2>

      <div className="mx-auto flex w-full max-w-5xl items-center  mt-6 rounded  ">
        <CountdownItem unit="Day" text="days" />
        <CountdownItem unit="Hour" text="hours" />
        <CountdownItem unit="Minute" text="minutes" />
        <CountdownItem unit="Second" text="seconds" />
      </div>

      {/* Button to redirect to the offer page */}
      <div className="mt-8 text-center">
        <a
          href="/offer-page"  // Replace with the actual URL for the offer page
          className="inline-block bg-[#45ccb8] text-white px-8 py-3 rounded-full text-lg hover:bg-[#206a60] transition duration-300"
        >
         Claim Your Offer Now! 🎁
        </a>
      </div>
    </div>
  );
};

const CountdownItem = ({ unit, text }) => {
  const { ref, time } = useTimer(unit);

  return (
    <div className="flex h-24 w-1/4 flex-col items-center justify-center gap-1 border-r-[1px] border-l-[1px] border-[#45ccb8] font-mono md:h-36 md:gap-2 rounded-3xl bg-white ">
      <div className="relative w-full overflow-hidden text-center">
        <span
          ref={ref}
          className="block text-2xl font-medium text-[#45ccb8] md:text-4xl lg:text-6xl xl:text-7xl"
        >
          {time}
        </span>
      </div>
      <span className="text-xs font-light text-[#45ccb8] md:text-sm lg:text-base">
        {text}
      </span>
    </div>
  );
};

export default ShiftingCountdown;

// NOTE: Custom hook for handling the countdown timer logic
const useTimer = (unit) => {
  const [ref, animate] = useAnimate();

  const intervalRef = useRef(null);
  const timeRef = useRef(0);

  const [time, setTime] = useState(0);

  useEffect(() => {
    intervalRef.current = setInterval(handleCountdown, 1000);

    return () => clearInterval(intervalRef.current || undefined);
  }, []);

  const handleCountdown = async () => {
    const end = new Date(COUNTDOWN_FROM);
    const now = new Date();
    const distance = +end - +now;

    let newTime = 0;

    if (unit === "Day") {
      newTime = Math.floor(distance / DAY);
    } else if (unit === "Hour") {
      newTime = Math.floor((distance % DAY) / HOUR);
    } else if (unit === "Minute") {
      newTime = Math.floor((distance % HOUR) / MINUTE);
    } else {
      newTime = Math.floor((distance % MINUTE) / SECOND);
    }

    if (newTime !== timeRef.current) {
      // Exit animation
      await animate(
        ref.current,
        { y: ["0%", "-50%"], opacity: [1, 0] },
        { duration: 0.35 }
      );

      timeRef.current = newTime;
      setTime(newTime);

      // Enter animation
      await animate(
        ref.current,
        { y: ["50%", "0%"], opacity: [0, 1] },
        { duration: 0.35 }
      );
    }
  };

  return { ref, time };
};
