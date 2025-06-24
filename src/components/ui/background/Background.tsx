// import Image from "next/image";
// import type { StaticImageData } from "next/image";
// import styles from "./Background.module.css";

type backgroundProps = {
  children: React.ReactNode;
  className?: string;
};

const Background = ({ children, className }: backgroundProps) => {
  return <div className={className}>{children}</div>;
};
export default Background;
