"use client";

import React from "react";
import Image from "next/image";

const BlockchainDepinDevelopment = () => {
  return (
    <section className="bg-black text-white px-6 md:px-48 py-6 md:py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div className="flex justify-center md:justify-start">
          <Image
            src="/assets/blockchain-depin.png" // Replace with actual path
            alt="Blockchain depin"
            width={500}
            height={500}
            className="w-[300px] md:w-[450px] h-auto filter drop-shadow-[40px_30px_40px_rgba(233,115,222,0.5)]"
          />
        </div>
        {/* Right Side  */}

        <div className="space-y-4">
          <div
            className="text-7xl font-bold text-[#262626]"
            style={{
              fontFamily: '"Agency FB", sans-serif',
            }}
          >
            03
          </div>

          <h2
            style={{
              fontFamily: '"Agency FB", sans-serif',
            }}
            className="text-4xl   md:text-6xl font-extrabold uppercase leading-snug"
          >
            <span className="text-white">Depin</span>

            <span className=" text-[#9498FD] ml-2">Development</span>
          </h2>

          <p className="text-xs md:text-[16px] text-[#FFFFFFCC] max-w-lg leading-relaxed">
            We transform traditional infrastructure into decentralized,
            token-incentivized networks. Whether it’s smart energy grids,
            decentralized logistics, or real estate automation, we build
            trustless, efficient physical infrastructure systems powered by
            blockchain.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlockchainDepinDevelopment;
