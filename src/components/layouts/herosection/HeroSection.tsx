import Image from "next/image";
import "@/app/globals.css";
import styles from "./HeroSection.module.css";
import Link from "next/link";

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
              <button className={styles.primary}>
                <Link href="/auth/register" >Get Started</Link>
              </button>
              <button className={styles.secondary}>How it Works</button>
            </div>
          </div>
          <div className={styles.heroRight}>
            <Image
              src="/images/hero-image-one.png"
              alt="Friends"
              width={600}
              height={400}
              sizes="(max-width: 768px) 100vw, 33vw"
              className={styles.heroImageOne}
            />
            <div className={styles.heroOther}>
              <Image
                src="/images/hero-image-two.png"
                alt="Friends"
                width={600}
                height={400}
                sizes="(max-width: 768px) 100vw, 33vw"
                className={styles.heroImageTwo}
              />
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};
export default HeroSection;
