import { useGetRooms } from "../../api/fetchRooms/useGetRooms";
import { v4 as uuidv4 } from "uuid";
import Text from "../../ui/Text";
import { FormContainer } from "../form/FormContainer";
import { ButtonV2 } from "../../ui/Button";
import { NavLink } from "react-router-dom";
import { deleteRoom } from "../../api/delete/delete";
import { useQueryClient } from "@tanstack/react-query";
import Pagination from "../pagination/Pagination";

const AllRoomInstances = () => {
  const queryRoomsName = {
    key: "roomsName",
    endPoint: "rooms",
  };
  const { data } = useGetRooms(queryRoomsName);
  const queryClient = useQueryClient();
  queryClient.invalidateQueries({ queryKey: ["roomsName"] });

  const handleDelete = async (roomId) => {
    try {
      await deleteRoom(roomId);
    } catch (error) {
      console.error(error);
    } finally {
      queryClient.invalidateQueries({ queryKey: ["roomsName"] });
    }
  };

  return (
    <FormContainer>
      <Text text="Rooms type" />

      <Pagination
        data={data}
        itemsPerPage={4}
        renderItem={(room) => (
          <div key={uuidv4()} className="p-3 grid grid-cols-5  border-b-2">
            <div className=" col-span-2">Type: {room?.roomType}</div>
            <div className=" col-span-2">Capacity: {room?.bed}</div>
            <div className=" flex   justify-evenly">
              <NavLink to={`update/${room?.roomType}`}>
                <ButtonV2 text="Update" color="green" />
              </NavLink>
              <ButtonV2 text="Delete" onClick={() => handleDelete(room?._id)} />
            </div>
          </div>
        )}
      />
    </FormContainer>
  );
};

export default AllRoomInstances;
