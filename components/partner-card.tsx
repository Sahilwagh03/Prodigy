import { cn } from "@/lib/utils";
import Image from "next/image";

interface PartnerCardProps {
  blackLogo?: string;
  whiteLogo?: string;
  blackText?: string;
  whiteText?: string;
  alt?: string;
  className?: string;
}

const PartnerCard = ({
  blackLogo,
  whiteLogo,
  blackText,
  whiteText,
  alt = "partner-logo",
  className,
}: PartnerCardProps) => {
  return (
    <div
      className={cn(
        "group relative bg-white hover:bg-black transition-[background-color,transform,opacity] duration-500 flex justify-center items-center py-12 px-8 rounded-[1.25rem] cursor-pointer partner-card",
        className
      )}
    >
      <div className="relative overflow-hidden h-9 min-w-[120px] flex items-center justify-center">
        
        {/* Black Content */}
        <div className="absolute transition-transform duration-500 ease-in-out group-hover:-translate-y-full flex items-center justify-center">
          {blackLogo ? (
            <Image
              src={blackLogo}
              alt={alt}
              width={120}
              height={24}
              className="object-contain"
            />
          ) : (
            <span className="text-black font-semibold text-xl whitespace-nowrap">
              {blackText}
            </span>
          )}
        </div>

        {/* White Content */}
        <div className="absolute translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0 flex items-center justify-center">
          {whiteLogo ? (
            <Image
              src={whiteLogo}
              alt={alt}
              width={120}
              height={24}
              className="object-contain"
            />
          ) : (
            <span className="text-white font-semibold text-xl whitespace-nowrap">
              {whiteText}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default PartnerCard;