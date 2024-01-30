/* eslint-disable react/prop-types */
import React from "react";

const TextInput = React.forwardRef(({ type, name, ...rest }, ref) => {
  return (
    <input
      type={type}
      name={name}
      placeholder="Enter text"
      className="p-1 border rounded-md  w-full border-gray-300 bg-gray-200 focus:outline-none focus:border-cyan-500 placeholder-gray-400::placeholder"
      ref={ref}
      {...rest}
    />
  );
});

TextInput.displayName = "TextInput";
export default TextInput;
