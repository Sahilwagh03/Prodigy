"use client";

import { Play } from "lucide-react";

const reels = [
  {
    id: 1,
    video: "/videos/reel-1.mp4",
    title: "Brand Growth Campaign",
    category: "Social Media",
  },
  {
    id: 2,
    video: "/videos/reel-2.mp4",
    title: "Luxury Product Ad",
    category: "Performance Marketing",
  },
  {
    id: 3,
    video: "/videos/reel-3.mp4",
    title: "Fitness Promotion",
    category: "Content Creation",
  },
  {
    id: 4,
    video: "/videos/reel-4.mp4",
    title: "Restaurant Launch",
    category: "UGC Strategy",
  },
  {
    id: 5,
    video: "/videos/reel-5.mp4",
    title: "Fashion Reel Edit",
    category: "Video Production",
  },
  {
    id: 6,
    video: "/videos/reel-6.mp4",
    title: "Startup Ad Campaign",
    category: "Paid Ads",
  },
];

export default function WorkShowcaseSection() {
  return (
    <section className="h-auto py-10 lg:py-20">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        {/* Heading */}
        <div className="mx-auto mb-14 flex max-w-3xl flex-col items-center justify-center text-center">
          <h2 className="text-[2rem] font-semibold leading-tight tracking-[-.075rem] text-black lg:text-[2.5rem]">
            Scroll-Stopping
            Video Campaigns
          </h2>

          <p className="mt-4 max-w-md text-zinc-600">
            High-performing vertical reels crafted for brands to boost
            engagement, conversions, and audience retention.
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reels.map((reel) => (
            <div
              key={reel.id}
              className="group relative overflow-hidden rounded-[32px] border border-zinc-200 bg-white shadow-sm"
            >
              {/* Video */}
              <div className="relative aspect-[9/16] overflow-hidden">
                <video
                  src={reel.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Light Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                {/* Play Button */}
                <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 backdrop-blur-md transition-all duration-300 group-hover:scale-110">
                  <Play className="ml-1 h-6 w-6 fill-black text-black" />
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-0 left-0 w-full p-5">
                  <p className="mb-1 text-sm text-white">
                    {reel.category}
                  </p>

                  <h3 className="text-lg font-semibold text-white">
                    {reel.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}