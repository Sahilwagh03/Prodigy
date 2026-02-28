import Image from "next/image";

interface PartnerCardProps {
  blackLogo: string;
  whiteLogo: string;
  alt: string;
}

const PartnerCard = ({ blackLogo, whiteLogo, alt }: PartnerCardProps) => {
  return (
    <div className="group relative bg-white hover:bg-black transition-all duration-500 flex justify-center items-center py-12 px-8 rounded-[1.25rem] cursor-pointer">

      <div className="relative overflow-hidden h-9 w-30 flex items-center justify-center">

        <Image
          src={blackLogo}
          alt={alt}
          width={120}
          height={24}
          className="absolute transition-transform duration-500 ease-in-out group-hover:-translate-y-full"
        />

        {/* White Logo */}
        <Image
          src={whiteLogo}
          alt={alt}
          width={120}
          height={24}
          className="absolute translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0"
        />

      </div>
    </div>
  );
};

export default PartnerCard;