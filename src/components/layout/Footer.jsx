import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { company } from "@/data/site";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#our-work" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070b0d] px-6 py-14 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_0.8fr_1fr]">
        <div>
          <div className="flex items-center gap-4">
            <Image
              src="/logo/logo.png"
              alt="Ralfi's General Contracting"
              width={64}
              height={64}
              className="rounded-full"
            />

            <div>
              <h2 className="text-2xl font-black">RALFI&apos;S</h2>
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-red-500">
                General Contracting
              </p>
            </div>
          </div>

          <p className="mt-6 max-w-md leading-7 text-gray-300">
            Bathroom remodeling, home renovations, basement waterproofing,
            landscaping, tree removal, and general contracting services across
            Long Island.
          </p>
        </div>

        <div>
          <h3 className="mb-5 font-bold uppercase tracking-wider">
            Quick Links
          </h3>

          <div className="flex flex-col gap-3 text-gray-300">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="transition hover:text-red-500"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-5 font-bold uppercase tracking-wider">
            Contact
          </h3>

          <div className="space-y-4 text-gray-300">
            <a
              href="tel:+16313475728"
              className="flex items-center gap-3 transition hover:text-red-500"
            >
              <Phone className="h-5 w-5 text-red-500" />
              {company.phone}
            </a>

            <a
              href={`mailto:${company.email}`}
              className="flex items-center gap-3 transition hover:text-red-500"
            >
              <Mail className="h-5 w-5 text-red-500" />
              {company.email}
            </a>

            <p className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-red-500" />
              Long Island, New York
            </p>
          </div>

          <div className="mt-6 flex gap-4">
            <a
              href="https://www.instagram.com/ralfis_general_contracting"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:border-red-500 hover:bg-red-600"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://facebook.com/Ralfisgeneralcontracting"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:border-red-500 hover:bg-red-600"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} Ralfi&apos;s General Contracting. All
          rights reserved.
        </p>

        <p>Designed & developed by Bhim KC.</p>
      </div>
    </footer>
  );
}