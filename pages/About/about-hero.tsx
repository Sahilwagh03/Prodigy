import Image from "next/image";

const AboutHeroSection = () => {
  return (
    <section className="w-full h-screen flex items-center justify-center px-4 bg-neutral-100">
      <div className="grid grid-cols-[0.25fr_1fr_0.25fr] w-full items-center">

        <div className="font-semibold uppercase text-sm tracking-wider">
          Since 2010
        </div>

        <div className="relative flex justify-center items-center">

          {/* IMAGE 1 */}
          <div className="absolute -top-16 left-28 w-60 h-40 rounded-2xl overflow-hidden z-10">
            <Image
              src="https://images.unsplash.com/photo-1680536663869-019bd6ec9fec"
              alt="product"
              fill
              className="object-cover"
            />
          </div>

          <div className="absolute -top-16 -right-10 w-60 h-40 rounded-2xl overflow-hidden z-10">
            <Image
              src="https://images.unsplash.com/photo-1707836868495-3307d371aba4"
              alt="chair"
              fill
              className="object-cover"
            />
          </div>

          <div className="absolute -bottom-20 right-14 w-60 h-40 rounded-2xl overflow-hidden z-10">
            <Image
              src="https://images.unsplash.com/photo-1697301439949-798044084e15"
              alt="portrait"
              fill
              className="object-cover"
            />
          </div>

          {/* TEXT */}
          <h1 className="relative z-20 text-center text-[clamp(3rem,10vw,14rem)] font-semibold leading-none tracking-[-0.4rem] text-white mix-blend-difference">
            <div>About</div>
            <div>Prodigy</div>
          </h1>

        </div>

        <div className="font-semibold uppercase text-sm tracking-wider text-right">
          Mumbai
        </div>

      </div>
    </section>
  );
};

export default AboutHeroSection;