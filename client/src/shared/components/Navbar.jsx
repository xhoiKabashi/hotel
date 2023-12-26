import { useState, useEffect } from "react";
import { HiBars3 } from "react-icons/hi2";
import handleScroll from "../../utils/scrollHelper";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // get the scroll event listener when the component mounts
    window.addEventListener("scroll", () => handleScroll(setIsScrolled));

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", () => handleScroll(setIsScrolled));
    };
  }, []);

  return (
    <div
      className={`fixed w-screen ${
        isScrolled ? "bg-slate-50" : "bg-transparent"
      }  transition duration-700 ${
        isScrolled ? "text-slate-950" : "text-slate-50"
      }`}
    >
      <div className="flex h-20 text-xl justify-around items-center">
        <div className="flex items-center space-x-2">
          <HiBars3 className="text-3xl cursor-pointer" />
          <h1 className="flex items-center mb-1">Menu</h1>
        </div>
        <div className="md:text-2xl mb-1 cursor-pointer">Green Coast</div>
        <div className="mb-1 cursor-pointer">Book now</div>
      </div>
    </div>
  );
};

export default Navbar;
