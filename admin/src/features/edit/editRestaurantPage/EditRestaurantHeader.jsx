import Button from "../../../ui/Button";
import EditFormUI from "../../../ui/EditFormUI";
import EditListUI from "../../../ui/EditListUI";
import LabelPhoto from "../../../ui/LabelPhotoUI";
import { useState } from "react";
import { useCreateHeader } from "../../../api/edit/useCreateHeader";
import TextInput from "../../../ui/TextInput";
import Info from "../../../ui/info";

const EditRestaurantHeader = () => {
  const [file, setFile] = useState(null);
  const [levelOneTitle, setLevelOneTitle] = useState("");
  const [levelTwoTitle, setLevelTwoTitle] = useState("");
  const [levelThreeTitle, setLevelThreeTitle] = useState("");

  // Create logo mutation using useMutation
  const { mutate: createHeader } = useCreateHeader();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const newHeaderData = {
        uploadedData: {
          file,
          levelOneTitle,
          levelTwoTitle,
          levelThreeTitle,
        },
        endPoint: "editRestaurantPage",
      };

      const createdHeader = await createHeader(newHeaderData);
      console.info("Restaurant Header created", createdHeader);
    } catch (error) {
      console.error("Header upload failed:", error);
    } finally {
      setFile(null);
      setLevelOneTitle("");
      setLevelTwoTitle("");
      setLevelThreeTitle("");
    }
  };
  return (
    <EditListUI>
      <EditFormUI onSubmit={handleSubmit}>
        <Info text="You can edit the Restaurant  Page header image, a image ratio 3:2 is MANDATORY, such as 1440 x 960, as well all 3 titles needs to be filled with a Quote " />
        <LabelPhoto text="1 image, a image ratio 3:2">
          <input
            type="file"
            className="sr-only"
            onChange={(event) => setFile(event.target.files[0])}
          />
        </LabelPhoto>
        <TextInput
          placeholder="..."
          title="First part of the title"
          type="text"
          value={levelOneTitle}
          onChange={(event) => setLevelOneTitle(event.target.value)}
        />
        <TextInput
          placeholder="..."
          title="First part of the title"
          type="text"
          value={levelTwoTitle}
          onChange={(event) => setLevelTwoTitle(event.target.value)}
        />{" "}
        <TextInput
          placeholder="..."
          title="A small qoute"
          type="text"
          value={levelThreeTitle}
          onChange={(event) => setLevelThreeTitle(event.target.value)}
        />
        <Button text="Submit" submit="submit" />
      </EditFormUI>
    </EditListUI>
  );
};

export default EditRestaurantHeader;
