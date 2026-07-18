import Image from "next/image";
import { Bath, Hammer, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#070b0d] px-6 py-16 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-4">
            <Image
              src="/logo/logo.png"
              alt="Ralfi's General Contracting"
              width={70}
              height={70}
            />

            <div>
              <h2 className="text-2xl font-black">
                RALFI'S
              </h2>

              <p className="text-xs uppercase tracking-[0.35em] text-red-500">
                General Contracting
              </p>
            </div>
          </div>

          <p className="mt-6 leading-8 text-gray-400">
            Building beautiful homes through quality craftsmanship,
            honest communication, and dependable service for homeowners
            throughout New York.
          </p>
        </div>

        <div>
          <div className="mb-5 flex items-center gap-3">
            <Bath className="text-red-500" />
            <h3 className="text-xl font-bold">
              Our Services
            </h3>
          </div>

          <div className="space-y-3 text-gray-400">
            <p>Bathroom Remodeling</p>
            <p>Home Renovation</p>
            <p>Basement Waterproofing</p>
            <p>Landscaping</p>
            <p>Tree Removal</p>
            <p>General Contracting</p>
          </div>
        </div>

        <div>
          <div className="mb-5 flex items-center gap-3">
            <ShieldCheck className="text-red-500" />
            <h3 className="text-xl font-bold">
              Why Choose Us
            </h3>
          </div>

          <div className="space-y-3 text-gray-400">
            <p>✓ Licensed & Insured</p>
            <p>✓ Free Estimates</p>
            <p>✓ Quality Craftsmanship</p>
            <p>✓ Honest Communication</p>
            <p>✓ Reliable Service</p>
            <p>✓ Serving New York</p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 border-t border-white/10 pt-8 text-center text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()} Ralfi's General Contracting. All Rights Reserved.
        </p>

        <p className="mt-2">
          Website designed & developed by <span className="text-white">Bhim KC</span>.
        </p>
      </div>
    </footer>
  );
}