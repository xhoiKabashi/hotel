import { useState } from "react";
import Label from "../../form/Label";
import TextInput from "../../form/TextInput";
import Button from "../../../ui/Button";
import Text from "../../../ui/Text";
import FileInput from "../../form/FileInput";
import { useForm } from "react-hook-form";
import { Form, FormContainer } from "../../form/FormContainer";
import DisplayImage from "../../form/DisplayImage";
import { useCreate } from "../../../api/edit/useCreate";

const EditLogo = () => {
  const [image, setImage] = useState(null);
  const { register, handleSubmit, reset } = useForm();
  const { mutate: update } = useCreate();

  const onSubmit = async (data) => {
    const uploadedFields = {
      uploadedData: {
        ...data,
        file: data.file[0],
      },
      endPoint: "logo",
    };
    await update(uploadedFields);
    setImage(null);
    reset();
  };

  const getImage = (data) => {
    setImage(data?.file[0]);
    console.log(data?.file[0].name);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormContainer>
        <Text text="Personal Information" />
        <hr />
        <div className="flex justify-between">
          <div className=" flex flex-col gap-4">
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
          </div>
          <DisplayImage file={image} />
        </div>
        <Button text="Submit" type="submit" />
      </FormContainer>
      <FileInput
        {...register("file")}
        onUpload={handleSubmit(getImage)}
        onRemove={() => setImage(null)}
      />
    </Form>
  );
};

export default EditLogo;
