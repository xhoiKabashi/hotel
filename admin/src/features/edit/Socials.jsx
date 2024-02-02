import { useState } from "react";
import TextInput from "../form/TextInput";
import Button from "../../ui/Button";
import Text from "../../ui/Text";
import FileInput from "../form/FileInput";
import { useForm } from "react-hook-form";
import { Form, FormContainer } from "../form/FormContainer";
import DisplayImage from "../form/DisplayImage";
import { useCreate } from "../../api/edit/useCreate";

const GenInfo = () => {
  const [facebook, setFacebook] = useState(null);
  const [ig, setIg] = useState(null);
  const [tk, setTk] = useState(null);
  const [yt, setYt] = useState(null);

  const { register, handleSubmit, reset } = useForm();
  const { mutate: update } = useCreate();

  const onSubmit = async (data) => {
    const uploadedFields = {
      uploadedData: {
        ...data,
        instaImage: data.instaImage[0],
        fbImage: data.fbImage[0],
        youTubeImage: data.youTubeImage[0],
        tikTokImage: data.tikTokImage[0],
      },
      endPoint: "social-data",
    };
    await update(uploadedFields);
    reset();
    console.log(data);
  };

  const getImage = (data) => {
    console.log("DATA", data.youTubeImage[0]);
    setIg(data.instaImage[0]);
    setFacebook(data.fbImage[0]);
    setTk(data.tikTokImage[0]);
    setYt(data.youTubeImage[0]);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormContainer>
        <Text text="Contact Social" />
        <hr />

        <div className=" grid  grid-cols-4 gap-3  justify-between">
          <TextInput
            type="text"
            text="Youtube Url"
            id="youTubeUrl"
            {...register("youTubeUrl")}
          />
          <TextInput
            type="text"
            text="Instagram Url"
            id="instaUrl"
            {...register("instaUrl")}
          />
          <TextInput
            type="text"
            id="fbUrl"
            text="Facebook Url"
            {...register("fbUrl")}
          />
          <TextInput
            type="text"
            id="tikTokUrl"
            text="TikTok Url"
            {...register("tikTokUrl")}
          />
          <FileInput
            onUpload={handleSubmit(getImage)}
            onRemove={() => setYt(null)}
            text="Youtube Logo"
            id="youTubeImage"
            disabled={yt}
            {...register("youTubeImage")}
          />
          <FileInput
            onUpload={handleSubmit(getImage)}
            onRemove={() => setIg(null)}
            text="Instagram Logo"
            id="instaImage"
            disabled={ig}
            {...register("instaImage")}
          />
          <FileInput
            onUpload={handleSubmit(getImage)}
            onRemove={() => setFacebook(null)}
            text="Facebook Logo"
            id="fbImage"
            disabled={facebook}
            {...register("fbImage")}
          />
          <FileInput
            onUpload={handleSubmit(getImage)}
            onRemove={() => setTk(null)}
            text="TikTok Logo"
            id="tikTokImage"
            disabled={tk}
            {...register("tikTokImage")}
          />
          <DisplayImage src={yt} />
          <DisplayImage src={ig} />
          <DisplayImage src={facebook} />
          <DisplayImage src={tk} />
        </div>
        <Button text="Submit" type="submit" />
      </FormContainer>
    </Form>
  );
};

export default GenInfo;