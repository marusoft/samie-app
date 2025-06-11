import Image from "next/image";
import styles from "./Overlay.module.css";


const Overlay = ({ children, className }: any) => {
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
