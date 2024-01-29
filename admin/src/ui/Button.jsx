/* eslint-disable react/prop-types */
const Button = ({ text, submit }) => {
  return (
    <button
      type={submit}
      className="bg-cyan-500 text-white px-3 py-1  rounded-md flex justify-center items-center hover:bg-cyan-600 active:scale-[0.98]"
    >
      {text}
    </button>
  );
};

export default Button;
