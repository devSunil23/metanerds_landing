"use client";

import React from "react";
import AiCard from "./AiCard";

const aiSolutions = [
  {
    title: "AI & ML\nSolutions",
    description:
      "We design AI-driven systems that automate decisions, detect patterns, and generate insights—improving accuracy, speed, and strategic outcomes across all industries.",
  },
  {
    title: "AI in Crypto\n& DeFi",
    description:
      "Our AI models power crypto bots, optimize investment strategies, and detect suspicious activities in real time—ensuring smarter trading and safer DeFi environments.",
  },
  {
    title: "AI For Metaverse\n& NFT",
    description:
      "We create intelligent avatars, lifelike NPCs, and dynamic NFT generators. AI also personalizes virtual environments and facilitates real-time global communication—making the digital world more immersive and interactive.",
  },
];

const AiSolutionsSection = () => {
  return (
    <section className="bg-black relative px-6 md:px-20 py-20 flex flex-col items-center gap-10 text-white">
      <div className="hidden md:block absolute inset-0 z-0 pointer-events-none">
        <img
          src="/assets/elipse_1460.png"
          alt="elipse_1459"
          className="absolute w-200 h-200 object-contain  "
          style={{
            top: `20%`,
            left: `-18%`,
          }}
        />
        <img
          src="/assets/elipse_1459.png"
          alt="elipse_1459"
          className="absolute w-200 h-200 object-contain"
          style={{
            top: `-22%`,
            right: "0%",
            rotate: "-90deg",
          }}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="col-span-1 md:col-span-2 flex md:justify-center">
          <AiCard {...aiSolutions[0]} />
        </div>
        <AiCard {...aiSolutions[1]} />
        <AiCard {...aiSolutions[2]} />
      </div>
    </section>
  );
};

export default AiSolutionsSection;
