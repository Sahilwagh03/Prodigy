import Image from "next/image";
import BentoGrid from "../bentogrid";

const Testimonial = () => {
  return (
    <section className="h-auto bg-cover pt-8 lg:pt-28 bg-no-repeat bg-position-[50%] bg-[url(/dotted-bg.webp)]">
      <div className="w-full h-full px-4">
        <div className="flex flex-col gap-7">
          <div className="w-full h-full max-w-lg text-center mx-auto">
            <h2 className="text-[2rem] lg:text-[2.5rem] font-semibold leading-tight tracking-[-.075rem]">
              Designs That Deliver. Clients That Trust.
            </h2>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex lg:flex-row justify-between bg-white py-10 px-7.5 rounded-3xl">
              <div className="max-w-76 text-[1.4rem] font-semibold tracking-[-.045rem] leading-[1.41]">
                Driving growth with strategies tailored for success
              </div>
              <div className="flex items-center gap-10">
                <div className="text-[clamp(2.1rem,5vw,3.75rem)] font-semibold leading-[clamp(2.1rem,5vw,3.75rem)]">
                  85%
                </div>
                <p className="max-w-44">
                  Analyze and monitor business reporting data
                </p>
              </div>
              <div className="flex items-center gap-10">
                <div className="text-[clamp(2.1rem,5vw,3.75rem)] font-semibold leading-[clamp(2.1rem,5vw,3.75rem)]">
                  4.5
                </div>
                <div className="flex flex-col justify-between h-full">
                  <Image src='https://cdn.prod.website-files.com/691d92c72b801c04cbc08bec/6927de76d882941441c645cc_stars%20(3).svg' alt="Stars" width={100} height={20}/>
                  <p>Top rated company</p>
                </div>
              </div>
            </div>
            <BentoGrid/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
