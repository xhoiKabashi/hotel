import { useState } from "react";
import { restaurantData } from "../../utils/data/restaurantData";

export default function Slider() {
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(restaurantData.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === restaurantData.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div className="overflow-hidden relative">
      <div
        className={`flex transition ease-out duration-40`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {restaurantData.map((s, index) => {
          return <img key={index} src={s.imageUrl} />;
        })}
      </div>

      <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
        <button onClick={previousSlide}>Left</button>
        <button onClick={nextSlide}>Right</button>
      </div>

      <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
        {restaurantData.map((s, i) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={"circle" + i}
              className={`rounded-full w-5 h-5 cursor-pointer  ${
                i == current ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
