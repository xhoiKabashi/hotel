import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../features/sidebar/Sidebar";
import Navbar from "../features/navbar/Navbar";
import capitalLetter from "../services/capitalLetter";
import Toast from "./Toast";

const Layout = () => {
  let { pathname } = useLocation();
  const locationOfPage = capitalLetter(pathname);

  return (
    <div className="flex h-screen overflow-hidden">
      <aside className="absolute left-0 top-0  flex h-screen w-72.5 flex-col overflow-y-hidde duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 -translate-x-full">
        <Sidebar />
      </aside>
      <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        <Navbar />
        <main className=" h-screen bg-slate-200">
          <div className="mx-auto max-w-screen-2xl p-4 md:p-5 2xl:p-5 bg-slate-200">
            <h1 className=" font-semibold text-xl  w-fit">{locationOfPage}</h1>
            <Outlet />
            <Toast />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
