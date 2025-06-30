import React from "react";
import { Icon } from "@iconify/react";

const services = [
  {
    title: "Web3.0",
    subtitle: "Development",
    description:
      "We help build the future of the internet with decentralized apps, metaverse platforms, smart contract systems, and Web3-native infrastructure—backed by blockchain and AI integration",
  },
  {
    title: "Web3",
    subtitle: "Integration",
    description:
      "We transition traditional systems into decentralized frameworks. Our custom Web3 integrations ensure privacy, security, and ownership—empowering users and businesses alike.",
  },
];

const Web3CardSection = () => {
  return (
    <section className="bg-black  text-white py-6 md:py-24 px-6 font-jakarta text-center">
      {/* Service Grid */}
      <div className="grid mx-16 grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className={`p-8 rounded-4xl  shadow-md  duration-300 ease-in-out ${
              index % 2 === 0
                ? "bg-gradient-to-r from-[#000000] to-[#9498FD73]"
                : "bg-gradient-to-l from-[#000000] to-[#9498FD73]"
            }`}
          >
            <h3 className="text-[28px] font-semibold text-[#FFFFFFCC] mb-1">
              {service.title}
            </h3>
            <p className="text-[28px] font-semibold text-[#FFFFFFCC] mb-2">
              {service.subtitle}
            </p>
            <div className="h-[2px] w-16 bg-[#9498FD] mx-auto my-4 rounded-full"></div>
            <p className="text-sm md:text-[16px] text-[#FFFFFFCC] leading-relaxed max-w-sm mx-auto">
              {service.description}
            </p>
            <div className="flex justify-center my-2 mt-8">
              <div className="w-8 h-8 rounded-full border border-[#FFFFFF] flex items-center justify-center">
                <Icon icon="uil:play" className="text-white text-sm" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Web3CardSection;
