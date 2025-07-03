import React from "react";

const AboutSection = () => {
  return (
    <section className="bg-black text-white   md:-mt-30 py-8 px-6 md:px-16 lg:px-20 font-jakarta">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 text-center md:text-left">
        {/* === LEFT TEXT === */}
        <div className="md:w-[85%]  md:ml-24">
          <h2
            style={{
              fontFamily: '"Agency FB", sans-serif',
            }}
            className="text-4xl flex items-center justify-start md:text-6xl font-extrabold uppercase leading-tight text-center md:text-left"
          >
            <span>ABOUT</span>
            <div
              className="pl-4 mt-[5px] md:mt-0"
              style={{ fontFamily: '"Agency FB", sans-serif' }}
            >
              <span className="bg-gradient-to-r from-[#7C7AFD] to-[#4B30EA] bg-clip-text text-transparent">
                METANERDS
              </span>
              <div className="mt-1 md:hidden h-[2px] w-36 bg-gradient-to-r from-[#7C7AFD] to-[#4B30EA] rounded ml-auto" />
            </div>
          </h2>

          {/* Decorative line */}

          <div className="mt-3 hidden md:flex mb-4 h-[2px] w-24 bg-gradient-to-r from-[#7C7AFD] to-[#4B30EA] mx-auto md:mx-0 rounded" />

          <h3 className="mt-6 text-xl leading-[26px]  md:text-2xl font-semibold text-gray-200 text-left md:text-center md:text-left">
            Innovating at the Intersection of <br /> Technology and Business
          </h3>

          <p className="mt-6 text-sm eading-relaxed  md:text-[18px] text-gray-400 leading-relaxed text-left md:text-center md:text-justify">
            METANERDS is a specialized consulting firm headquartered in Dubai
            Silicon Oasis, We serve as a strategic partner to organizations
            seeking to embrace digital transformation with precision,
            scalability, and long-term vision.
          </p>

          <p className="mt-6 text-sm md:text-[18px] text-gray-400 leading-relaxed text-left md:text-center md:text-justify">
            Founded by technology leader Shavez Ahmed Siddiqui , METANERDS
            brings together deep technical knowledge, strategic thinking, and
            market insight. From emerging ventures to established enterprises,
            we help clients solve complex problems through tailored digital
            solutions.
          </p>

          <p className="mt-6 text-sm md:text-[18px] text-gray-400 leading-relaxed text-left md:text-center md:text-justify">
            With a core focus on software systems design, IT consulting, and
            digital marketing services, we empower companies to not only
            adapt—but lead—in a technology-first economy.
          </p>
        </div>

        {/* === RIGHT IMAGE === */}
        <div className="hidden md:flex justify-center">
          <img
            src="/assets/cube.gif"
            alt="3D Cube"
            className="h-[200px] w-[400px] -mt-4 md:mt-0 md:h-[800px] md:w-[800px] md:ml-2 object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
