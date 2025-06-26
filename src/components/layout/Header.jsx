"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white  fixed top-0 z-50">
      <div className="h-[8px] w-full bg-[#9498FD] rounded-xs" />
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        {/* Logo with Image */}
        <Link href="/">
          <Image
            src="/logo/logo.png"
            alt="Metanerds Logo"
            width={160}
            height={40}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center text-sm font-semibold text-[#17012C] font-['Plus_Jakarta_Sans'] capitalize">
          <Link href="/blockchain" className="hover:text-indigo-600 transition">
            Blockchain
          </Link>
          <Link href="/ai" className="hover:text-indigo-600 transition">
            Ai
          </Link>
          <Link href="/consulting" className="hover:text-indigo-600 transition">
            Consulting
          </Link>
          <Link href="/web3" className="hover:text-indigo-600 transition">
            Web3
          </Link>
          <Link href="/aboutus" className="hover:text-indigo-600 transition">
            About Us
          </Link>
          <button className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-full hover:scale-105 transition-transform duration-200">
            WORK WITH US
          </button>
        </nav>

        {/* Mobile Hamburger */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <Icon icon="mdi:menu" className="text-2xl text-[#17012C]" />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col px-4 py-4 gap-4 text-sm font-semibold text-[#17012C] font-['Plus_Jakarta_Sans'] capitalize">
            <Link
              href="/blockchain"
              className="hover:text-indigo-600 transition"
            >
              Blockchain
            </Link>
            <Link href="/ai" className="hover:text-indigo-600 transition">
              Ai
            </Link>
            <Link
              href="/consulting"
              className="hover:text-indigo-600 transition"
            >
              Consulting
            </Link>
            <Link href="/web3" className="hover:text-indigo-600 transition">
              Web3
            </Link>
            <Link href="/aboutus" className="hover:text-indigo-600 transition">
              About Us
            </Link>
            <button className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-full hover:scale-105 transition-transform duration-200">
              WORK WITH US
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
