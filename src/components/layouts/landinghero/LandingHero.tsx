import styles from "../../../app/landing/Landing.module.css";
import Image from "next/image";

const LandingHero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <h1 className={styles.heading}>
          Split bills. <br /> Share expenses. <br /> Stay friends.
        </h1>
        <p className={styles.subtext}>
          Samie helps you settle group expenses seamlessly without awkward
          reminders.
        </p>
        <button className={styles.cta}>Get Started</button>
      </div>
      <div className={styles.right}>
        <Image
          src="/images/hero-img.png"
          alt="Phone App Preview"
          width={300}
          height={600}
          className={styles.phone}
        />
      </div>
    </section>
  );
};

export default LandingHero;
