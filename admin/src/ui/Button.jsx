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
export const ButtonV2 = ({ onClick, text, color, disabled }) => {
  console.log(" disabled", disabled);
  const buttonColor =
    color === "green" ? "text-sky-600 bg-sky-200" : "text-red-600 bg-red-200";

  const disabledData = disabled
    ? "disabled:opacity-25 cursor-not-allowed"
    : "active:active:scale-[0.97] cursor-pointer";

  return (
    <div>
      <button
        className={`font-medium text-xs px-3 py-1 flex items-center justify-center gap-2 m-2 w-fit rounded-md   ${disabledData} ${buttonColor}`}
        onClick={onClick}
        disabled={disabled}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
