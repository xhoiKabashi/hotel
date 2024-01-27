import { useState } from "react";
import EditLogo from "../features/edit/editNavbar/EditLogo-Name-Map";
import Collapse from "../ui/Collapse";
import EditHomeHeader from "../features/edit/editHome/EditHomeHeader";
import EditRestaurantHeader from "../features/edit/editRestaurantPage/EditRestaurantHeader";
import EditLunch from "../features/edit/editRestaurantPage/editLunch";
import EditBreakfast from "../features/edit/editRestaurantPage/editBreakfast";
import EditDinner from "../features/edit/editRestaurantPage/editDinner";
import EditHomeContent from "../features/edit/editHome/EditHomeContent";
import EditAboutUsHeader from "../features/edit/editAboutUs/EditAboutUsHeader";
import EditAboutUsContent from "../features/edit/editAboutUs/EditAboutUsContent";
import EditContactPage from "../features/edit/contact/EditContact";
import EditSocials from "../features/edit/editSocials";
function EditWebsite() {
  const [filterText, setFilterText] = useState("");

  // Define the components and their titles
  const components = [
    {
      title: "Edit Logo / Hotel Name",
      component: <EditLogo />,
    },

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
    { title: "Edit About Us Header", component: <EditAboutUsHeader /> },
    { title: "Edit About Us Content", component: <EditAboutUsContent /> },
    {
      title: "Edit Contact Us Page / Social Media",
      component: (
        <>
          <EditContactPage />
          <hr />
          <EditSocials />
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
