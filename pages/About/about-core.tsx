const AboutCore = () => {
  return (
    <section className="h-auto bg-cover py-8 lg:py-28 bg-no-repeat bg-position-[50%] bg-[url(/dotted-bg.webp)]">
      <div className="max-w-340 mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
          <h6 className="lg:w-[45%] text-[0.8rem] leading-[1.75] tracking-[.0675rem] font-semibold uppercase">
            Our Core
          </h6>

          <p className="lg:w-[55%] max-w-275 text-[clamp(1.6rem,3vw,2.5rem)] leading-tight tracking-[-.075rem] font-semibold">
            We transform ideas into meaningful design experiences, blending
            creativity, innovation, and precision to craft brands that
            communicate clearly and connect with people.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutCore;
