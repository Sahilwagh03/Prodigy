"use client";
import { forwardRef } from "react";

interface ExperienceCardProps {
  number: string;
  title: string;
  description: string;
  className?: string;
}

const ExperienceCard = forwardRef<HTMLDivElement, ExperienceCardProps>(
  ({ number, title, description, className }, ref) => {
    return (
      <div
        className={`group relative bg-white px-10 py-13 rounded-2xl z-10 cursor-pointer 
        hover:bg-black hover:text-white 
        transition-colors duration-300 ease-out 
        overflow-hidden ${className}`}
        ref={ref}
      >
        <div className="max-w-[21.6rem] flex flex-col gap-12">
          <div className="max-w-[10.2rem] text-[1.25rem] leading-normal tracking-[-.0375rem] font-semibold min-h-12">{title}</div>

          <p className="text-[1rem] text-[#4d4d4d] group-hover:text-white transition-colors duration-300">
            {description}
          </p>
        </div>

        <div
          className="
          absolute top-5 right-5
          w-38 h-28.25
          bg-cover bg-center bg-no-repeat
          scale-0 group-hover:scale-100
          origin-top-right
          transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]
          will-change-transform
          pointer-events-none
          z-30 rounded-lg
          "
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800&auto=format&fit=crop)",
          }}
        />

        {/* Number Circle */}
        <div className="absolute inset-[1.25rem_1.25rem_auto_auto] z-20">
          <div className="w-10 h-10 bg-black text-white text-center flex justify-center items-center rounded-full">
            <div>{number}</div>
          </div>
        </div>
      </div>
    );
  },
);

export default ExperienceCard;
