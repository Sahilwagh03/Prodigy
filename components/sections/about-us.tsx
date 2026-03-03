import Image from "next/image";
import TalkButton from "../talk-button";
import { Plus } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="h-auto bg-cover pt-8 lg:pt-28 bg-no-repeat bg-position-[50%] bg-[url(/dotted-bg.webp)]">
      <div className="h-full flex flex-col gap-4 lg:flex-row px-4 max-w-340 mx-auto">

        {/* Image Section (Mobile First, Desktop Second) */}
        <div className="flex-4 order-1 lg:order-2 p-4 bg-neutral-200 rounded-3xl overflow-hidden flex items-center justify-center">
          <Image
            src="/fire-logo-big.svg"
            width={1200}
            height={800}
            alt="Aesthetic Logo"
            className="w-full lg:h-125 object-contain scale-350"
          />
        </div>

        {/* Text Section (Mobile Second, Desktop First) */}
        <div className="lg:h-screen flex-6 order-2 lg:order-1">
          <div className="max-w-125 h-full flex flex-col gap-5 lg:gap-10 justify-center">

            <h3 className="text-[2rem] lg:text-[2.5rem] font-semibold leading-tight tracking-[-.075rem]">
              Innovative ideas and bold execution that drive measurable growth
            </h3>

            <div className="flex flex-col gap-4 justify-end">
              <p className="text-[1rem] lg:text-[1.25rem] font-semibold tracking-[-.0375rem] leading-normal">
                “Working with this agency completely transformed our brand.
                Their creativity, strategy{" "}
                <span className="text-[#4d4d4d]">
                  and execution exceeded expectations at every step.
                </span>
                ”
              </p>

              <TalkButton
                className="w-fit bg-black text-white"
                dotClassName="bg-red-500"
              />
            </div>

            <div className="hidden lg:flex lg:justify-end">
              <div className="text-center flex flex-col items-center">
                <div className="relative h-[clamp(2.5rem,7vw,9.37rem)] flex items-center">
                  <h3 className="text-[clamp(1.5rem,7vw,9.37rem)] font-semibold leading-none">
                    15
                  </h3>

                  <div className="
                    absolute flex items-center justify-center
                    bg-red-500 w-[1.9rem] h-[1.9rem] rounded-full
                    right-[-1.4rem] top-[1.3rem] z-10
                    lg:w-9.5 lg:h-9.5 lg:right-[-1.7rem]
                  ">
                    <Plus className="w-4 h-4 text-white" strokeWidth={3} />
                  </div>
                </div>

                <span className="text-sm font-semibold leading-[1.71] tracking-[0.0675rem]">
                  Years of Experience
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;