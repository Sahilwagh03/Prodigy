"use client";
import Image from "next/image";

interface FeatureCardProps {
  title: string;
  year: string;
  image: string;
}

export default function FeatureCard({ title, year, image }: FeatureCardProps) {
  const repeat = Array(10).fill(`${title} •`).join("   ");

  return (
    <div className="w-full">
      <div className="block relative">
        <div className="feature-card group relative rounded-3xl overflow-hidden h-80 lg:h-180 cursor-pointer">

          {/* Layer 1 — Main BG image */}
          <Image
            src={image}
            alt={title}
            width={1200}
            height={800}
            className="card-bg absolute inset-0 w-full h-full object-cover z-0"
          />

          {/* Layer 2 — Blur / dark overlay */}
          <div className="card-blur absolute inset-0 backdrop-blur-0 bg-black/0 z-10" />

          {/* Layer 3 — Marquee band (white bg, black text) */}
          <div className="card-marquee absolute left-0 right-0 top-1/2 -translate-y-1/2 overflow-hidden z-20 opacity-0 pointer-events-none">
            <div className="marquee-track flex whitespace-nowrap bg-white py-2">
              <span className="marquee-copy shrink-0 text-black text-2xl font-semibold px-6">
                {repeat}
              </span>
              {/* Duplicate — makes the loop seamless regardless of title length */}
              <span className="marquee-copy shrink-0 text-black text-2xl font-semibold px-6" aria-hidden>
                {repeat}
              </span>
            </div>
          </div>

          {/* Layer 4 — Small preview image */}
          <div className="card-preview absolute inset-0 flex items-center justify-center pointer-events-none z-30">
            <Image
              src={image}
              alt={title}
              width={400}
              height={600}
              className="preview-img w-40 h-64 lg:w-64 lg:h-80 rounded-2xl object-cover scale-0"
            />
          </div>

        </div>
        <div className="flex justify-between items-center py-6 border-b border-gray-300">
          <h3 className="text-xl font-semibold">{title}</h3>
          <span className="text-gray-500">{year}</span>
        </div>
      </div>
    </div>
  );
}