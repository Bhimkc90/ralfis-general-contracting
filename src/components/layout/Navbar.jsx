"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#our-work" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/90 backdrop-blur-lg">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:h-24 md:px-6">
        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="flex min-w-0 items-center gap-3 md:gap-5"
        >
          <Image
            src="/logo/logo.png"
            alt="Ralfi's General Contracting"
            width={78}
            height={78}
            priority
            className="h-14 w-14 shrink-0 rounded-full object-cover md:h-16 md:w-16"
          />

          <div className="min-w-0 leading-none">
            <h1 className="text-2xl font-black tracking-wide text-white md:text-3xl">
              RALFI&apos;S
            </h1>

            <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.22em] text-red-500 sm:text-xs md:text-sm md:tracking-[0.35em]">
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
              className="text-white transition hover:text-red-500"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          className="flex h-11 w-11 shrink-0 items-center justify-center text-white md:hidden"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X size={34} /> : <Menu size={34} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <nav
          id="mobile-navigation"
          className="border-t border-white/10 bg-black md:hidden"
        >
          <div className="flex flex-col">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="border-b border-white/10 px-6 py-4 text-lg font-medium text-white transition hover:bg-white/5 hover:text-red-500"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={closeMenu}
              className="bg-red-600 px-6 py-4 text-center text-lg font-bold text-white transition hover:bg-red-700"
            >
              Free Estimate
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}