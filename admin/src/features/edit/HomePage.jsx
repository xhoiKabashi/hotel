import { useState } from "react";
import TextInput from "../form/TextInput";
import Button from "../../ui/Button";
import Text from "../../ui/Text";
import FileInput from "../form/FileInput";
import { useForm } from "react-hook-form";
import { Form, FormContainer } from "../form/FormContainer";
import DisplayImage from "../form/DisplayImage";
import { useCreate } from "../../api/edit/useCreate";

const HomePage = () => {
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
    console.log(data);
  };

  const getImage = (data) => {
    setLogo(data?.logoImage[0]);
    setHeader(data?.headerImage[0]);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormContainer>
        <Text text="Home Page Header" />
        <hr />

        <div className=" flex flex-col gap-3 w-full">
          <TextInput
            type="text"
            text=" Header Title"
            id="h1Text"
            {...register("h1Text")}
          />

          <TextInput
            type="text"
            text="Header level 2 Title"
            id="h2Text"
            {...register("h2Text")}
          />
          <TextInput
            type="text"
            text="Short Paragraph/Qoute"
            id="h3Text"
            {...register("h3Text")}
          />
        </div>
        <Button text="Submit" type="submit" />
      </FormContainer>
      <FormContainer>
        <Text text="Home Page Header" />
        <hr />

        <div className=" flex flex-col gap-3 w-full">
          <TextInput
            type="text"
            text=" Header Title"
            id="h1Text"
            {...register("h1Text")}
          />

          <TextInput
            type="text"
            text="Header level 2 Title"
            id="h2Text"
            {...register("h2Text")}
          />
          <TextInput
            type="text"
            text="Short Paragraph/Qoute"
            id="h3Text"
            {...register("h3Text")}
          />
        </div>
        <Button text="Submit" type="submit" />
      </FormContainer>

      <div className=" space-y-5">
        <FileInput
          {...register("logoImage")}
          onUpload={handleSubmit(getImage)}
          onRemove={() => setLogo(null)}
          text="Upload Logo"
          id="logo"
          disabled={logo}
        />

        <FileInput
          {...register("headerImage")}
          onUpload={handleSubmit(getImage)}
          onRemove={() => setHeader(null)}
          text="Contact Page Image"
          id="header"
          disabled={header}
        />
      </div>

      {/* <DisplayImage logo={logo} header={header} /> */}
    </Form>
  );
};

export default HomePage;
