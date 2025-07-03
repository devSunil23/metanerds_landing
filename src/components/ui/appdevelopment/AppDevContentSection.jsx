import Image from "next/image";
import React from "react";
import AppDevFeatureSection from "./AppDevFeatureSection";

export default function AppDevContentSection() {
  return (
    <section className="bg-black overflow-hidden py-6 md:py-20 px-6 md:px-42  relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative">
        <div className="space-y-4">
          <img
            src="/assets/elipse_1460.png"
            alt="elipse 1460"
            className="absolute w-[400px] h-[400px] object-contain"
            style={{
              top: "10%",
              left: "-30%",
            }}
          />

          <p className="text-sm md:text-[18px] text-[#FFFFFFCC] max-w-lg leading-relaxed">
            At METANERDS, we design and develop robust mobile and web
            applications that don’t just function — they scale. Whether you’re
            building a customer-facing fintech app, an enterprise-grade
            dashboard, or a Web3-powered utility, our engineering teams combine
            UI/UX precision with backend stability and API-first architecture.
          </p>
          <button
            style={{
              fontFamily: "Plus Jakarta Sans",
            }}
            className="mt-8 px-6 py-2 text-white font-semibold relative z-10 transition 
              rounded-md bg-gradient-to-r from-[#7F7EFE] to-[#4B2FEA]
              before:content-[''] before:absolute before:inset-0 before:rounded-md before:p-[0.33px]
              before:bg-gradient-to-r before:from-[#A292FF] before:to-[#7E82FA] 
              before:z-[-1] before:block italic"
          >
            Our app development services include:
          </button>
        </div>

        {/* Right Side (3D Illustration) */}
        <div className="hidden md:flex justify-center md:justify-end">
          <Image
            src="/assets/app-devimg.png" // Replace with actual path
            alt="App dev Art"
            width={500}
            height={500}
            className="w-[300px] md:w-[450px] h-auto filter drop-shadow-[40px_30px_40px_rgba(233,115,222,0.1)]"
          />
        </div>
      </div>
    </section>
  );
}
