import React from "react";

const AboutBento = () => {
  return (
    <section className="bg-[url(/dotted-bg.webp)] bg-cover bg-center bg-no-repeat py-8 lg:py-28">
      <div className="max-w-340 mx-auto px-4 flex flex-col items-center gap-8 lg:gap-12">
        
        {/* Heading */}
        <div className="max-w-2xl text-center">
          <h3 className="text-[clamp(1.6rem,3vw,2.5rem)] leading-tight tracking-[-.05rem] font-semibold">
            Crafting unique strategies that turn visions into powerful results
          </h3>
        </div>

        {/* Grid */}
        {/* <div className="grid w-full gap-2 grid-cols-[1fr_1fr_2fr]">
          
          <div className="bg-red-200 rounded-xl min-h-100"></div>

          <div className="bg-green-200 rounded-xl min-h-100"></div>

          <div className="bg-amber-200 rounded-xl min-h-100"></div>

        </div> */}

      </div>
    </section>
  );
};

export default AboutBento;