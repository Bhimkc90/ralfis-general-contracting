import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-black"
    >
      <Image
        src="/hero/hero-bathroom.jpg"
        alt="Luxury bathroom remodeling by Ralfi's General Contracting"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[72%_center] sm:object-[68%_center] lg:object-center"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/25" />

      {/* Hero content */}
      <div className="relative z-10 flex min-h-screen items-center pt-28 pb-12 md:pt-32 md:pb-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <div className="max-w-4xl">
            <p className="mb-4 max-w-3xl text-xs font-bold uppercase leading-6 tracking-[0.18em] text-red-500 sm:text-sm sm:tracking-[0.28em] md:mb-5 md:tracking-[0.35em]">
              Bathroom Remodeling • Home Renovation • Outdoor Services
            </p>

            <h1 className="max-w-4xl text-4xl font-black leading-[1.05] text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Transforming Homes Across New York.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-gray-200 sm:text-lg sm:leading-8 md:mt-8 md:text-xl md:leading-9">
              Premium bathroom remodeling, custom tile installation, basement
              waterproofing, home renovations, landscaping, and exterior
              services built with craftsmanship that lasts.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4 md:mt-10">
              <a
                href="#contact"
                className="rounded-full bg-red-600 px-7 py-4 text-center text-sm font-bold uppercase tracking-wider text-white transition hover:bg-red-700"
              >
                Get Free Estimate
              </a>

              <a
                href="#our-work"
                className="rounded-full border border-white/30 px-7 py-4 text-center text-sm font-bold uppercase tracking-wider text-white transition hover:border-red-500 hover:text-red-500"
              >
                View Portfolio
              </a>
            </div>

            {/* Trust cards */}
            <div className="mt-8 grid max-w-3xl grid-cols-2 gap-3 sm:gap-4 md:mt-12 md:grid-cols-4">
              <div className="rounded-2xl border border-white/10 bg-black/35 p-3 backdrop-blur-sm sm:p-4">
                <p className="text-lg font-black text-white sm:text-xl md:text-2xl">
                  Licensed
                </p>
                <p className="mt-1 text-xs text-gray-300 sm:text-sm">
                  &amp; Insured
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/35 p-3 backdrop-blur-sm sm:p-4">
                <p className="text-lg font-black text-white sm:text-xl md:text-2xl">
                  New York
                </p>
                <p className="mt-1 text-xs text-gray-300 sm:text-sm">
                  Local Service
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/35 p-3 backdrop-blur-sm sm:p-4">
                <p className="text-lg font-black text-white sm:text-xl md:text-2xl">
                  Quality
                </p>
                <p className="mt-1 text-xs text-gray-300 sm:text-sm">
                  Craftsmanship
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/35 p-3 backdrop-blur-sm sm:p-4">
                <p className="text-lg font-black text-white sm:text-xl md:text-2xl">
                  Free
                </p>
                <p className="mt-1 text-xs text-gray-300 sm:text-sm">
                  Estimates
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}