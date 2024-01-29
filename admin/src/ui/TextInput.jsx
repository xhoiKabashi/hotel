/* eslint-disable react/prop-types */
const TextInput = ({
  value,
  onChange,
  type,
  title,
  placeholder,
  big,
  name,
}) => {
  return (
    <input
      type={type}
      name={name}
      placeholder="Enter text"
      className="p-2 border rounded-md border-gray-300 bg-gray-200 focus:outline-none focus:border-cyan-500 placeholder-gray-400::placeholder"
      value={value}
      onChange={onChange}
    />
  );
};

export default TextInput;
