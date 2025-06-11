"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./ForgotPasswordForm.module.css";
import Link from "next/link";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Sending OTP to:", email);
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
          <h2 className={styles.title}>Forgot Password</h2>
          <p className={styles.description}>
            Enter your details registered email address to reset your password
          </p>
        </div>

        <div className={styles.formContainer}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.label}>
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className={styles.input}
              />
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
                <Link href="/verifyotp">Send otp</Link>
              )}
            </button>
          </form>

          <Link
            href="/auth/register"
            className={styles.signupButton}
            tabIndex={isLoading ? -1 : 0}
          >
            Sign up
          </Link>
        </div>
      </div>
    </>
  );
};
export default ForgotPasswordForm;
