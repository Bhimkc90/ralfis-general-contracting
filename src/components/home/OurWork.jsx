import Gallery from "@/components/common/Gallery";
import { projectCategories } from "@/data/projects";

export default function OurWork() {
  return (
    <section id="our-work" className="bg-[#0b1114] px-6 py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-red-500">
            Portfolio
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-6xl">
            Craftsmanship That Speaks For Itself
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
            A look at bathroom remodels, room renovations, landscaping, tree
            removal, and property improvement work completed with precision and
            pride.
          </p>
        </div>

        <div className="space-y-20">
          {projectCategories.map((category) => (
            <Gallery
              key={category.title}
              title={category.title}
              subtitle={category.subtitle}
              coverImage={category.coverImage}
              highlights={category.highlights}
              images={category.images}
/>
          ))}
        </div>
      </div>
    </section>
  );
}