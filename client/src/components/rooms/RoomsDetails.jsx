/* eslint-disable react/prop-types */
const RoomsDetails = ({ room }) => {
  return (
    <section className="flex justify-center pt-16">
      <div className="flex items-center gap-9 flex-col-reverse md:flex-row md:gap-20 md:w-[75%]">
        <div className="text-center  md:text-left">
          <ul className="">
            <h1 className="text-xl pb-5 md:text-2xl md:w-max">Features</h1>
            {room?.size && <li>Average size: {room.size}</li>}
            {room?.occupacity && <li>Occupancy: {room.occupacity}</li>}
            {room?.bed && <li>Bed: {room.bed}</li>}
            {room?.bathroom && <li>Bathroom: {room.bathroom}</li>}
          </ul>
        </div>
        <div className="w-[85%] text-2xl   md:text-left md:text-4xl whitespace-break-spaces">
          {room?.description && <p>{room.description}</p>}
        </div>
      </div>
    </section>
  );
};

export default RoomsDetails;
