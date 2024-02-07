// import { useState } from "react";

import NavigationList from "../features/navigation/NavigationList";
import { v4 as uuidv4 } from "uuid";
import { Outlet } from "react-router-dom";

function EditWebsite() {
  const components = [
    {
      title: "General Info",

      to: "logo-name",
    },

    { title: "Home Header", to: "home-page" },
    {
      title: "Home Content",
      to: "home-content",
    },

    {
      title: "Restaurant Header",
      to: "restaurant-header",
    },
    {
      title: "Restaurant Content",
      to: "restaurant-content",
    },
    {
      title: "About Us Header",
      to: "about-us-header",
    },
    {
      title: "About Us Content",
      to: "about-content",
    },
    {
      title: "Social Media",
      to: "contact-social",
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
      <div className=" flex-grow ">{<Outlet />}</div>
    </div>
  );
}

export default EditWebsite;
