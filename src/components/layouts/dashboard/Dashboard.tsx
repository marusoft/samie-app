import styles from "./Dashboard.module.css";
import Link from "next/link";
import { FaUser, FaPlus, FaUsers, FaBell } from "react-icons/fa";

const Dashboard = () => {
  return (
    <section className={styles.dashboard}>
      <h2>Welcome Back, Sylvester!</h2>
      <div className={styles.grid}>
        <Card
          href="/dashboard/accountprofile"
          icon={<FaUser />}
          label="My Profile"
        />
        <Card
          href="/dashboard/creategroup"
          icon={<FaPlus />}
          label="Create a New Group"
        />
        <Card href="/dashboard/groups" icon={<FaUsers />} label="My Groups" />
        <Card href="/dashboard/activity" icon={<FaBell />} label="My Activity" />
      </div>
    </section>
  );
};
export default Dashboard;

function Card({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <Link href={href} className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <p>{label}</p>
    </Link>
  );
}
