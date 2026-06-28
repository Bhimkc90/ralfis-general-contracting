const projects = [
  {
    title: "Luxury Bathroom Remodel",
    category: "Bathroom Remodeling",
    image: "/projects/bathroom-1.jpg",
  },
  {
    title: "Custom Shower Tile Work",
    category: "Tile Installation",
    image: "/projects/bathroom-2.jpg",
  },
  {
    title: "Modern Bathroom Finish",
    category: "Bathroom Remodeling",
    image: "/projects/bathroom-3.jpg",
  },
];

export default function OurWork() {
  return (
    <section id="our-work" className="bg-[#0b1114] px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-red-500">
          Our Work
        </p>

        <h2 className="max-w-3xl text-4xl font-black md:text-6xl">
          Craftsmanship you can see.
        </h2>

        <p className="mt-6 max-w-2xl leading-8 text-gray-300">
          From full bathroom transformations to detailed tile work, every project
          is completed with precision, quality, and pride.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
            >
              <div className="h-80 overflow-hidden bg-[#151c22]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-red-500">
                  {project.category}
                </p>
                <h3 className="text-2xl font-bold">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}