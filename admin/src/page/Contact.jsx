import { useState } from "react";
import CreateRooms from "../features/rooms/createRooms";
import Collapse from "../ui/Collapse";

const HeaderImageSwitch = () => {
  const [filterText, setFilterText] = useState("");
  const components = [
    {
      title: "Create Room",
      component: <CreateRooms />,
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
};

export default HeaderImageSwitch;
