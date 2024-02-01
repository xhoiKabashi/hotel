import { useState } from "react";
import TextInput, { MenuImageSwitch, TextArea } from "../form/TextInput";
import Button from "../../ui/Button";
import Text from "../../ui/Text";
import FileInput from "../form/FileInput";
import { useForm } from "react-hook-form";
import { Form, FormContainer } from "../form/FormContainer";
import DisplayImage from "../form/DisplayImage";
import { useCreate } from "../../api/edit/useCreate";

const HomeContent = () => {
  // const [header, setHeader] = useState(null);
  const [logo, setLogo] = useState(null);

  const { register, handleSubmit, reset } = useForm();
  const { mutate: update } = useCreate();

  const onSubmit = async (data) => {
    const uploadedFields = {
      uploadedData: {
        ...data,
        file: data.file[0],
      },
      endPoint: "home-content",
    };
    await update(uploadedFields);
    reset();
    console.log(data);
  };

  const getImage = (data) => {
    setLogo(data?.file[0]);
    // setHeader(data?.headerImage[0]);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormContainer>
        <Text text="Home Page Content" />
        <hr />

        <div className=" grid  grid-cols-4 gap-2  justify-between">
          <TextInput
            type="text"
            text="Content Title"
            id="h1Text"
            {...register("title")}
          />

          <div className=" col-start-3">
            <MenuImageSwitch
              text="Display Image left or right"
              id="position"
              {...register("position")}
            />
          </div>

          <div className=" col-start-1 col-end-5">
            <TextArea
              type="text"
              text=" Content Description"
              id="h3Text"
              {...register("h3Text")}
            />
          </div>

          <FileInput
            {...register("file")}
            onUpload={handleSubmit(getImage)}
            onRemove={() => setLogo(null)}
            text="Upload Logo"
            id="logo"
            disabled={logo}
          />

          <DisplayImage src={logo} />
        </div>
        <Button text="Submit" type="submit" />
      </FormContainer>
    </Form>
  );
};

export default HomeContent;
