import { useState } from "react";
import TextInput, { TextArea } from "../form/TextInput";
import Button from "../../ui/Button";
import Text from "../../ui/Text";
import FileInput from "../form/FileInput";
import { useForm } from "react-hook-form";
import { Form, FormContainer } from "../form/FormContainer";
import DisplayImage from "../form/DisplayImage";
import { useCreate } from "../../api/edit/useCreate";
import { homeContent } from "../../data/edit/infoImg";
import CheckBox from "../form/CheckBox";

const CreateRooms = () => {
  const [logo, setLogo] = useState(null);

  const { register, handleSubmit, reset } = useForm();
  const { mutate: update } = useCreate();

  const onSubmit = async (data) => {
    // const uploadedFields = {
    //   uploadedData: {
    //     ...data,
    //     file: data.file[0],
    //   },
    //   endPoint: "about-us-content",
    // };
    // await update(uploadedFields);
    // reset();
    console.log(data);
  };

  const getImage = (data) => {
    setLogo(data?.file[0]);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormContainer>
        <Text text="Home Page Content" />
        <hr />

        <div className=" grid  grid-cols-4 gap-2  justify-between">
          <TextInput
            type="text"
            text="Room Type"
            id="roomType"
            {...register("roomType")}
            src={homeContent?.title}
          />

          <TextInput
            text="Beds type / number"
            id="bed"
            {...register("bed")}
            src={homeContent?.position}
          />

          <TextInput
            text="Room Size (m2)"
            id="size"
            {...register("size")}
            src={homeContent?.position}
          />

          <TextInput
            text="Room occupacity"
            id="occupacity"
            {...register("occupacity")}
            src={homeContent?.position}
          />
          <div className=" col-span-2">
            <TextArea
              text="Bathroom Details"
              id="bathroom"
              {...register("bathroom")}
              src={homeContent?.position}
            />
          </div>
          <div className="  col-span-2">
            <TextArea
              type="text"
              text=" Room Description"
              id="h3Text"
              {...register("description")}
              src={homeContent?.content}
            />
          </div>
          <CheckBox text="Air Conditioner" {...register("airConditioner")} />
          <CheckBox text="Cable TV" {...register("tv")} />
          <CheckBox text="Wifi & Internet" {...register("wifi")} />
          <CheckBox text="Slippers" {...register("slippers")} />
          <CheckBox text="Shampoo" {...register("shampoo")} />
          <CheckBox text="Safe Box" {...register("safeBox")} />
          <CheckBox text="Pet Friendly" {...register("petFriendly")} />
          <CheckBox text="Towels" {...register("towels")} />
          <CheckBox text="Hair Dryer" {...register("hairDryer")} />
          <CheckBox text="Espresso Machine" {...register("espressoMachine")} />
          <CheckBox text="Welcome Drinks" {...register("welcomeDrinks")} />
          <CheckBox
            text="In-room Refrigerator"
            {...register("roomRefrigerator")}
          />

          {/* <FileInput
            {...register("file")}
            onUpload={handleSubmit(getImage)}
            onRemove={() => setLogo(null)}
            text="Upload Image of the Content"
            id="logo"
            disabled={logo}
            src={homeContent?.contentImg}
          />

          <DisplayImage src={logo} /> */}
        </div>
        <Button text="Submit" type="submit" />
      </FormContainer>
    </Form>
  );
};

export default CreateRooms;
