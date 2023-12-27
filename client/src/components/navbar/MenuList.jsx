/* eslint-disable react/prop-types */
import { aboutHotel, aboutRooms } from "../../utils/data/NavBarData.js";
import { Link } from "react-router-dom";

const {
  menuTitle,
  roomInfo,
  hotelInfo,
  barRestaurant,
  contactUs,
  makeReservation,
  getDiraction,
  direction,
} = aboutHotel;

const {
  ourRooms,
  standardRoom,
  deluxeRoom,
  superiorRoom,
  signatureRoom,
  executiveSuite,
  poolVilla,
} = aboutRooms;

const MenuList = ({ setShowMenu }) => {
  const closeMenu = () => {
    // Close the menu when any link is clicked
    setShowMenu(false);
  };

  return (
    <div className="text-black gap-10  overflow-auto p-10 flex flex-col  text-3xl font-extralight text-center xl:flex-row justify-around xl:items-center xl:px-32">
      <div className="space-y-4">
        <h1 className="text-1xl xl:text-5xl">{menuTitle}</h1>
        <ul className="space-y-3 text-base xl:text-3xl flex flex-col">
          <Link
            to="our-rooms"
            className=" hover:text-slate-600"
            onClick={closeMenu}
          >
            {roomInfo}
          </Link>
          <Link
            to="/about-us"
            className=" hover:text-slate-600"
            onClick={closeMenu}
          >
            {hotelInfo}
          </Link>
          <Link
            to="/restaurant-bar"
            className=" hover:text-slate-600"
            onClick={closeMenu}
          >
            {barRestaurant}
          </Link>
          <Link
            to="/contact-us"
            className=" hover:text-slate-600"
            onClick={closeMenu}
          >
            {contactUs}
          </Link>
          <li className=" hover:text-slate-600">{makeReservation}</li>
          <a
            href={direction}
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:text-slate-600"
          >
            {getDiraction}
          </a>
        </ul>
      </div>
      <div className="space-y-4">
        <h1 className="text-1xl xl:text-5xl">{ourRooms}</h1>
        <ul className="space-y-3 text-base xl:text-3xl">
          <li className=" hover:text-slate-600">{standardRoom}</li>
          <li className=" hover:text-slate-600">{deluxeRoom}</li>
          <li className=" hover:text-slate-600">{superiorRoom}</li>
          <li className=" hover:text-slate-600">{signatureRoom}</li>
          <li className=" hover:text-slate-600">{executiveSuite}</li>
          <li className=" hover:text-slate-600">{poolVilla}</li>
        </ul>
      </div>
    </div>
  );
};

export default MenuList;
