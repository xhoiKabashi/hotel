/* eslint-disable react/prop-types */
import { aboutHotel, aboutRooms } from "../../../utils/data/NavBarData.js";
import { Link } from "react-router-dom";

const {
  menuTitle,
  roomInfo,
  hotelInfo,
  barRestaurant,
  contactUs,
  makeReservation,
  getDiraction,
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
        <ul className="space-y-3 text-base xl:text-3xl">
          <Link to="our-rooms" onClick={closeMenu}>
            {roomInfo}
          </Link>
          <li>{hotelInfo}</li>
          <li>{barRestaurant}</li>
          <li>{contactUs}</li>
          <li>{makeReservation}</li>
          <li>{getDiraction}</li>
        </ul>
      </div>
      <div className="space-y-4">
        <h1 className="text-1xl xl:text-5xl">{ourRooms}</h1>
        <ul className="space-y-3 text-base xl:text-3xl">
          <li>{standardRoom}</li>
          <li>{deluxeRoom}</li>
          <li>{superiorRoom}</li>
          <li>{signatureRoom}</li>
          <li>{executiveSuite}</li>
          <li>{poolVilla}</li>
        </ul>
      </div>
    </div>
  );
};

export default MenuList;
