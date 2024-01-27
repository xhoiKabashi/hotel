/* eslint-disable react/prop-types */
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const CarouselComponent = ({ imageUrl }) => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      opts={{
        align: "center",
      }}
      className="md:w-full md:px-10 py-16"
    >
      <CarouselContent>
        {imageUrl.map((data, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <img src={data.imageUrl} className=" md:h-[85%]" alt="" />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CarouselComponent;
