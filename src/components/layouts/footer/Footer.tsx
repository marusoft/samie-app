import Image from "next/image";
import "@/app/globals.css";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerTop}>
          <div className={styles.brandSection}>
            <Image
              src="/images/logo.png"
              width={100}
              height={10}
              alt="logo"
              className={styles.brandImage}
            />
            <p className={styles.brandDescription}>
              Samie's mission is to be that intuitive platform for effortlessly
              managing and settling shared expenses, fostering transparency and
              harmony in social and professional financial interactions, our
              products helps you to split bills seamlessly and securely. How can
              we help you today?
            </p>
          </div>

          <div className={styles.linksSection}>
            <div className={styles.linksColumn}>
              <h3 className={styles.columnTitle}>WHY SAME</h3>
              <ul className={styles.linksList}>
                {/* Empty column as per design */}
              </ul>
            </div>

            <div className={styles.linksColumn}>
              <h3 className={styles.columnTitle}>COMPANY</h3>
              <ul className={styles.linksList}>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">FAQs</a>
                </li>
                <li>
                  <a href="#">Testimonials</a>
                </li>
                <li>
                  <a href="#">Our Partners</a>
                </li>
              </ul>
            </div>

            <div className={styles.linksColumn}>
              <h3 className={styles.columnTitle}>GET IN TOUCH</h3>
              <ul className={styles.linksList}>
                <li>
                  <a href="mailto:info@sammie.com">info@sammie.com</a>
                </li>
                <li>
                  <a href="tel:+234xxxxxxxxx">+234 xxx xxx xxxx</a>
                </li>
                <li>
                  <a href="tel:+234xxxxxxxxx">+234 xxx xxx xxxx</a>
                </li>
                <li>Tech Nexus Platform, Nigeria.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.copyright}>© Samie 2025</div>
          <div className={styles.legalLinks}>
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
