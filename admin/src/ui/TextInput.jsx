/* eslint-disable react/prop-types */
const TextInput = ({ value, onChange, type, title, placeholder, big }) => {
  return (
    <label className=" flex flex-col justify-center items-center">
      <span className="ml-2 py-1 text-[10px] font-semibold">{title}</span>
      <input
        type={type}
        placeholder={placeholder}
        className={`p-1 border ${
          big ? "w-44" : "w-16 focus:w-44"
        } rounded-md border-gray-300 focus:outline-none focus:border-blue-500 transition-all duration-300`}
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

export default TextInput;
