import React from "react";
import { Icon } from "@iconify/react";

const services = [
  {
    title: "CORE SERVICES THAT DRIVE INNOVATION",
    description:
      "At METANERDS, we blend deep-tech capabilities with strategic foresight to help businesses stay ahead of the curve. Our five core service pillars are engineered to support innovation, scalability, and long-term impact in the decentralized digital economy.",
  },
  {
    title: "BLOCKCHAIN DEVELOPMENT & ECOSYSTEM ARCHITECTURE",
    description:
      "We engineer secure, scalable blockchain solutions — from DeFi protocols and NFT platforms to smart contract systems and Layer 2 integrations. Our team brings deep expertise in protocol design, tokenomics, and enterprise-grade on-chain infrastructure.",
  },
  {
    title: "AI/ML SOLUTIONS & AUTOMATION",
    description:
      "We build AI-powered systems that learn, adapt, and optimize your operations. Whether it’s predictive analytics, AI trading bots, NLP engines, or custom machine learning models — we bring intelligent automation to your business workflows.",
  },
  {
    title: "WEB3 INFRASTRUCTURE & DAPP DEVELOPMENT",
    description:
      "From interoperable decentralized applications to DAO frameworks and Web3 wallets — we help you launch next-gen platforms with native compliance, secure smart contracts, and seamless cross-chain functionality.",
  },
  {
    title: "APP DEVELOPMENT FOR WEB, MOBILE & DECENTRALIZED PLATFORMS",
    description:
      "We craft performance-driven applications with precision — covering cross-platform mobile apps, decentralized interfaces, backend APIs, and responsive web apps. Our development stack is future-proof, scalable, and user-focused.",
  },

  {
    title: "STRATEGIC CONSULTING & PRODUCT ADVISORY",
    description:
      "We provide hands-on technology and product consulting across all phases — from IT roadmaps and digital transformation to compliance, cloud migration, and go-to-market strategies. Our role: to bridge vision with execution.",
  },
];

const TransformationAdvisorySection = () => {
  return (
    <section className="bg-black -mt-12  md:-mt-16  text-white  py-12 md:py-24 px-6 md:px-42 font-jakarta text-left md:text-center">
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-12">
        <p className="uppercase text-sm md:text-[18px] text-gray-400 tracking-wide">
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
        <p className="mt-6 text-sm md:text-[18px] text-[#FFFFFFCC] leading-relaxed">
          Technology is only as effective as the strategy behind it. Our
          consulting practice is focused on helping businesses modernize their
          infrastructure, align technology with business goals, and stay
          competitive in a rapidly changing digital landscape.
        </p>
      </div>

      {/* Service Grid */}
      <div className="grid mx-16 grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto relative">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="/assets/elipse_blur1458.png"
            className="absolute -left-60 -top-40  w-48 md:w-200 md:h-320 pointer-events-none  "
            alt="decoration"
          />
          <img
            src="/assets/elipse_blur1459.png"
            className="absolute right-20  -top-40 w-48 md:w-200 md:h-320 pointer-events-none  "
            alt="decoration"
          />
        </div>

        {services.map((service, index) => (
          <div
            key={index}
            className={`relative p-8 rounded-4xl shadow-md duration-300 ease-in-out text-left bg-[linear-gradient(to_right,_rgba(148,152,253,0.25)_10%,_rgba(0,0,0,0.6)_90%)] shadow-[0_0_40px_rgba(148,152,253,0.05)]`}
          >
            <div className={`absolute top-0 bottom-0 w-4 z-10 `}></div>

            <h3 className="text-[16px] md:text-[20px] font-semibold text-[#9498FD] mb-3">
              {service.title}
            </h3>

            <p className="text-sm md:text-[18px] text-[#FFFFFFCC] leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TransformationAdvisorySection;
