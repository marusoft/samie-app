"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { EyeClose, EyeOpen } from "@/components/icons";
import { Background, Logo } from "@/components/ui";
import "@/app/globals.css";
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
    <div>
      <Background className={styles.loginBgContainer}>
        <div className={styles.loginBgWrapper}>
          <Image
            src="/images/login-bg.png"
            fill
            alt="login bg"
            className={styles.loginBg}
            priority
            sizes="100vw"
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>
        <Logo className={styles.logo} />
      </Background>

      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>WELCOME BACK!</h2>
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
                href="/forgotpassword"
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
          <p className={styles.createAccount}>
            Don’t have an account?{" "}
            <Link
              href="/auth/register"
              className={styles.createAccountLink}
              tabIndex={isLoading ? -1 : 0}
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default LoginForm;
