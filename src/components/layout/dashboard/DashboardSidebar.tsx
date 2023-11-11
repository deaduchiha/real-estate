import SidebarComponents from "@/module/dashboard/SidebarComponents";

const DashboardSidebar = ({ children }) => {
  return (
    <div className="flex justify-between gap-20 md:gap-10 pt-8 md:flex-col">
      <aside className="w-3/12 md:w-full">
        <SidebarComponents />
      </aside>
      <main className="border-2 border-black w-full">{children}</main>
    </div>
  );
};
export default DashboardSidebar;
