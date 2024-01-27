import {
  AirVent,
  Wifi,
  Footprints,
  ShowerHead,
  Vault,
  PawPrint,
  Wind,
  Tv,
  Coffee,
  Martini,
  Refrigerator,
} from "lucide-react";
import RoomsDesList from "./RoomsDesList";
const RoomAmenities = () => {
  return (
    <div className=" px-10 flex flex-col md:flex-row md:justify-around">
      <div>
        <h1 className=" text-2xl md:text-3xl  pb-10  font-semibold">
          Room Amenities
        </h1>

        <div className="flex flex-col gap-6 md:flex-row">
          <div className=" flex flex-col gap-4 md:gap-6">
            <ul className="flex gap-5 items-center text-xl">
              <AirVent />
              <p>Air conditioner</p>
            </ul>
            <ul className="flex gap-5 items-center text-xl">
              <Wifi />
              <p>Wifi & Internet</p>
            </ul>
            <ul className="flex gap-5 items-center text-xl">
              <Footprints />
              <p>Slippers</p>
            </ul>
            <ul className="flex gap-5 items-center text-xl">
              <ShowerHead />
              <p>Shampoo</p>
            </ul>
            <ul className="flex gap-5 items-center text-xl">
              <Vault />
              <p>Safe Box</p>
            </ul>
            <ul className="flex gap-5 items-center text-xl">
              <PawPrint />
              <p>Pet Friendly</p>
            </ul>
          </div>
          <div className=" flex flex-col gap-6">
            <ul className="flex gap-5 items-center text-xl">
              <Tv />
              <p>Cable TV</p>
            </ul>
            <ul className="flex gap-5 items-center text-xl">
              <ShowerHead />
              <p>Towels</p>
            </ul>
            <ul className="flex gap-5 items-center text-xl">
              <Wind />
              <p>Hair Dryer</p>
            </ul>
            <ul className="flex gap-5 items-center text-xl">
              <Coffee />
              <p>Espresso Machine</p>
            </ul>
            <ul className="flex gap-5 items-center text-xl">
              <Martini />
              <p>Welcome Drinks</p>
            </ul>
            <ul className="flex gap-5 items-center text-xl">
              <Refrigerator />
              <p>In-room Refrigerator</p>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <RoomsDesList />
      </div>
    </div>
  );
};

export default RoomAmenities;
