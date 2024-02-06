/* eslint-disable react/prop-types */
import { Wifi, PawPrint, Martini } from "lucide-react";
import { MdOutlineCoffeeMaker, MdLiveTv } from "react-icons/md";
import { BsSafe } from "react-icons/bs";
import { TbAirConditioning } from "react-icons/tb";
import { PiHandSoap, PiFootprints, PiFan } from "react-icons/pi";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { GiTowel, GiSmokeBomb } from "react-icons/gi";
import { FaWind } from "react-icons/fa";
import RoomsDesList from "./RoomsDesList";
import { MdDesk, MdOutlineIron } from "react-icons/md";

const RoomAmenities = ({ amenities }) => {
  return (
    <div className=" px-10 flex flex-col md:flex-row md:justify-around">
      <div>
        <h1 className=" text-2xl md:text-3xl  pb-10  font-semibold">
          Room Amenities
        </h1>

        <div className=" grid  grid-cols-2 gap-4">
          {amenities?.airConditioner && (
            <ul className="flex gap-5 items-center text-xl">
              <TbAirConditioning />
              <p>Air conditioner</p>
            </ul>
          )}
          {amenities?.wifi && (
            <ul className="flex gap-5 items-center text-xl">
              <Wifi />
              <p>Wifi & Internet</p>
            </ul>
          )}
          {amenities?.slippers && (
            <ul className="flex gap-5 items-center text-xl">
              <PiFootprints />
              <p>Slippers</p>
            </ul>
          )}
          {amenities?.shampoo && (
            <ul className="flex gap-5 items-center text-xl">
              <PiHandSoap />
              <p>Shampoo</p>
            </ul>
          )}
          {amenities?.safeBox && (
            <ul className="flex gap-5 items-center text-xl">
              <BsSafe />
              <p>Safe Box</p>
            </ul>
          )}
          {amenities?.petFriendly && (
            <ul className="flex gap-5 items-center text-xl">
              <PawPrint />
              <p>Pet Friendly</p>
            </ul>
          )}

          {amenities?.tv && (
            <ul className="flex gap-5 items-center text-xl">
              <MdLiveTv />
              <p>Cable TV</p>
            </ul>
          )}
          {amenities?.towels && (
            <ul className="flex gap-5 items-center text-xl">
              <GiTowel />
              <p>Towels</p>
            </ul>
          )}
          {amenities?.hairDryer && (
            <ul className="flex gap-5 items-center text-xl">
              <FaWind />
              <p>Hair Dryer</p>
            </ul>
          )}
          {amenities?.espressoMachine && (
            <ul className="flex gap-5 items-center text-xl">
              <MdOutlineCoffeeMaker />
              <p>Espresso Machine</p>
            </ul>
          )}
          {amenities?.welcomeDrinks && (
            <ul className="flex gap-5 items-center text-xl">
              <Martini />
              <p>Welcome Drinks</p>
            </ul>
          )}
          {amenities?.roomRefrigerator && (
            <ul className="flex gap-5 items-center text-xl">
              <CgSmartHomeRefrigerator />
              <p>In-room Refrigerator</p>
            </ul>
          )}
          {amenities?.workDesk && (
            <ul className="flex gap-5 items-center text-xl">
              <MdDesk />
              <p>Work Desk</p>
            </ul>
          )}
          {amenities?.iron && (
            <ul className="flex gap-5 items-center text-xl">
              <MdOutlineIron />
              <p>Iron</p>
            </ul>
          )}
          {amenities?.airPurifier && (
            <ul className="flex gap-5 items-center text-xl">
              <PiFan />
              <p>Air Purifier</p>
            </ul>
          )}
          {amenities?.smokeDetectors && (
            <ul className="flex gap-5 items-center text-xl">
              <GiSmokeBomb />
              <p>Smoke Detector</p>
            </ul>
          )}
        </div>
      </div>
      <div>
        <RoomsDesList />
      </div>
    </div>
  );
};

export default RoomAmenities;
