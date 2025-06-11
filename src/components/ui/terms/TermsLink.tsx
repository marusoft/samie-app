import Link from "next/link"
import styles from "../../form/register/RegisterForm.module.css"

const TermsLink = () => {
  return (
    <>
      <Link href="/terms" className={styles.termsLink}>
        Samie Terms and Conditions
      </Link>
      {" & "}
      <Link href="/privacy" className={styles.termsLink}>
        Privacy Policy
      </Link>
    </>
  );
}
export default TermsLink