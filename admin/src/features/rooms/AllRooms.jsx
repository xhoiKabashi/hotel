import { useGetRooms } from "../../api/fetchRooms/useGetRooms";
import { v4 as uuidv4 } from "uuid";
import Text from "../../ui/Text";
import { FormContainer } from "../form/FormContainer";

const AllRooms = () => {
  const queryRoomsName = {
    key: "roomsName",
    endPoint: "rooms",
  };

  const { data } = useGetRooms(queryRoomsName);

  data?.map((room) => console.log(room.bed)); // Logging room.bed instead of room.bad

  return (
    <FormContainer>
      <Text text="Rooms type" />
      <hr />
      {data &&
        data.map((room) => (
          <div key={uuidv4()} className="p-6 grid grid-cols-4  border-b-2">
            <div>Type: {room?.roomType}</div>
            <div>Capacity: {room?.bed}</div>
            <div>Beds: {room?.bed}</div>
            <div>Room Number: {room?.bed}</div>
          </div>
        ))}
    </FormContainer>
  );
};

export default AllRooms;
