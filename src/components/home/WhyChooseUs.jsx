import { ShieldCheck, Hammer, Clock, MapPin } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    text: "Professional service with the protection and peace of mind homeowners expect.",
  },
  {
    icon: Hammer,
    title: "Quality Craftsmanship",
    text: "Detailed work, clean finishes, and attention to every part of the project.",
  },
  {
    icon: Clock,
    title: "Reliable Service",
    text: "Clear communication, dependable scheduling, and respect for your home.",
  },
  {
    icon: MapPin,
    title: "Serving Long Island",
    text: "Local remodeling, renovation, landscaping, and exterior services.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="bg-[#151c22] px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-red-500">
          Why Choose Ralfi&apos;s
        </p>

        <h2 className="max-w-3xl text-4xl font-black md:text-6xl">
          Built on trust, detail, and quality work.
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <div
                key={reason.title}
                className="rounded-2xl border border-white/10 bg-black/20 p-7"
              >
                <Icon className="mb-5 h-9 w-9 text-red-500" />
                <h3 className="mb-3 text-xl font-bold">{reason.title}</h3>
                <p className="leading-7 text-gray-300">{reason.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}