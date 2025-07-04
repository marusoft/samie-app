"use client";

import Link from "next/link";
import Image from "next/image";
import Bars from "@/assets/bars.png";
import styles from "./Sidebar.module.css";

interface SidebarProps {
  open: boolean;
  // setOpen: (val: boolean) => void;
  toggleSidebar: () => void;
}

const Sidebar = ({ open, toggleSidebar }: SidebarProps) => {
  return (
    <aside className={styles.sidebar}>
      <Image
        src={Bars}
        alt="bars"
        width={40}
        height={40}
        className={styles.bars}
        onClick={toggleSidebar}
      />
      {open && (
        <nav className={styles.nav}>
          <ul className={styles.navList} onClick={toggleSidebar}>
            <li className={styles.navItem}>
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/dashboard/accountprofile">My Profile</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/dashboard/creategroup">Create Group</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/dashboard/groups">My Groups</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/dashboard/activity">My Activity</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/dashboard/notifications">Notifications</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/dashboard/transactionhistory">Transactions</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/dashboard/settings">Settings</Link>
            </li>
          </ul>
        </nav>
      )}
    </aside>
  );
};

export default Sidebar;
