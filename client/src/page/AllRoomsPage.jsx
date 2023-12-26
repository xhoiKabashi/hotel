import RoomsCards from "../shared/components/roomCards/roomCards";
const AllRoomsPage = () => {
  return (
    <div className="pt-20 px-5 xl:px-48 xl:pt-40">
      <div className=" xl:text-left">
        <h1 className="text-center text-4xl pt-5 pb-10 xl:text-6xl">
          Our Rooms
        </h1>
        <p className="text-balance xl:text-2xl">
          Once your workday is over, make an effort to disconnect from screens
          and engage in activities that dont involve electronic devices. Take
          breaks to read physical books or magazines rather than digital screens
          to give your eyes a rest.
        </p>
        <div className="py-10 grid  justify-center xl:grid-cols-3 grid-rows-2 gap-14">
          <RoomsCards
            title="Standard Room"
            description="Average size: 27 sqm / 290 sqft
            Occupancy: 2 adults, 1 child
            Bed: king or twin
            Bathroom: bath tub and walk-in shower"
            imageUrl="./public/rooms/standard-room.jpg"
            more="See More"
          />
          <RoomsCards
            title="Deluxe Room"
            description="Average size: 32 sqm / 344 sqft
            Occupancy: 2 adults, 1 child
            Bed: king or twin
            Bathroom: bath tub and walk-in shower"
            imageUrl="./public/rooms/deluxe-room.jpg"
            more="See More"
          />
          <RoomsCards
            title="Superior Room"
            description="Average size: 42 sqm / 452 sqft
            Occupancy: 3 adults, 1 child
            Bed: king or twin
            Bathroom: bath tub and walk-in shower"
            imageUrl="./public/rooms/superior-room.jpg"
            more="See More"
          />
          <RoomsCards
            title="Signature Room"
            description="Average size: 55 sqm / 592 sqft
            Occupancy: 3 adults,2 children
            Bed: king or queen
            Bathroom: bath tub and walk-in shower"
            imageUrl="./public/rooms/signature-room.jpg"
            more="See More"
          />
          <RoomsCards
            title="
            Executive Suite"
            description="Average size: 77 sqm / 828 sqft
            Occupancy: 3 adults, 2 children
            Bed: king or queen
            Bathroom: bath tub and walk-in shower"
            imageUrl="./public/rooms/executive-suite.jpg"
            more="See More"
          />
          <RoomsCards
            title="Pool Deluxe Villa"
            description="Average size: 27 sqm / 290 sqft
            Occupancy: 2 adults, 1 child
            Bed: king or twin
            Bathroom: bath tub and walk-in shower"
            imageUrl="./public/rooms/vila-pool.jpg"
            more="See More"
          />
        </div>
      </div>
    </div>
  );
};

export default AllRoomsPage;
