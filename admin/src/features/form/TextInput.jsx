/* eslint-disable react/prop-types */
import React from "react";

export const Label = ({ text }) => {
  return <label className="flex pb-2 font-extralight">{text}</label>;
};

export const MenuImageSwitch = React.forwardRef(
  ({ type, name, text, ...rest }, ref) => {
    return (
      <div className="flex flex-col ">
        <Label text={text} />
        <select
          type={type}
          name={name}
          ref={ref}
          {...rest}
          className="p-1 border rounded-md  w-full  border-gray-300 bg-gray-200 focus:outline-none focus:border-cyan-500 placeholder-gray-400::placeholder"
        >
          <option className=" gray-500 " value={3}>
            Left
          </option>
          <option className=" text-gray-500" value={1}>
            Right
          </option>
        </select>
      </div>
    );
  }
);
MenuImageSwitch.displayName = "MenuImageSwitch";

export const TextArea = React.forwardRef(
  ({ type, name, text, ...rest }, ref) => {
    return (
      <div>
        <Label text={text} />
        <textarea
          type={type}
          name={name}
          placeholder="Enter text"
          className="p-1 border rounded-md  w-full  border-gray-300 bg-gray-200 focus:outline-none focus:border-cyan-500 placeholder-gray-400::placeholder"
          ref={ref}
          {...rest}
        />
      </div>
    );
  }
);
TextArea.displayName = "TextArea";

const TextInput = React.forwardRef(({ type, name, text, ...rest }, ref) => {
  return (
    <div>
      <Label text={text} />
      <input
        type={type}
        name={name}
        placeholder="Enter text"
        className="p-1 border rounded-md   w-full  border-gray-300 bg-gray-200 focus:outline-none focus:border-cyan-500 placeholder-gray-400::placeholder"
        ref={ref}
        {...rest}
      />
    </div>
  );
});

TextInput.displayName = "TextInput";
export default TextInput;
