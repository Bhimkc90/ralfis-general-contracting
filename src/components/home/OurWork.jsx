import Image from "next/image";
import { featuredProject, projects } from "@/data/projects";

export default function OurWork() {
  return (
    <section
      id="our-work"
      className="bg-[#0b1114] py-28 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-red-500">
            Our Work
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-6xl">
            Craftsmanship That Speaks For Itself
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
            Every project reflects our commitment to quality, precision,
            and attention to detail.
          </p>
        </div>

        {/* Featured Project */}
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl">
          <div className="grid lg:grid-cols-2">
            <div className="relative h-[500px]">
              <Image
                src={featuredProject.image}
                alt={featuredProject.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col justify-center p-10 lg:p-14">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-red-500">
                Featured Project
              </p>

              <h3 className="text-4xl font-black">
                {featuredProject.title}
              </h3>

              <p className="mt-6 leading-8 text-gray-300">
                {featuredProject.description}
              </p>

              <div className="mt-8 inline-flex w-fit rounded-full border border-red-500 px-5 py-2 text-sm font-bold uppercase tracking-wider text-red-400">
                {featuredProject.category}
              </div>
            </div>
          </div>
        </div>

        {/* Recent Projects */}
        <div className="mt-20">
          <h3 className="mb-8 text-3xl font-bold">
            Recent Transformations
          </h3>

          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5"
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <h4 className="text-xl font-bold">
                    {project.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}