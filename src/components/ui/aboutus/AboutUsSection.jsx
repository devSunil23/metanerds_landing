"use client";

import React from "react";
import Image from "next/image";

const AboutUsSection = () => {
  return (
    <section className="bg-black text-white px-6 md:px-42 py-6 md:py-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Text */}
        <div className="flex-1 text-justify space-y-6 text-sm md:text-[18px] leading-relaxed text-[#FFFFFFCC]">
          <p>
            At the crossroads of technology and business,{" "}
            <strong>METANERDS INFOLABS</strong> stands as a forward-thinking
            consulting firm based in Dubai Silicon Oasis, thriving within the
            dynamic IFZA ecosystem. We partner with ambitious organizations
            aiming to navigate digital transformation with accuracy, agility,
            and a future-ready mindset.
          </p>
          <p>
            Founded by visionary tech experts{" "}
            <strong>Shavez Ahmed Siddiqui</strong>, METANERDS is built on a
            foundation of deep technical expertise, strategic foresight, and
            market understanding. Whether supporting fast-growing startups or
            established enterprises, we specialize in crafting custom digital
            solutions that tackle complex challenges and drive impactful
            outcomes.
          </p>
          <p>
            Our core services span software architecture, IT strategy
            consulting, and digital marketing — enabling businesses to not just
            keep up, but lead confidently in a tech-driven world.
          </p>
        </div>

        {/* Image */}
        <div className="flex-1 max-w-md w-full">
          <Image
            src="/assets/dubai-tower.png"
            alt="Dubai Skyline"
            width={400}
            height={400}
            className="rounded-2xl object-cover "
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
