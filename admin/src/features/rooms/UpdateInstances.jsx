import { useParams } from "react-router-dom";
import TextInput, { SelectInput } from "../form/TextInput";
import Button from "../../ui/Button";
import Text from "../../ui/Text";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Form, FormContainer } from "../form/FormContainer";
import { useCreatePlain } from "../../api/edit/useCreatePlain";
// import { roomsContent } from "../../data/edit/infoImg";
import { useGetOneInstance } from "../../api/fetchRooms/useGetRooms";

import { useGetRooms } from "../../api/fetchRooms/useGetRooms";

const UpdateInstances = () => {
  const { id } = useParams();
  const { data: currentData } = useGetOneInstance(id);
  const { register, handleSubmit, setValue } = useForm();
  const { mutate: create } = useCreatePlain();

  console.log("id", id);
  console.log("Current data", currentData);

  //   Dont Touch
  const queryRoomsName = {
    key: "roomsName",
    endPoint: "rooms",
  };
  const { data: roomTypes } = useGetRooms(queryRoomsName);

  console.log("roomTypes", roomTypes);
  //   Dont Touch
  useEffect(() => {
    // Update form values when currentData changes
    if (currentData) {
      Object.keys(currentData).forEach((key) => {
        console.log(key, currentData[key]);
        setValue(key, currentData[key]);
      });
    }
  }, [currentData, setValue]); // Watch for changes in currentData

  const onSubmit = async (data) => {
    const uploadedFields = {
      uploadedData: data,
      endPoint: `room-instances/${currentData?._id}`,
    };

    await create(uploadedFields);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormContainer>
        <Text text="Update Room Types" />
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

export default UpdateInstances;
