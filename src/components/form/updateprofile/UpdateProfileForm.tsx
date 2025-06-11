"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./UpdateProfile.module.css";

const UpdateProfileForm = () => {
  const [formData, setFormData] = useState({
    fullName: "Sylvester Ben",
    email: "sylvesterben@gmail.com",
    phone: "+234 812 436 4453",
    accountNumber: "",
    bankName: "",
    bvn: "",
  });

  const banks = [
    "Select your bank",
    "Access Bank",
    "First Bank",
    "Guaranty Trust Bank",
    "Zenith Bank",
    "United Bank for Africa",
    "Stanbic IBTC Bank",
    "Fidelity Bank",
    "Union Bank",
    "Ecobank",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Profile updated:", formData);
    // Add your profile update logic here
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
          <p className={styles.title}>UPDATE YOUR PROFILE</p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.fieldGroup}>
            <label className={styles.label}>Full name</label>
            <div className={styles.value}>{formData.fullName}</div>
          </div>

          <div className={styles.fieldGroup}>
            <label className={styles.label}>Email address</label>
            <div className={styles.value}>{formData.email}</div>
          </div>

          <div className={styles.fieldGroup}>
            <label className={styles.label}>Phone Number</label>
            <div className={styles.value}>{formData.phone}</div>
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="accountNumber" className={styles.label}>
              Account Number (to be debited for all transaction)
            </label>
            <input
              type="text"
              id="accountNumber"
              name="accountNumber"
              placeholder="Enter your account number"
              className={styles.input}
              value={formData.accountNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="bankName" className={styles.label}>
              Bank Name
            </label>
            <select
              id="bankName"
              name="bankName"
              className={styles.select}
              value={formData.bankName}
              onChange={handleChange}
              required
            >
              {banks.map((bank) => (
                <option key={bank} value={bank}>
                  {bank}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="bvn" className={styles.label}>
              BVN
            </label>
            <input
              type="text"
              id="bvn"
              name="bvn"
              placeholder="Enter your BVN Number"
              className={styles.input}
              value={formData.bvn}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className={styles.submitButton}>
            <Link href="/dashboard"> Update Profile</Link>
          </button>
        </form>
      </div>
    </>
  );
};
export default UpdateProfileForm;
