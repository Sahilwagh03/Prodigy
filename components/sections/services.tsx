"use client";

import TalkButton from "../talk-button";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";
import { cn } from "@/lib/utils";

interface Service {
  id: number;
  title: string;
  image: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Interactive design experiences",
    image:
      "https://images.unsplash.com/photo-1707836885248-2b0e3cb0c76e?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  {
    id: 2,
    title: "Motion graphics production",
    image:
      "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?q=80&w=1064&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Website design development",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1064&auto=format&fit=crop",
  },
];

const ROW_HEIGHT = 112;

const Services = () => {
  const pinRef = useRef<HTMLDivElement>(null);
  const highlightRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageClipRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageInnerRefs = useRef<(HTMLDivElement | null)[]>([]);

  const setRowRef = (index: number) => (el: HTMLDivElement | null) => {
    rowRefs.current[index] = el;
  };
  const setImageClipRef = (index: number) => (el: HTMLDivElement | null) => {
    imageClipRefs.current[index] = el;
  };
  const setImageInnerRef = (index: number) => (el: HTMLDivElement | null) => {
    imageInnerRefs.current[index] = el;
  };

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinRef.current,
          start: "top-=20px top",
          end: "+=300%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      services.forEach((_, index) => {
        if (index === 0) {
          tl.to({}, { duration: 0.5 });
          return;
        }

        const label = `service${index}`;
        tl.addLabel(label);

        tl.to(
          highlightRef.current,
          { y: index * ROW_HEIGHT, duration: 0.5, ease: "power2.inOut" },
          label,
        );

        tl.to(
          rowRefs.current[index - 1],
          { color: "#000000", duration: 0.25, ease: "none" },
          label,
        );

        tl.to(
          rowRefs.current[index],
          { color: "#ffffff", duration: 0.25, ease: "none" },
          `${label}+=0.25`,
        );

        tl.to(
          imageClipRefs.current[index],
          { height: "100%", duration: 0.5, ease: "power3.inOut" },
          label,
        );

        tl.to(
          imageInnerRefs.current[index],
          { y: "0%", duration: 0.5, ease: "power3.inOut" },
          label,
        );

        tl.to({}, { duration: index === services.length - 1 ? 1 : 0.5 });
      });
    });

    return () => mm.revert();
  });

  return (
    <section className="relative pt-8 lg:pt-32.5">
      <div ref={pinRef} className="px-4 max-w-340 mx-auto">
        <div className="flex flex-col">
          <div className="flex flex-col gap-4 lg:flex-row justify-between lg:items-center mb-8 lg:mb-16.25">
            <h2 className="flex-1 text-[2rem] lg:text-[2.5rem] font-semibold leading-tight tracking-[-.075rem]">
              Bold digital innovation and expert execution that drive measurable
              growth
            </h2>
            <div className="flex-1 flex justify-end w-fit h-full items-end">
              <TalkButton className="w-fit h-fit" />
            </div>
          </div>

          <div className="h-full grid lg:grid-cols-[0.3fr_1fr] justify-between gap-8 lg:gap-16">
            <div className="hidden lg:flex relative h-90">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  ref={setImageClipRef(index)}
                  className={cn(
                    "absolute inset-x-0 bottom-0 overflow-hidden",
                    index === 0 ? "h-full" : "h-0",
                  )}
                >
                  <div
                    ref={setImageInnerRef(index)}
                    className={cn(
                      "absolute inset-0",
                      index === 0 ? "translate-y-0" : "translate-y-full",
                    )}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={1200}
                      height={800}
                      className="h-84 w-full object-cover rounded-xl"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="relative overflow-hidden">
              <div
                ref={highlightRef}
                className="hidden lg:flex absolute left-0 top-0 w-full h-28 rounded-3xl bg-black"
              />

              <div className="relative flex flex-col ">
                {services.map((service, index) => (
                  <div
                    key={service.id}
                    ref={setRowRef(index)}
                    className={cn(
                      "h-20 lg:h-28 flex items-center gap-4 lg:gap-0 justify-between px-4 lg:px-10 border-b border-neutral-300 relative z-10",
                      index === 0 ? "lg:text-white" : "lg:text-black",
                    )}
                  >
                    <span className="text-xl font-medium">(0{service.id})</span>
                    <span className="text-xl font-medium">{service.title}</span>
                    <span className="text-2xl">→</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
