import React from "react";
import HeroSection from "../ui/HeroSection";
import AboutSection from "../ui/AboutSection";
import OurServicesSection from "../ui/OurServicesSection";
import TransformationAdvisorySection from "../ui/TransformationAdvisorySection";
import DigitalMarketingSection from "../ui/DigitalMarketingSection";
import WhyChoose from "../ui/WhyChoose";
import LeadershipSection from "../ui/LeadershipSection";

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />
      {/* About Section */}
      <AboutSection />
      {/* Our Services Section */}
      <OurServicesSection />
      {/* Transformation Advisory Section */}
      <TransformationAdvisorySection />
      {/* Digital Marketing Section */}
      <DigitalMarketingSection />
      {/* why choose section */}
      <WhyChoose />
      {/* Leadership Section */}
      <LeadershipSection />
    </>
  );
};

export default HomePage;
