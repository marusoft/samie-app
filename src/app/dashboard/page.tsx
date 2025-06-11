import Link from "next/link";

const Dashboard = () => {
  return (
    <div>
      <h1>hello Dashboard</h1>
      <Link href="/auth/login" >Logout</Link>
    </div>
  );
};
export default Dashboard;
