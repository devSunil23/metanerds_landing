import TermsAndConditions from "@/components/sections/TermsAndConditions";
import React from "react";

export const metadata = {
  title: "Terms & Conditions – MetaNerds",
  description:
    "Read the terms and conditions for using the MetaNerds website and services. Learn about user responsibilities, legal rights, and our commitment to transparency.",
};

export default function page() {
  return (
    <>
      <TermsAndConditions />
    </>
  );
}
