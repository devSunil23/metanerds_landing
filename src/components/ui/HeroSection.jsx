import React from "react";

const HeroSection = () => {
  const binaryCount = 2;
  const elipsCount = 6;

  return (
    <section className="relative h-screen bg-black flex items-center justify-center text-white overflow-hidden px-4">
      {/* === Background Layers === */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Binary Images */}
        {Array.from({ length: binaryCount }).map((_, i) => (
          <img
            key={`binary-${i}`}
            src="/assets/binary.png"
            alt="binary"
            className="absolute w-100 h-100 object-contain opacity-40 "
            style={
              i === 0
                ? {
                    top: `15%`,
                    left: `15%`,
                  }
                : {
                    top: `15%`,
                    right: `15%`,
                  }
            }
          />
        ))}

        {/* Elips Images */}

        <img
          key={`elips-1`}
          src="/assets/elips.svg"
          alt="elips"
          className="absolute w-16 h-16 object-contain opacity-80 "
          style={{
            top: `10%`,
            left: `30%`,
          }}
        />

        <img
          key={`elips-4`}
          src="/assets/elips.svg"
          alt="elips"
          className="absolute w-18 h-18 object-contain opacity-80 "
          style={{
            top: `30%`,
            left: `15%`,
          }}
        />

        <img
          key={`elips-5`}
          src="/assets/elips.svg"
          alt="elips"
          className="absolute w-22 h-22 object-contain opacity-80 "
          style={{
            top: `60%`,
            left: `9%`,
          }}
        />

        <img
          key={`elips-6`}
          src="/assets/elips.svg"
          alt="elips"
          className="absolute w-16 h-16 object-contain opacity-80 "
          style={{
            top: `13%`,
            right: `30%`,
          }}
        />

        <img
          key={`elips-7`}
          src="/assets/elips.svg"
          alt="elips"
          className="absolute w-18 h-18 object-contain opacity-80 "
          style={{
            top: `30%`,
            right: `22%`,
          }}
        />

        <img
          key={`elips-8`}
          src="/assets/elips.svg"
          alt="elips"
          className="absolute w-22 h-22 object-contain opacity-80 "
          style={{
            top: `55%`,
            right: `10%`,
          }}
        />
        <img
          key={`elips-10`}
          src="/assets/elips.svg"
          alt="elips"
          className="absolute w-30 h-30 object-contain opacity-90 blur-sm "
          style={{
            top: `35%`,
            right: `45%`,
          }}
        />
        <img
          key={`elips-11`}
          src="/assets/elips.svg"
          alt="elips"
          className="absolute w-25 h-25 object-contain opacity-80 "
          style={{
            top: `18%`,
            right: `9%`,
          }}
        />
      </div>

      {/* === Foreground Content === */}
      <div className="relative z-10 text-center max-w-3xl">
        <h1
          className="text-4xl md:text-8xl font-bold leading-tight"
          style={{ fontFamily: '"Agency FB", sans-serif' }}
        >
          <span className="text-white">WE </span>
          <span className="bg-gradient-to-r from-[#7C7AFD] to-[#4B30EA] bg-clip-text text-transparent">
            BUILD
          </span>
        </h1>
        <p
          style={{
            fontFamily: '"Agency FB", sans-serif',
            wordSpacing: "0.3rem",
            letterSpacing: "0.3rem",
          }}
          className="mt-4 tracking-widest text-xl font-bold break-normal  uppercase"
        >
          What Others Imagine
        </p>
        <p
          style={{
            fontFamily: "Plus Jakarta Sans",
          }}
          className="mt-6 re text-sm md:text-base text-gray-400 max-w-xl mx-auto"
        >
          We help modern businesses evolve through customized software design,
          future-focused IT strategy, and full-stack digital development —
          backed with expertise, execution, and architecture.
        </p>
        <button
          style={{
            fontFamily: "Plus Jakarta Sans",
          }}
          className="mt-8 px-6 py-3 text-white font-semibold relative transition z-10
             rounded-md bg-gradient-to-r from-[#7F7EFE] to-[#4B2FEA] 
             before:absolute before:inset-0 before:rounded-md before:p-[2px]
             before:bg-gradient-to-r before:from-[#A292FF] before:to-[#7E82FA]
             before:z-[-1] before:content-[''] before:block
             hover:opacity-90 "
        >
          Start Your Transformation
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
