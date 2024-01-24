import { useState } from "react";
import EditLogo from "../features/edit/editNavbar/EditLogo";
import Collapse from "../ui/Collapse";
import EditHotelName from "../features/edit/EditHotelName";
import EditHomeHeader from "../features/edit/editHome/EditHomeHeader";
import EditRestaurantHeader from "../features/edit/editRestaurantPage/EditRestaurantHeader";
import EditLunch from "../features/edit/editRestaurantPage/editLunch";
import EditBreakfast from "../features/edit/editRestaurantPage/editBreakfast";
import EditDinner from "../features/edit/editRestaurantPage/editDinner";
import EditHomeContent from "../features/edit/editHome/EditHomeContent";

function EditWebsite() {
  const [filterText, setFilterText] = useState("");

  // Define the components and their titles
  const components = [
    { title: "Edit Hotel Name", component: <EditHotelName /> },
    { title: "Edit Logo", component: <EditLogo /> },
    { title: "Edit Home Header", component: <EditHomeHeader /> },
    { title: "Edit Home Content", component: <EditHomeContent /> },

    { title: "Edit Restaurant Header", component: <EditRestaurantHeader /> },
    {
      title: "Edit Restaurant Menu",
      component: (
        <>
          <EditBreakfast />
          <hr />
          <EditLunch />
          <hr />
          <EditDinner />
        </>
      ),
    },
  ];
  const filteredComponents = components.filter((item) =>
    item.title.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div className="flex flex-col  justify-end gap-6 px-2 py-10 md:px-10 md:py-5">
      <input
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        className="w-20 h-7 sticky top-2 bg-cyan-500 text-white border-2 border-cyan-500 placeholder-white outline-none focus:border-white ring-transparent rounded-full self-end px-2 py-1"
      />

      {/* Render filtered components */}
      {filteredComponents.map((item, index) => (
        <Collapse key={index} title={item.title}>
          {item.component}
        </Collapse>
      ))}
    </div>
  );
}

export default EditWebsite;
