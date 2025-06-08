import Image from "next/image";
import "@/app/globals.css";
import styles from "./PerfectFor.module.css";

import useCaseOne from "../../../assets/roommates.png";
import useCaseTwo from "../../../assets/grouptrips.png";
import useCaseThree from "../../../assets/office-teams.png";
import useCaseFour from "../../../assets/families.png";

const PerfectFor = () => {
  return (
    <section className={styles.section}>
      <section className="container">
        <div className={styles.perfectFor}>
          <h2 className={styles.sectionTitle}>Perfect For</h2>
          <p className={styles.sectionSubtitle}>
            SAMIE is versatile enough to handle expenses for any group
            situation.
          </p>
        </div>
        <div className={styles.useCases}>
          <div className={styles.useCase}>
            <Image
              className={styles.useCaseImage}
              src={useCaseOne}
              alt="Use case"
              priority
            />
            <h3>Roommates</h3>
            <p>Split rent, utilities, and groceries without spreadsheets.</p>
          </div>

          <div className={styles.useCase}>
            <Image
              className={styles.useCaseImage}
              src={useCaseTwo}
              alt="Use case"
              priority
            />
            <h3>Group Trips</h3>
            <p>Track flights, hotels, and meals.</p>
          </div>

          <div className={styles.useCase}>
            <Image
              className={styles.useCaseImage}
              src={useCaseThree}
              alt="Use case"
              priority
            />
            <h3>Offices/Teams</h3>
            <p>Collect for group lunches, gifts, or supplies seamlessly.</p>
          </div>

          <div className={styles.useCase}>
            <Image
              className={styles.useCaseImage}
              src={useCaseFour}
              alt="Use case"
              priority
            />
            <h3>Families with shared expenses</h3>
            <p>Collect for family lunches, gifts, or supplies seamlessly.</p>
          </div>
        </div>
      </section>
    </section>
  );
};
export default PerfectFor;
