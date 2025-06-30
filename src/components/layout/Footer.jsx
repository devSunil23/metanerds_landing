import { Icon } from "@iconify/react";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#14032B] relative text-white pt-20 pb-10 px-6 md:px-42 font-jakarta">
      <img
        src="/assets/wave_dotted_line.png"
        className="absolute left-0 -top-10 w-20 md:w-20 md:h-130  pointer-events-none  "
        alt="decoration"
      />
      <img
        src="/assets/wave_dotted_line.png"
        className="absolute right-0 -top-10 w-20 md:w-20 md:h-130  pointer-events-none scale-x-[-1]"
        alt="decoration"
      />
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.3fr_1.1fr_1.1fr_1.3fr] gap-14">
        {/* Column 1 */}
        <div>
          <div className="flex items-center gap-2 text-xl font-semibold mb-4">
            <Image
              src="/logo/footerlogo.png"
              alt="Metanerds footer logo"
              width={160}
              height={40}
            />
          </div>
          <p className="text-[#D9D9D9] text-sm font-extralight">
            Let’s Create Something That Lasts.
          </p>
          <p className="text-[12px] text-[#D9D9D9] mt-4 font-extralight">
            Looking to elevate your technology infrastructure, modernize your
            digital strategy, or build something extraordinary? We're here to
            lead the way
          </p>

          {/* Contact Button */}
          <div className="mt-6 flex items-center gap-2">
            <button className="bg-white text-[#5D5DFD] text-[12px] font-medium px-4 py-2 rounded-full">
              CONTACT US
            </button>
            <button className="bg-[#B0B3FF] p-2 rounded-full">
              <Icon icon="mdi:arrow-top-right" className="text-white text-lg" />
            </button>
          </div>

          {/* Social */}

          <div className="flex items-center gap-2 mt-6">
            {/* Line before text */}
            <div className="h-[1px] w-6 bg-[#D9D9D9] shrink-0" />

            {/* Follow on text */}
            <div className="text-sm text-[#D9D9D9] whitespace-nowrap">
              Follow on
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2">
              <Icon
                icon="ri:facebook-fill"
                width="20"
                height="20"
                style={{ color: "#D9D9D9" }}
              />
              <Icon
                icon="pajamas:twitter"
                width="16"
                height="16"
                style={{ color: "#219BE4" }}
              />

              <Icon
                icon="flowbite:linkedin-solid"
                width="20"
                height="20"
                style={{ color: "#D9D9D9" }}
              />
              <Icon
                icon="mdi:youtube"
                className="text-white text-xl"
                width="20"
                height="20"
                style={{ color: "#D9D9D9" }}
              />
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div className="md:mt-8">
          <h3 className="text-base font-semibold  w-fit">Our Services</h3>
          <div className="flex items-center my-2  gap-1">
            <div className="h-[2px] w-4 bg-[#9498FD]" />
            <div className="h-[2px] w-14 bg-[#FFFFFF]" />
          </div>
          <ul className="text-[12px]  space-y-2 mt-6">
            {[
              "Digital Marketing",
              "Web Development",
              "SEO optimized",
              "App Development",
              "Email Marketing",
            ].map((item, index) => (
              <li
                key={index}
                className="flex text-[#D9D9D9] items-center gap-2"
              >
                <Icon
                  icon="mdi:chevron-double-right"
                  className="text-[#D9D9D9] text-[12px] "
                />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 */}
        <div className="md:mt-8">
          <h3 className="text-base font-semibold  w-fit">Office Address</h3>
          <div className="flex items-center my-2  gap-1">
            <div className="h-[2px] w-4 bg-[#9498FD]" />
            <div className="h-[2px] w-14 bg-[#FFFFFF]" />
          </div>
          <p className="text-[12px] text-slate-300 mb-4 md:mt-5">
            DSO-IFZA, IFZA Properties, Dubai
            <br />
            Silicon Oasis, UAE
          </p>

          <h3 className="text-base font-semibold w-fit">Email</h3>
          <div className="flex items-center my-2  gap-1">
            <div className="h-[2px] w-4 bg-[#9498FD]" />
            <div className="h-[2px] w-14 bg-[#FFFFFF]" />
          </div>
          <p className="text-[12px] text-slate-300">metanerds42@gmail.com</p>
        </div>

        {/* Column 4 */}
        <div className="md:mt-8">
          <h3 className="text-base font-semibold  w-fit">
            License No. : 56142
          </h3>

          <div className="flex items-center my-2  gap-1">
            <div className="h-[2px] w-4 bg-[#9498FD]" />
            <div className="h-[2px] w-14 bg-[#FFFFFF]" />
          </div>

          <p className="text-[12px] text-slate-300 mt-4 mb-6">
            Issued by Dubai Integrated
            <br />
            Economic Zones Authority
          </p>

          {/* Book Consultation */}
          <div className="flex items-center gap-2">
            <button className="bg-white whitespace-nowrap text-[#5D5DFD] text-[12px] font-medium px-4 py-2 rounded-full">
              BOOK A CONSULTATION
            </button>
            <button className="bg-[#B0B3FF] p-2 rounded-full">
              <Icon icon="mdi:arrow-top-right" className="text-white text-lg" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700 mt-12 pt-6 text-[12px] text-[#D9D9D9] text-center flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
        <p className="mb-2 md:mb-0">© All Copyright 2025 by Metanerds</p>
        <div className="flex gap-6">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
