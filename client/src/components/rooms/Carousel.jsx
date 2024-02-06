/* eslint-disable react/prop-types */
import Autoplay from "embla-carousel-autoplay";
import { v4 as uuidv4 } from "uuid";
import getImage from "../../services/getImage";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const CarouselComponent = ({ imageUrl }) => {
  console.log("image", imageUrl);

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
      {imageUrl && (
        <CarouselContent>
          {imageUrl.map((data) => (
            <CarouselItem key={uuidv4()} className="md:basis-1/2 lg:basis-1/3">
              <img src={getImage + data} className=" md:h-[85%]" alt="" />
            </CarouselItem>
          ))}
        </CarouselContent>
      )}
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CarouselComponent;
