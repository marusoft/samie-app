import Image from "next/image";
import styles from "./Overlay.module.css";

type overlayProps = {
  children: React.ReactNode;
  className?: string;
};



const Overlay = ({ children, className }: overlayProps) => {
  return (
    <div className={styles.wrapper}>
      <Image
        src="/images/splash.png"
        alt="Group of friends using phones"
        fill
        className={styles.bgImage}
      />
      <div className={className}>{children}</div>
    </div>
  );
};
export default Overlay;
