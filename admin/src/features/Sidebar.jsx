import { useState } from "react";

function Sidebar() {
  const [up, setUp] = useState(false);
  console.log(up);

  return (
    <aside
      className={`bg-slate-600 row-start-3 md:h-screen md:row-span-full transition-all duration-300 ${
        up ? "h-40" : "h-16"
      }`}
      onClick={() => setUp(!up)}
    >
      <div>hey</div>
    </aside>
  );
}

export default Sidebar;
