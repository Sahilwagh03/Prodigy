"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause } from "lucide-react";
import { useVideoPlayback } from "@/context/VideoPlaybackContext";

const reels = [
  {
    id: 1,
    video: "https://res.cloudinary.com/dmrjruik5/video/upload/v1783082386/EOT_Finalnew_aluaq2.mp4",
    thumbnail: "https://res.cloudinary.com/dmrjruik5/video/upload/f_auto,q_auto,w_600,h_1066,c_fill,so_4.2/v1783082386/EOT_Finalnew_aluaq2.jpg",
    title: "Brand Growth Campaign",
    category: "Social Media",
  },
  {
    id: 2,
    video: "https://res.cloudinary.com/dmrjruik5/video/upload/v1783082393/Niharika_z12uav.mp4",
    thumbnail: "https://res.cloudinary.com/dmrjruik5/video/upload/f_auto,q_auto,w_600,h_1066,c_fill,so_2.2/v1783082393/Niharika_z12uav.jpg",
    title: "Education",
    category: "Performance Marketing",
  },
  {
    id: 3,
    video: "https://res.cloudinary.com/dmrjruik5/video/upload/v1783082399/Aparna_lstudu.mp4",
    thumbnail: "https://res.cloudinary.com/dmrjruik5/video/upload/f_auto,q_auto,w_600,h_1066,c_fill,so_13.84/v1783082399/Aparna_lstudu.jpg",
    title: "Service and Product",
    category: "Content Creation",
  },
  {
    id: 4,
    video: "https://res.cloudinary.com/dmrjruik5/video/upload/v1783082642/Niharika_1_mhxmgk.mp4",
    thumbnail: "https://res.cloudinary.com/dmrjruik5/video/upload/f_auto,q_auto,w_600,h_1066,c_fill,so_50.67/v1783082642/Niharika_1_mhxmgk.jpg",
    title: "Travel",
    category: "UGC Strategy",
  },
  {
    id: 5,
    video: "https://res.cloudinary.com/dmrjruik5/video/upload/v1783217468/Davinder_kgznvb.mp4",
    thumbnail: "https://res.cloudinary.com/dmrjruik5/video/upload/f_auto,q_auto,w_600,h_1066,c_fill,so_11.7/v1783217468/Davinder_kgznvb.jpg",
    title: "Beauty And Skincare",
    category: "UGC Strategy",
  },
  {
    id: 6,
    video: "https://res.cloudinary.com/dmrjruik5/video/upload/v1783217482/Niharika_xrzx5r.mp4",
    thumbnail: "https://res.cloudinary.com/dmrjruik5/video/upload/f_auto,q_auto,w_600,h_1066,c_fill,so_27.3/v1783217482/Niharika_xrzx5r.jpg",
    title: "Product",
    category: "UGC Strategy",
  },
];

// Helper to construct optimized Cloudinary thumbnail URL from video URL
// TIP: If you want to use a specific timestamp for thumbnail, you can insert "so_3" (e.g. at 3s)
const getThumbnailUrl = (videoUrl: string) => {
  return videoUrl
    .replace("/video/upload/", "/video/upload/f_auto,q_auto,w_600,h_1066,c_fill/")
    .replace(/\.mp4$/, ".jpg");
};

interface ReelCardProps {
  reel: typeof reels[0];
}

function ReelCard({ reel }: ReelCardProps) {
  const [hasLoaded, setHasLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { activeVideoId, playVideo, pauseVideo } = useVideoPlayback();

  const myVideoId = reel.video;
  const isActive = activeVideoId === myVideoId;

  const thumbnailUrl = reel.thumbnail || getThumbnailUrl(reel.video);
  const shouldRenderVideo = hasLoaded || isActive;

  const handlePlayPause = () => {
    if (!shouldRenderVideo) {
      setHasLoaded(true);
      playVideo(myVideoId);
    } else {
      if (isActive) {
        pauseVideo(myVideoId);
      } else {
        playVideo(myVideoId);
      }
    }
  };

  const handleNativePause = () => {
    if (isActive) {
      pauseVideo(myVideoId);
    }
  };

  // Synchronize playback with active state
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
      className="group relative overflow-hidden rounded-[32px] border border-zinc-200 bg-zinc-100 shadow-sm cursor-pointer"
    >
      {/* Video / Thumbnail Container */}
      <div className="relative aspect-[9/16] overflow-hidden bg-zinc-100">
        {shouldRenderVideo ? (
          <video
            ref={videoRef}
            src={reel.video}
            loop
            playsInline
            poster={thumbnailUrl}
            onPause={handleNativePause}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <img
            src={thumbnailUrl}
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
            {reel.category}
          </p>

          <h3 className="text-lg font-semibold text-white">
            {reel.title}
          </h3>
        </div>
      </div>
    </div>
  );
}

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
            <ReelCard
              key={reel.id}
              reel={reel}
            />
          ))}
        </div>
      </div>
    </section>
  );
}