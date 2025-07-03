import Web3CardSection from "@/components/ui/web3/Web3CardSection";
import Web3HeroSection from "@/components/ui/web3/Web3HeroSection";
import React from "react";

export const metadata = {
  title: "Secure Web3 Ecosystems for Businesses – MetaNerds",
  description:
    "We design intelligent Web3 ecosystems that put ownership back in the hands of users. Our platforms are open, secure, and built for a more transparent future.",
};

export default function page() {
  return (
    <>
      <Web3HeroSection />
      <Web3CardSection />
    </>
  );
}
