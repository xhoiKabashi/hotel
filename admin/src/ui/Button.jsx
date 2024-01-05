/* eslint-disable react/prop-types */
const Button = ({ text }) => {
  return (
    <button className="bg-blue-500 text-white px-3 py-1 rounded-full flex justify-center items-center hover:bg-blue-600 active:scale-[0.98]">
      {text}
    </button>
  );
};

export default Button;
