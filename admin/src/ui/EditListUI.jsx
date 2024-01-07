/* eslint-disable react/prop-types */

const EditListIU = ({ children }) => {
  return (
    <div className="flex flex-col items-start justify-start space-y-5 ">
      <div className="bg-slate-50 w-full  px-4 py-4 ">{children}</div>
    </div>
  );
};

export default EditListIU;
