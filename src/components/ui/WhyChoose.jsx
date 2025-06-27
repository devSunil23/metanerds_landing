"use client";

import React from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";

const features = [
  {
    title: "Client–Centric Approach",
    description:
      "Every Engagement Is Customized, With Long-Term Outcomes in Mind.",
    icon: "iconamoon:arrow-top-right-5-circle-fill", // Iconify icon
    number: "01",
    image: "/assets/users.png",
  },
  {
    title: "Tech–Forward Thinking",
    description: "We’re Not Bound by Trends—We Anticipate Them.",
    icon: "iconamoon:arrow-top-right-5-circle-fill",
    number: "02",
  },
  {
    title: "Cross–Functional Expertise",
    description:
      "We Blend Software Engineering, Strategic Consulting, And Growth Marketing Under One Roof.",
    icon: "iconamoon:arrow-top-right-5-circle-fill",
    number: "03",
  },
  {
    title: "Strategic Dubai Location",
    description:
      "Based in DSO-FZA, At The Intersection Of Innovation, Infrastructure, And Global Connectivity.",
    icon: "iconamoon:arrow-top-right-5-circle-fill",
    number: "04",
    image: "/assets/dubai.png",
  },
];

const WhyChoose = () => {
  return (
    <section className="bg-black py-16 px-6 md:px-20 text-white">
      <h2 className="text-center text-sm md:text-base uppercase text-slate-300 mb-3">
        Why Choose
      </h2>
      <h1 className="text-center text-3xl md:text-5xl font-bold text-[#9F9DFD] mb-12">
        METANERDS
      </h1>

      <div className="md:mx-36 grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((item, index) => (
          <div
            key={index}
            className={`relative p-6 rounded-2xl shadow-md backdrop-blur-[31.55px] transition-all duration-300
        border border-[0.5px] border-[rgba(255,255,255,0.15)] 
        bg-[linear-gradient(180deg,rgba(148,152,253,0.0288)_0%,rgba(148,152,253,0.1656)_100%)]
        ${
          item.image ? " md:col-span-2 flex justify-between" : "md:col-span-1"
        }`}
          >
            {/* Left content (text + icon + number) */}
            <div
              className={`flex flex-col justify-between gap-4 w-full ${
                item.image ? "md:max-w-[67%]" : "md:max-w-[100%]"
              } `}
            >
              <div>
                <h3 className="text-sm md:text-[16px] font-lighterbold text-[#9498FD]">
                  {item.title}
                </h3>
                <p className="text-xs leading-[18px] md:text-[12px] text-[#FFFFFF] mt-2 font-normal">
                  {item.description}
                </p>
              </div>

              <div className="flex items-center justify-between w-full ">
                <div className="text-4xl">
                  <Icon icon={item.icon} style={{ color: "#9498FD" }} />
                </div>
                <div className="text-[#2E2E2E] text-[55px] font-extrabold outline-text">
                  {item.number}
                </div>
              </div>
            </div>

            {/* Right image */}
            {item.image && (
              <div className="ml-6 hidden md:block shrink-0">
                <Image
                  width={150}
                  height={100}
                  src={item.image}
                  alt={`feature ${index + 1}`}
                  className="rounded-xl absolute right-0 bottom-0 top-0 w-[100px] md:w-[180px] h-full "
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChoose;
