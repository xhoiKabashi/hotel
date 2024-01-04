import { Outlet } from "react-router-dom";
import Sidebar from "../features/Sidebar";
import Navbar from "../features/Navbar";

const Layout = () => {
  return (
    <div className="grid grid-rows-[40px,1fr,auto]  md:grid-cols-[200px,1fr] md:grid-rows-[40px,1fr]  h-screen">
      <Navbar />
      <Sidebar />

      <Outlet className="" />
    </div>
  );
};

export default Layout;
