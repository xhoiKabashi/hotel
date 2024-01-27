import Button from "../../../ui/Button";
import EditFormUI from "../../../ui/EditFormUI";
import EditListUI from "../../../ui/EditListUI";
import LabelPhoto from "../../../ui/LabelPhotoUI";
import { useState } from "react";
import TextInput from "../../../ui/TextInput";
import Info from "../../../ui/info";
import MenuImageSwitch from "../../../ui/SwitchInput";
import { useCreate } from "../../../api/edit/useCreate";

const EditHomeContent = () => {
  const [file, setFile] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [position, setPosition] = useState(3);

  console.log(title, description, position);

  const { mutate: createHomeContent } = useCreate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = {
        uploadedData: {
          file,
          title,
          description,
          position,
        },
        endPoint: "homeContent",
      };

      const createdHomeHeader = await createHomeContent(formData);
      console.log("Content created", createdHomeHeader);
    } catch (error) {
      console.error("Content upload failed:", error);
    } finally {
      setTitle("");
      setDescription("");
      setFile(null);
      setPosition(3);
    }
  };
  return (
    <EditListUI>
      <EditFormUI onSubmit={handleSubmit}>
        <Info text="You can edit the Home Page Content, a image ratio 3:2 is MANDATORY, such as 1440 x 960, a title and a description, NOTE that the you can update in form of a cicle, to update all the 3 section one by one" />
        <LabelPhoto text="1 File, image ratio 3:2 ">
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
          placeholder="..."
          title="Title"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <TextInput
          placeholder="Write here..."
          title="Description (Paste it here)"
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
