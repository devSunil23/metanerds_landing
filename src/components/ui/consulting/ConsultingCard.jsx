import React from "react";

const ConsultingCard = ({ number, title, subtitle, description }) => {
  return (
    <div className="relative flex flex-col items-center text-center text-white px-4 py-5 md:py-10 lg:py-14">
      {/* Big number background */}
      <div
        style={{
          fontFamily: '"Agency FB", sans-serif',
        }}
        className=" text-[100px] my-2 md:text-[120px] font-bold text-[#262626] opacity-70 leading-none select-none z-0"
      >
        {number}
      </div>

      {/* Foreground content */}
      <div className="relative z-10">
        <h3
          className=" mt-2 text-5xl font-extrabold uppercase"
          style={{ fontFamily: '"Agency FB", sans-serif' }}
        >
          {title}
        </h3>
        <p
          className="tracking-[0.3em] mb-2 text-xl mt-1 text-white uppercase"
          style={{ fontFamily: '"Agency FB", sans-serif' }}
        >
          {subtitle}
        </p>

        <div className="h-[2px] w-16 bg-[#9498FD] mx-auto my-4 rounded-full"></div>

        <p className="text-sm md:text-[16px] text-[#FFFFFFCC] leading-relaxed max-w-sm mx-auto">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ConsultingCard;
