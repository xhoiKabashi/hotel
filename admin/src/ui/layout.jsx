import { Outlet } from "react-router-dom";
import Sidebar from "../features/sidebar/Sidebar";
import Navbar from "../features/navbar/Navbar";

const Layout = () => {
  return (
    <div className="grid grid-rows-[40px,1fr,auto]  md:grid-cols-[250px,1fr] md:grid-rows-[60px,1fr]  h-screen bg-slate-50 over">
      <Navbar />
      <Sidebar />

      <div className="overflow-scroll">
        <Outlet className="overflow-scroll" />
      </div>
    </div>
  );
};

export default Layout;
