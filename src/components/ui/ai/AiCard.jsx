"use client";

import React from "react";
import { Icon } from "@iconify/react";

const AiCard = ({ title, description }) => {
  return (
    <div className="bg-[linear-gradient(to_right,_rgba(0,0,0,0.31)_40%,_rgba(148,152,253,0.31)_100%)] rounded-[2rem] border border-[#9498FD73] text-[#FFFFFFCC] w-full max-w-md px-6 md:px-8 py-6  md:py-12 text-center shadow-[0_0_40px_rgba(148,152,253,0.05)] transition-all duration-300">
      <h3 className="text-xl md:text-2xl font-extrabold leading-snug tracking-wide">
        {title.split("\n").map((line, idx) => (
          <div key={idx}>{line}</div>
        ))}
      </h3>

      <div className="h-[2px] w-14 bg-[#9498FD] mx-auto my-4 rounded-full"></div>

      <p className="text-sm md:text-[16px] text-[#FFFFFFCC] leading-relaxed max-w-md mx-auto">
        {description}
      </p>

      <div className="mt-5 md:mt-10 flex justify-center">
        <div className="h-10 w-10 flex items-center justify-center rounded-full border border-white hover:border-[#9498FD] transition-all duration-200 cursor-pointer">
          <Icon icon="mdi:play" className="text-white text-base" />
        </div>
      </div>
    </div>
  );
};

export default AiCard;
