import { useState } from "react";
import TextInput, { TextArea } from "../form/TextInput";
import Button from "../../ui/Button";
import Text from "../../ui/Text";
import FileInput from "../form/FileInput";
import { useForm } from "react-hook-form";
import { Form, FormContainer } from "../form/FormContainer";
import DisplayImage from "../form/DisplayImage";
import { useCreate } from "../../api/edit/useCreate";

const GenInfo = () => {
  const [header, setHeader] = useState(null);
  const [logo, setLogo] = useState(null);

  console.log("Logo header", header, logo);

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
    reset();
    console.log(data);
  };

  const getImage = (data) => {
    setLogo(data?.logoImage[0]);
    setHeader(data?.headerImage[0]);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormContainer>
        <Text text="Personal Information" />
        <hr />

        <div className=" grid  grid-cols-4 gap-2  justify-between">
          <TextInput type="text" text="Hotel Name" {...register("hotelName")} />

          <TextInput
            type="text"
            id="googleMapLink"
            text="Hotel Map Link"
            {...register("googleMapLink")}
          />

          <TextInput
            type="text"
            text="Address"
            id="address"
            {...register("address")}
          />

          <TextInput
            type="text"
            id="phoneNumber"
            text="Phone Number"
            {...register("phoneNumber")}
          />

          <div className=" col-start-1 col-end-5">
            <TextArea
              type="text"
              text="A qoute for the Contact Page"
              id="quote"
              {...register("quote")}
            />
          </div>

          <FileInput
            {...register("logoImage")}
            onUpload={handleSubmit(getImage)}
            onRemove={() => setLogo(null)}
            text="Upload Logo"
            id="logo"
            disabled={logo}
          />

          <DisplayImage src={logo} />

          <FileInput
            {...register("headerImage")}
            onUpload={handleSubmit(getImage)}
            onRemove={() => setHeader(null)}
            text="Contact Page Image"
            id="header"
            disabled={header}
          />

          <DisplayImage src={header} />
        </div>
        <Button text="Submit" type="submit" />
      </FormContainer>
    </Form>
  );
};

export default GenInfo;
