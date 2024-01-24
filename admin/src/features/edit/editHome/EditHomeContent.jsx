import Button from "../../../ui/Button";
import EditFormUI from "../../../ui/EditFormUI";
import EditListUI from "../../../ui/EditListUI";
import LabelPhoto from "../../../ui/LabelPhotoUI";
import { useState } from "react";
import { useCreateHomeContent } from "../../../api/home/useCreateHomeContent";
import TextInput from "../../../ui/TextInput";
import Info from "../../../ui/info";
import MenuImageSwitch from "../../../ui/SwitchInput";

const EditHomeContent = () => {
  const [file, setFile] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [position, setPosition] = useState(3);

  console.log(title, description, position);

  const { mutate: createHomeContent } = useCreateHomeContent();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const newHomeContent = {
        file,
        title,
        description,
        position,
      };
      const createdHomeHeader = await createHomeContent(newHomeContent);
      console.log("Content created", createdHomeHeader);
    } catch (error) {
      console.error("Content upload failed:", error);
    }
  };
  return (
    <EditListUI>
      <EditFormUI onSubmit={handleSubmit}>
        <Info text="You can edit the Home Page header image, a image ratio 3:2 is MANDATORY, such as 1440 x 960, as well all 3 titles needs to be filled with a Quote " />
        <LabelPhoto>
          <input
            type="file"
            className="sr-only"
            onChange={(event) => setFile(event.target.files[0])}
          />
        </LabelPhoto>
        <MenuImageSwitch
          title="Display Image left or right"
          name="position"
          value={position}
          onChange={(event) => setPosition(event.target.value)}
        />
        <TextInput
          placeholder="Write here..."
          title="Level One  Title"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <TextInput
          placeholder="Write here..."
          title="Level Two  Title"
          type="text"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <Button text="Submit" submit="submit" />
      </EditFormUI>
    </EditListUI>
  );
};

export default EditHomeContent;
