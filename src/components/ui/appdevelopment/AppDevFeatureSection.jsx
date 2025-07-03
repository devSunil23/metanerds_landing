import React from "react";
import ConsultingCard from "../consulting/ConsultingCard";
import AppDevFeatureCard from "./AppDevFeatureCard";
import Image from "next/image";

export default function AppDevFeatureSection() {
  const appDevFeaturesData = [
    {
      number: "01",

      subtitle: "Cross-Platform App Development",
    },
    {
      number: "02",

      subtitle: "Native iOS and Android Apps",
    },
    {
      number: "03",

      subtitle: "Web App Development",
    },
    {
      number: "04",

      subtitle: "* Backend API Development & Cloud Integration",
    },
    {
      number: "05",

      subtitle: "Web3 App Integration",
    },
    {
      number: "06",
      subtitle: "MVP Builds for Startups & Rapid Prototyping",
    },
  ];
  return (
    <div className="bg-black overflow-hidden py-6 md:py-20 px-6 md:px-42  relative ">
      <div className="absolute -bottom-20 inset-0 z-0">
        <Image
          src="/assets/appdevgroupbg.png"
          alt="app dev background"
          fill
          className="object-cover repeat opacity-80"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {appDevFeaturesData.map((item, idx) => (
          <AppDevFeatureCard key={idx} {...item} />
        ))}
      </div>
    </div>
  );
}
