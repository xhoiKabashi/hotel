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
    {
      title: "Update Rooms",
      to: "update-rooms",
    },
    {
      title: "Delete Rooms",
      to: "delete-rooms",
    },
  ];

  return (
    <div className=" flex  gap-2">
      <div className=" basis-[15%] bg-white">
        <ul className=" flex flex-col justify-center items-center py-5 gap-4 text-sm  font-semibold">
          {components.map((data) => (
            <NavigationList to={data.to} key={uuidv4()}>
              {data.title}
            </NavigationList>
          ))}
        </ul>
      </div>
      <div className=" basis-[80%] ">{<Outlet />}</div>
    </div>
  );
}

export default Rooms;
