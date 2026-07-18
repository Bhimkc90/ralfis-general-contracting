import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen overflow-hidden">
      <Image
        src="/hero/hero-bathroom.jpg"
        alt="Luxury Bathroom Remodeling"
        fill
        priority
        className="object-cover object-[75%_center]"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/35" />

      <div className="relative z-10 flex h-full items-center pt-24">
        <div className="mx-auto w-full max-w-7xl px-6">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.35em] text-red-500">
            Bathroom Remodeling • Home Renovation • Outdoor Services
          </p>

          <h1 className="max-w-4xl text-5xl font-black leading-[1.05] text-white md:text-6xl lg:text-7xl">
            Transforming Homes Across New York.
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-9 text-gray-200">
            Premium bathroom remodeling, custom tile installation, basement
            waterproofing, home renovations, landscaping, and exterior services
            built with craftsmanship that lasts.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-red-600 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-red-700"
            >
              Get Free Estimate
            </a>

            <a
              href="#our-work"
              className="rounded-full border border-white/30 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition hover:border-red-500 hover:text-red-500"
            >
              View Portfolio
            </a>
          </div>

          <div className="mt-12 grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-2xl font-black text-white">Licensed</p>
              <p className="mt-1 text-sm text-gray-300">& Insured</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-2xl font-black text-white">New York</p>
              <p className="mt-1 text-sm text-gray-300">Local Service</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-2xl font-black text-white">Quality</p>
              <p className="mt-1 text-sm text-gray-300">Craftsmanship</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-2xl font-black text-white">Free</p>
              <p className="mt-1 text-sm text-gray-300">Estimates</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}