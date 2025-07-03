import PrivacyPolicy from "@/components/sections/PrivacyPolicy";
import React from "react";

export const metadata = {
  title: "Privacy Policy – MetaNerds",
  description:
    "Learn how MetaNerds collects, uses, and protects your personal information. Our privacy policy outlines your rights and our commitment to data security and transparency.",
};

export default function page() {
  return (
    <>
      <PrivacyPolicy />
    </>
  );
}
