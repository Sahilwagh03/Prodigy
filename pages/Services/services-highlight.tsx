import SmallCTA from "@/components/small-cta";
import { servicesHighlights } from "@/constant/services-page";
import { cn } from "@/lib/utils";
import Image from "next/image";

const ServicesHighlight = () => {
  return (
    <section className="bg-[url(/dotted-bg.webp)] bg-no-repeat bg-position-[50%_0] bg-size-[1875px] lg:bg-cover lg:bg-center">
      <div className="max-w-340 mx-auto px-4">
        <div className="flex flex-col gap-6 lg:gap-10 justify-center items-center">
          <div className="max-w-2xl text-center">
            <h3 className="text-[clamp(1.6rem,3vw,2.5rem)] leading-tight tracking-[-.05rem] font-semibold">
              Crafting unique strategies that turn visions into powerful results
            </h3>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 border-t border-b border-[#0003] max-w-5xl mx-auto w-full">
            {servicesHighlights.map(({title,description,icon,className}) => (
              <div key={title} className={cn("flex flex-col justify-between gap-17.5 py-8 px-6",className)}>
                <div className="w-full h-full flex justify-center">
                  <Image
                    src={icon}
                    alt="Crystals"
                    width={1024}
                    height={1024}
                    className="w-auto h-20"
                  />
                </div>
                <div className="flex flex-col text-center gap-5">
                  <h5 className="text-[1.5rem] font-semibold tracking-[-.045rem]">{title}</h5>
                  <p className="text-[#4d4d4d] text-[1rem]">{description}</p>
                </div>
              </div>
            ))}
          </div>
          <SmallCTA/>
        </div>
      </div>
    </section>
  );
};

export default ServicesHighlight;
