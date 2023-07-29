import { CSSProperties, ReactNode } from "react";

export interface EventProps {
  date?: string;
  text?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export function Event({ date, text, className = "", style }: EventProps) {
  return (
    <div className={`event ${className}`} style={style}>
      <div className="row">
        <div className="circle" />
        <div className="date">{date}</div>
      </div>
      <div className="row">
        <Line />
        <div className="text">{text}</div>
      </div>
    </div>
  );
}

function Line() {
  return (
    <div className="line-container">
      <div className="line" />
    </div>
  );
}
