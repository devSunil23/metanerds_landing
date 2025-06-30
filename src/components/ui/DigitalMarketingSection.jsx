import React from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";

const strategies = [
  {
    title: "Organic and paid",
    subtitle: "social media campaigns",
    src: "/assets/allowencemic.png",
  },
  {
    title: "Content and",
    subtitle: "community strategy",
    src: "/assets/contentcomunity.png",
  },
  {
    title: "Performance marketing",
    subtitle: "(ROI-focused)",
    src: "/assets/performance.png",
  },
  {
    title: "Analytics dashboards and",
    subtitle: "real-time reporting",
    src: "/assets/analytics.png",
  },
  {
    title: "Platform optimization",
    subtitle: "(Meta, LinkedIn, Google, more)",
    src: "/assets/optimization.png",
  },
];

const DigitalMarketingSection = () => {
  return (
    <section className="bg-black text-white py-12 px-6 md:px-16 font-jakarta relative overflow-hidden">
      <img
        src="/assets/marketing-bg.png"
        className="absolute left-40 bottom-0 w-48 md:w-100 opacity-50 pointer-events-none"
        alt="marketing background"
        style={{
          transform: "rotate(75deg)", // Adjust if rotation needed
        }}
      />
      <div className="max-w-6xl mx-auto text-center">
        {/* Title and Description */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-16 relative max-w-7xl mx-auto px-4 md:px-10">
          {/* Left side */}
          <div className="md:w-[35%] text-left md:pr-6">
            <h2
              className="text-3xl md:text-5xl font-extrabold uppercase"
              style={{ fontFamily: '"Agency FB", sans-serif' }}
            >
              DIGITAL MARKETING
            </h2>
            <p className="text-lg mt-1 font-semibold text-gray-300">
              & Social Media Strategy
            </p>
          </div>

          {/* Vertical Divider */}
          <div className="hidden md:block w-[1px] h-24 bg-[#D9D9D9]"></div>

          {/* Right side */}
          <div className="md:w-[40%] text-left md:pl-2">
            <p className="mt-0 text-sm md:text-[16px] text-gray-400 leading-relaxed">
              In a world driven by attention and data, we help brands grow
              intelligently. Our digital marketing arm combines strategy,
              content, analytics, and performance tools to build magnetic online
              presences that convert.
            </p>
          </div>
        </div>

        {/* Strategy Cards */}
        <div className="mt-16 md:mx-28 grid grid-cols-1 md:grid-cols-5 gap-4">
          {strategies.map((item, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 transition-all duration-300 flex flex-col items-center justify-center text-center backdrop-blur-md bg-white/5 hover:bg-white/10 ${
                item.highlight
                  ? "border-2 border-blue-500"
                  : "border border-white/10"
              }`}
            >
              <div className="text-3xl mb-3 text-[#B0B3FF]">
                {/* <Icon icon={item.icon} /> */}
                <Image
                  src={item.src}
                  alt={`strategy icon ${index + 1}`}
                  width={42}
                  height={42}
                  className="my-1"
                />
              </div>
              <h3 className="text-base font-semibold text-white leading-snug">
                {item.title}
              </h3>
              <p className="text-sm text-gray-300">{item.subtitle}</p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-10 flex items-center md:px-20  max-w-2xl mx-auto text-sm md:text-[16px] text-gray-300 ">
          <img
            src="/assets/Frame 23.png"
            alt="quote"
            height={45}
            width={40}
            className="-mt-4"
          />
          <span>
            We don’t just chase impressions—we build momentum that turns into
            measurable impact.
          </span>
          <img
            src="/assets/Frame 22.png"
            alt="quote"
            height={45}
            width={40}
            className="-mt-4"
          />
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketingSection;
