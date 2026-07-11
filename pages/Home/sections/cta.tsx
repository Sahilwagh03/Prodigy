'use client';
import dynamic from "next/dynamic";
import TalkButton from "../../../components/talk-button";
import { CONTACT_WHATSAPP_URL } from "@/constant/links";

const FluidSimulation = dynamic(() => import("../../../components/fluid-simulation"), {
  ssr: false,
});

const CTA = () => {
  return (
    <section
      className="h-[65vh] lg:h-[85vh] bg-cover mx-4 bg-no-repeat bg-[url(/dotted-bg.webp)] flex justify-center items-center py-6 lg:py-10 pt-0"
    >
      <div
        className="max-w-340 w-full mx-auto relative h-full min-h-[450px] overflow-hidden rounded-4xl bg-black shadow-lg"
      >
        <div className="absolute inset-0 z-0">
          <FluidSimulation />
        </div>

        <div className="absolute inset-0 bg-black/10 z-1" />

        <div className="py-16 lg:py-0 relative z-10 h-full flex flex-col items-center justify-center text-center px-6 md:px-12">
          <h2 className="text-white font-bold text-[1.85rem] sm:text-[clamp(2.1rem,5vw,3.75rem)] leading-tight tracking-[-.05rem] sm:tracking-[-.075rem] max-w-4xl px-2 sm:px-0">
            We Build Digital Experiences That Drive Growth
          </h2>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4 sm:px-0 justify-center items-center">
            <TalkButton label="Start Your Project" className="w-full sm:w-auto justify-center py-3 sm:py-2" href={CONTACT_WHATSAPP_URL} />

            <button className="w-full sm:w-auto cursor-pointer px-6 py-3 sm:py-2 rounded-full border text-white bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-200 active:scale-[0.98] text-center">
              View Our Work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;