"use client";

import { Menu } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

const links = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Our Work", href: "#our-work" },
  { name: "Contact", href: "#contact" },
];

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-lg">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <a href="#" className="flex items-center gap-3">

          <Image
            src="/logo/ralfis-logo.png"
            alt="Ralfi's General Contracting"
            width={55}
            height={55}
            className="rounded-full"
          />

          <div>
            <h1 className="text-lg font-black tracking-wide text-white">
              RALFI'S
            </h1>

            <p className="text-xs uppercase tracking-[0.25em] text-red-500">
              General Contracting
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold uppercase tracking-wide text-gray-300 transition hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </nav>

       

        {/* Mobile */}
        <button
          className="text-white md:hidden"
          onClick={() => setOpen(!open)}
        >
          <Menu size={32} />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-white/10 bg-black md:hidden">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block border-b border-white/10 px-6 py-4 text-white"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            className="block bg-red-600 px-6 py-4 text-center font-bold text-white"
          >
            Free Estimate
          </a>
        </div>
      )}
    </header>
  );
}