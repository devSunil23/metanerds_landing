"use client";

import React from "react";

const BlockChainAbstraction = () => {
  return (
    <section className="bg-black text-white px-6 md:px-48  py-12">
      <div className="relative items-center flex  gap-4 md:gap-24">
        {/* Number on the left */}
        <div
          className="text-7xl font-bold text-[#262626]"
          style={{
            fontFamily: '"Agency FB", sans-serif',
          }}
        >
          04
        </div>

        {/* Content Card */}
        <div className="relative z-10 bg-gradient-to-b from-[#9498FD80] to-[#9498FD10] rounded-2xl p-8 md:p-10 shadow-lg border border-[#9498FDA6] max-w-2xl w-full pl-20 backdrop-blur-sm">
          <h2
            className="text-2xl md:text-4xl font-extrabold uppercase leading-snug"
            style={{
              fontFamily: '"Agency FB", sans-serif',
            }}
          >
            <span className="text-[#9498FD]">CHAIN</span>{" "}
            <span className="text-white">ABSTRACTION</span>
          </h2>

          <p className="text-xs md:text-sm text-[#FFFFFFCC] mt-4 leading-relaxed">
            Enable seamless interaction across blockchains with a unified
            experience. We remove the complexity of multiple chains, allowing
            apps to access liquidity, data, and services from any chain without
            users needing to switch networks
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlockChainAbstraction;
