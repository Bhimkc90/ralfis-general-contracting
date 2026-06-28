import { Bath, Home, Trees } from "lucide-react";

const services = [
  {
    icon: Bath,
    title: "Bathroom Remodeling",
    description:
      "Complete bathroom transformations including custom tile, walk-in showers, vanities, fixtures, and modern finishes.",
  },
  {
    icon: Home,
    title: "Home Renovation",
    description:
      "Interior improvements, kitchens, flooring, painting, drywall, repairs, and full home upgrades.",
  },
  {
    icon: Trees,
    title: "Outdoor Services",
    description:
      "Lawn mowing, landscaping, fallen tree removal, exterior maintenance, decks, patios, and fencing.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#0B1114] text-white">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-red-500">
          What We Do
        </p>

        <h2 className="max-w-3xl text-4xl font-black md:text-6xl">
          Quality work for every part of your home.
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition hover:-translate-y-2 hover:border-red-500/50 hover:bg-white/[0.06]"
              >
                <Icon className="mb-6 h-10 w-10 text-red-500" />

                <h3 className="mb-4 text-2xl font-bold">
                  {service.title}
                </h3>

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