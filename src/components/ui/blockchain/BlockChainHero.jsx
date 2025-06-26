import React from "react";
import CommonHero from "../CommonHeroSection";

export default function BlockChainHero() {
  return (
    <>
      <CommonHero
        heading={"BLOCKCHAIN"}
        subHeading={"Solutions"}
        description={`We build scalable, secure blockchain ecosystems for enterprises.
            From custom Layer-1 protocols and smart contracts to NFT
            marketplaces and dApps, we engineer powerful solutions that drive
            decentralization and operational efficiency.`}
      />
    </>
  );
}
