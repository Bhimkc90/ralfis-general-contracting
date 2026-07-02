export default function CallToAction() {
  return (
    <section className="bg-red-600 px-6 py-24 text-white">
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.35em]">
          Ready To Start?
        </p>

        <h2 className="mt-4 text-4xl font-black md:text-6xl">
          Let's Build Something Great Together.
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-red-100">
          Whether you're planning a bathroom remodel, basement waterproofing,
          landscaping project, or complete home renovation, we're here to help
          bring your vision to life with quality craftsmanship you can trust.
        </p>

        <a
          href="#contact"
          className="mt-10 inline-block rounded-full bg-white px-8 py-4 text-sm font-bold uppercase tracking-wider text-red-600 transition hover:scale-105 hover:bg-gray-100"
        >
          Contact Us Today
        </a>
      </div>
    </section>
  );
}