import React from "react";
import CommonHero from "../ui/CommonHeroSection";
import ConsultingSection from "../ui/consulting/ConsultingSection";

export default function Consulting() {
  return (
    <>
      {/* Hero Section */}
      <CommonHero
        heading={"Consulting"}
        subHeading={"for Innovation & Future-Readiness"}
        description={
          "Strategic expertise across Blockchain, AI, Web3, and DeFi—tailored to transform your vision into scalable, tech-driven success."
        }
      />

      {/* Consulting Section */}
      <ConsultingSection />
    </>
  );
}
