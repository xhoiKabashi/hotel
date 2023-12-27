import { useState, useEffect } from "react";
import { HiBars3 } from "react-icons/hi2";
import { useLocation } from "react-router-dom";
import handleScroll from "../../utils/scrollHelper";
import MenuShowUp from "./MenuShowUp";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const location = useLocation();

  useEffect(() => {
    // Attach the scroll event listener when the component mounts
    window.addEventListener("scroll", () => handleScroll(setIsScrolled));

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", () => handleScroll(setIsScrolled));
    };
  }, []);

  const isHomePage =
    location.pathname === "/" ||
    location.pathname === "/restaurant-bar" ||
    location.pathname === "/about-us";
  // Update this based on your home page path

  return (
    <div
      className={`fixed w-screen ${
        isScrolled || !isHomePage ? "bg-white" : "bg-transparent"
      } transition duration-700 ${
        isScrolled || !isHomePage ? "text-slate-950" : "text-slate-50"
      }`}
    >
      <div className="flex h-20 text-xl justify-around items-center ">
        <div className="flex items-center space-x-2">
          <HiBars3
            className="text-3xl cursor-pointer"
            onClick={() => setShowMenu(!showMenu)}
          />
          <h1 className="flex text-base xl:text-xl items-center">Menu</h1>
        </div>
        <div
          className={`${
            isScrolled || !isHomePage ? "text-sky-500" : "text-white"
          } font-thin md:text-2xl mb-1 cursor-pointer`}
        >
          <Link to="/"> Blue Coast</Link>
        </div>
        <div className="cursor-pointer text-base xl:text-xl">Book now</div>
      </div>
      <MenuShowUp showMenu={showMenu} setShowMenu={setShowMenu} />
    </div>
  );
};

export default Navbar;
