import { useState } from "react";
import TextInput, { TextArea } from "../form/TextInput";
import Button from "../../ui/Button";
import Text from "../../ui/Text";
import FileInput from "../form/FileInput";
import { useForm } from "react-hook-form";
import { Form, FormContainer } from "../form/FormContainer";
import DisplayImage from "../form/DisplayImage";
import { useCreate } from "../../api/edit/useCreate";
import { image } from "../../data/edit/infoImg";

const GenInfo = () => {
  const [header, setHeader] = useState(null);
  const [logo, setLogo] = useState(null);

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
          <TextInput
            type="text"
            text="Hotel Name"
            {...register("hotelName")}
            src={image?.name}
          />

          <TextInput
            type="text"
            id="googleMapLink"
            text="Hotel Map Link"
            {...register("googleMapLink")}
            src={image?.map}
          />

          <TextInput
            type="text"
            text="Address"
            id="address"
            {...register("address")}
            src={image?.address}
          />

          <TextInput
            type="text"
            id="phoneNumber"
            text="Phone Number"
            {...register("phoneNumber")}
            src={image?.address}
          />

          <div className=" col-start-1 col-end-5">
            <TextArea
              type="text"
              text="A qoute for the Contact Page"
              id="quote"
              {...register("quote")}
              src={image?.contact}
            />
          </div>

          <FileInput
            {...register("logoImage")}
            onUpload={handleSubmit(getImage)}
            onRemove={() => setLogo(null)}
            text="Upload Logo"
            id="logo"
            disabled={logo}
            src={image?.logo}
          />

          <DisplayImage src={logo} />

          <FileInput
            {...register("headerImage")}
            onUpload={handleSubmit(getImage)}
            onRemove={() => setHeader(null)}
            text="Contact Page Image"
            id="header"
            disabled={header}
            src={image?.contectImg}
          />

          <DisplayImage src={header} />
        </div>
        <Button text="Submit" type="submit" />
      </FormContainer>
    </Form>
  );
};

export default GenInfo;
