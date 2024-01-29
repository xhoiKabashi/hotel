import { useState } from "react";
import EditHomeContent from "../features/edit/editHome/EditHomeContent";
import NavigationList from "../features/navigation/NavigationList";
import { v4 as uuidv4 } from "uuid";
import { Outlet } from "react-router-dom";

function EditWebsite() {
  const [filterText, setFilterText] = useState("");

  // Define the components and their titles
  const components = [
    {
      title: "Logo & Name",

      to: "logo-name",
    },

    { title: "Home Header", to: "home-header" },
    {
      title: "Home Content",
      component: <EditHomeContent />,
      to: "home-content",
    },

    {
      title: "Restaurant Header",

      to: "restaurant-header",
    },
    {
      title: "Restaurant Menu",
      to: "restaurant-menu",
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
      title: "Contact/Social Media",
      to: "contact-social",
    },
  ];
  const filteredComponents = components.filter((item) =>
    item.title.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div className=" flex  gap-2">
      <div className=" basis-[20%] bg-white">
        <ul className=" flex flex-col justify-start items-center py-10 gap-4">
          {components.map((data) => (
            <NavigationList to={data.to} key={uuidv4()}>
              {data.title}
            </NavigationList>
          ))}
        </ul>
      </div>
      <div className=" basis-[85%] ">{<Outlet />}</div>
    </div>

    // <div className="flex -z-10 flex-col justify-end gap-6 px-2 py-10 md:px-10 md:py-5">
    //   <input
    //     type="text"
    //     placeholder="Search..."
    //     value={filterText}
    //     onChange={(e) => setFilterText(e.target.value)}
    //     className="w-20 h-7 sticky top-2 bg-cyan-500 text-white border-2 border-cyan-500 placeholder-white outline-none focus:border-white ring-transparent rounded-full self-end px-2 py-1"
    //   />

    //   {/* Render filtered components */}
    //   {filteredComponents.map((item, index) => (
    //     <Collapse key={index} title={item.title}>
    //       {item.component}
    //     </Collapse>
    //   ))}
    // </div>
  );
}

export default EditWebsite;
