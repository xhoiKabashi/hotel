import TextInput, { SelectInput } from "../form/TextInput";
import Button from "../../ui/Button";
import Text from "../../ui/Text";

import { useForm } from "react-hook-form";
import { Form, FormContainer } from "../form/FormContainer";
import { useCreatePlain } from "../../api/edit/useCreatePlain";
// import { roomsContent } from "../../data/edit/infoImg";
import { useGetRooms } from "../../api/fetchRooms/useGetRooms";

const CreateRoomInstances = () => {
  const { register, handleSubmit } = useForm();
  const { mutate: create } = useCreatePlain();
  const queryRoomsName = {
    key: "roomsName",
    endPoint: "rooms",
  };
  const { data: roomTypes } = useGetRooms(queryRoomsName);

  const onSubmit = async (data) => {
    console.log("data", data);

    const uploadedFields = {
      uploadedData: data,
      endPoint: "room-instances",
    };

    await create(uploadedFields);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormContainer>
        <Text text="Create Room Types" />
        <hr />

        <div className=" grid  grid-cols-3 gap-10">
          <TextInput
            type="number"
            text="The Room Number"
            id="roomNumber"
            {...register("roomNumber")}
            // src={roomsContent?.roomNumber}
          />
          <SelectInput
            text="Is Available?"
            name="available"
            options={[
              { value: true, label: "Yes" },
              { value: false, label: "No" },
            ]}
            renderOption={(option) => option.label}
            {...register("available")}
          />

          <SelectInput
            text="The Room Type"
            id="roomType"
            {...register("roomType")}
            options={roomTypes?.map((option) => ({
              value: option.roomType,
              label: option.roomType,
            }))}
            renderOption={(option) => option.label}
          />

          <Button text="Submit" type="submit" />
        </div>
      </FormContainer>
    </Form>
  );
};

export default CreateRoomInstances;
