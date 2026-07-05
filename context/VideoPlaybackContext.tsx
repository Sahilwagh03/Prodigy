'use client'
import React, { createContext, useContext, useState, useCallback, useMemo } from "react";

interface VideoPlaybackContextType {
  activeVideoId: string | null;
  playVideo: (id: string) => void;
  pauseVideo: (id: string) => void;
}

export const VideoPlaybackContext = createContext<VideoPlaybackContextType | null>(null);

export const VideoPlaybackProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  const playVideo = useCallback((id: string) => {
    setActiveVideoId(id);
  }, []);

  const pauseVideo = useCallback((id: string) => {
    setActiveVideoId((prev) => (prev === id ? null : prev));
  }, []);

  const value = useMemo(
    () => ({ activeVideoId, playVideo, pauseVideo }),
    [activeVideoId, playVideo, pauseVideo]
  );

  return (
    <VideoPlaybackContext.Provider value={value}>
      {children}
    </VideoPlaybackContext.Provider>
  );
};

export const useVideoPlayback = () => {
  const ctx = useContext(VideoPlaybackContext);
  if (!ctx) {
    throw new Error("useVideoPlayback must be used inside a VideoPlaybackProvider");
  }
  return ctx;
};
