import React from "react";
import CommonHero from "../ui/CommonHeroSection";
import PrivacyPolicyContent from "../ui/privacypolicy/PrivacyPolicyContent";

export default function PrivacyPolicy() {
  return (
    <>
      <CommonHero heading={"Privacy Policy"} subHeading={""} description={""} />
      <PrivacyPolicyContent />
    </>
  );
}
