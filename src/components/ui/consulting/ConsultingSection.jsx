"use client";

import React from "react";
import ConsultingCard from "./ConsultingCard";

const consultingData = [
  {
    number: "01",
    title: "BLOCKCHAIN",
    subtitle: "CONSULTING",
    description:
      "We provide end-to-end guidance on adopting blockchain—from strategy to architecture, PoC, compliance, and final deployment tailored to your goals and industry.",
  },
  {
    number: "02",
    title: "WEB3",
    subtitle: "CONSULTING",
    description:
      "We craft personalized Web3 roadmaps for your business. From integrating legacy systems to building token economies, we help future-proof your digital journey.",
  },
  {
    number: "03",
    title: "METAVERSE",
    subtitle: "CONSULTING",
    description:
      "We help businesses enter the metaverse by developing 3D virtual spaces, marketplaces, games, or collaborative platforms aligned with real-world goals and revenue models.",
  },
  {
    number: "04",
    title: "AI",
    subtitle: "CONSULTING",
    description:
      "We guide companies through AI transformation—identifying the right use cases, building models, re-architecting infrastructure, and ensuring seamless integration across departments.",
  },
  {
    number: "05",
    title: "DEFI",
    subtitle: "CONSULTING",
    description:
      "We help businesses build or onboard DeFi platforms with secure smart contracts, capital-efficient mechanisms, and superior UX to enhance liquidity, investment performance, and growth.",
  },
  {
    number: "06",
    title: "DAO",
    subtitle: "CONSULTING",
    description:
      "From governance frameworks to community activation, we design, develop, and scale DAOs with the right tokenomics, leadership, and tooling for long-term scalability.",
  },
];

const ConsultingSection = () => {
  return (
    <section className="bg-black overflow-hidden py-16 px-6 md:px-28 relative">
      <img
        src="/assets/elipse_1460.png"
        alt="elipse_1460"
        className="absolute w-150 h-150 object-contain  "
        style={{
          top: `-5%`,
          left: `-14%`,
        }}
      />
      <img
        src="/assets/elipse_1459.png"
        alt="elipse_1459"
        className="absolute w-150 h-150 object-contain  "
        style={{
          bottom: `30%`,
          right: `-12%`,
        }}
      />
      <img
        src="/assets/elipse_1460.png"
        alt="elipse_1460"
        className="absolute w-150 h-150 object-contain  "
        style={{
          bottom: `-5%`,
          left: `-14%`,
        }}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
        {consultingData.map((item, idx) => (
          <ConsultingCard key={idx} {...item} />
        ))}
      </div>
    </section>
  );
};

export default ConsultingSection;
