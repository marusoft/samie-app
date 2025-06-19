"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { VscMenu, VscChromeClose } from "react-icons/vsc";
import "@/app/globals.css";
import styles from "./Navbar.module.css";
import { Logo } from "@/components/ui";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Close mobile menu when clicking on a link
  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.navbarContainer}`}>
        {/* Logo */}
        <Logo onClick={closeMobileMenu} />

        {/* Desktop Navigation */}
        <div className={styles.navLinks}>
          <Link href="/about" className={styles.navLink}>
            About Us
          </Link>
          <Link href="/contact" className={styles.navLink}>
            Contact Us
          </Link>
          <Link href="/auth/login" className={styles.navLink}>
            Log in
          </Link>
          <Link
            href="/auth/register"
            className={`${styles.navLink} ${styles.signUp}`}
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={styles.menuButton}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <VscChromeClose className={styles.menuIcon} />
          ) : (
            <VscMenu className={styles.menuIcon} />
          )}
        </button>

        {/* Mobile Navigation */}
        <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ""}`}>
          <Link
            href="/about"
            className={styles.mobileLink}
            onClick={closeMobileMenu}
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className={styles.mobileLink}
            onClick={closeMobileMenu}
          >
            Contact Us
          </Link>
          <Link
            href="/auth/login"
            className={styles.mobileLink}
            onClick={closeMobileMenu}
          >
            Log in
          </Link>
          <Link
            href="/auth/register"
            className={`${styles.mobileLink} ${styles.signUpMobile}`}
            onClick={closeMobileMenu}
          >
            Sign up
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
