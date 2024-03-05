import { HiSquaresPlus } from "react-icons/hi2";
import LogoPanel from "../../ui/LogoPanel";
import NavigationList from "../navigation/NavigationList";
import Text from "../../ui/Text";

function Sidebar() {
  return (
    <aside className=" left-0 top-0 z-50 flex h-screen w-[220px] flex-col overflow-y-hidden bg-slate-900 duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 -translate-x-full">
      <div className="flex flex-col justify-between items-center gap-5">
        <LogoPanel />

        <NavigationList to="edit-website">
          <HiSquaresPlus className="text-whites size-6  text-slate-600" />
          <Text text="Edit Website" />
        </NavigationList>

        <NavigationList to="rooms">
          <HiSquaresPlus className="text-whites size-6  text-slate-600" />
          <Text text="Rooms" />
        </NavigationList>
        <NavigationList to="/">
          <HiSquaresPlus className="text-whites size-6  text-slate-600" />
          <Text text="Other" />
        </NavigationList>
        <NavigationList to="/">
          <HiSquaresPlus className="text-whites size-6  text-slate-600" />
          <Text text="Other" />
        </NavigationList>
        <NavigationList to="/">
          <HiSquaresPlus className="text-whites size-6  text-slate-600" />
          <Text text="Other" />
        </NavigationList>
      </div>
    </aside>
  );
}

export default Sidebar;
