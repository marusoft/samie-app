"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { Logo, TermsLink } from "@/components/ui";
import { EyeClose, EyeOpen, UploadIcon } from "@/components/icons";
import "@/app/globals.css";
import styles from "./RegisterForm.module.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
    bvn: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    // confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  // const [showConfirmPassword, setShowConfirmPassword] = useState(false);
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
      <section className="container">
        <section className={styles.content}>
          <Logo className={styles.logo} />
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
                <label htmlFor="bvn" className={styles.label}>
                  BVN
                </label>
                <input
                  type="text"
                  id="bvn"
                  name="bvn"
                  placeholder="Enter your BVN"
                  className={styles.input}
                  value={formData.bvn}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="cardNumber" className={styles.label}>
                  Card Number
                </label>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  placeholder="Enter your Card Number"
                  className={styles.input}
                  value={formData.cardNumber}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.twoInputs}>
                <div className={styles.inputGroup}>
                  {/* <label htmlFor="expiryDate" className={styles.label}>
                    Card Number
                  </label> */}
                  <input
                    type="text"
                    id="expiryDate"
                    name="expiryDate"
                    placeholder="Expiry Date (MM/YY)"
                    className={styles.input}
                    value={formData.expiryDate}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.inputGroup}>
                  {/* <label htmlFor="cardNumber" className={styles.label}>
                    Card Number
                  </label> */}
                  <input
                    type="number"
                    id="cvv"
                    name="cvv"
                    placeholder="cvv"
                    className={styles.input}
                    value={formData.cvv}
                    onChange={handleChange}
                    required
                  />
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
    </>
  );
};
export default SignUp;
