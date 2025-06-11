import Image from "next/image";
import Link from "next/link";
import "@/app/globals.css";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <section className="container">
        <nav className={styles.navbar}>
          <div className={styles.logo}>
            <Image src="/images/logo.png" width={100} height={10} alt="logo" />
          </div>
          <ul className={styles.navLinks}>
            <li>
              <Link href="/">About Us</Link>
            </li>
            <li>
              <Link href="/">Contact Us</Link>
            </li>
            <li>
              <Link href="/auth/login">Log In</Link>
            </li>
            <li className={styles.signup}>
              <Link href="/auth/register">Sign Up</Link>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
};
export default Navbar;
