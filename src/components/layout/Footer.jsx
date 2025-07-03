"use client";
import { openGmailCompose } from "@/utils/helperFunction";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const Footer = () => {
  const router = useRouter();
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
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-[1.5fr_1.2fr_1.3fr] gap-10 md:gap-14">
        {/* Column 1 */}
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 text-xl font-semibold mb-4">
            <Image
              src="/logo/footerlogo.png"
              alt="Metanerds footer logo"
              width={160}
              height={40}
            />
          </div>
          <p className="text-[#D9D9D9] text-[14px] md:text-[18px] font-extralight">
            Let’s Create Something That Lasts.
          </p>
          <p className=" text-[14px]  md:text-[18px] text-[#D9D9D9] mt-4 font-extralight">
            Looking to elevate your technology infrastructure, modernize your
            digital strategy, or build something extraordinary? We're here to
            lead the way.
          </p>
          {/* Contact Button */}
          <div className="flex md:hidden flex flex-row md:flex-col gap-4 md:gap-0">
            <div className="mt-6 flex items-center gap-2">
              <button
                onClick={openGmailCompose}
                className="bg-white text-[#5D5DFD] cursor-pointer text-[10px] md:text-[12px] font-medium px-2 md:px-4 py-2 rounded-full"
              >
                CONTACT US
              </button>
              <button
                onClick={openGmailCompose}
                className="bg-[#B0B3FF] cursor-pointer p-2 rounded-full"
              >
                <Icon
                  icon="mdi:arrow-top-right"
                  className="text-white text-[12px] md:text-[18px]"
                />
              </button>
            </div>

            {/* Social */}

            <div className="flex items-center gap-2 mt-6">
              {/* Line before text */}
              <div className="h-[1px] w-3 md:w-6 bg-[#D9D9D9] shrink-0" />

              {/* Follow on text */}
              <div className=" text-[14px] md:text-[18px] text-[#D9D9D9] whitespace-nowrap">
                Follow on
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-2">
                <Icon
                  icon="logos:telegram"
                  className="cursor-pointer h-[18px] md:h-[24px] w-[18px] md:w-[24px]"
                  onClick={() => router.push("https://t.me/metanerds")}
                />
                <Icon
                  icon="pajamas:twitter"
                  onClick={() =>
                    router.push(
                      "https://x.com/Metanerds42?t=8nQxhUnwOA0M5Z8uFdhORg&s=09"
                    )
                  }
                  className="cursor-pointer h-[18px] md:h-[24px] w-[18px] md:w-[24px]"
                  style={{ color: "#219BE4" }}
                />
                <Icon
                  icon="skill-icons:instagram"
                  onClick={() =>
                    router.push(
                      "https://www.instagram.com/metan.erds?igsh=MXg3ZGs3NWxza3V1eA=="
                    )
                  }
                  className="cursor-pointer h-[18px] md:h-[24px] w-[18px] md:w-[24px]"
                />

                <Icon
                  onClick={() =>
                    router.push(
                      "https://youtube.com/@metanerds?si=4LILHk1NxAV0n1MA"
                    )
                  }
                  icon="logos:youtube-icon"
                  className="cursor-pointer h-[24px] md:h-[32px] w-[24px] md:w-[32px]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-[14px] md:text-[18px] font-semibold  w-fit">
            Our Services
          </h3>
          <div className="flex items-center my-2  gap-1">
            <div className="h-[2px] w-4 bg-[#9498FD]" />
            <div className="h-[2px] w-14 bg-[#FFFFFF]" />
          </div>
          <div className="flex flex-col">
            <ul className=" text-[14px] md:text-[18px]  space-y-4  md:space-y-2 mt-1 md:mt-4">
              {[
                {
                  name: "Blockchain",
                  link: "/blockchain",
                },
                {
                  name: "AI",
                  link: "/ai",
                },
                {
                  name: "Consulting",
                  link: "/consulting",
                },
                {
                  name: "Web3",
                  link: "/web3",
                },
              ].map((item, index) => (
                <li
                  onClick={() => router.push(item?.link)}
                  key={index}
                  className="flex text-[#D9D9D9] items-center gap-2 cursor-pointer"
                >
                  <Icon
                    icon="mdi:chevron-double-right"
                    className="text-[#D9D9D9] text-sm "
                  />
                  {item?.name}
                </li>
              ))}
            </ul>

            {/* hidden in large devices */}
            {/* Book Consultation */}
            {/* <div className=" items-center gap-1 md:gap-2 mt-8 flex md:hidden">
              <button
                onClick={openGmailCompose}
                className="bg-white cursor-pointer whitespace-nowrap text-[#5D5DFD] text-[10px] md:text-[12px] font-medium px-2 md:px-4 py-2 rounded-full"
              >
                BOOK A CONSULTATION
              </button>
              <button
                onClick={openGmailCompose}
                className="bg-[#B0B3FF] cursor-pointer p-2 rounded-full"
              >
                <Icon
                  icon="mdi:arrow-top-right"
                  className="text-white text-[14px] md:text-[18px]"
                />
              </button>
            </div> */}
          </div>
        </div>

        {/* Column 3 */}
        <div>
          {/* <h3 className="text-[14px] md:text-[18px] font-semibold  w-fit">
            Office Address
          </h3>
          <div className="flex items-center my-2  gap-1">
            <div className="h-[2px] w-4 bg-[#9498FD]" />
            <div className="h-[2px] w-14 bg-[#FFFFFF]" />
          </div>
          <p className="text-[14px] md:text-[18px] text-slate-300 mb-4 mt-5">
            DSO-IFZA, IFZA Properties, Dubai
            <br />
            Silicon Oasis, UAE
          </p>

         
          <div className="block md:hidden">
            <h3 className="text-[14px] md:text-[18px] font-semibold  w-fit">
              License No. : 56142
            </h3>

            <div className="flex items-center my-2  gap-1">
              <div className="h-[2px] w-4 bg-[#9498FD]" />
              <div className="h-[2px] w-14 bg-[#FFFFFF]" />
            </div>

            <p className="text-[14px] md:text-[18px] text-slate-300 mt-4 mb-6">
              Issued by Dubai Integrated
              <br />
              Economic Zones Authority
            </p>
          </div> */}

          <h3 className="text-[14px] md:text-[18px] font-semibold w-fit">
            Email
          </h3>
          <div className="flex items-center my-2  gap-1">
            <div className="h-[2px] w-4 bg-[#9498FD]" />
            <div className="h-[2px] w-14 bg-[#FFFFFF]" />
          </div>
          <p className="text-[14px] md:mt-5 md:text-[18px] text-slate-300 break-words">
            contact@metanerds.tech
          </p>
          {/* Contact Button */}
          {/* Hidden in small devices */}
          <div className="flex hidden md:flex flex-row md:flex-col gap-4 md:gap-0">
            <div className="mt-6 flex items-center gap-2">
              <button
                onClick={openGmailCompose}
                className="bg-white text-[#5D5DFD] cursor-pointer text-[10px] md:text-[12px] font-medium px-2 md:px-4 py-2 rounded-full"
              >
                CONTACT US
              </button>
              <button
                onClick={openGmailCompose}
                className="bg-[#B0B3FF] cursor-pointer p-2 rounded-full"
              >
                <Icon
                  icon="mdi:arrow-top-right"
                  className="text-white text-[12px] md:text-[18px]"
                />
              </button>
            </div>

            {/* Social */}

            <div className="flex items-center gap-2 mt-6">
              {/* Line before text */}
              <div className="h-[1px] w-3 md:w-6 bg-[#D9D9D9] shrink-0" />

              {/* Follow on text */}
              <div className=" text-[14px] md:text-[18px] text-[#D9D9D9] whitespace-nowrap">
                Follow on
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-2">
                <Icon
                  icon="logos:telegram"
                  className="cursor-pointer h-[18px] md:h-[24px] w-[18px] md:w-[24px]"
                  onClick={() => router.push("https://t.me/metanerds")}
                />
                <Icon
                  icon="pajamas:twitter"
                  onClick={() =>
                    router.push(
                      "https://x.com/Metanerds42?t=8nQxhUnwOA0M5Z8uFdhORg&s=09"
                    )
                  }
                  className="cursor-pointer h-[18px] md:h-[24px] w-[18px] md:w-[24px]"
                  style={{ color: "#219BE4" }}
                />
                <Icon
                  icon="skill-icons:instagram"
                  onClick={() =>
                    router.push(
                      "https://www.instagram.com/metan.erds?igsh=MXg3ZGs3NWxza3V1eA=="
                    )
                  }
                  className="cursor-pointer h-[18px] md:h-[24px] w-[18px] md:w-[24px]"
                />

                <Icon
                  onClick={() =>
                    router.push(
                      "https://youtube.com/@metanerds?si=4LILHk1NxAV0n1MA"
                    )
                  }
                  icon="logos:youtube-icon"
                  className="cursor-pointer h-[24px] md:h-[32px] w-[24px] md:w-[32px]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Column 4 */}
        {/* <div className="md:mt-8"> */}
        {/* hide this in small devices */}
        {/* <div className="hidden md:block">
            <h3 className="text-[14px] md:text-[18px] font-semibold  w-fit">
              License No. : 56142
            </h3>

            <div className="flex items-center my-2  gap-1">
              <div className="h-[2px] w-4 bg-[#9498FD]" />
              <div className="h-[2px] w-14 bg-[#FFFFFF]" />
            </div>

            <p className="text-[14px] md:text-[18px] text-slate-300 mt-4 mb-6">
              Issued by Dubai Integrated
              <br />
              Economic Zones Authority
            </p>
          </div> */}

        {/* hidden in small devices */}
        {/* Book Consultation */}
        {/* <div className=" items-center gap-2 hidden md:flex">
            <button
              onClick={openGmailCompose}
              className="bg-white cursor-pointer whitespace-nowrap text-[#5D5DFD] text-[12px] font-medium px-4 py-2 rounded-full"
            >
              BOOK A CONSULTATION
            </button>
            <button
              onClick={openGmailCompose}
              className="bg-[#B0B3FF] cursor-pointer p-2 rounded-full"
            >
              <Icon
                icon="mdi:arrow-top-right"
                className="text-white text-[14px] md:text-[18px]"
              />
            </button>
          </div> */}
        {/* </div> */}
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700 mt-12 pt-6 text-[14px] md:text-[18px] text-[#D9D9D9] text-center flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
        <p className="mb-2 md:mb-0">
          © 2025 | Metanerds | All Rights Reserved.
        </p>
        <div className="flex gap-4 md:gap-6">
          <Link href="/terms-conditions">Terms & Conditions</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
