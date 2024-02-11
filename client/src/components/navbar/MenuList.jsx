/* eslint-disable react/prop-types */
import { aboutHotel, aboutRooms } from "../../services/data/navBarData";
import { Link } from "react-router-dom";
import { useGetHeader, useGetContent } from "../../hooks/useGetDataQuery.js";
import { v4 as uuidv4 } from "uuid";

const {
  menuTitle,
  roomInfo,
  hotelInfo,
  barRestaurant,
  contactUs,
  makeReservation,
  getDiraction,
} = aboutHotel;

const { ourRooms } = aboutRooms;

const MenuList = ({ setShowMenu }) => {
  const queryHeader = {
    key: "googleMapLink",
    endPoint: "logo",
  };
  const { data: map } = useGetHeader(queryHeader);

  const queryRoomsName = {
    key: "roomsName",
    endPoint: "rooms",
  };
  const { data: name } = useGetContent(queryRoomsName);

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
            href={map?.googleMapLink}
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
        <ul className="flex flex-col space-y-3 text-base xl:text-3xl">
          {name &&
            name.map((data) => (
              <Link
                key={uuidv4()}
                to={`./rooms/${data?.roomType}`}
                className=" hover:text-slate-600"
                onClick={closeMenu}
              >
                {data?.roomType}
              </Link>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default MenuList;
