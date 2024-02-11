import { useState } from "react";
import TextInput, { MenuImageSwitch, TextArea } from "../../form/TextInput";
import Button from "../../../ui/Button";
import Text from "../../../ui/Text";
import FileInput from "../../form/FileInput";
import { useForm } from "react-hook-form";
import { Form, FormContainer } from "../../form/FormContainer";
import DisplayImage from "../../form/DisplayImage";
import { useCreateWithCollage } from "../../../api/edit/useCreateWithCollage";
import RestaurantNavigation from "../../navigation/RestaurantNavigation";
import { homeContent } from "@/data/edit/infoImg";

const Lunch = () => {
  const [main, setMain] = useState(null);
  const [colOne, setColOne] = useState(null);
  const [colTwo, setColTwo] = useState(null);
  const [colThree, setColThree] = useState(null);

  const { register, handleSubmit } = useForm();
  const { mutate: update } = useCreateWithCollage();

  const onSubmit = async (data) => {
    const uploadedFields = {
      uploadedData: {
        ...data,
      },
      endPoint: "lunch",
    };
    await update(uploadedFields);
  };

  const getImage = (data) => {
    setMain(data?.photos[0]);
    setColOne(data?.photos[1]);
    setColTwo(data?.photos[2]);
    setColThree(data?.photos[3]);
  };

  const resetImages = () => {
    setMain(null);
    setColOne(null);
    setColTwo(null);
    setColThree(null);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormContainer>
        <div className=" flex  justify-between items-center">
          <Text text="Lunch" />
          <RestaurantNavigation />
        </div>
        <hr />

        <div className=" grid  grid-cols-4 gap-2  justify-between">
          <div className=" col-start-1 col-end-3">
            <TextInput
              type="text"
              text="Content Title"
              id="title"
              {...register("title")}
              src={homeContent?.title}
            />
          </div>

          <div className=" col-start-3 col-end-5">
            <MenuImageSwitch
              text="Display Image left or right"
              id="position"
              {...register("position")}
              src={homeContent?.position}
            />
          </div>

          <div className=" col-start-1 col-end-5">
            <TextArea
              type="text"
              text=" Lunch Description"
              id="description"
              {...register("description")}
              src={homeContent?.content}
            />
          </div>

          <div className=" col-start-2 col-end-5">
            <div className=" w-1/2">
              <FileInput
                onUpload={handleSubmit(getImage)}
                onRemove={() => resetImages()}
                text="Upload Logo"
                id="photos"
                multiple="multiple"
                disabled={colThree}
                {...register("photos")}
                src={homeContent.colage}
                ratio="2:3"
              />
            </div>
          </div>

          <DisplayImage src={main} />
          <DisplayImage src={colOne} />
          <DisplayImage src={colTwo} />
          <DisplayImage src={colThree} />
        </div>
        <Button text="Submit" type="submit" />
      </FormContainer>
    </Form>
  );
};

export default Lunch;
