"use client";
import { animatePartners } from "@/animation/partners";
import PartnerCard from "../partner-card";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const Partners = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      animatePartners(sectionRef.current!);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="h-auto bg-cover pt-8 lg:pt-28 bg-no-repeat bg-position-[50%] bg-[url(/dotted-bg.webp)]"
    >
      <div className="flex flex-col gap-6 lg:gap-20 px-4">
        <div className="flex flex-col gap-4 lg:flex-row justify-between items-start">
          <h6 className="partner-title text-[0.8rem] leading-[1.75] tracking-[.0675rem] font-semibold uppercase">
            Our Partners
          </h6>
          <p className="partner-paragraph text-[2.5rem] leading-tight tracking-[-.075rem] max-w-130 font-semibold">
            We collaborate with forward thinking brands to build lasting
            creative impact
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
          <PartnerCard
            blackLogo="https://cdn.prod.website-files.com/691d92c72b801c04cbc08bec/6926eb448fc004952aca17f2_vertora-logo-one.svg"
            whiteLogo="https://cdn.prod.website-files.com/691d92c72b801c04cbc08bec/6926ebba6be52dad8f152cb4_Group%201597885232.svg"
            alt="GlobalBank"
          />
          <PartnerCard
            blackLogo="https://cdn.prod.website-files.com/691d92c72b801c04cbc08bec/6926eb449c977eef5051284f_vertora-logo-two.svg"
            whiteLogo="https://cdn.prod.website-files.com/691d92c72b801c04cbc08bec/6926ebba2892e45b41f23763_Group%201597885231.svg"
            alt="GlobalBank"
          />
          <PartnerCard
            blackLogo="https://cdn.prod.website-files.com/691d92c72b801c04cbc08bec/6926eb443d96d7354dd27bb5_vertora-logo-three.svg"
            whiteLogo="https://cdn.prod.website-files.com/691d92c72b801c04cbc08bec/6926ebbae36cab0af7f260b7_Group%201597885230.svg"
            alt="GlobalBank"
          />
          <PartnerCard
            blackLogo="https://cdn.prod.website-files.com/691d92c72b801c04cbc08bec/6926eb443c8e1731c49fcf92_vertora-logo-four.svg"
            whiteLogo="https://cdn.prod.website-files.com/691d92c72b801c04cbc08bec/6926ebba6394c2234a85db42_496e953c3958d74a9952e7be87d0e0ae_Group%201597885229.webp"
            alt="GlobalBank"
          />
        </div>
      </div>
    </div>
  );
};

export default Partners;
