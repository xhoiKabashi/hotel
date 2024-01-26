import Header from "../ui/Header";
import NavigateHelper from "../services/navigateHelper";
import { useParams } from "react-router-dom";
import { useGetRooms } from "../hooks/useGetDataQuery";
import RoomsDetails from "../components/rooms/RoomsDetails";
import Slider from "../components/pageSections/Slider";

const Rooms = () => {
  NavigateHelper();
  const { id, isLoading } = useParams();

  const { data: room } = useGetRooms(id);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Header imageUrl={room?.imageHeader} textBeforeBr={room?.roomType} />
      <RoomsDetails />
      <Slider />
    </div>
  );
};

export default Rooms;
