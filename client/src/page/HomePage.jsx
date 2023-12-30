import Header from "../shared/Header";
import NavigateHelper from "../utils/navigateHelper";
import PageSection from "../components/pageSections/PageSection";
import RoomsCards from "../components/roomCards/roomCards";
import Line from "../shared/Line";
import Slider from "../components/pageSections/Slider";
const HomePage = () => {
  NavigateHelper();
  return (
    <>
      <Header
        imageUrl="./header/home-header2.jpg"
        textBeforeBr="Lets Relax &"
        textAfterBr="Unwind by the Sea"
        secondTextBeforeBr="Your Serene Escape at the Beach Hotel"
      />
      <div className="p-5">
        <PageSection
          title="Discover Your Perfect Beach Hotel Getaway"
          content="Our dedicated staff is committed to ensuring your comfort and satisfaction. From the moment you enter, you’ll be welcomed with genuine warmth and attentiveness that adds an extra layer of delight to your dining experience."
          imageUrl="./about-us/umbrella-and-deck-chair-around-outdoor-swimming-po-2022-12-16-03-52-01-utc.jpg"
          position={3}
        />
        <PageSection
          title="Our Suites"
          content="Wake up to the gentle sound of waves crashing on the shore and step onto your private balcony to witness breathtaking sunrises and sunsets."
          imageUrl="./rooms/edvin-johansson-rlwE8f8anOc-unsplash.jpg"
          button="- Discover"
          linkTo="/our-rooms"
        />
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
