import { FC } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div className="min-h-[700px]">{children}</div>
      <Footer />
    </>
  );
};
export default Layout;
