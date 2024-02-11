import RoomsCards from "../components/roomCards/roomCards";
import NavigateHelper from "../services/navigateHelper";
import { useGetContent } from "@/hooks/useGetDataQuery";

const AllRoomsPage = () => {
  const { data: name } = useGetContent({ key: "roomsName", endPoint: "rooms" });

  NavigateHelper();

  console.log("cl", name);
  return (
    <div className="pt-20  -z-10 px-5 xl:px-48 xl:pt-40">
      <div className=" xl:text-left">
        <h1 className=" text-4xl pt-5 pb-10 xl:text-6xl">Our Rooms</h1>
        <p className="text-balance xl:text-2xl">
          Once your workday is over, make an effort to disconnect from screens
          and engage in activities that dont involve electronic devices. Take
          breaks to read physical books or magazines rather than digital screens
          to give your eyes a rest.
        </p>
        <div className="py-10 grid  justify-center xl:grid-cols-3 grid-rows-2 gap-14">
          {name?.map((room, index) => (
            <RoomsCards
              key={index}
              title={room.roomType}
              description={room.size}
              imageUrl={room.photos[0]} // Assuming room object has 'photos' array
              more="See More"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllRoomsPage;
