import Image from "next/image";
import "@/app/globals.css";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className={styles.section}>
      <section className="container">
        <section className={styles.hero}>
          <div className={styles.heroLeft}>
            <h1>
              Split Bills & Expenses{" "}
              <span className={styles.emphasis}>Effortlessly.</span>
            </h1>
            <div className={styles.ctas}>
              <button className={styles.primary}>Get Started</button>
              <button className={styles.secondary}>How it Works</button>
            </div>
          </div>
          <div className={styles.heroRight}>
            <Image
              src="/images/hero-image.png"
              alt="Friends"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className={styles.heroImage}
            />
          </div>
        </section>
      </section>
    </section>
  );
};
export default HeroSection;
