"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Play, Pause } from "lucide-react";
import TalkButton from "../../../components/talk-button";
import { animateFeatureWork } from "@/animation/feature";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";

const featuredReels = [
  {
    id: 1,
    video: "https://res.cloudinary.com/dmrjruik5/video/upload/v1783221972/tyagi_media_akmjy1.mp4",
    thumbnail: "https://res.cloudinary.com/dmrjruik5/video/upload/f_auto,q_auto,w_600,h_1066,c_fill,so_37.52/v1783221972/tyagi_media_akmjy1.jpg",
    title: "Tyagi Media",
    year: "2024",
  },
  {
    id: 2,
    video: "https://res.cloudinary.com/dmrjruik5/video/upload/v1783221968/Final_fx1tlk.mp4",
    thumbnail: "https://res.cloudinary.com/dmrjruik5/video/upload/f_auto,q_auto,w_600,h_1066,c_fill,so_22.28/v1783221968/Final_fx1tlk.jpg",
    title: "Content Growth",
    year: "2026",
  },
  {
    id: 3,
    video: "https://res.cloudinary.com/dmrjruik5/video/upload/v1783222253/banana_xjp7hi.mp4",
    thumbnail: "https://res.cloudinary.com/dmrjruik5/video/upload/f_auto,q_auto,w_600,h_1066,c_fill,so_1.56/v1783222253/banana_xjp7hi.jpg",
    title: "Banana Export",
    year: "2026",
  },
  {
    id: 4,
    video: "https://res.cloudinary.com/dmrjruik5/video/upload/v1783157431/featured-work-3_zmsekw.mp4",
    thumbnail: "https://res.cloudinary.com/dmrjruik5/image/upload/v1783157431/featured-work-3_zmsekw.jpg",
    title: "AI Automation",
    year: "2025",
  },
];

interface FeatureVideoCardProps {
  reel: typeof featuredReels[0];
  isActive: boolean;
  onPlay: () => void;
  onPause: () => void;
}

function FeatureVideoCard({ reel, isActive, onPlay, onPause }: FeatureVideoCardProps) {
  const [hasLoaded, setHasLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const shouldRenderVideo = hasLoaded || isActive;

  const handlePlayPause = () => {
    if (!shouldRenderVideo) {
      setHasLoaded(true);
      onPlay();
    } else {
      if (isActive) {
        onPause();
      } else {
        onPlay();
      }
    }
  };

  useEffect(() => {
    if (shouldRenderVideo && videoRef.current) {
      if (isActive) {
        videoRef.current.play().catch((err) => {
          console.error("Video play failed:", err);
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [shouldRenderVideo, isActive]);

  return (
    <div
      onClick={handlePlayPause}
      className="feature-card group relative overflow-hidden rounded-[32px] border border-zinc-200 bg-zinc-100 shadow-sm cursor-pointer"
    >
      {/* Video / Thumbnail Container */}
      <div className="relative aspect-[9/16] overflow-hidden bg-zinc-100">
        {shouldRenderVideo ? (
          <video
            ref={videoRef}
            src={reel.video}
            loop
            playsInline
            poster={reel.thumbnail}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <img
            src={reel.thumbnail}
            alt={reel.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}

        {/* Light Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/25 transition-opacity duration-300 ${isActive ? "opacity-0 hover:opacity-100" : "opacity-100"}`} />

        {/* Play/Pause Button */}
        <div className={`absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 border border-white/20 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-black/60 ${isActive ? "opacity-0 hover:opacity-100" : "opacity-70 group-hover:opacity-100"}`}>
          {isActive ? (
            <Pause className="h-5 w-5 text-white" />
          ) : (
            <Play className="ml-0.5 h-5 w-5 fill-white text-white" />
          )}
        </div>

        {/* Bottom Content */}
        <div className={`absolute bottom-0 left-0 w-full p-5 transition-opacity duration-300 ${isActive ? "opacity-0 hover:opacity-100" : "opacity-100"}`}>
          <p className="mb-1 text-sm text-white font-medium">
            {reel.year}
          </p>

          <h3 className="text-lg font-semibold text-white">
            {reel.title}
          </h3>
        </div>
      </div>
    </div>
  );
}

const FeatureWork = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeReelId, setActiveReelId] = useState<number | null>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      animateFeatureWork(sectionRef.current!);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="h-full mx-4">
      <div className="py-8 lg:py-32.5 rounded-[1.875rem] bg-white mx-auto max-w-340">
        <div className="px-4">
          <div className="flex flex-col">
            <div className="flex flex-col lg:flex-row gap-7.5 justify-between mb-8 lg:mb-16.25">
              <div className="flex-1">
                <h1 className="feature-title text-[clamp(2.15rem,10vw,9.3rem)] lg:tracking-[-.28125rem] leading-[0.9] font-semibold">
                  <span className="line block overflow-hidden whitespace-nowrap">Featured</span>
                  <span className="line block overflow-hidden whitespace-nowrap">Work</span>
                </h1>
              </div>

              <div className="flex-1 flex flex-col gap-10 justify-between max-w-78.75 self-stretch">
                <div className="feature-right-item bg-neutral-100 px-2 rounded-full flex justify-center items-center h-24 max-w-24 overflow-hidden">
                  <Image
                    src="/fire-logo.svg"
                    alt="feature-work-logo"
                    width={130}
                    height={130}
                    className="scale-450"
                  />
                </div>

                <p className="feature-right-item text-[#4d4d4d] text-[1rem] leading-relaxed font-normal">
                  We blend creativity with technical expertise to craft
                  experiences that captivate audiences and communicate your
                  brand message.
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {featuredReels.map((reel) => (
                <FeatureVideoCard
                  key={reel.id}
                  reel={reel}
                  isActive={activeReelId === reel.id}
                  onPlay={() => setActiveReelId(reel.id)}
                  onPause={() => setActiveReelId(null)}
                />
              ))}
            </div>

            <div className="flex justify-center">
              <TalkButton
                label="View more"
                className="group mt-8 lg:mt-16 w-fit bg-black text-white hover:bg-[#f3350c]"
                dotClassName="bg-[#f3350c] group-hover:bg-white"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureWork;
