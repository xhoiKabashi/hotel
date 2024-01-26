/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { HiMiniXMark } from "react-icons/hi2";
import MenuList from "./MenuList";
import { Link } from "react-router-dom";
import { useGetHeader } from "../../hooks/useGetDataQuery";
import getImage from "../../services/getImage";

const MenuShowUp = ({ showMenu, setShowMenu }) => {
  const queryHeader = {
    key: "logo",
    endPoint: "logo",
  };
  const { data: logoData } = useGetHeader(queryHeader);

  useEffect(() => {
    // Update body styles when the component mounts or 'show' changes
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    // Cleanup the styles when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMenu]);

  return (
    <>
      {showMenu && (
        <div className="fixed top-0 left-0 h-screen w-full overflow-auto z-[100] bg-white transition-transform duration-500 ease-in-out transform translate-y-0">
          <div className="flex h-20 text-xl justify-around items-center text-slate-900">
            <div className="flex items-center space-x-2">
              <HiMiniXMark
                className="text-3xl cursor-pointer"
                onClick={() => setShowMenu(!showMenu)}
              />
              <h1 className="flex items-center text-base xl:text-xl">Close</h1>
            </div>
            <Link to={"/"} onClick={() => setShowMenu(!showMenu)}>
              <div className="flex flex-col items-center">
                {logoData && (
                  <img
                    src={getImage + logoData.logoImage}
                    className="cursor-pointer h-10 w-10"
                  />
                )}
                <h1>Home</h1>
              </div>
            </Link>
            <div className=" cursor-pointer text-base xl:text-xl">Book now</div>
          </div>
          <MenuList setShowMenu={setShowMenu} />
        </div>
      )}
    </>
  );
};

export default MenuShowUp;
