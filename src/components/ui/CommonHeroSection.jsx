import React from "react";

export default function CommonHero({ heading, subHeading, description }) {
  return (
    <section className="relative text-white text-center py-28 px-4 overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/assets/background-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Ellipse Image with higher z-index */}
      <img
        src="/assets/elipse_1463.png"
        alt="elipse 1463"
        className="absolute w-[350px] h-[350px] object-contain"
        style={{
          top: "0%",
          left: "37%",
          zIndex: 15, // This ensures it appears above the overlay
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 z-10" />

      {/* Bottom Fade Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-black z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto">
        <h2
          className="text-4xl md:text-6xl font-extrabold uppercase tracking-wide"
          style={{ fontFamily: '"Agency FB", sans-serif' }}
        >
          {heading}
        </h2>

        <p
          style={{ fontFamily: '"Agency FB", sans-serif' }}
          className="text-sm md:text-lg my-2 tracking-[0.2em] text-[#FFFFFF] uppercase"
        >
          {subHeading}
        </p>
        <div className="flex justify-center my-4">
          <div className="h-[1px] w-20 bg-[#9498FD]" />
        </div>
        <p className="mt-6 text-xs md:text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto">
          {description}
        </p>
      </div>
    </section>
  );
}
