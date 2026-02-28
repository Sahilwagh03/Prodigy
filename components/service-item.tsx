import React from "react";
import { ArrowUpRight } from "lucide-react";

interface ServiceItemProps {
  title: string;
  onClick?: () => void;
  className?: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({
  title,
  onClick,
  className = "",
}) => {
  return (
    <div
      onClick={onClick}
      className={`relative pb-4 flex justify-between items-center cursor-pointer group ${className}`}
    >
      {/* Content */}
      <h6 className="text-[1.0625rem] leading-[1.45] tracking-[-0.033rem] font-semibold">
        {title}
      </h6>

      <ArrowUpRight className="w-5 h-5 transition-transform duration-500 ease-out group-hover:translate-x-1 group-hover:-translate-y-1" />

      {/* Base subtle border */}
      <span className="absolute bottom-0 left-0 w-full h-px bg-white/20" />

      {/* Animated sweep line */}
      <span className="absolute bottom-0 left-0 h-[1.5px] w-full bg-white origin-left scale-x-0 transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] group-hover:scale-x-100" />
    </div>
  );
};

export default ServiceItem;