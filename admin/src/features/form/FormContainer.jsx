/* eslint-disable react/prop-types */
import React from "react";

export const Form = ({ children, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className=" flex gap-6  h-full">
      {children}
    </form>
  );
};

export const FormContainer = React.forwardRef(({ children }, ref) => {
  return (
    <div
      className="flex flex-col basis-[100%]   bg-white h-full py-2 px-4 gap-3 rounded-md shadow-sm"
      ref={ref}
    >
      {children}
    </div>
  );
});

Form.displayName = "Form";
FormContainer.displayName = "FormContainer";
