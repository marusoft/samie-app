"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { EyeClose, EyeOpen } from "@/components/icons";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Signing in with:", { email, password });
      // Add your actual authentication logic here
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className={styles.logo}>
        <Image src="/images/logo.png" width={100} height={10} alt="logo" />
      </div>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Sign in</h2>
          <p className={styles.description}>
            Enter your details below to sign into your <br /> account
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

            <div className={styles.inputGroup}>
              <label htmlFor="password" className={styles.label}>
                Password
              </label>
              <div className={styles.passwordInputContainer}>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className={styles.input}
                  disabled={isLoading}
                />
                <button
                  type="button"
                  className={styles.eyeToggle}
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  disabled={isLoading}
                >
                  {showPassword ? <EyeClose /> : <EyeOpen />}
                </button>
              </div>
            </div>

            <div className={styles.forgotPassword}>
              <Link
                href="/forgot-password"
                className={styles.forgotPasswordLink}
              >
                Forgotten Password?
              </Link>
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
                <Link href="/updateprofile">Sign in</Link>
              )}
            </button>
          </form>

          <div className={styles.divider}>
            <span className={styles.dividerText}>or</span>
          </div>

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
export default LoginForm;
