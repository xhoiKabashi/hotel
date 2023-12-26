import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";
import MenuShowUp from "./navbar/MenuShowUp";

const Layout = () => {
  return (
    <>
      <MenuShowUp />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
