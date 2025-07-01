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
    <section className="relative -mt-16 md:-mt-24 bg-black text-white py-24 px-6 font-jakarta overflow-hidden">
      {/* Background decorations (optional waves if you want to use images) */}
      <img
        src="/assets/left-wave.png"
        className="absolute -left-30 bottom-0 w-48 md:w-80 md:h-180 opacity-50 pointer-events-none scale-x-[1] scale-y-[-1]"
        alt="decoration"
        style={{
          transform: "rotate(20.06deg)", // Adjust if rotation needed
        }}
      />

      <img
        src="/assets/right-wave.png"
        className="absolute -right-32 -top-10 w-48 md:w-100 md:h-180 opacity-50 pointer-events-none  scale-x-[-1]"
        alt="decoration"
        style={{
          transform: "rotate(20.06deg)", // Adjust if rotation needed
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
        <p className="mt-4 text-sm md:text-[16px] text-gray-400 leading-relaxed">
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
            className="relative w-full max-w-xl mx-auto text-center px-6 py-5 rounded-[10.52px]
           bg-gradient-to-b from-[rgba(0,0,0,0.31)] to-[rgba(148,152,253,0.31)]
           border border-[0.5px]
           border-[rgba(255,255,255,0.15)]
           backdrop-blur-[31.55px] shadow-md"
          >
            {/* Circle Number */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2">
              <div className="w-10 h-10 bg-gradient-to-r from-[#7C7AFD] to-[#4B30EA] rounded-full flex items-center justify-center text-[16px] font-bold text-white">
                #{service.id}
              </div>
            </div>

            <p className="mt-3 text-[16px]  font-[500] text-[#FFFFFF]">
              {service.title}
            </p>
          </div>
        ))}
      </div>

      {/* Quote */}
      <div className="mt-10 flex md:px-16 items-center text-center relative max-w-2xl mx-auto text-sm md:text-[16px] text-gray-300 ">
        <img
          src="/assets/Frame 23.png"
          alt="quote"
          height={45}
          width={40}
          className="-mt-4"
        />
        <span>
          We don’t just write code—we build technology frameworks that evolve
          with your business.
        </span>
        <img
          src="/assets/Frame 22.png"
          alt="quote"
          height={45}
          width={40}
          className="-mt-4"
        />
      </div>
    </section>
  );
};

export default OurServicesSection;
