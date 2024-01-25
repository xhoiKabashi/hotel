import Header from "../ui/Header";
import NavigateHelper from "../services/navigateHelper";
import { useParams } from "react-router-dom";
import getImage from "../services/getImage";
import { useGetRooms } from "../api/rooms/rooms";

const SignatureRoom = () => {
  NavigateHelper();
  const { id, isLoading } = useParams();

  const { data: room } = useGetRooms(id);
  console.log(getImage + room?.imageHeader);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Header imageUrl={room?.imageHeader} textBeforeBr={room?.roomType} />
    </div>
  );
};

export default SignatureRoom;
