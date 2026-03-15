"use client";

import { ArrowRight } from "lucide-react";

const SmallCTA = () => {
  return (
    <div className="lg:max-w-160 mx-auto w-full flex flex-col lg:flex-row gap-4 lg:gap-0 items-center justify-between bg-[#0000001a] rounded-2xl lg:rounded-full  px-4 py-2 lg:px-1.5 lg:py-1.5">
      <div className="flex flex-col lg:flex-row items-center gap-4">
        <div className="bg-black text-white px-5 py-2 rounded-full text-sm font-semibold tracking-wide">
          TRUST
        </div>
        <p className="text-black text-center lg:text-left text-sm md:text-base">
          Join the <span className="font-semibold">850+ company</span> trusting
          our creative portfolio agency services
        </p>
      </div>
      <ArrowRight className="text-black shrink-0" size={20} strokeWidth={2} />
    </div>
  );
};

export default SmallCTA;
