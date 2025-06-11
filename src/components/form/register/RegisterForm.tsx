"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Overlay, TermsLink } from "@/components/ui";
import { EyeClose, EyeOpen, UploadIcon } from "@/components/icons";
import "@/app/globals.css";
import styles from "./RegisterForm.module.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      // Handle the file upload here
      console.log("Selected file:", e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your signup logic here
  };

  return (
    <>
      <Overlay>
        <section className="container">
          <section className={styles.overlay}></section>
          <section className={styles.content}>
            <div className={styles.leftContent}>
              <Image
                src="/images/samie-white.png"
                alt="Samie Logo"
                width={120}
                height={10}
                className={styles.logo}
              />
              <div className={styles.leftContentDetails}>
                <p className={styles.title}>
                  The simple and secure way to split any bill and settle
                  instantly
                </p>
                <button>Learn More</button>
              </div>
            </div>
            <div className={styles.rightContent}>
              <div className={styles.header}>
                <p className={styles.signup}>Sign up</p>
                <p className={styles.signin}>
                  <Link href="/auth/login">Sign in</Link>
                </p>
                <p className={styles.description}>
                  Enter your details below to create your account
                </p>
              </div>

              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.inputGroup}>
                  <label htmlFor="fullName" className={styles.label}>
                    Full name
                  </label>
                  <div className={styles.nameInputContainer}>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      placeholder="Enter your full name"
                      className={styles.input}
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                    <button
                      type="button"
                      className={styles.uploadButton}
                      onClick={() => fileInputRef.current?.click()}
                      aria-label="Upload profile picture"
                    >
                      <UploadIcon />
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        accept="image/*"
                        className={styles.fileInput}
                      />
                    </button>
                  </div>
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="email" className={styles.label}>
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email address"
                    className={styles.input}
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="phone" className={styles.label}>
                    Phone number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Enter your phone number"
                    className={styles.input}
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="password" className={styles.label}>
                    Password
                  </label>
                  <div className={styles.passwordContainer}>
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      placeholder="Enter your password"
                      className={styles.input}
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                    <button
                      type="button"
                      className={styles.toggleButton}
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
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
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      aria-label={
                        showConfirmPassword ? "Hide password" : "Show password"
                      }
                    >
                      {showConfirmPassword ? <EyeClose /> : <EyeOpen />}
                    </button>
                  </div>
                </div>

                <button type="submit" className={styles.submitButton}>
                  <Link href="/auth/login"> Sign up</Link>
                </button>

                <p className={styles.terms}>
                  <input type="radio" name="terms" id="" /> By signing up, you
                  have agreed with the <TermsLink />
                </p>
              </form>
            </div>
          </section>
        </section>
      </Overlay>
    </>
  );
};
export default SignUp;
