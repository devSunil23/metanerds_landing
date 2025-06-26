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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((item, index) => (
          <div
            key={index}
            className={`relative p-6 rounded-2xl border-l-1 border-b-1 border-[#9F9DFD] bg-gradient-to-b from-[#00000052] to-[#9498FD4D] hover:border-[#9F9DFD] transition-all duration-300 ${
              item.image ? "flex justify-between items-center" : ""
            }`}
          >
            {/* Left content (text + icon + number) */}
            <div className="flex flex-col justify-between gap-4 w-full max-w-[70%]">
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-[#9498FD] leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-[#FFFFFF] mt-2 font-extralight">
                  {item.description}
                </p>
              </div>

              <div className="flex items-center justify-between w-full mt-4">
                <div className="text-4xl">
                  <Icon icon={item.icon} style={{ color: "#9498FD" }} />
                </div>
                <div className="text-[#2E2E2E] text-4xl font-extrabold">
                  {item.number}
                </div>
              </div>
            </div>

            {/* Right image */}
            {item.image && (
              <div className="ml-6 shrink-0">
                <Image
                  width={150}
                  height={150}
                  src={item.image}
                  alt={`feature ${index + 1}`}
                  className="rounded-xl absolute right-0 bottom-0 top-0 w-[100px] md:w-[150px] h-full object-cover"
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
