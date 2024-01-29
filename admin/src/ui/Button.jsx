/* eslint-disable react/prop-types */
const Button = ({ text, submit }) => {
  return (
    <div>
      <button
        type={submit}
        className="bg-sky-500 text-white px-3 py-1  rounded-md flex justify-center items-center hover:bg-sky-600 active:scale-[0.98]"
      >
        {text}
      </button>
    </div>
  );
};
export const ButtonV2 = ({ onClick, text, color }) => {
  const buttonColor =
    color === "green" ? "text-sky-600 bg-sky-200" : "text-red-600 bg-red-200";

  return (
    <div className="flex justify-center items-center gap-2 pt-4 w-fit active:active:scale-[0.97]">
      <button
        className={`font-medium text-xs px-3 py-1 rounded-md cursor-pointer ${buttonColor}`}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
