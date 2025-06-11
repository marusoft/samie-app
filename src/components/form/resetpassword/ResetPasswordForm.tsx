"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { EyeClose, EyeOpen } from "@/components/icons";
import styles from "./ResetPasswordForm.module.css";

const ResetPasswordForm = () => {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  // const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your signup logic here
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
          <h2 className={styles.title}>Reset Password</h2>
          <p className={styles.description}>
            Enter your preferred password below
          </p>
        </div>

        <div className={styles.formContainer}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <label htmlFor="password" className={styles.label}>
                New Password
              </label>
              <div className={styles.passwordContainer}>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Enter your new password"
                  className={styles.input}
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  className={styles.toggleButton}
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeClose /> : <EyeOpen />}
                </button>
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="confirmPassword" className={styles.label}>
                Confirm Password
              </label>
              <div className={styles.passwordContainer}>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Re-enter your password"
                  className={styles.input}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  className={styles.toggleButton}
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  aria-label={
                    showConfirmPassword ? "Hide password" : "Show password"
                  }
                >
                  {showConfirmPassword ? <EyeClose /> : <EyeOpen />}
                </button>
              </div>
            </div>

            <button type="submit" className={styles.submitButton}>
              <Link href="/auth/login"> Reset</Link>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default ResetPasswordForm;
