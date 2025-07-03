"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";
import { openGmailCompose } from "@/utils/helperFunction";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 z-50 bg-gradient-to-t from-[#EDF6FF] to-[#F5E3FC]">
      <div className="h-[14px] w-full bg-[#635AD9] rounded-b-[30px]" />

      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-16 py-5  md:py-4">
        {/* Logo */}
        {/* Logo with Image */}
        <Link href="/">
          <Image
            src="/logo/logo.png"
            alt="Metanerds Logo"
            width={160}
            height={40}
            className="width-[100px] md:width-[160px]"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex justify-between gap-2 items-center text-[18px] font-semibold text-[#17012C] font-['Plus_Jakarta_Sans'] capitalize">
          <Link
            href="/blockchain"
            className="border border-transparent rounded hover:border-[#4C30EA] hover:border-[1px] transition text-current hover:text-indigo-600 p-[5px]"
          >
            Blockchain
          </Link>
          <Link
            href="/ai"
            className="border border-transparent rounded hover:border-[#4C30EA] hover:border-[1px] transition text-current hover:text-indigo-600 p-[5px]"
          >
            AI
          </Link>
          <Link
            href="/web3"
            className="border border-transparent rounded hover:border-[#4C30EA] hover:border-[1px] transition text-current hover:text-indigo-600 p-[5px]"
          >
            Web3
          </Link>
          <Link
            href="/app-development"
            className="border border-transparent rounded hover:border-[#4C30EA] hover:border-[1px] transition text-current hover:text-indigo-600 p-[5px]"
          >
            App Development
          </Link>
          <Link
            href="/consulting"
            className="border border-transparent rounded hover:border-[#4C30EA] hover:border-[1px] transition text-current hover:text-indigo-600 p-[5px]"
          >
            Consulting
          </Link>

          <Link
            href="/aboutus"
            className="border border-transparent rounded hover:border-[#4C30EA] hover:border-[1px] transition text-current hover:text-indigo-600 p-[5px]"
          >
            About Us
          </Link>

          <button
            onClick={openGmailCompose}
            className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-full hover:scale-105 transition-transform duration-200"
          >
            WORK WITH US
          </button>
        </nav>

        <button
          onClick={openGmailCompose}
          className="md:px-6 px-3 py-2 text-xs md:text-base flex md:hidden bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-full hover:scale-105 transition-transform duration-200"
        >
          WORK WITH US
        </button>
        {/* Mobile Hamburger */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <Icon icon="mdi:menu" className="text-2xl text-[#17012C]" />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-200">
          <nav className="flex flex-col px-4 py-4 gap-4 text-sm font-semibold text-[#17012C] font-['Plus_Jakarta_Sans'] capitalize">
            <Link
              onClick={() => setMenuOpen(false)}
              href="/blockchain"
              className="border border-transparent rounded hover:border-[#4C30EA] hover:border-[1px] transition text-current hover:text-indigo-600 p-[5px]"
            >
              Blockchain
            </Link>

            <Link
              onClick={() => setMenuOpen(false)}
              href="/ai"
              className="border border-transparent rounded hover:border-[#4C30EA] hover:border-[1px] transition text-current hover:text-indigo-600 p-[5px]"
            >
              AI
            </Link>
            <Link
              onClick={() => setMenuOpen(false)}
              href="/web3"
              className="border border-transparent rounded hover:border-[#4C30EA] hover:border-[1px] transition text-current hover:text-indigo-600 p-[5px]"
            >
              Web3
            </Link>
            <Link
              onClick={() => setMenuOpen(false)}
              href="/app-development"
              className="border border-transparent rounded hover:border-[#4C30EA] hover:border-[1px] transition text-current hover:text-indigo-600 p-[5px]"
            >
              App Development
            </Link>
            <Link
              onClick={() => setMenuOpen(false)}
              href="/consulting"
              className="border border-transparent rounded hover:border-[#4C30EA] hover:border-[1px] transition text-current hover:text-indigo-600 p-[5px]"
            >
              Consulting
            </Link>

            <Link
              onClick={() => setMenuOpen(false)}
              href="/aboutus"
              className="border border-transparent rounded hover:border-[#4C30EA] hover:border-[1px] transition text-current hover:text-indigo-600 p-[5px]"
            >
              About Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
