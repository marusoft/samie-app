"use client"

import { useState } from "react";
import Image from "next/image";
import { Logo } from "@/components/ui";
import { Sidebar } from "@/components/layouts/index";
import profilePic from "@/assets/profilepic.png";
import "@/app/globals.css";
import styles from "./DashboardHeader.module.css";

const DashboardHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleSidebar = () => {
    setMenuOpen((prev) => !prev);
  };



  return (
    <>
      <header className={styles.headerContainer}>
        <section className="container">
          <section className={styles.header}>
            <div className={styles.sidebarAndLogo}>
              <Sidebar
                open={menuOpen}
                // setOpen={setMenuOpen}
                toggleSidebar={toggleSidebar}
              />
              <Logo />
            </div>
            <div className={styles.userInfo}>
              <span>
                Hi
                <br />
                Sylvester Ben
              </span>
              <Image
                src={profilePic}
                alt="User"
                width={40}
                height={40}
                className={styles.avatar}
              />
            </div>
          </section>
        </section>
      </header>

      {menuOpen && (
        <div className={styles.overlay} onClick={() => setMenuOpen(false)} />
      )}
    </>
  );
};

export default DashboardHeader;