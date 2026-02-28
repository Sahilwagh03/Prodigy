import React from "react";

export interface TalkButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  showIndicator?: boolean;
  dotClassName?: string;
}

const TalkButton: React.FC<TalkButtonProps> = ({
  label = "Let's talk",
  showIndicator = true,
  className = "",
  dotClassName="bg-[#fc964c]",
  ...props
}) => {
  return (
    <button
      className={`inline-flex cursor-pointer items-center gap-3 px-6 py-2 rounded-full bg-[#EDEDED] text-black font-semibold transition-all duration-200 hover:bg-[#E2E2E2] active:scale-[0.98] ${className}`}
      {...props}
    >
      <span>{label}</span>

      {showIndicator && <span className={`w-2.5 h-2.5 rounded-full ${dotClassName}`} />}
    </button>
  );
};

export default TalkButton;
