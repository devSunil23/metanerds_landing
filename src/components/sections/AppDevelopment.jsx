import React from "react";
import CommonHero from "../ui/CommonHeroSection";
import AppDevContentSection from "../ui/appdevelopment/AppDevContentSection";
import AppDevFeatureSection from "../ui/appdevelopment/AppDevFeatureSection";

export default function AppDevelopment() {
  return (
    <>
      <CommonHero
        heading={"App Development"}
        subHeading={"Building Scalable, Secure & Future-Ready Applications"}
      />

      <AppDevContentSection />
      <AppDevFeatureSection />
    </>
  );
}
