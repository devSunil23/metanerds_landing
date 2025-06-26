import React from "react";
import BlockChainHero from "../ui/blockchain/BlockChainHero";
import BlockchainDevelopment from "../ui/blockchain/BlockchainDevelopment";
import BlockchainIdentity from "../ui/blockchain/BlockchainIdentity";
import BlockchainDepinDevelopment from "../ui/blockchain/BlockChainDepinDevelopment";
import BlockChainAbstraction from "../ui/blockchain/BlockChainAbstraction";

export default function BlockChain() {
  return (
    <>
      {/* Hero Section */}
      <BlockChainHero />
      {/* Blockchain Development */}
      <BlockchainDevelopment />
      {/* Blockchain Identity */}
      <BlockchainIdentity />
      {/* Blockchain Depin Development */}
      <BlockchainDepinDevelopment />
      {/* Block chain abstraction */}
      <BlockChainAbstraction />
    </>
  );
}
