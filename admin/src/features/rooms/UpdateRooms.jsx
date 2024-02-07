import { useParams } from "react-router-dom";

const UpdateRooms = () => {
  let { id } = useParams();

  return <div>Update {id}</div>;
};

export default UpdateRooms;
