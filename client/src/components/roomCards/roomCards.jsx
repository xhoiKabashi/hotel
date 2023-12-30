/* eslint-disable react/prop-types */
const RoomsCards = ({ title, description, more, imageUrl }) => {
  return (
    <div className="group relative  cursor-pointer items-center justify-center overflow-hidden">
      <div className="-z-10 relative">
        <img alt="" src={imageUrl} />
      </div>
      <div className="absolute -z-10 inset-10 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 className="font-dmserif text-3xl font-bold text-white">{title}</h1>
        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {description}
        </p>
        <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
          {more}
        </button>
      </div>
    </div>
  );
};
export default RoomsCards;
