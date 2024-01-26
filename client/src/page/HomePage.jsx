import Header from "../ui/Header";
import NavigateHelper from "../services/navigateHelper";
import PageSection from "../components/pageSections/PageSection";
import RoomsCards from "../components/roomCards/roomCards";
import Line from "../ui/Line";
import Slider from "../components/pageSections/Slider";
import { v4 as uuidv4 } from "uuid";
import { useGetHeader, useGetContent } from "../hooks/useGetDataQuery";

const HomePage = () => {
  // get header
  const queryHeader = {
    key: "homeHeader",
    endPoint: "editHomeHeader",
  };
  const { data: header } = useGetHeader(queryHeader);

  // get content

  const queryContent = {
    key: "homeContent",
    endPoint: "homeContent",
  };

  const { data: content } = useGetContent(queryContent);

  NavigateHelper();
  return (
    <>
      <Header
        imageUrl={header?.headerImage}
        textBeforeBr={header?.levelOneTitle}
        textAfterBr={header?.levelTwoTitle}
        secondTextBeforeBr={header?.levelThreeTitle}
      />
      <div className="p-5">
        {content?.map((data) => (
          <PageSection
            key={uuidv4()}
            title={data?.title}
            content={data?.description}
            imageUrl={data?.headerImage}
            position={data?.position}
          />
        ))}
        <Line />
        <div className="xl:px-40 grid  justify-center xl:grid-cols-3 grid-rows-1 gap-14">
          <RoomsCards
            title="Standard Room"
            description="Average size: 27 sqm / 290 sqft
              Occupancy: 2 adults, 1 child
              Bed: king or twin
              Bathroom: bath tub and walk-in shower"
            imageUrl="./rooms/standard-room.jpg"
            more="See More"
          />
          <RoomsCards
            title="Deluxe Room"
            description="Average size: 32 sqm / 344 sqft
              Occupancy: 2 adults, 1 child
              Bed: king or twin
              Bathroom: bath tub and walk-in shower"
            imageUrl="./rooms/deluxe-room.jpg"
            more="See More"
          />
          <RoomsCards
            title="Superior Room"
            description="Average size: 42 sqm / 452 sqft
              Occupancy: 3 adults, 1 child
              Bed: king or twin
              Bathroom: bath tub and walk-in shower"
            imageUrl="./rooms/superior-room.jpg"
            more="See More"
          />
          <Slider />
        </div>
      </div>
    </>
  );
};

export default HomePage;
