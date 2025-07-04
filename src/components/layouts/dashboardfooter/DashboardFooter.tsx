import styles from "./DashboardFooter.module.css";

const DashboardFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
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
export default DashboardFooter;
