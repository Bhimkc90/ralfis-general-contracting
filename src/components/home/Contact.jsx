import { Mail, Phone, MapPin } from "lucide-react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { company } from "@/data/site";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#0b1114] px-6 py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left Side */}
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-red-500">
              Contact
            </p>

            <h2 className="mt-4 max-w-xl text-4xl font-black md:text-6xl">
              Get in touch with Ralfi&apos;s.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Have a bathroom remodel, home renovation, landscaping, or outdoor
              project in mind? Reach out and connect directly with Ralfi&apos;s
              General Contracting.
            </p>

            <div className="mt-10 space-y-5">
              <a
                href="tel:+16313475728"
                className="flex items-center gap-4 text-lg text-gray-200 transition hover:text-red-500"
              >
                <Phone className="h-6 w-6 text-red-500" />
                {company.phone}
              </a>

              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-4 text-lg text-gray-200 transition hover:text-red-500"
              >
                <Mail className="h-6 w-6 text-red-500" />
                {company.email}
              </a>

              <p className="flex items-center gap-4 text-lg text-gray-200">
                <MapPin className="h-6 w-6 text-red-500" />
               Serving Across New York
              </p>
            </div>

            <div className="mt-10 flex gap-4">
              <a
                href="https://www.instagram.com/ralfis_general_contracting"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:border-red-500 hover:bg-red-500"
                aria-label="Instagram"
              >
               <FaInstagram className="text-xl" />
              </a>

              <a
                href="https://facebook.com/Ralfisgeneralcontracting"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:border-red-500 hover:bg-red-500"
                aria-label="Facebook"
              >
               <FaFacebookF className="text-xl" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-2xl">
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-4 text-white outline-none transition placeholder:text-gray-500 focus:border-red-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-300">
                  Phone
                </label>
                <input
                  type="tel"
                  placeholder="Your phone number"
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-4 text-white outline-none transition placeholder:text-gray-500 focus:border-red-500"
                />
              </div>
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-semibold text-gray-300">
                Email
              </label>
              <input
                type="email"
                placeholder="Your email address"
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-4 text-white outline-none transition placeholder:text-gray-500 focus:border-red-500"
              />
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-semibold text-gray-300">
                Project Type
              </label>
              <select className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-4 text-white outline-none transition focus:border-red-500">
                <option>Bathroom Remodeling</option>
                <option>Home Renovation</option>
                <option>Landscaping</option>
                <option>Fallen Tree Removal</option>
                <option>Exterior Services</option>
                <option>Other</option>
              </select>
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-semibold text-gray-300">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Tell us about your project..."
                className="w-full resize-none rounded-xl border border-white/10 bg-black/30 px-4 py-4 text-white outline-none transition placeholder:text-gray-500 focus:border-red-500"
              />
            </div>

            <button
              type="button"
              className="mt-6 w-full rounded-xl bg-red-600 px-6 py-4 font-bold uppercase tracking-wide text-white transition hover:bg-red-700"
            >
              Submit Message
            </button>

            <p className="mt-4 text-center text-sm text-gray-400">
              Form connection will be added before final launch.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}