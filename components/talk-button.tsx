import React from "react";
import Link from "next/link";

export interface TalkButtonProps extends React.HTMLAttributes<HTMLElement> {
  label?: string;
  showIndicator?: boolean;
  dotClassName?: string;
  href?: string;
}

const TalkButton: React.FC<TalkButtonProps> = ({
  label = "Let's talk",
  showIndicator = true,
  className = "",
  dotClassName="bg-[#fc964c]",
  href,
  ...props
}) => {
  const content = (
    <>
      <span>{label}</span>
      {showIndicator && <span className={`w-2.5 h-2.5 rounded-full ${dotClassName}`} />}
    </>
  );

  const baseClassName = `inline-flex cursor-pointer items-center gap-3 px-6 py-2 rounded-full bg-[#EDEDED] text-black font-semibold transition-all duration-200 hover:bg-[#E2E2E2] active:scale-[0.98] ${className}`;

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("//") || href.startsWith("wa.me");
    if (isExternal) {
      return (
        <a
          href={href}
          className={baseClassName}
          target="_blank"
          rel="noopener noreferrer"
          {...props}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={baseClassName} {...(props as any)}>
        {content}
      </Link>
    );
  }

  return (
    <button
      className={baseClassName}
      {...(props as any)}
    >
      {content}
    </button>
  );
};

export default TalkButton;

