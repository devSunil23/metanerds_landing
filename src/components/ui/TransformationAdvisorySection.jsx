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
    <section className="bg-black -mt-16 text-white py-24 px-6 font-jakarta text-center">
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-16">
        <p className="uppercase text-sm text-gray-400 tracking-wide">
          Strategic IT Consulting &
        </p>
        <h2
          className="text-3xl md:text-5xl font-extrabold uppercase mt-2"
          style={{ fontFamily: '"Agency FB", sans-serif' }}
        >
          <span className="bg-gradient-to-r from-[#7C7AFD] to-[#4B30EA] bg-clip-text text-transparent">
            TRANSFORMATION ADVISORY
          </span>
        </h2>
        <p className="mt-6 text-sm md:text-base text-gray-400 leading-relaxed">
          Technology is only as effective as the strategy behind it. Our
          consulting practice is focused on helping businesses modernize their
          infrastructure, align technology with business goals, and stay
          competitive in a rapidly changing digital landscape.
        </p>
      </div>

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
            <h3 className="text-lg font-semibold text-white mb-2">
              {service.title}
            </h3>
            <p className="text-sm text-gray-300 mb-4">{service.subtitle}</p>
            <div className="flex justify-center">
              <div className="w-8 h-8 rounded-full border border-gray-500 flex items-center justify-center">
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
