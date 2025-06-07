import Image from "next/image";
import styles from "./HowItWorks.module.css"

const HowItWorks = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>How SAME Works</h2>

        <div className={styles.stepsContainer}>
          {/* Step 1 */}
          <div className={styles.step}>
            <div className={styles.stepNumber}>1</div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>Create an account</h3>
              <p className={styles.stepDescription}>
                Sign up with your name, email, and phone numbers.
              </p>
              <button className={styles.stepButton}>Get Started</button>
            </div>
          </div>

          {/* Step 2 */}
          <div className={styles.step}>
            <div className={styles.stepNumber}>2</div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>Create/Join a group</h3>
              <p className={styles.stepDescription}>
                Add more apps, friends, family members or executives
              </p>
              <button className={styles.stepButton}>Get started</button>
            </div>
          </div>

          {/* Step 3 */}
          <div className={styles.step}>
            <div className={styles.stepNumber}>3</div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>Login & Split Expenses</h3>
              <p className={styles.stepDescription}>
                Add later, split quality or examples the options. LARGE data
                into reads.
              </p>
              <button className={styles.stepButton}>Get started</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default HowItWorks