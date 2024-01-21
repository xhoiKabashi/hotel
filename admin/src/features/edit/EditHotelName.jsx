import Button from "../../ui/Button";
import EditFormUI from "../../ui/EditFormUI";
import EditListIU from "../../ui/EditListUI";
import useCreateHotelName from "../../api/useCreateHotelName";
import { useState } from "react";
import TextInput from "../../ui/TextInput";
import Info from "../../ui/info";

const EditHotelName = () => {
  const [hotelName, setHotelName] = useState();
  const { mutate: createHotelName } = useCreateHotelName();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newHotelName = { hotelName };
      const createdHotelName = await createHotelName(newHotelName);
      console.log(createdHotelName);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <EditListIU>
      <EditFormUI onSubmit={handleSubmit}>
        <Info text="You can change your hotel name as you please" />
        <TextInput
          value={hotelName}
          onChange={(event) => setHotelName(event.target.value)}
          type="text"
          placeholder="Blue Coast"
          title="Hotel Name"
          big={true}
        />
        <Button text="Submit" submit="submit" />
      </EditFormUI>
    </EditListIU>
  );
};

export default EditHotelName;
