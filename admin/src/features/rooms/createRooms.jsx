import { useState } from "react";
import TextInput, { TextArea } from "../form/TextInput";
import Button from "../../ui/Button";
import Text from "../../ui/Text";
import FileInput from "../form/FileInput";
import { useForm } from "react-hook-form";
import { Form, FormContainer } from "../form/FormContainer";
// import DisplayImage from "../form/DisplayImage";
import { useCreateWithCollage } from "../../api/edit/useCreateWithCollage";
import { homeContent } from "../../data/edit/infoImg";
import CheckBox from "../form/CheckBox";

const CreateRooms = () => {
  const [logo, setLogo] = useState(null);

  const { register, handleSubmit, reset } = useForm();
  const { mutate: update } = useCreateWithCollage();

  const onSubmit = async (data) => {
    const uploadedFields = {
      uploadedData: {
        ...data,
        imageHeader: data.imageHeader[0],
        photos: data.photos,
      },
      endPoint: "rooms",
    };
    await update(uploadedFields);
    console.log("part 0", data);
  };

  const getImage = (data) => {
    setLogo(data?.file[0]);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormContainer>
        <Text text="Create Rooms" />
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
          <CheckBox text="Work desk" {...register("workDesk")} />
          <CheckBox text="Welcome Drinks" {...register("welcomeDrinks")} />
          <CheckBox text="Iron and ironing board" {...register("iron")} />
          <CheckBox text="Air Purifier" {...register("airPurifier")} />
          <CheckBox text="Smoke detectors" {...register("smokeDetectors")} />
          <CheckBox
            text="In-room Refrigerator"
            {...register("roomRefrigerator")}
          />
          <div className="  col-start-2">
            <FileInput
              onUpload={handleSubmit(getImage)}
              // onRemove={() => setLogo(null)}
              text="Room Header Image"
              id="imageHeader"
              // disabled={logo}

              {...register("imageHeader")}
            />
          </div>
          <FileInput
            onUpload={handleSubmit(getImage)}
            // onRemove={() => setLogo(null)}
            text="Collage of Image"
            id="photos"
            // disabled={logo}
            multiple="multiple"
            // src={homeContent?.contentImg}
            {...register("photos")}
          />
        </div>
        <Button text="Submit" type="submit" />
      </FormContainer>
    </Form>
  );
};

export default CreateRooms;
