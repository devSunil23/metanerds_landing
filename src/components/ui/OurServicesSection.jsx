import { Icon } from "@iconify/react";
import React from "react";

const services = [
  {
    id: 1,
    title: "Enterprise-grade systems",
  },
  {
    id: 2,
    title: "API and backend architecture",
  },
  {
    id: 3,
    title: "Mobile and web application development",
  },
  {
    id: 4,
    title: "System audits and optimization",
  },
];

const OurServicesSection = () => {
  return (
    <section className="relative -mt-16 bg-black text-white py-24 px-6 font-jakarta overflow-hidden">
      {/* Background decorations (optional waves if you want to use images) */}
      <img
        src="/assets/left-wave.png"
        className="absolute -left-10 bottom-100 w-48 md:w-72 opacity-50 pointer-events-none"
        alt="decoration"
        style={{
          transform: "rotate(20deg)", // Adjust if rotation needed
        }}
      />
      <img
        src="/assets/right-wave.png"
        className="absolute -right-20 top-0 w-48 md:w-72 opacity-70 pointer-events-none"
        alt="decoration"
        style={{
          transform: "rotate(190deg)", // Adjust if rotation needed
        }}
      />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <h2
          className="text-4xl md:text-6xl font-extrabold uppercase"
          style={{ fontFamily: '"Agency FB", sans-serif' }}
        >
          OUR SERVICES
        </h2>
        <h3 className="mt-4 text-xl md:text-2xl font-semibold text-white">
          Custom Software Architecture & System Design
        </h3>
        <p className="mt-4 text-sm md:text-base text-gray-400 leading-relaxed">
          We specialize in architecting bespoke software systems tailored to
          your unique operational and strategic needs. From backend architecture
          to user-facing applications, our designs are scalable, secure, and
          built to integrate with your existing environment.
        </p>
      </div>

      {/* Service Cards */}
      <div className="mt-16 flex flex-col items-center gap-8">
        {services.map((service, index) => (
          <div
            key={service.id}
            className="relative w-full max-w-xl bg-gradient-to-b from-[#000000] to-[#9498FD] rounded-md px-6 py-5 text-center shadow-lg border border-[#2B2B42]"
          >
            {/* Circle Number */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2">
              <div className="w-10 h-10 bg-gradient-to-r from-[#7C7AFD] to-[#4B30EA] rounded-full flex items-center justify-center text-sm font-bold">
                #{service.id}
              </div>
            </div>
            <p className="mt-3 text-base md:text-sm font-medium text-gray-200">
              {service.title}
            </p>
          </div>
        ))}
      </div>

      {/* Quote */}
      <div className="mt-10 text-center relative max-w-2xl mx-auto text-sm md:text-base text-gray-300 ">
        <Icon
          icon="mdi:format-quote-open"
          className="absolute -left-2 bottom-8 text-3xl opacity-30"
        />
        We don’t just write code—we build technology frameworks that evolve with
        your business.
        <Icon
          icon="mdi:format-quote-close"
          className="absolute -right-2 bottom-8 text-3xl opacity-30"
        />
      </div>
    </section>
  );
};

export default OurServicesSection;
