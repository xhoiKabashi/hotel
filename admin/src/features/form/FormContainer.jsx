/* eslint-disable react/prop-types */
import React from "react";

export const Form = ({ children, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className=" flex gap-6 justify-evenly">
      {children}
    </form>
  );
};

export const FormContainer = React.forwardRef(({ children }, ref) => {
  return (
    <div
      className="flex flex-col basis-[33%] bg-white h-full py-6 px-6 gap-4 rounded-md shadow-sm"
      ref={ref}
    >
      {children}
    </div>
  );
});

Form.displayName = "Form";
FormContainer.displayName = "FormContainer";
