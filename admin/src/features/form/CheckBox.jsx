/* eslint-disable react/prop-types */
import React from "react";
// import { Label } from "./TextInput";
const CheckBox = React.forwardRef(({ text, ...props }, ref) => {
  return (
    <div className="flex gap-4  bg-gray-200 rounded-sm  p-1 items-center">
      <input
        type="checkbox"
        ref={ref}
        {...props}
        className="form-checkbox h-5 w-5 text-sky-500"
      />
      <span> {text}</span>
    </div>
  );
});

CheckBox.displayName = "CheckBox";

export default CheckBox;
