import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
  onClick?: () => void;
};


const Logo = ({ className, onClick }: LogoProps) => {
  return (
    <Link href="/" className={className}>
      <Image
        onClick={onClick}
        src="/images/logo.png"
        width={100}
        height={10}
        alt="samie logo"
      />
    </Link>
  );
};
export default Logo;
