/* eslint-disable react/prop-types */
import { useState } from "react";

const Collapse = ({ children, title }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-slate-50 p-2 mb-5 flex flex-col  rounded-md ">
      <h1
        className="cursor-pointer font-semibold p-3 text-center"
        onClick={() => setOpen(!open)}
      >
        {title}
      </h1>
      {open && <div className="transition-all duration-300">{children}</div>}
    </div>
  );
};

export default Collapse;
