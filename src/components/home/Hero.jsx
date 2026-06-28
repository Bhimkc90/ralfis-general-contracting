import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src="/hero/hero-bathroom.jpg"
        alt="Luxury Bathroom Remodeling"
        fill
        priority
        className="object-cover object-[75%_center]"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center pt-32">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.35em] text-red-500">
            Bathroom Remodeling • Home Renovation • Outdoor Services
          </p>

          <h1 className="max-w-4xl text-5xl font-black leading-[1.05] text-white md:text-6xl lg:text-7xl">
            Transforming
            <br />
            Homes With
            <br />
            Precision.
          </h1>

          <p className="mt-8 max-w-xl text-xl leading-9 text-gray-200">
            Premium bathroom remodeling, custom tile installation, home
            renovations, landscaping, and exterior services throughout Long
            Island.
          </p>

          <p className="mt-12 text-2xl font-semibold text-white">
            Your Home. Our Expertise.
          </p>

          <div className="mt-10 flex flex-wrap gap-8 text-sm font-semibold uppercase tracking-wider text-gray-300">
            <span>✔ Licensed & Insured</span>
            <span>✔ Premium Craftsmanship</span>
            <span>✔ Serving Long Island</span>
          </div>
        </div>
      </div>
    </section>
  );
}