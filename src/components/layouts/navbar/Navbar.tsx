import Image from "next/image";
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
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Log In</li>
            <li className={styles.signup}>Sign Up</li>
          </ul>
        </nav>
      </section>
    </header>
  );
};
export default Navbar;
