/* eslint-disable react/prop-types */
import React from "react";

export const Label = ({ text }) => {
  return <label className="flex pb-2 font-extralight">{text}</label>;
};

const TextInput = React.forwardRef(({ type, name, text, ...rest }, ref) => {
  return (
    <div>
      <Label text={text} />
      <input
        type={type}
        name={name}
        placeholder="Enter text"
        className="p-1 border rounded-md  w-full border-gray-300 bg-gray-200 focus:outline-none focus:border-cyan-500 placeholder-gray-400::placeholder"
        ref={ref}
        {...rest}
      />
    </div>
  );
});

TextInput.displayName = "TextInput";
export default TextInput;
