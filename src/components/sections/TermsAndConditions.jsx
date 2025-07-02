import React from "react";
import CommonHero from "../ui/CommonHeroSection";
import TermsConditionsContent from "../ui/termscondition/TermsAndConditions";

export default function TermsAndConditions() {
  return (
    <>
      <CommonHero
        heading={"Terms & Conditions"}
        subHeading={""}
        description={""}
      />
      <TermsConditionsContent />
    </>
  );
}
