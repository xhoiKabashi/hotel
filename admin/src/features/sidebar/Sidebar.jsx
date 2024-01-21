import { useState } from "react";
import { HiSquaresPlus } from "react-icons/hi2";
import LogoPanel from "../../ui/LogoPanel";
import NavigationList from "./NavigationList";
import Text from "../../ui/Text";

function Sidebar() {
  const [up, setUp] = useState(false);

  return (
    <aside
      className={`bg-slate-50 row-start-3 md:h-screen md:row-span-full transition-all duration-300 ${
        up ? "h-40" : "h-16"
      }`}
      onClick={() => setUp(!up)}
    >
      <div className="flex flex-col justify-between items-center gap-5">
        <LogoPanel />
        <NavigationList to="edit-website">
          <HiSquaresPlus className="text-whites size-6  text-slate-600" />
          <Text text="Edit Website" />
        </NavigationList>
        <NavigationList to="edit-">
          <HiSquaresPlus className="text-whites size-6  text-slate-600" />
          <Text text="Edit Website" />
        </NavigationList>
        <NavigationList to="edit">
          <HiSquaresPlus className="text-whites size-6  text-slate-600" />
          <Text text="Edit Website" />
        </NavigationList>
        <NavigationList to="edit-">
          <HiSquaresPlus className="text-whites size-6  text-slate-600" />
          <Text text="Edit Website" />
        </NavigationList>
        <NavigationList to="edit-">
          <HiSquaresPlus className="text-whites size-6  text-slate-600" />
          <Text text="Edit Website" />
        </NavigationList>
      </div>
    </aside>
  );
}

export default Sidebar;
