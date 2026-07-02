"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import Lightbox from "./Lightbox";

export default function Gallery({
  title,
  subtitle,
  coverImage,
  highlights,
  images,
}) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <article className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] transition hover:-translate-y-1 hover:border-red-500/40">
      <button
        type="button"
        onClick={() => setSelectedIndex(0)}
        className="group grid w-full text-left lg:grid-cols-[1.1fr_0.9fr]"
      >
        <div className="relative h-[380px] overflow-hidden">
          <Image
            src={coverImage}
            alt={`${title} project cover`}
            fill
            className="object-cover transition duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/20 transition group-hover:bg-black/35" />
          <div className="absolute left-6 top-6 rounded-full bg-red-600 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white">
            {images.length} Photos
          </div>
        </div>

        <div className="flex flex-col justify-center p-8 lg:p-10">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-red-500">
            Project Showcase
          </p>

          <h3 className="text-3xl font-black text-white md:text-4xl">
            {title}
          </h3>

          <p className="mt-4 leading-8 text-gray-300">{subtitle}</p>

          <div className="mt-6 space-y-3">
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-3 text-gray-300">
                <Check className="h-5 w-5 text-red-500" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 inline-flex items-center gap-3 font-bold uppercase tracking-wider text-red-500">
            View Gallery <ArrowRight className="h-5 w-5" />
          </div>
        </div>
      </button>

      {selectedIndex !== null && (
        <Lightbox
          images={images}
          currentIndex={selectedIndex}
          setCurrentIndex={setSelectedIndex}
          onClose={() => setSelectedIndex(null)}
          title={title}
        />
      )}
    </article>
  );
}