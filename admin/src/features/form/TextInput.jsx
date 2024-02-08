/* eslint-disable react/prop-types */
import React from "react";
import Info from "../../ui/Info";

export const Label = ({ text, src }) => {
  return (
    <label className="flex pb-2 font-extralight justify-between items-center">
      {text} {src && <Info src={src} />}
    </label>
  );
};
//  dedicated for the edit of the website only
export const MenuImageSwitch = React.forwardRef(
  ({ type, name, text, src, ...rest }, ref) => {
    return (
      <div className="flex flex-col ">
        <Label text={text} src={src} />
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

export const SelectInput = React.forwardRef(
  ({ type, name, text, src, options, ...rest }, ref) => {
    return (
      <div className="flex flex-col ">
        <Label text={text} src={src} />
        <select
          type={type}
          name={name}
          ref={ref}
          {...rest}
          className="p-1 border rounded-md  w-full  border-gray-300 bg-gray-200 focus:outline-none focus:border-cyan-500 placeholder-gray-400::placeholder"
        >
          {options?.map(
            (
              data,
              index // Ensure to add a return statement here
            ) => (
              <option key={index} className="gray-500" value={data?._id}>
                {data?.roomType}
              </option>
            )
          )}
        </select>
      </div>
    );
  }
);
SelectInput.displayName = "SelectInput";

export const TextArea = React.forwardRef(
  ({ type, name, text, src, ...rest }, ref) => {
    return (
      <div>
        <Label text={text} src={src} />
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

const TextInput = React.forwardRef(
  ({ type, name, text, src, ...rest }, ref) => {
    return (
      <div>
        <Label text={text} src={src} />
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
  }
);

TextInput.displayName = "TextInput";
export default TextInput;
