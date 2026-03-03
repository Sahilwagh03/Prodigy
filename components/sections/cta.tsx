import FluidSimulation from "../fluid-simulation";
import TalkButton from "../talk-button";

const CTA = () => {
  return (
    <section className="bg-cover mx-4 bg-no-repeat bg-[url(/dotted-bg.webp)]">
      <div className="relative w-full h-full rounded-3xl overflow-hidden">
        <div className="absolute inset-0 z-0">
          <FluidSimulation />
        </div>
        <div className="absolute inset-0 bg-black/10 z-1" />
        <div className="lg:h-screen py-12 lg:py-0 relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <h2 className="text-white font-bold text-[clamp(2.1rem,5vw,3.75rem)] leading-tight tracking-[-.075rem] max-w-4xl">
            We Build Digital Experiences That Drive Growth
          </h2>
          <div className="mt-10 flex flex-row gap-4">
            <TalkButton title="Start Your Project" className="justify-center" />
            <button className="cursor-pointer px-6 py-2 rounded-full border text-white bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-200 active:scale-[0.98]">
              View Our Work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;