import { useLocation } from "react-router-dom";
const MenuChangeHelper = () => {
  const location = useLocation();
  const MenuChange =
    location.pathname === "/" ||
    location.pathname === "/restaurant-bar" ||
    location.pathname === "/about-us" ||
    location.pathname === "/standard-room" ||
    location.pathname === "/deluxe-room" ||
    location.pathname === "/superior-room" ||
    location.pathname === "/signature-room" ||
    location.pathname === "/executive-suite" ||
    location.pathname === "/signature-room" ||
    location.pathname === "/pool-villa";

  return MenuChange;
};

export default MenuChangeHelper;
