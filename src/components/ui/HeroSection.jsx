import React from "react";

const HeroSection = () => {
  const binaryCount = 2;
  const elipsCount = 6;

  return (
    <section className="relative pb-12 md:pb-0 md:h-screen bg-black flex items-center justify-center text-white overflow-hidden px-4">
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
                    top: `0%`,
                    left: `15%`,
                  }
                : {
                    top: `0%`,
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
          key={`elips-1444`}
          src="/assets/elipse_1444.png"
          alt="elips 1444"
          className="absolute w-150 h-150 object-contain opacity-90 blur-sm "
          style={{
            top: `-5%`,
            right: `28%`,
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
      <div className="relative z-10 mt-15 md:mt-0  text-center max-w-3xl">
        <h1
          className="text-4xl  md:text-[126.34px] font-bold leading-[86.18px] md:leading-[136.18px]"
          style={{ fontFamily: '"Agency FB", sans-serif' }}
        >
          <span className="text-white">WE </span>
          <span className="relative bg-gradient-to-r from-[#7C7AFD] to-[#4B30EA] bg-clip-text text-transparent shadow-[inset_0px_3.32px_3.32px_0px_#00000040] noise-effect">
            BUILD
          </span>
        </h1>
        <p
          style={{
            fontFamily: '"Agency FB", sans-serif',
            wordSpacing: "0.3rem",
            letterSpacing: "38%",
          }}
          className="mt-0 md:mt-4 tracking-widest text-2xl font-bold break-normal  uppercase"
        >
          What Others Imagine
        </p>
        <p
          style={{
            fontFamily: "Plus Jakarta Sans",
          }}
          className="mt-4 md:mt-6 re text-sm md:text-[18px] text-gray-400 max-w-xl mx-auto leading-[30px]"
        >
          We help modern businesses evolve through customized software design,
          future-focused IT strategy, and full-stack digital development —
          backed with expertise, execution, and architecture.
        </p>
        <button
          style={{
            fontFamily: "Plus Jakarta Sans",
          }}
          className="mt-8 px-6 py-2 text-white font-semibold relative z-10 transition 
    rounded-md bg-gradient-to-r from-[#7F7EFE] to-[#4B2FEA]
    before:content-[''] before:absolute before:inset-0 before:rounded-md before:p-[0.33px]
    before:bg-gradient-to-r before:from-[#A292FF] before:to-[#7E82FA] 
    before:z-[-1] before:block "
        >
          START YOUR TRANSFORMATION
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
