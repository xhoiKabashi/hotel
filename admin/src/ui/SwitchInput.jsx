/* eslint-disable react/prop-types */
const MenuImageSwitch = ({ value, name, title, onChange }) => {
  return (
    <label className="flex flex-col justify-center items-center">
      <span className="ml-2 py-1 text-[10px] font-semibold">{title}</span>
      <select
        value={value}
        onChange={onChange}
        name={name}
        className="p-1 border w-16 rounded-md border-gray-300 focus:outline-none focus:border-cyan-500 transition-all duration-300"
      >
        <option value={3}>Left</option>
        <option value={1}>Right</option>
      </select>
    </label>
  );
};

export default MenuImageSwitch;
