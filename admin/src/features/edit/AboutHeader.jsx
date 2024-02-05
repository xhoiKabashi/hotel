import { useState } from "react";
import TextInput, { TextArea } from "../form/TextInput";
import Button from "../../ui/Button";
import Text from "../../ui/Text";
import FileInput from "../form/FileInput";
import { useForm } from "react-hook-form";
import { Form, FormContainer } from "../form/FormContainer";
import DisplayImage from "../form/DisplayImage";
import { useCreate } from "../../api/edit/useCreate";
import { homeHeader } from "../../data/edit/infoImg";

const AboutHeader = () => {
  const [logo, setLogo] = useState(null);

  const { register, handleSubmit, reset } = useForm();
  const { mutate: update } = useCreate();

  const onSubmit = async (data) => {
    const uploadedFields = {
      uploadedData: {
        ...data,
        file: data.file[0],
      },
      endPoint: "about-us-header",
    };
    await update(uploadedFields);
    reset();
  };

  const getImage = (data) => {
    setLogo(data?.file[0]);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormContainer>
        <Text text="Personal Information" />
        <hr />

        <div className=" grid  grid-cols-4 gap-2  justify-between">
          <div className=" col-span-2">
            <TextInput
              type="text"
              text=" Header Title"
              id="h1Text"
              {...register("h1Text")}
              src={homeHeader?.h1Title}
            />
          </div>

          <div className=" col-span-2">
            <TextInput
              type="text"
              text="Header level 2 Title"
              id="h2Text"
              {...register("h2Text")}
              src={homeHeader?.h2Title}
            />
          </div>

          <div className="   col-span-4">
            <TextArea
              type="text"
              text="Short Paragraph/Qoute"
              id="h3Text"
              {...register("h3Text")}
              src={homeHeader?.pTitle}
            />
          </div>
          <div className=" col-start-2">
            <FileInput
              {...register("file")}
              onUpload={handleSubmit(getImage)}
              onRemove={() => setLogo(null)}
              text="Upload Page Header"
              id="logo"
              disabled={logo}
              src={homeHeader?.homeHeader}
            />
          </div>

          <DisplayImage src={logo} />
        </div>
        <Button text="Submit" type="submit" />
      </FormContainer>
    </Form>
  );
};

export default AboutHeader;
