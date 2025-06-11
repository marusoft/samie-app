"use client";

import { useState } from "react";
import styles from "./VerifyOtpForm.module.css";
import Link from "next/link";
import Image from "next/image";

const VerifyOtpForm = () => {
  // In a real app, you would manage the verification code state here
  const [isLoading, setIsLoading] = useState(false);
  const [code, setCode] = useState(["", "", "", ""]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Sending OTP to:", code);
      // Add your actual OTP sending logic here
    } catch (error) {
      console.error("OTP sending failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className={styles.logo}>
        <Link href="/">
          <Image src="/images/logo.png" width={100} height={10} alt="logo" />
        </Link>
      </div>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Verification</h2>

          <p className={styles.description}>
            A four (4) digit verification code has been sent to
            support@kura.com, make sure to check your mail inbox, spam or junk
            for OTP verification code.{" "}
            <Link className={styles.changeEmail} href="/">
              Change Email
            </Link>
          </p>
        </div>

        <div className={styles.formContainer}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <div className={styles.otpContainer}>
                {[0, 1, 2, 3].map((index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength={1}
                    placeholder=""
                    className={styles.otpInput}
                    value={code[index]}
                    onChange={(e) => {
                      const newCode = [...code];
                      newCode[index] = e.target.value;
                      setCode(newCode);
                    }}
                  />
                ))}
              </div>
            </div>
            <button
              type="submit"
              className={styles.submitButton}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span className={styles.loadingSpinner} />
                  Signing in...
                </>
              ) : (
                <Link href="/resetpassword">Verify</Link>
              )}
            </button>
          </form>

          <Link
            href="/auth/register"
            className={styles.signupButton}
            tabIndex={isLoading ? -1 : 0}
          >
            Resend
          </Link>
        </div>
      </div>
    </>
  );
};
export default VerifyOtpForm;
