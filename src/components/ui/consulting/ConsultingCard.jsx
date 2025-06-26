import React from "react";

const ConsultingCard = ({ number, title, subtitle, description }) => {
  return (
    <div className="relative flex flex-col items-center text-center text-white px-4 py-8 md:py-10 lg:py-14">
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
          className="text-3xl mt-2 md:text-4xl font-extrabold uppercase"
          style={{ fontFamily: '"Agency FB", sans-serif' }}
        >
          {title}
        </h3>
        <p
          className="tracking-[0.3em] mb-2 text-base mt-1 text-white uppercase"
          style={{ fontFamily: '"Agency FB", sans-serif' }}
        >
          {subtitle}
        </p>

        <div className="h-[2px] w-16 bg-[#9498FD] mx-auto my-4 rounded-full"></div>

        <p className="text-xs md:text-sm text-[#FFFFFFCC] leading-relaxed max-w-sm mx-auto">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ConsultingCard;
