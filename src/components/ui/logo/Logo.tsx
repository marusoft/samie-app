import Image from "next/image";
import Link from "next/link";
import styles from "./Logo.module.css";

type LogoProps = {
  className?: string;
  onClick?: () => void;
};


const Logo = ({ className, onClick }: LogoProps) => {
  return (
    <Link href="/" className={styles.logo}>
      <Image
        className={className}
        onClick={onClick}
        src="/images/logo.png"
        width={100}
        height={10}
        alt="logo"
      />
    </Link>
  );
};
export default Logo;
