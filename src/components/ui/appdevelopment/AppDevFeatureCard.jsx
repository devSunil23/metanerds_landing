import React from "react";

const AppDevFeatureCard = ({ number, title, subtitle, description }) => {
  return (
    <div className="relative flex flex-col items-center text-center text-white px-4 py-5 ">
      {/* Big number background */}
      <div
        style={{
          fontFamily: '"Agency FB", sans-serif',
        }}
        className=" text-[60px] my-2 md:text-[80px] font-bold text-[#262626] opacity-70 leading-none select-none z-0"
      >
        {number}
      </div>
      <div className="h-[2px] w-16 bg-[#9498FD] mx-auto my-4 rounded-full"></div>
      {/* Foreground content */}
      <div className="relative z-10">
        <h3
          className=" mt-2 text-3xl font-extrabold uppercase"
          style={{ fontFamily: '"Agency FB", sans-serif' }}
        >
          {subtitle}
        </h3>
      </div>
    </div>
  );
};

export default AppDevFeatureCard;
