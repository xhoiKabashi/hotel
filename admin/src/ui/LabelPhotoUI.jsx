/* eslint-disable react/prop-types */
const LabelPhoto = ({ children }) => {
  return (
    <div className=" flex flex-col items-center  justify-center">
      <span className="ml-2 py-1 text-[10px] font-semibold">Hey</span>
      <label className=" flex items-center  justify-center px-3 py-1 cursor-pointer bg-cyan-500 rounded-md font-medium text-white shadow-md hover:bg-cyan-400 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
        <span className="flex items-center justify-center">Image</span>
        {children}
      </label>
    </div>
  );
};

export default LabelPhoto;
