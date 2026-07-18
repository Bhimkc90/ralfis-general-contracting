import { ShieldCheck, Hammer, Clock, MapPin } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    text: "Professional service with the protection homeowners expect.",
  },
  {
    icon: Hammer,
    title: "Craftsmanship First",
    text: "Clean finishes, precise detail, and work done with pride.",
  },
  {
    icon: Clock,
    title: "Reliable Process",
    text: "Clear communication and dependable scheduling from start to finish.",
  },
  {
    icon: MapPin,
    title: "Serving New York",
    text: "Proudly serving homeowners throughout New York with quality craftsmanship."
  }
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="bg-[#151c22] px-6 py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-red-500">
            About Ralfi&apos;s
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-6xl">
            Built on honest work, clean finishes, and attention to detail.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            Ralfi&apos;s General Contracting is a Long Island based home
            improvement company specializing in bathroom remodeling, basement
            waterproofing, interior renovations, landscaping, tree removal, and
            general property improvements.
          </p>

          <p className="mt-5 text-lg leading-8 text-gray-300">
            From the first conversation to the final cleanup, every project is
            handled with care, respect for the home, and a focus on quality work
            that lasts.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-4">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <div
                key={reason.title}
                className="rounded-2xl border border-white/10 bg-black/20 p-6 transition hover:-translate-y-1 hover:border-red-500/50 hover:bg-black/30"
              >
                <Icon className="mb-5 h-8 w-8 text-red-500" />

                <h3 className="mb-3 text-lg font-bold">{reason.title}</h3>

                <p className="text-sm leading-6 text-gray-300">
                  {reason.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}