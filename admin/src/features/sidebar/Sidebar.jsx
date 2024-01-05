import { useState } from "react";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { Link } from "react-router-dom";

function Sidebar() {
  const [up, setUp] = useState(false);

  return (
    <aside
      className={`bg-slate-700 row-start-3 md:h-screen md:row-span-full transition-all duration-300 ${
        up ? "h-40" : "h-16"
      }`}
      onClick={() => setUp(!up)}
    >
      <div>
        <Link to="edit-website">
          <HiOutlineComputerDesktop className="text-whites size-8" />
        </Link>
      </div>
    </aside>
  );
}

export default Sidebar;
