"use client";

import { Menu } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#our-work" },
  { label: "Contact", href: "#contact" },
];

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-lg">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">

       {/* Logo */}
        <a href="#" className="flex items-center gap-5">
        <Image
            src="/logo/logo.png"
            alt="Ralfi's General Contracting"
            width={78}
            height={78}
            className="h-16 w-16 rounded-full object-cover"
        />

        <div className="leading-none">
            <h1 className="text-3xl font-black tracking-wide text-white">
            RALFI&apos;S
            </h1>

            <p className="mt-2 text-sm font-bold uppercase tracking-[0.35em] text-red-500">
            General Contracting
            </p>
        </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <a
                key={link.label}
                href={link.href}
                className="transition hover:text-red-500"
            >
                {link.label}
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
                key={link.label}
                href={link.href}
                className="transition hover:text-red-500"
            >
                {link.label}
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