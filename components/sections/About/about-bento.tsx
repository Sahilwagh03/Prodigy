import Image from "next/image";
import { Plus, Play } from "lucide-react";
import React from "react";

const AboutBento = () => {
  return (
    <section className="bg-[url(/dotted-bg.webp)] bg-cover bg-center bg-no-repeat py-8 lg:py-28">
      <div className="max-w-340 mx-auto px-4 flex flex-col items-center gap-12">
        {/* Heading */}
        <div className="max-w-2xl text-center">
          <h3 className="text-[clamp(1.6rem,3vw,2.5rem)] leading-tight tracking-[-.05rem] font-semibold">
            Crafting unique strategies that turn visions into powerful results
          </h3>
        </div>

        {/* Grid */}
        <div className="grid w-full gap-4 grid-cols-1 lg:grid-cols-[1fr_1fr_2fr]">
          {/* Card 1 */}
          <div className="relative bg-black text-white rounded-2xl p-6 flex flex-col justify-between min-h-120">
            <button className="absolute top-2 right-2 bg-white text-black rounded-full w-6 h-6 flex items-center justify-center">
              <Plus size={14} />
            </button>

            <Image
              src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=600"
              alt="pattern"
              width={120}
              height={120}
              className="rounded-xl"
            />

            <div className="space-y-3">
              <h4 className="text-xl font-semibold">Market research</h4>

              <p className="text-neutral-300 text-sm leading-relaxed">
                We work closely to turn your goals into digital experiences that
                combine strategy, design and technology.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative bg-white rounded-2xl p-6 flex flex-col justify-between min-h-120">
            <button className="absolute top-2 right-2 bg-black text-white rounded-full w-6 h-6 flex items-center justify-center">
              <Plus size={14} />
            </button>

            <div className="space-y-4">
              <h2 className="text-5xl font-bold">100%</h2>
              <p className="font-medium">Satisfied client</p>

              <p className="text-gray-500 text-sm leading-relaxed">
                A seamless process with a polished, fast and easy-to-manage
                result.
              </p>
            </div>

            <div className="flex -space-x-6">
              {[
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200",
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200",
                "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
                "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200",
              ].map((src, i) => (
                <div
                  key={i}
                  className="relative w-14 h-14 rounded-full overflow-hidden border-6 border-white"
                >
                  <Image src={src} alt="avatar" fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative rounded-2xl overflow-hidden min-h-120">
            <Image
              src="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1600"
              alt="futuristic neon cube"
              fill
              className="object-cover"
            />

            <button className="absolute top-2 right-2 bg-white text-black rounded-full w-6 h-6 flex items-center justify-center">
              <Plus size={14} />
            </button>

            {/* text */}
            <div className="absolute bottom-8 left-8 max-w-sm text-white">
              <h3 className="text-3xl font-semibold leading-snug">
                Our strategy meets bold creativity
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBento;
