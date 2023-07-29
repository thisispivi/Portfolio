import { PropsWithChildren } from "react";

export interface SectionProps extends PropsWithChildren {
  backgroundColor?: string;
  className?: string;
}

export default function Section({
  backgroundColor = "",
  className = "",
  children,
}: SectionProps) {
  return (
    <div
      className={`section ${className}`}
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      {children}
    </div>
  );
}
