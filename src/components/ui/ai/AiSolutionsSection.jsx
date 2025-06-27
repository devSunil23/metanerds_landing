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
    <section className="bg-black relative overflow-hidden px-6 md:px-20 py-20 flex flex-col items-center gap-10 text-white">
      <img
        src="/assets/elipse_1460.png"
        alt="elipse_1459"
        className="absolute w-200 h-200 object-contain  "
        style={{
          top: `-12%`,
          left: `-17%`,
        }}
      />
      <img
        src="/assets/elipse_1459.png"
        alt="elipse_1459"
        className="absolute w-200 h-200 object-contain"
        style={{
          bottom: `-20%`,
          right: "-20%",
          // rotate: "-90deg",
        }}
      />

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
