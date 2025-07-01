import React from "react";
import { Icon } from "@iconify/react";

const services = [
  {
    title: "IT Roadmaps And",
    subtitle: "Infrastructure Planning",
  },
  {
    title: "Cloud Transformation",
    subtitle: "And Migration Strategies",
  },
  {
    title: "Risk Assessment, Cybersecurity,",
    subtitle: "And Compliance Guidance",
  },
  {
    title: "Digital Process",
    subtitle: "Automation",
  },
];

const TransformationAdvisorySection = () => {
  return (
    <section className="bg-black -mt-18  md:-mt-16  text-white  py-12 md:py-24 px-6 md:px-42 font-jakarta text-center">
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-12">
        <p className="uppercase text-sm text-gray-400 tracking-wide">
          Strategic IT Consulting &
        </p>
        <h2
          className="text-4xl leading-tight md:text-6xl font-extrabold uppercase mt-2"
          style={{ fontFamily: '"Agency FB", sans-serif' }}
        >
          <span className="bg-gradient-to-r text-[#9498FD] bg-clip-text ">
            TRANSFORMATION ADVISORY
          </span>
        </h2>
        <p className="mt-6 text-xs md:text-[18px] text-[#FFFFFFCC] leading-relaxed">
          Technology is only as effective as the strategy behind it. Our
          consulting practice is focused on helping businesses modernize their
          infrastructure, align technology with business goals, and stay
          competitive in a rapidly changing digital landscape.
        </p>
      </div>

      {/* Service Grid */}
      <div className="grid mx-16 grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto relative">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="/assets/elipse_1458.png"
            className="absolute right-40 -top-40 w-48 md:w-180 md:h-180 pointer-events-none  "
            alt="decoration"
          />
        </div>
        {services.map((service, index) => (
          <div
            key={index}
            className={`p-8 rounded-4xl    shadow-md duration-300 ease-in-out  ${
              index % 2 === 0
                ? "bg-gradient-to-r border border-[0.5px] border-[rgba(255,255,255,0.15)] from-[#000000] to-[#9498FD73]"
                : "bg-gradient-to-l border border-[0.5px] border-[rgba(255,255,255,0.15)] from-[#000000] to-[#9498FD73]"
            }`}
          >
            {/* Fading border overlay */}
            <div
              className={`absolute top-0 bottom-0 w-4 z-10 ${
                index % 2 === 0
                  ? "left-0 bg-gradient-to-r from-black to-transparent"
                  : "right-0 bg-gradient-to-l from-black to-transparent"
              }`}
            ></div>
            <h3 className="text-xl font-semibold text-[#9498FD] mb-2">
              {service.title}
            </h3>
            <p className="text-lg text-[#FFFFFFCC] mb-4">{service.subtitle}</p>
            <div className="flex justify-center">
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

export default TransformationAdvisorySection;
