import ServiceItem from "../service-item";
import TalkButton from "../talk-button";
import Navbar from "../Navbar";

const HeroSection = () => {
  return (
    <div className="mt-5 mx-[0.95rem]">
      <div className="relative h-auto lg:h-[110vh] bg-black rounded-4xl overflow-hidden">
        <div className="px-2 w-full lg:px-3.75 pt-[0.2rem] h-20 border-b border-white/20 absolute z-99">
          <Navbar />
        </div>

        <div className="absolute blur-[13rem] bg-[#fc964c] w-full max-w-231.25 h-231.25 top-[-26.9rem] -right-146 rounded-full transform-gpu will-change-transform"></div>
        <div className="absolute blur-[13rem] bg-[#f02508] w-full max-w-231.25 h-231.25 top-[-46.1rem] right-1/2 rounded-full transform translate-x-1/2 transform-gpu will-change-transform"></div>
        <div className=" absolute bottom-0 -left-[30%] w-full max-w-150 h-150 bg-[#9c3918] blur-[13rem] rounded-full transform-gpu will-change-transform"></div>
        <div className="relative w-full h-full px-4">
          <div className="relative w-full h-full flex flex-col pt-28 pb-8 lg:pt-20 gap-6 justify-between items-center z-8">
            <div></div>
            <div className="flex flex-col">
              <h1 className="leading-none tracking-[-0.1rem] lg:tracking-[-0.4rem] text-white font-semibold text-[clamp(2.5rem,10vw,13.75rem)]">
                Elevate Your
              </h1>

              <h1 className="leading-none tracking-[-0.1rem] lg:tracking-[-0.4rem] text-white font-semibold text-[clamp(2.5rem,10vw,13.75rem)] pl-[20vw]">
                Brand Reach
              </h1>
            </div>
            <div className="flex flex-col gap-6 lg:flex-row w-full justify-between items-center">
              <div className="flex items-start md:items-center lg:items-start justify-end flex-col h-full gap-8 flex-2">
                <p className="text-white max-w-120 leading-relaxed font-normal text-[1rem]">
                  We blends creativity with technical expertise to craft
                  experiences that captivate audiences, communicate your brand
                  message.
                </p>
                <TalkButton className="w-fit" />
              </div>
              <div className="w-full lg:max-w-[18rem] flex flex-col flex-1 gap-6 text-white">
                <ServiceItem title="Web Design" />
                <ServiceItem title="Digital Marketing" />
                <ServiceItem title="Brand Identity" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-20 w-full max-w-364 h-full flex justify-between items-stretch">
          <div className="w-px h-full bg-white/15" />
          <div className="w-px h-full bg-white/15" />
          <div className="w-px h-full bg-white/15" />
          <div className="w-px h-full bg-white/15" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
