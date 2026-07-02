import { Bath, Home, Trees, Droplets, Hammer } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Interior Renovations",
    description:
      "Flooring, drywall, painting, trim work, room updates, and complete interior improvements.",
  },
  {
    icon: Droplets,
    title: "Basement Waterproofing",
    description:
      "Interior drainage systems, sump pump installation, concrete restoration, and moisture control.",
  },
  {
    icon: Trees,
    title: "Landscaping & Tree Removal",
    description:
      "Lawn care, planting, mulching, pruning, cleanup, fallen tree removal, and outdoor maintenance.",
  },
  {
    icon: Hammer,
    title: "General Contracting",
    description:
      "Reliable repairs, property improvements, and project support for homes across Long Island.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#0B1114] px-6 py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-red-500">
            Services
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-6xl">
            Skilled work for every part of your home.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            From luxury bathroom remodels to waterproofing, renovations,
            landscaping, and general home improvements, Ralfi&apos;s General
            Contracting helps homeowners improve, protect, and upgrade their
            properties.
          </p>
        </div>

        <div className="mb-8 rounded-3xl border border-red-500/30 bg-white/[0.04] p-8 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <Bath className="mb-6 h-12 w-12 text-red-500" />

              <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-red-500">
                Featured Service
              </p>

              <h3 className="text-3xl font-black md:text-5xl">
                Bathroom Remodeling
              </h3>
            </div>

            <div>
              <p className="text-lg leading-8 text-gray-300">
                Transform outdated bathrooms into clean, modern, and comfortable
                spaces with custom tile work, walk-in showers, vanities,
                flooring, lighting, fixtures, and complete bathroom renovations.
              </p>

              <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold uppercase tracking-wider text-gray-300">
                <span className="rounded-full border border-white/10 px-4 py-2">
                  Custom Tile
                </span>
                <span className="rounded-full border border-white/10 px-4 py-2">
                  Walk-In Showers
                </span>
                <span className="rounded-full border border-white/10 px-4 py-2">
                  Vanities
                </span>
                <span className="rounded-full border border-white/10 px-4 py-2">
                  Modern Finishes
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-2 hover:border-red-500/50 hover:bg-white/[0.06]"
              >
                <Icon className="mb-6 h-9 w-9 text-red-500" />

                <h3 className="mb-4 text-xl font-bold">{service.title}</h3>

                <p className="leading-7 text-gray-300">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}