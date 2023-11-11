import DashboardSidebar from "@/layout/dashboard/DashboardSidebar";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

const DashboardLayout = async ({ children }) => {
  const session = await getServerSession(authOptions);

  if (!session) redirect("/");
  return (
    <>
      <DashboardSidebar>{children}</DashboardSidebar>
    </>
  );
};
export default DashboardLayout;
