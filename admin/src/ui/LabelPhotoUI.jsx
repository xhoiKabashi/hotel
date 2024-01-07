/* eslint-disable react/prop-types */
const LabelPhoto = ({ children }) => {
  return (
    <label className=" flex items-center  justify-center px-3 py-1 cursor-pointer bg-blue-500 rounded-md font-medium text-white shadow-md hover:bg-blue-400 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
      <span className="flex items-center">
        <span className="ml-2 text-sm">Select Photo</span>
      </span>
      {children}
    </label>
  );
};

export default LabelPhoto;
