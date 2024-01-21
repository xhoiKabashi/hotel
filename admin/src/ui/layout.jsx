import { Outlet } from "react-router-dom";
import Sidebar from "../features/sidebar/Sidebar";
import Navbar from "../features/navbar/Navbar";
import Toast from "./Toast";

const Layout = () => {
  return (
    <div className="grid grid-rows-[40px,1fr,auto] md:grid-cols-[250px,1fr] md:grid-rows-[60px,1fr] h-screen bg-slate-300 ">
      <Navbar />
      <Sidebar />
      <div className="overflow-y-scroll">
        <Outlet />
        <Toast />
      </div>
    </div>
  );
};

export default Layout;
