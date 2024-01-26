const RoomsDetails = () => {
  return (
    <section className="flex justify-center pt-16">
      <div className="flex items-center gap-9 flex-col-reverse md:flex-row md:gap-20 md:w-[75%]">
        <div className="text-center  md:text-left">
          <ul className="">
            <h1 className="text-xl pb-5 md:text-2xl md:w-max">Features</h1>
            <li>Average size: 42 sqm / 452 sqft</li>
            <li>Occupancy: 3 adults, 1 child</li>
            <li>Bed: king or twin</li>
            <li>Bathroom: bath tub and walk-in shower</li>
          </ul>
        </div>
        <p className="w-[85%] text-2xl text-justify  md:text-left md:text-4xl">
          The suites feature interconnected rooms or a dedicated kids area.
          Unwind together in comfort and make the most of your stay with
          thoughtful amenities for travelers.
        </p>
      </div>
    </section>
  );
};

export default RoomsDetails;
