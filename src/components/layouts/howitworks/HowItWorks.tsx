import Image from "next/image";
import "@/app/globals.css";
import styles from "./HowItWorks.module.css";

import stepImageOne from "../../../assets/dashbaord.png";
import stepImageTwo from "../../../assets/group.png";
import stepImageThree from "../../../assets/view.png";
import stepImageFour from "../../../assets/notification.png";

const HowItWorks = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.sectionTitle}>How SAMIE Works</h2>

        <div className={styles.stepsContainer}>
          {/* Step 1 */}
          <div className={styles.step}>
            <div className={styles.stepIconContainer}>
              <div className={styles.circleBackground}></div>
              <Image
                src={stepImageOne}
                alt="Create account icon"
                className={styles.stepIcon}
                width={400}
                height={400}
              />
            </div>
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
            <div className={styles.stepIconContainer}>
              <div className={styles.circleBackground}></div>
              <Image
                src={stepImageTwo}
                alt="Create/Join group icon"
                className={styles.stepIcon}
                width={400}
                height={400}
              />
            </div>
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
            <div className={styles.stepIconContainer}>
              <div className={styles.circleBackground}></div>
              <Image
                src={stepImageThree}
                alt="Split expenses icon"
                className={styles.stepIcon}
                width={400}
                height={400}
              />
            </div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>Login & Split Expenses</h3>
              <p className={styles.stepDescription}>
                Add later, split quality or examples the options. LARGE data
                into reads.
              </p>
              <button className={styles.stepButton}>Get started</button>
            </div>
          </div>
          {/* Step 4 */}
          <div className={styles.step}>
            <div className={styles.stepIconContainer}>
              <div className={styles.circleBackground}></div>
              <Image
                src={stepImageFour}
                alt="Split expenses icon"
                className={styles.stepIcon}
                width={400}
                height={400}
              />
            </div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>Settle Instantly</h3>
              <p className={styles.stepDescription}>
                SAMIE handles the rest with auto-debits.
              </p>
              <button className={styles.stepButton}>Get started</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HowItWorks;
