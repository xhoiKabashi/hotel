import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { restaurantData } from "../../services/data/restaurantData";

export default function CustomSlider() {
  const [current, setCurrent] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (currentSlide, nextSlide) => setCurrent(nextSlide),
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        {restaurantData.map((s, index) => (
          <img
            key={index}
            src={s.imageUrl}
            className="md:h-[500px]"
            alt={`slide-${index}`}
          />
        ))}
      </Slider>

      <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
        <button onClick={() => setCurrent(current - 1)}>Left</button>
        <button onClick={() => setCurrent(current + 1)}>Right</button>
      </div>

      <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
        {restaurantData.map((s, i) => (
          <div
            onClick={() => {
              setCurrent(i);
            }}
            key={"circle" + i}
            className={`rounded-full w-5 h-5 cursor-pointer ${
              i === current ? "bg-white" : "bg-gray-500"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
