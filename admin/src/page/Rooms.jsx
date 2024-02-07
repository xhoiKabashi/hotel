// import { useState } from "react";

import NavigationList from "../features/navigation/NavigationList";
import { v4 as uuidv4 } from "uuid";
import { Outlet } from "react-router-dom";

function Rooms() {
  const components = [
    {
      title: "Create Rooms",

      to: "create-rooms",
    },
    {
      title: "All Rooms",

      to: "all-rooms",
    },
  ];

  return (
    <div className=" flex flex-col gap-2">
      <div className=" flex  bg-white  justify-center  py-2 gap-4 text-sm  rounded-md shadow-sm font-semibold ">
        {components.map((data) => (
          <NavigationList to={data.to} key={uuidv4()}>
            {data.title}
          </NavigationList>
        ))}
      </div>
      <div className="flex-grow">{<Outlet />}</div>
    </div>
  );
}

export default Rooms;
