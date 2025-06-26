import React from "react";

const AboutSection = () => {
  return (
    <section className="bg-black text-white -mt-20 py-8 px-6 md:px-16 lg:px-24 font-jakarta">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 text-center md:text-left">
        {/* === LEFT TEXT === */}
        <div className="md:w-1/2  md:ml-24">
          <h2
            style={{
              fontFamily: '"Agency FB", sans-serif',
            }}
            className="text-4xl md:text-6xl font-extrabold uppercase leading-tight text-center md:text-left"
          >
            ABOUT
            <br />
            <span
              className="bg-gradient-to-r from-[#7C7AFD] to-[#4B30EA] bg-clip-text text-transparent"
              style={{ fontFamily: '"Agency FB", sans-serif' }}
            >
              METANERDS
            </span>
          </h2>

          {/* Decorative line */}
          <div className="mt-3 mb-4 h-[2px] w-24 bg-gradient-to-r from-[#7C7AFD] to-[#4B30EA] mx-auto md:mx-0 rounded" />

          <h3 className="mt-6 text-xl leading-[26px]  md:text-2xl font-semibold text-gray-200 text-center md:text-left">
            Innovating at the Intersection of <br /> Technology and Business
          </h3>

          <p className="mt-6 text-xs eading-relaxed  md:text-sm text-gray-400 leading-relaxed text-center md:text-left">
            METANERDS INFOLABS is a specialized consulting firm headquartered in
            Dubai Silicon Oasis, operating within the thriving IFZA ecosystem.
            We serve as a strategic partner to organizations seeking to embrace
            digital transformation with precision, scalability, and long-term
            vision.
          </p>

          <p className="mt-6 text-xs md:text-sm text-gray-400 leading-relaxed text-center md:text-left">
            Founded by technology leaders Shahvez Ahmed Siddiqui and Aleeem
            Ahmed Siddiqui, METANERDS brings together deep technical knowledge,
            strategic thinking, and market insight. From emerging ventures to
            established enterprises, we help clients solve complex problems
            through tailored digital solutions.
          </p>

          <p className="mt-6 text-xs md:text-sm text-gray-400 leading-relaxed text-center md:text-left">
            With a core focus on software systems design, IT consulting, and
            digital marketing services, we empower companies to not only
            adapt—but lead—in a technology-first economy.
          </p>
        </div>

        {/* === RIGHT IMAGE === */}
        <div className=" flex justify-center">
          <img
            src="/assets/cube.gif"
            alt="3D Cube"
            className="h-[600px] w-[600px] md:h-[800px] md:w-[800px] object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
