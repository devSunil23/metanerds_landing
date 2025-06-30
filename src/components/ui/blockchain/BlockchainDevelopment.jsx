"use client";

import React from "react";
import Image from "next/image";

const BlockchainDevelopment = () => {
  return (
    <section className="bg-black text-white px-6 md:px-48 py-6 md:py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative">
        <img
          src="/assets/elipse_1460.png"
          alt="elipse 1460"
          className="absolute w-[400px] h-[400px] object-contain"
          style={{
            top: "10%",
            left: "-36%",
          }}
        />
        {/* Left Side */}
        <div className="space-y-4">
          <div
            className="text-7xl font-bold text-[#262626]"
            style={{
              fontFamily: '"Agency FB", sans-serif',
            }}
          >
            01
          </div>

          <h2
            style={{
              fontFamily: '"Agency FB", sans-serif',
            }}
            className="text-4xl flex flex-col gap-1  md:text-6xl font-extrabold uppercase leading-snug"
          >
            <span className="text-[#9498FD]">Blockchain</span>

            <span className="text-white -mt-4">Development</span>
          </h2>

          <p className="text-xs md:text-[16px] text-[#FFFFFFCC] max-w-lg leading-relaxed">
            We build scalable, secure blockchain ecosystems for enterprises.
            From custom Layer 1 protocols and smart contracts to NFT
            marketplaces and dApps, we engineer powerful solutions that drive
            decentralization and operational efficiency.
          </p>
        </div>

        {/* Right Side (3D Illustration) */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/assets/blockchain-3d.png" // Replace with actual path
            alt="Blockchain Art"
            width={500}
            height={500}
            className="w-[300px] md:w-[450px] h-auto filter drop-shadow-[-20px_80px_100px_rgba(233,115,222,0.5)]"
          />
        </div>
      </div>
    </section>
  );
};

export default BlockchainDevelopment;
