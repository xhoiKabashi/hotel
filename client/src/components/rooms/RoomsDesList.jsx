import { AiOutlineClockCircle } from "react-icons/ai";
import { MdSmokeFree } from "react-icons/md";

const RoomsDesList = () => {
  return (
    <div className=" py-10 flex flex-col md:flex-row md:justify-around">
      <div>
        <h1 className="text-xl md:text-2xl pb-10 font-semibold">
          Hotel Information
        </h1>
        <div className=" grid  grid-cols-1 gap-4">
          <div className=" text-xl flex gap-2 items-center">
            <AiOutlineClockCircle />
            Check In: 3:00 pm
          </div>
          <div className=" text-xl flex gap-2 items-center">
            <AiOutlineClockCircle />
            Check Out: 11:00 am
          </div>
          <div className=" text-xl flex gap-2 items-center">
            <MdSmokeFree />
            Smoke Free Property
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomsDesList;
