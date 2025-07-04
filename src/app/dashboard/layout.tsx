import type { Metadata } from "next";
import { DashboardHeader, DashboardFooter } from "@/components/layouts/index";

export const metadata: Metadata = {
  title: "Samie. Dashboard",
  description:
    "This is the dashboard for Samie, where you can manage your account and settings.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <DashboardHeader />
      <main>{children}</main>
      <DashboardFooter />
    </>
  );
}
