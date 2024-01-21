/* eslint-disable react/prop-types */
import { useState } from "react";
import { HiOutlineInformationCircle } from "react-icons/hi2";

const Info = ({ text }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative inline-block">
      <div className="flex justify-center items-end h-full">
        <HiOutlineInformationCircle
          className="h-8 w-8 text-cyan-500"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      </div>
      <div
        className={`absolute top-full w-44 left-28 transform -translate-x-1/2 text-xs font-semibold bg-slate-400 p-2 rounded ${
          isHovered ? "opacity-100" : "opacity-0 invisible"
        } transition-opacity duration-300`}
      >
        {text}
      </div>
    </div>
  );
};

export default Info;
