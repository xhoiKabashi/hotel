import { useState } from "react";
import Label from "../form/Label";
import TextInput from "../form/TextInput";
import Button from "../../ui/Button";
import Text from "../../ui/Text";
import FileInput from "../form/FileInput";
import { useForm } from "react-hook-form";
import { Form, FormContainer } from "../form/FormContainer";
import DisplayImage from "../form/DisplayImage";
import { useCreate } from "../../api/edit/useCreate";

const GenInfo = () => {
  const [image, setImage] = useState({
    logoImage: null,
    headerImage: null,
  });
  const { register, handleSubmit, reset } = useForm();
  const { mutate: update } = useCreate();

  const onSubmit = async (data) => {
    const uploadedFields = {
      uploadedData: {
        ...data,
        logoImage: data.logoImage[0],
        headerImage: data.headerImage[0],
      },
      endPoint: "general-info",
    };
    await update(uploadedFields);
    setImage(null);
    reset();
    console.log(data);
  };

  const getImage = (data) => {
    setImage({
      logoImage: data?.logoImage[0],
      headerImage: data?.headerImage[0],
    });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormContainer>
        <Text text="Personal Information" />
        <hr />

        <div className=" flex flex-col gap-3 w-full">
          <div>
            <Label className="flex" text="Hotel Name" />
            <TextInput type="text" {...register("hotelName")} />
          </div>
          <div>
            <Label htmlFor="googleMapLink" text="Hotel Google Map Link" />
            <TextInput
              type="text"
              id="googleMapLink"
              {...register("googleMapLink")}
            />
          </div>
          <div>
            <Label htmlFor="address" text="Address" />
            <TextInput type="text" id="address" {...register("address")} />
          </div>
          <div>
            <Label htmlFor="phoneNumber" text="Phone Number" />
            <TextInput
              type="text"
              id="phoneNumber"
              {...register("phoneNumber")}
            />
          </div>
          <div>
            <Label htmlFor="quote" text="A qoute for the Contact Page" />
            <TextInput type="text" id="quote" {...register("quote")} />
          </div>
        </div>
        <Button text="Submit" type="submit" />
      </FormContainer>

      <div className=" space-y-5">
        <FileInput
          {...register("logoImage")}
          onUpload={handleSubmit(getImage)}
          onRemove={() => setImage(null)}
          text="Upload Logo"
          id="logo"
        />

        <FileInput
          {...register("headerImage")}
          onUpload={handleSubmit(getImage)}
          onRemove={() => setImage(null)}
          text="Contact Page Image"
          id="header"
        />
      </div>

      <DisplayImage image={image} />
    </Form>
  );
};

export default GenInfo;
