import { NavLink } from "react-router-dom";

/* eslint-disable react/prop-types */
const NavigationList = ({ children, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "bg-slate-200   rounded-full" : ""
      }
    >
      <div className="flex gap-4 justify-center items-center py-2 px-4  hover:bg-slate-200 rounded-full active:bg-slate-200 focus:active:bg-slate-200">
        {children}
      </div>
    </NavLink>
  );
};

export default NavigationList;
