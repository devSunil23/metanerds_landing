"use client";

import React from "react";
import Image from "next/image";

const LeadershipSection = () => {
  return (
    <section className="relative bg-black text-white pt-48 pb-12 px-6 md:px-18 lg:px-48 font-jakarta overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/leadership-bg.png"
          alt="Leadership background"
          fill
          className="object-cover opacity-30"
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto -mt-30 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="w-full md:w-1/2 text-left">
          <h2
            className="text-3xl md:text-5xl font-extrabold uppercase mb-4"
            style={{ fontFamily: '"Agency FB", sans-serif' }}
          >
            LEADERSHIP
          </h2>

          <div className="my-8">
            <h3 className="text-xl md:text-3xl font-semibold text-[#A7AAFF]">
              Shavez Ahmed Siddiqui
            </h3>
            <p className="my-2 text-sm md:text-base font-semibold italic text-white">
              Managing Partner – Digital Systems & Fintech Innovation
            </p>
          </div>

          <ul className="list-disc md:ml-3 mt-4 text-sm  md:text-base text-white/80 font-extralight leading-relaxed">
            <li>
              Brings a decade of experience building high-integrity platforms
              across finance and tech sectors.
            </li>
          </ul>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-[280px] md:w-[400px] aspect-[2/3] rounded-2xl overflow-hidden drop-shadow-2xl z-20">
            <Image
              src="/assets/shavez_img.png"
              alt="Shavez Ahmed Siddiqui"
              fill
              className="object-cover w-full h-full rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
